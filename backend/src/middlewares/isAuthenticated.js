import jwt from 'jsonwebtoken';

const isAuthenticated = (req, res, next) => {
  try {
    const token = req.cookies.token;

    // Check if token is present
    if (!token) {
      return res.status(401).json({
        message: "User not authenticated.",
      });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.userId = decoded.userId;
    console.log(decoded)
    next();
  } catch (error) {
    console.error("Token verification failed:", error);
    return res.status(401).json({
      message: "Invalid or expired token.",
    });
  }
};

export default isAuthenticated;
