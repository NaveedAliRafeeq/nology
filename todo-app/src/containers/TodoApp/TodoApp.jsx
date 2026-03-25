import { useState } from 'react';
import TodoForm from '../../components/TodoForm/TodoForm';
import TodoList from '../../components/TodoList/TodoList';
import './TodoApp.scss';

const TodoApp = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'adopt a duck' },
    { id: 2, text: 'pet a doggo' },
  ]);

  const addTodo = (todoText) => {
    const trimmedText = todoText.trim();

    if (!trimmedText) return;

    const newTodo = {
      id: Date.now(),
      text: trimmedText,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const resetTodos = () => {
    setTodos([]);
  };

  return (
    <div className="todo-app">
      <div className="todo-app__card">
        <div className="todo-app__header">
          <h1>My ToDo's</h1>
          <button className="todo-app__reset-btn" onClick={resetTodos}>
            Reset
          </button>
        </div>

        <TodoForm onAddTodo={addTodo} />

        <TodoList todos={todos} onDeleteTodo={deleteTodo} />
      </div>
    </div>
  );
}

export default TodoApp;