import prisma from '../prisma/prismaClient.js';

export const backlogTasks = async (req, res) => {
  try {
    const userId = req.user.id;   
    const { title, body, deadline, isBacklog } = req.body;   

    const user = await prisma.user.findUnique({ where: { id: userId } });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const newTask = await prisma.task.create({
      data: {
        title,                       
        body,                        
        deadline: new Date(deadline),  
        isBacklog: isBacklog || true,   
        authorId: userId,          
      },
    });

    return res.status(201).json({
      message: "Task created successfully",
      task: newTask,
    });
  } catch (error) {
    console.error(error);   
    return res.status(500).json({ message: "Internal server error" });
  }
};
