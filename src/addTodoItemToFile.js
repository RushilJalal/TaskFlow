export default async function addTodoItemToFile(todoItem) {
    try {
        const response = await fetch("../public/data/todoList.json");
        const existingTodoList = await response.json();

        existingTodoList.todoList.push(todoItem);

        console.log(existingTodoList);
    } catch (error) {
        console.log("there was an error...");
    }
}

addTodoItemToFile({
    "title": "Buy bread",
    "description": "buy 10 bread",
    "duedate": "2024-03-01",
    "priority": "low",
    "checked": false
})

