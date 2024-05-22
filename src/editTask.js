import { renderTodoList } from "./renderTodoList";
import { todoList } from "./todoModel";

let currentSubmitHandler = null;

export function showEditTaskDialog(projectIndex, index) {
    const dialog = document.querySelector(".edit-task-dialog");
    dialog.showModal();

    dialog.style.display = "flex";

    const taskName = document.querySelector(".task-name");
    const taskDesc = document.querySelector(".task-desc");
    const taskDate = document.querySelector(".date");
    const taskPriority = document.querySelector(".edit-task-priority");

    // Set the values of the task to be edited
    taskName.value = todoList[projectIndex].tasks[index].title;
    taskDesc.value = todoList[projectIndex].tasks[index].description;
    taskDate.value = todoList[projectIndex].tasks[index].dueDate;
    taskPriority.value = todoList[projectIndex].tasks[index].priority;

    const submitEditTaskFormButton = document.querySelector(".submit-edit-task");

    // Remove the current event listener if it exists
    if (currentSubmitHandler) {
        submitEditTaskFormButton.removeEventListener("click", currentSubmitHandler);
    }

    currentSubmitHandler = () => {
        const name = taskName.value;
        const desc = taskDesc.value;
        const date = taskDate.value;
        const priority = taskPriority.value;

        if (name === "") {
            alert("Enter name");
            return;
        }

        editTodoItem(projectIndex, index, name, desc, date, priority);

        dialog.style.display = "none";
        dialog.close();

        const taskList = document.querySelector(".task-list");
        taskList.textContent = "";
        renderTodoList(projectIndex);
    };

    submitEditTaskFormButton.addEventListener("click", currentSubmitHandler);

    const close = document.querySelector(".close-button");
    close.addEventListener("click", () => {
        dialog.style.display = "none";
        dialog.close();
    });
}

// Set the task parameters to the new values given by user as input
function editTodoItem(projectIndex, index, name, desc, date, priority) {
    todoList[projectIndex].tasks[index].title = name;
    todoList[projectIndex].tasks[index].description = desc;
    todoList[projectIndex].tasks[index].dueDate = date;
    todoList[projectIndex].tasks[index].priority = priority;
}
