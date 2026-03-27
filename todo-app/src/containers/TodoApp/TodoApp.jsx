import { useState, useEffect } from 'react';
import TodoForm from '../../components/TodoForm/TodoForm';
import TodoList from '../../components/TodoList/TodoList';
import './TodoApp.scss';


const TodoApp = () => {
  const [todos, setTodos] = useState([]);

    const fetchTodos = async () => {
        try {
          const res = await fetch('http://localhost:3000/tasks');
          const data = await res.json();
          setTodos(data);
          } catch (error) {
          console.error(error);
          }
    };

    useEffect(() => {
        fetchTodos();
    }, []);

  //const addTodo = (todoText) => { Old Todo
    //const trimmedText = todoText.trim();

    //if (!trimmedText) return;

    //const newTodo = {
    //  id: Date.now(),
    //  text: trimmedText,
    //};

    const addTodo = async (task) => {

      const trimmedText = task.trim();

      if (!trimmedText) return;

      const res = await fetch('http://localhost:3000/tasks/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ task }),
      });

      const newTodo = await res.json();
      console.log(newTodo);

      setTodos((prev) => [...prev, newTodo]);
    };

  const deleteTodo = async (id) => {
    const res = await fetch(`http://localhost:3000/tasks/${id}`, {
        method: 'DELETE',
  });

    if (!res.ok) {
      throw new Error('Delete failed');
    }
    setTodos((prev) => prev.filter((t) => t.id !== id));

    await fetchTodos();
  };

  const resetTodos = async () => {
      try {
        const res = await fetch('http://localhost:3000/tasks', {
          method: 'DELETE',
        });

        if (!res.ok) {
          throw new Error('Reset failed');
        }

        setTodos([]);
      } catch (err) {
        console.error(err);
      }

      await fetchTodos();
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