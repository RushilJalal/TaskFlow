import './style.css';
import addTodoItemToFile from './src/addTodoItemtoFile';
import generateTodoItem from './src/generateTodoItem';

const item = generateTodoItem({
  "title": "Buy bread",
  "description": "buy 10 bread",
  "duedate": "2024-03-01",
  "priority": "low",
  "checked": false
});

addTodoItemToFile(item);