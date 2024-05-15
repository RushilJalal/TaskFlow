import { todoList, createTodoItem } from "./todoModel";


export function todoView() {
    const content = document.getElementsByClassName('content');
    const inputDiv = document.createElement("div");
    inputDiv.classList.add("input-div");
    content.appendChild(inputDiv);

    createTaskNameInput();
    createNewTaskButton();
    renderTodoList();

    document.body.appendChild(content)

    const newTaskButton = document.querySelector(".new-task-button");
    newTaskButton.addEventListener("click", handleAddTask);
}

function createTaskNameInput() {
    const inputDiv = document.querySelector(".input-div");
    const taskNameInput = document.createElement("input");
    taskNameInput.setAttribute("type", "text");
    taskNameInput.setAttribute("placeholder", "Enter task name");
    taskNameInput.classList.add("task-name-input");
    taskNameInput.classList.add("input-container");
    inputDiv.appendChild(taskNameInput);
}

function createNewTaskButton() {
    const inputDiv = document.querySelector(".input-div");
    const newTaskButton = document.createElement("button");
    newTaskButton.textContent = "Add a task";
    newTaskButton.classList.add("new-task-button");
    inputDiv.appendChild(newTaskButton);
}

function renderTodoList() {
    const taskList = document.createElement("ul");
    taskList.classList.add("task-list");

    todoList.forEach(todoItem => {
        const taskDiv = createTaskDiv(todoItem);
        taskList.appendChild(taskDiv);
    });

    document.body.appendChild(taskList);
}

function createTaskDiv(todoItem) {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task-item");

    const checkbox = createCheckbox(todoItem.checked);
    taskDiv.appendChild(checkbox);

    const taskName = createTaskName(todoItem.title);
    taskDiv.appendChild(taskName);

    const priority = createPriority(todoItem.priority);
    taskDiv.appendChild(priority);

    return taskDiv;
}

function createCheckbox(checked) {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = checked;
    return checkbox;
}

function createTaskName(title) {
    const taskName = document.createElement("div");
    taskName.textContent = title;
    return taskName;
}

function createPriority(priority) {
    const priorityElement = document.createElement("div");
    priorityElement.textContent = priority;
    return priorityElement;
}

function handleAddTask() {
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
