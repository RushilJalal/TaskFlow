function toggleTodoItemPriority(todoItem) {
    if (todoItem.priority == "high")
        todoItem.priority = "low";
    else
        todoItem.priority = "high";
}

export default toggleTodoItemPriority;