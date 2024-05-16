export function generateTodoObj(title, description, dueDate, priority) {
    return {
        title,
        description,
        dueDate,
        priority
    };
}

export const todoList = [
    generateTodoObj("Buy bread", "buy 10 bread", "2024-03-01", "Low"),
    generateTodoObj("Study notes", "CNP notes", "2024-03-02", "High",)
];

// background color of task item changes according to priority
export function setTaskPriorityColor() {
    const taskList = document.querySelectorAll(".task-list .task-item")
    taskList.forEach((task) => {
        let priorityDiv = task.querySelector("div:last-child");
        let priority = priorityDiv.textContent;

        switch (priority) {
            case 'High':
                task.style.backgroundColor = 'red';
                break;
            case 'Medium':
                task.style.backgroundColor = 'orange';
                break;
            case 'Low':
                task.style.backgroundColor = 'green';
                break;
        }
    })
}


