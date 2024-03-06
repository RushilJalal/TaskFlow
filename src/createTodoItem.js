function createTodoItem(title, description, dueDate, priority, notes = '', checklist = []) {
    return {
        title,
        description,
        dueDate,
        priority,
        notes,
        checklist,
        checked: false, // assuming a default value for the checked status
    };
}

export default createTodoItem;