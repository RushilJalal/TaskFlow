import { handleAddTask } from "./createNewTask";
import { renderTodoList } from "./renderTodoList";
import { renderSidebar } from "./sidebar";
import { setTaskPriorityColor } from "./todoModel";


export function todoView() {
    const content = document.querySelector('.content');
    const inputDiv = document.createElement("div");
    inputDiv.classList.add("input-div");
    content.appendChild(inputDiv);


    renderTodoList();
    renderSidebar();

    const addTaskDialog = document.querySelector('.add-task-dialog');

    const addTaskButton = document.querySelector(".add-task-button");
    addTaskButton.addEventListener('click', () => {
        addTaskDialog.style.display = 'block';
        addTaskDialog.showModal()
    });

    const close = document.querySelector('#close-button')
    close.addEventListener('click', () => {
        const form = document.querySelector('#add-task-form')
        addTaskDialog.style.display = 'none'

        //reset form when close button clicked
        form.reset();
    })

    const submitNewTaskFormButton = document.querySelector('.submit-add-new-task')
    submitNewTaskFormButton.addEventListener('click', handleAddTask)
}




