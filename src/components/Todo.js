import React from "react"

function Todo({ text, todo, todos, setTodos }) {
  const handleComplete = () => {
    setTodos(
      todos.map((item) => {
        if (todo.id === item.id) {
          return {
            ...item,
            completed: !item.completed,
          }
        }
        return item
      })
    )
  }

  return (
    <div>
      <li className="todo-list" onClick={handleComplete}>
        {text}
      </li>
    </div>
  )
}

export default Todo
