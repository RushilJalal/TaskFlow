// simple js to control edit task form and dialog

import { todoList } from "./todoModel"

export function showEditTaskDialog(index) {
    const dialog = document.querySelector(".edit-task-dialog")
    dialog.showModal()

    dialog.style.display = "block"

    const taskName = document.querySelector(".task-name")
    const taskDesc = document.querySelector(".task-desc")
    const taskDate = document.querySelector(".date")
    const taskPriority = document.querySelector(".task-priority")

    taskName.textContent = todoList[index].title
    taskDesc.textContent = todoList[index].description
    taskDate.textContent = todoList[index].dueDate
    taskPriority.textContent = todoList[index].priority

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
    })

    const close = document.querySelector(".close-button")
    close.addEventListener("click", () => {
        dialog.style.display = "none"
        dialog.close()
    })

}
