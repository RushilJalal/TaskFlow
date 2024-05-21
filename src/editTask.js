// simple js to control edit task form and dialog

import { renderTodoList } from "./renderTodoList"
import { todoList } from "./todoModel"

export function showEditTaskDialog(index) {
    const dialog = document.querySelector(".edit-task-dialog")
    dialog.showModal()

    dialog.style.display = "block"

    const taskName = document.querySelector(".task-name")
    const taskDesc = document.querySelector(".task-desc")
    const taskDate = document.querySelector(".date")
    const taskPriority = document.querySelector(".edit-task-priority")

    // set the values of the task to be edited
    taskName.value = todoList[index].title
    taskDesc.value = todoList[index].description
    taskDate.value = todoList[index].dueDate
    taskPriority.value = todoList[index].priority

    const submitEditTaskFormButton = document.querySelector(".submit-edit-task")
    submitEditTaskFormButton.addEventListener("click", () => {
        const name = taskName.value
        const desc = taskDesc.value
        const date = taskDate.value
        const priority = taskPriority.value

        if (name === "") {
            alert("Enter name")
            return
        }

        editTodoItem(index, name, desc, date, priority)

        dialog.style.display = "none"
        dialog.close()

        const taskList = document.querySelector(".task-list")
        taskList.textContent = ""
        renderTodoList()

    })

    const close = document.querySelector(".close-button")
    close.addEventListener("click", () => {
        dialog.style.display = "none"
        dialog.close()
    })

}

//sets the task parameters to the new values given by user as input
function editTodoItem(index, name, desc, date, priority) {
    todoList[index].title = name
    todoList[index].description = desc
    todoList[index].dueDate = date
    todoList[index].priority = priority
}


