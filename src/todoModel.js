export function generateTodoObj(title, description, dueDate, priority) {
  return {
    title,
    description,
    dueDate,
    priority
  };
}

export let todoList = [
  {
    projectName: "All",
    tasks: [
      {
        title: "Buy bread",
        description: "Buy 10 loaves of bread",
        dueDate: "2024-03-01",
        priority: "Low",
      },
      {
        title: "Study notes",
        description: "Review Computer Networks and Protocols (CNP) notes",
        dueDate: "2024-03-02",
        priority: "High",
      },
      {
        title: "Design UI Mockups",
        description: "Create wireframes and visual designs for Project X",
        dueDate: "2024-03-03",
        priority: "High",
      },
      {
        title: "Set Up Database",
        description: "Create tables and define relationships in the database",
        dueDate: "2024-03-04",
        priority: "Medium",
      }
    ]
  },

  {
    projectName: "My Day",
    tasks: [

      {
        title: "Buy bread",
        description: "Buy 10 loaves of bread",
        dueDate: "2024-03-01",
        priority: "Low",
      },
      {
        title: "Study notes",
        description: "Review Computer Networks and Protocols (CNP) notes",
        dueDate: "2024-03-02",
        priority: "High",
      },

    ]
  },

  {
    projectName: "Personal",
    tasks: [
      {
        title: "Design UI Mockups",
        description: "Create wireframes and visual designs for Project X",
        dueDate: "2024-03-03",
        priority: "High",
      },
      {
        title: "Set Up Database",
        description: "Create tables and define relationships in the database",
        dueDate: "2024-03-04",
        priority: "Medium",
      }

    ]
  }
];

// get todoList from local storage
export function getTodoList() {
  const todoList = localStorage.getItem("todoList");
  if (todoList) {
    return JSON.parse(todoList);
  }
  return [];
}


export function saveTodoList() {
  localStorage.setItem('todoList', JSON.stringify(todoList))
}

function loadTodoList() {
  let savedTodoList = localStorage.getItem('todoList')

  if (savedTodoList)
    return JSON.parse(savedTodoList)
  else
    return todoList;
}

todoList = loadTodoList();
