export function createTodoItem(title, description, dueDate, priority, checklist = []) {
    return {
        title,
        description,
        dueDate,
        priority,
        checklist,
        checked: false
    };
}

export const todoList = [
    createTodoItem("Buy bread", "buy 10 bread", "2024-03-01", "low"),
    createTodoItem("Study notes", "CNP notes", "2024-03-02", "high", [], true)
];


export function addTodoItemToList(TodoItem) {
    todoList.push(TodoItem);
}

export function toggleTodoChecked(todoItem) {
    todoItem.checked = !todoItem.checked;
}

export function toggleTodoItemPriority(todoItem) {
    if (todoItem.priority == "high")
        todoItem.priority = "low";
    else
        todoItem.priority = "high";
}

