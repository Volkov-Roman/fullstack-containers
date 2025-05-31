import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos = [], deleteTodo, completeTodo }) => {
  const onClickDelete = (todo) => () => {
    deleteTodo(todo)
  }

  const onClickComplete = (todo) => () => {
    completeTodo(todo)
  }

return (
  <>
    {todos.map(todo => (
      <div key={todo.text}>
        <Todo
          todo={todo}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
        />
        <hr />
      </div>
    ))}
  </>
)
}

export default TodoList
