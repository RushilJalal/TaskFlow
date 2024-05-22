import { todoList } from "./todoModel";
import { renderTodoList } from "./renderTodoList";

export function renderSidebar() {
  const projectList = document.querySelector(".project-list");

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

// create project dialog using js to add more projects
export function showAddProjectDialog() {
  const addProjectDialog = document.createElement("dialog");
  addProjectDialog.classList.add("add-project-dialog");

  const projectInput = document.createElement("input");
  projectInput.type = "text";
  projectInput.classList.add("project-input");
  projectInput.placeholder = "Enter project name";

  const submitButton = document.createElement("button");
  submitButton.textContent = "Add Project";
  submitButton.classList.add("submit-add-project");

  const closeButton = document.createElement("button");
  closeButton.textContent = "Close";
  closeButton.classList.add("close-add-project");

  addProjectDialog.appendChild(projectInput);
  addProjectDialog.appendChild(submitButton);
  addProjectDialog.appendChild(closeButton);

  document.body.appendChild(addProjectDialog);
  addProjectDialog.showModal();

  submitButton.addEventListener("click", () => {
    const projectName = projectInput.value;
    if (projectName === "") {
      alert("Enter project name");
      return;
    }

    todoList.push({ projectName, tasks: [] });
    renderSidebar();
    addProjectDialog.close();
    addProjectDialog.remove();
  });

  closeButton.addEventListener("click", () => {
    addProjectDialog.close();
    addProjectDialog.remove();
  });
}



