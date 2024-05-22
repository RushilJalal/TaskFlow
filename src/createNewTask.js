// executes when add task button inside modal is clicked
// extracts info from forms and creates new task

import { renderTodoList } from "./renderTodoList";
import { generateTodoObj, todoList } from "./todoModel";

export function handleAddTask(projectIndex) {
  const addTaskDialog = document.querySelector(".add-task-dialog");
  const nameInput = document.querySelector("#task-name");
  const descInput = document.querySelector("#task-desc");
  const dateInput = document.querySelector("#date");
  const priorityInput = document.querySelector("#taskPriority");

  const name = nameInput.value;
  const desc = descInput.value;
  const date = dateInput.value;
  const priority = priorityInput.value;

  if (name === "") {
    alert("Enter name");
    return;
  }

  createTodoItem(projectIndex, name, desc, date, priority);

  addTaskDialog.style.display = "none";
  addTaskDialog.close();
  const form = document.querySelector("#add-task-form");
  form.reset();
}

function createTodoItem(projectIndex, name, desc, date, priority) {
  const newTask = generateTodoObj(name, desc, date, priority);
  todoList[projectIndex].tasks.push(newTask);

  const taskList = document.querySelector(".task-list");
  renderTodoList(projectIndex);
}
