// background color of task item changes according to priority

export function setTaskPriorityColor() {
  const taskList = document.querySelectorAll(".task-list .task-item");
  taskList.forEach((task) => {
    let priorityDiv = task.querySelector("div:nth-child(4)");
    let priority = priorityDiv.textContent;

    switch (priority) {
      case "High":
        task.style.backgroundColor = "red";
        break;
      case "Medium":
        task.style.backgroundColor = "orange";
        break;
      case "Low":
        task.style.backgroundColor = "green";
        break;
    }
  });
}
