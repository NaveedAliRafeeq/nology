import TodoItem from '../TodoItem/TodoItem';
import './TodoList.scss';

const TodoList = ({ todos, onDeleteTodo }) => {
  if (todos.length === 0) {
    return <p className="todo-list__empty">Notihng to see here yet... Add a task in the field above!</p>;
  }

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;