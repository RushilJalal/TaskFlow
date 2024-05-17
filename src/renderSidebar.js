let projects = ["All", "My Day", "Personal"];

export function renderSidebar() {
  const projectList = document.querySelector(".project-list");

  projects.forEach((project) => {
    const projectItem = document.createElement("button");
    projectItem.textContent = project;
    projectList.appendChild(projectItem);
  });
}
