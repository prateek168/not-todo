// src/data/sampleTasks.js
export const sampleTasks = [
  {
    id: "1",
    title: "Design Homepage",
    body: "Create a responsive design for the homepage, ensuring compatibility across all devices.",
    author: { name: "Alice Johnson" },
    deadline: new Date("2024-12-01T17:00:00Z"),
    isBacklog: false,
  },
  {
    id: "2",
    title: "Setup Database",
    body: "Configure MongoDB and Prisma for user authentication and task management.",
    author: { name: "Bob Smith" },
    deadline: new Date("2024-11-15T12:00:00Z"),
    isBacklog: true,
  },
  {
    id: "3",
    title: "Implement Task API",
    body: "Develop the API endpoints for creating, updating, and deleting tasks.",
    author: { name: "Charlie Brown" },
    deadline: new Date("2024-11-20T14:30:00Z"),
    isBacklog: false,
  },
];
