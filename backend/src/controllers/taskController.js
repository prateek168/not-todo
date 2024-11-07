import prisma from '../prisma/prismaClient.js';

export const dailyTasks = async (req, res) => {
  try {
    const userId = req.user.id;
    const { title, body, deadline, isBacklog } = req.body;

    // Optional: Uncomment if you want to validate the user exists
    // const user = await prisma.user.findUnique({ where: { id: userId } });
    // if (!user) {
    //   return res.status(404).json({ message: "User not found" });
    // }

    const newTask = await prisma.task.create({
      data: {
        title,
        body,
        deadline: new Date(deadline),
        isBacklog: isBacklog || false,
        author: {
          connect: { id: userId } // Connect the existing user with the task
        },
      },
    });

    return res.status(201).json({
      message: "Task created successfully",
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

export const monthlyTasks = async (req, res) => {
  try {
    const userId = req.user.id;
    const { title, body, deadline, isBacklog } = req.body;

    // Optional: Uncomment if you want to validate the user exists
    // const user = await prisma.user.findUnique({ where: { id: userId } });
    // if (!user) {
    //   return res.status(404).json({ message: "User not found" });
    // }

    const newTask = await prisma.task.create({
      data: {
        title,
        body,
        deadline: new Date(deadline),
        isBacklog: isBacklog || false,
        author: {
          connect: { id: userId } // Connect the existing user with the task
        },
      },
    });

    return res.status(201).json({
      message: "Task created successfully",
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
