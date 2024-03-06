function createTodoItem(title, description, dueDate, priority, checklist = []) {
    return {
        title,
        description,
        dueDate,
        priority,
        checklist,
        checked: false, // assuming a default value for the checked status
    };
}

export default createTodoItem;