import createTodoItem from "./createTodoItem";

const todoList = [
    createTodoItem("Buy bread", "buy 10 bread", "2024-03-01", "low"),
    createTodoItem("Study notes", "CNP notes", "2024-03-02", "high", [], true)
];


export default todoList;