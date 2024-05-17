import { todoList } from "./todoModel";

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
