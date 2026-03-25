import { useState } from 'react';
import './TodoForm.scss';

const TodoForm = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    onAddTodo(inputValue);
    setInputValue('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-form__input"
        placeholder="Add your task here..."
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />

      <button type="submit" className="todo-form__add-btn">
        +
      </button>
    </form>
  );
}

export default TodoForm;