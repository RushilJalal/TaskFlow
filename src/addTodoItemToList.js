import todoList from "./todoList";
import generateTodoItem from "./generateTodoItem";

export default function addTodoItemToList() {
    const todoItem = generateTodoItem("Buy surf", "buy from campus store", "2024-03-01", "high");
    todoList.push(todoItem);

    console.log(todoList);
}



