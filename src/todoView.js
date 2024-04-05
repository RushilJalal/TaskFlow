import { todoList } from "./todoModel";

export function todoView() {
    const header = document.createElement("h1");
    header.textContent = "To-Do List";
    document.body.appendChild(header);

    //an input box to take the task name
    const taskNameInput = document.createElement("input");
    taskNameInput.setAttribute("type", "text");
    taskNameInput.setAttribute("placeholder", "Task Name");
    document.body.appendChild(taskNameInput);

    const newTaskButton = document.createElement("button");
    newTaskButton.textContent = "Add a task";
    document.body.appendChild(newTaskButton);

    const taskList = document.createElement("ul");
    document.body.appendChild(taskList);

    renderTodoList(taskList);

}

// iterate `todoList` and create a new task element for each item in the list
function renderTodoList(taskList) {
    todoList.forEach(todoItem => {
        const task = document.createElement("li");
        const taskName = document.createElement("div");
        taskName.value = todoItem.title;
        task.appendChild(taskName);
        taskList.appendChild(task);
    });
}

