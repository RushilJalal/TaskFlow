//executes when add task button inside modal is clicked
// extracts info from forms and creates new task

import { generateTodoObj, todoList } from "./todoModel";
import { renderTodoList } from "./todoView";

export function handleAddTask() {
    const nameInput = document.querySelector('#task-name')
    const descInput = document.querySelector('#task-desc')
    const dateInput = document.querySelector('#date')
    const priorityInput = document.querySelector('#taskPriority')

    const name = nameInput.value;
    const desc = descInput.value;
    const date = new Date(dateInput.value);
    const priority = priorityInput.value;

    createTodoItem(name, desc, date, priority)
}

function createTodoItem(name, desc, date, priority) {

    const newTask = generateTodoObj(name, desc, date, priority)
    todoList.push(newTask)

    const taskList = document.querySelector(".task-list");
    taskList.remove();
    renderTodoList();
}

