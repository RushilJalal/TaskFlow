async function generateTodoItem(title, desc, dueDate, priority) {
    return {
        title: title,
        description: desc,
        dueDate: dueDate,
        priority: priority,
        checked: false
    }
}

export default generateTodoItem;