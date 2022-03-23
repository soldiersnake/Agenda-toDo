import './styles.css';

import { Todo, TodoList } from './assets/classes'
import { crearTodoHtml } from './js/componentes';
// import { Todo } from './assets/classes/todo.class';
// import { TodoList } from './assets/classes/todo-list.class';

export const todoList = new TodoList();

todoList.todos.forEach( todo => crearTodoHtml(todo) );

