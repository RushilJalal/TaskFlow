import { todoList } from "./todoModel";
import { renderTodoList } from "./renderTodoList";

export function renderSidebar() {
  const projectList = document.querySelector(".project-list");

  // Clear existing buttons if any
  projectList.textContent = "";

  todoList.forEach((project, index) => {
    const projectItem = document.createElement("button");
    projectItem.classList.add("project-item-button");
    projectItem.textContent = project.projectName;

    if (index === 0) {
      projectItem.classList.add("selected");
      renderTodoList(0); // Render the first project by default
    }

    projectItem.addEventListener("click", () => {
      document.querySelectorAll(".project-item-button").forEach(button => {
        button.classList.remove("selected");
      });
      projectItem.classList.add("selected");
      renderTodoList(index);
    });

    projectList.appendChild(projectItem);
  });
}
