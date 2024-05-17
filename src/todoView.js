import { handleAddTask } from "./createNewTask";
import { renderTodoList } from "./renderTodoList";
import { renderSidebar } from "./sidebar";
import { todoList } from "./todoModel";

export function todoView() {
  const content = document.querySelector(".content");
  const inputDiv = document.createElement("div");
  inputDiv.classList.add("input-div");
  content.appendChild(inputDiv);

  renderTodoList();
  renderSidebar();

  const addTaskDialog = document.querySelector(".add-task-dialog");

  const addTaskButton = document.querySelector(".add-task-button");
  addTaskButton.addEventListener("click", () => {
    addTaskDialog.style.display = "block";
    addTaskDialog.showModal();
  });

  const close = document.querySelector(".close-button");
  close.addEventListener("click", () => {
    const form = document.querySelector("#add-task-form");
    addTaskDialog.style.display = "none";

    //reset form when close button clicked
    form.reset();
  });

  const submitNewTaskFormButton = document.querySelector(
    ".submit-add-new-task"
  );
  submitNewTaskFormButton.addEventListener("click", handleAddTask);
}

//display task name and task description on clicking details button
export function showTaskDetails(index) {
  const taskDetailsDialog = document.createElement("dialog");
  taskDetailsDialog.classList.add("details-dialog");

  const taskName = document.createElement("div");
  const taskDesc = document.createElement("div");
  const closeButton = document.createElement("button");

  closeButton.textContent = "Close";

  taskDetailsDialog.appendChild(taskName);
  taskDetailsDialog.appendChild(taskDesc);
  taskDetailsDialog.appendChild(closeButton);

  taskName.textContent = `Title: ${todoList[index].title}`;
  taskDesc.textContent = `Description: ${todoList[index].description}`;

  document.body.appendChild(taskDetailsDialog);
  taskDetailsDialog.showModal();

  closeButton.addEventListener("click", () => {
    taskDetailsDialog.close();
    taskDetailsDialog.remove();
  });
}
