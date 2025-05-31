const Todo = ({ todo, deleteTodo, completeTodo }) => {
  const onClickDelete = () => deleteTodo(todo)
  const onClickComplete = () => completeTodo(todo)

  return (
    <div>
      <span>{todo.text}</span>
      {todo.done ? (
        <span>This todo is done</span>
      ) : (
        <span>This todo is not done</span>
      )}
      <button onClick={onClickDelete}>Delete</button>
      {!todo.done && <button onClick={onClickComplete}>Set as done</button>}
    </div>
  )
}

export default Todo
