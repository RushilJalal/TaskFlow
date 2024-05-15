//executes when add task button is clicked
//create dialog to take task details

export function handleAddTask() {
    const createTaskDialog = document.createElement("dialog");
    
}

function idk() {
    const inputName = document.querySelector(".task-name-input");
    const taskName = inputName.value;
    if (taskName === "") {
        alert("Task name cannot be empty");
        return;
    }

    const newTask = createTodoItem(taskName, "", "", "low");
    todoList.push(newTask);

    const taskList = document.querySelector(".task-list");
    taskList.remove();
    renderTodoList();
}

