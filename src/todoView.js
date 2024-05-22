import { handleAddTask } from "./createNewTask";
import { renderTodoList } from "./renderTodoList";
import { renderSidebar } from "./renderSidebar";

//default project index is 0
let projectIndex = 0

export function todoView() {

  renderTodoList(projectIndex);
  renderSidebar();

  // event listener on project list button
  const projectList = document.querySelector(".project-list");
  projectList.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      projectIndex = todoList.findIndex(
        (project) => project.projectName === event.target.textContent
      );
      renderTodoList(projectIndex);
      console.log("new project index", projectIndex)
    }
  });

  const addTaskDialog = document.querySelector(".add-task-dialog");

  const addTaskButton = document.querySelector(".add-task-button");
  addTaskButton.addEventListener("click", () => {
    addTaskDialog.style.display = "flex";
    addTaskDialog.showModal();
  });

  const close = document.querySelector(".close-button");
  close.addEventListener("click", () => {
    const form = document.querySelector("#add-task-form");
    addTaskDialog.style.display = "none";

    //reset form when close button clicked
    form.reset();
  });

  //when close button in edit task form is clicked, close the dialog
  const closeEditTaskDialog = document.querySelector(".close-edit-button");
  closeEditTaskDialog.addEventListener("click", () => {
    const editTaskDialog = document.querySelector(".edit-task-dialog");
    editTaskDialog.style.display = "none";
    editTaskDialog.close();
  });

  const submitNewTaskFormButton = document.querySelector(".submit-add-new-task");
  submitNewTaskFormButton.addEventListener("click", handleAddTask);
}

export function toggleStrikeThrough() {
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
