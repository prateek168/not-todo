import prisma from '../prisma/prismaClient.js';

// Controller for daily tasks
export const dailyTasks = async (req, res) => {
  try {
    const userId = req.userId;
    const { title, body, deadline, isBacklog } = req.body;
     console.log(userId)
    const newTask = await prisma.task.create({
      data: {
        title,
        body,
        deadline: new Date(deadline),
        isBacklog: isBacklog || false, 
        authorId: userId ,
      },
    });

    return res.status(201).json({
      message: "Daily task created successfully",
      task: newTask,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      error: error.message || error,
    });
  }
};

// Controller for monthly tasks
export const monthlyTasks = async (req, res) => {
  try {
    const userId = req.user.id;
    const { title, body, deadline, isBacklog } = req.body;

    const newTask = await prisma.task.create({
      data: {
        title,
        body,
        deadline: new Date(deadline),
        isBacklog: isBacklog || false,  // Default to false for monthly tasks
        authorId: userId,
      },
    });

    return res.status(201).json({
      message: "Monthly task created successfully",
      task: newTask,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      error: error.message || error,
    });
  }
};
