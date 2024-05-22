export function generateTodoObj(title, description, dueDate, priority) {
  return {
    title,
    description,
    dueDate,
    priority,
  };
}

export const todoList = [
  {
    projectName: "All",
    tasks: [
      {
        title: "Buy bread",
        description: "buy 10 bread",
        dueDate: "2024-03-01",
        priority: "Low",
      },

      {
        title: "Study notes",
        description: "CNP notes",
        dueDate: "2024-03-02",
        priority: "High",
      }
    ]
  },

  {
    projectName: "My Day",
    tasks: [
      {
        title: "hello",
        description: "buy 10 bread",
        dueDate: "2024-03-01",
        priority: "Low",
      },

      {
        title: "Study notes",
        description: "CNP notes",
        dueDate: "2024-03-02",
        priority: "High",
      }
    ]
  },

  {
    projectName: "Personal",
    tasks: [
      {
        title: "Buy bread",
        description: "buy 10 bread",
        dueDate: "2024-03-01",
        priority: "Low",
      },

      {
        title: "Study notes",
        description: "CNP notes",
        dueDate: "2024-03-02",
        priority: "High",
      }
    ]
  }
];
