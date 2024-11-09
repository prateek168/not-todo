import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import prisma from '../prisma/prismaClient.js';

dotenv.config();

export const userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(403).json({ message: "User already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword
      }
    });

    return res.status(201).json({ message: "Account Created Successfully." });
  } catch (error) {
    return res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: "User Not Found." });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ message: "Incorrect Password." });
    }

    const tokenData = {
      userId: user.id,   
    };
    const token = jwt.sign(tokenData, process.env.JWT_SECRET_KEY, { expiresIn: "7d" });

    return res.status(200)
      .cookie("token", token, { maxAge: 7 * 24 * 60 * 60 * 1000, httpOnly: true, sameSite: 'strict' })
      .json({
        id: user.id,  
        name: user.name,
        email: user.email,
      });
  } catch (error) {
    return res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const userLogout = async (req, res) => {
  try {
    return res.status(200)
      .cookie("token", "", { maxAge: 0 })
      .json({ message: "Logged out Successfully." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const getAllUser = async(req,res)=>{
  try{
    const allusers = await prisma.user.findMany();
    res.status(200).json(allusers)
}
catch(err){
  console.log(err)
}
  
}
