import prisma from '../prisma/prismaClient.js';

// Controller for backlog tasks (separate page functionality)
export const backlogTasks = async (req, res) => {
  try {
    const userId = req.userId;
    console.log(userId + "efhs;fohsguohspoudghposudhgoushdg")
    const { title, body, deadline } = req.body;

    // Ensure the user exists before adding a backlog task
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const newTask = await prisma.task.create({
      data: {
        title,
        body,
        deadline: new Date(deadline),
        isBacklog: true, // Default to true for backlog tasks
        authorId: "672bace91947044ac8eab8e0",
      },
      
    });

    return res.status(201).json({
      message: "Backlog task created successfully",
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
