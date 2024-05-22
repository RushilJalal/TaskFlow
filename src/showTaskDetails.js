import { todoList } from "./todoModel";

//display task name and task description on clicking details button
export function showTaskDetails(projectIndex, index) {
  const taskDetailsDialog = document.createElement("dialog");
  taskDetailsDialog.classList.add("details-dialog");

  const taskName = document.createElement("div");
  const taskDesc = document.createElement("div");
  const closeButton = document.createElement("button");
  closeButton.classList.add("close-desc-button");
  closeButton.textContent = "Close";

  taskDetailsDialog.appendChild(taskName);
  taskDetailsDialog.appendChild(taskDesc);
  taskDetailsDialog.appendChild(closeButton);

  taskName.textContent = `Title: ${todoList[projectIndex].tasks[index].title}`;
  taskDesc.textContent = `Description: ${todoList[projectIndex].tasks[index].description}`;

  if (todoList[index].description === "")
    taskDesc.textContent = "Description: None";

  document.body.appendChild(taskDetailsDialog);
  taskDetailsDialog.showModal();

  closeButton.addEventListener("click", () => {
    taskDetailsDialog.close();
    taskDetailsDialog.remove();
  });
}
