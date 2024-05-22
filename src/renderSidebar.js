import { todoList } from "./todoModel";

export function renderSidebar() {
  const projectList = document.querySelector(".project-list");

  todoList.forEach((project) => {
    const projectItem = document.createElement("button");
    projectItem.textContent = project.projectName;
    projectList.appendChild(projectItem);
  });
}
