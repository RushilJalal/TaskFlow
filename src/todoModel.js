export function generateTodoObj(title, description, dueDate, priority) {
  return {
    title,
    description,
    dueDate,
    priority,
  };
}

export const todoList = [
  generateTodoObj("Buy bread", "buy 10 bread", "2024-03-01", "Low"),
  generateTodoObj("Study notes", "CNP notes", "2024-03-02", "High"),
];
