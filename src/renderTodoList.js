import { setTaskPriorityColor, todoList } from "./todoModel";

export function renderTodoList() {
  const content = document.querySelector(".content");
  const taskList = document.createElement("ul");
  taskList.classList.add("task-list");

  todoList.forEach((todoItem) => {
    const taskDiv = createTaskDiv(todoItem);
    taskList.appendChild(taskDiv);
  });

  content.appendChild(taskList);
  setTaskPriorityColor();

  toggleStrikeThrough();
}

export function createTaskDiv(todoItem) {
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task-item");

  const checkbox = createCheckbox();
  taskDiv.appendChild(checkbox);

  const taskName = createTaskName(todoItem.title);
  taskDiv.appendChild(taskName);

  const date = createDate(todoItem.dueDate);
  taskDiv.appendChild(date);

  const priority = createPriority(todoItem.priority);
  taskDiv.appendChild(priority);

  const desc = createDescButton();
  taskDiv.appendChild(desc);

  const editTaskButton = createEditTaskButton();
  taskDiv.appendChild(editTaskButton);

  const deleteButton = createDeleteButton();
  taskDiv.appendChild(deleteButton);

  return taskDiv;
}

function createCheckbox() {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("checkbox");
  return checkbox;
}

function createTaskName(title) {
  const taskName = document.createElement("div");
  taskName.textContent = title;
  return taskName;
}

function createDate(date) {
  const dateDiv = document.createElement("div");
  dateDiv.textContent = date;
  return dateDiv;
}

function createPriority(priority) {
  const priorityElement = document.createElement("div");
  priorityElement.textContent = priority;
  return priorityElement;
}

function createDescButton() {
  const descButton = document.createElement("button");
  descButton.textContent = "Details";
  descButton.classList.add("desc-button");
  return descButton;
}

function createEditTaskButton() {
  const editButton = document.createElement("button");
  editButton.textContent = "Edit Task";
  editButton.classList.add("edit-button");
  return editButton;
}

function createDeleteButton() {
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete-button");
  return deleteButton;
}

function toggleStrikeThrough() {
  document.querySelectorAll(".task-list").forEach((taskList) => {
    taskList.addEventListener("click", (event) => {
      if (event.target.type === "checkbox") {
        const taskText = event.target.nextElementSibling;
        taskText.style.textDecoration = event.target.checked
          ? "line-through"
          : "none";
      }
    });
  });
}
