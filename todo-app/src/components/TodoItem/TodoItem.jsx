import './TodoItem.scss';

const TodoItem = ({ todo, onDeleteTodo }) => {
  return (
    <div className="todo-item">
      <span className="todo-item__text">{todo.text}</span>

      <button
        className="todo-item__delete-btn"
        onClick={() => onDeleteTodo(todo.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;