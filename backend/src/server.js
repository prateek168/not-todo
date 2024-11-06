import dotenv from 'dotenv';
import app from './app.js'
import prisma from './prisma/prismaClient.js '
dotenv.config()
const PORT = process.env.PORT || 3001

app.listen(PORT, async () => {
  try {
    await prisma.$connect();
    console.log('Connected to the database');
    console.log(`Server is running on http://localhost:${PORT}`);
  } catch (err) {
    console.error('Database connection failed:', err);
  }
});