import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons"
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons"

function Todo({ text, todo, todos, setTodos }) {
  const checkIcon = <FontAwesomeIcon icon={faCircleCheck} />
  const deleteIcon = <FontAwesomeIcon icon={faCircleXmark} />

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

  const handleDelete = () => {
    setTodos(todos.filter((item) => item.id !== todo.id))
  }

  // Form Validation
  if (text === "" || text.length >= 30) {
    return false
  }

  return (
    <div className="list-container">
      <i
        className={todo.completed ? "checked" : "complete-icon"}
        onClick={handleComplete}>
        {checkIcon}
      </i>
      <li className={`todo-list  ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <i className="delete-icon" onClick={handleDelete}>
        {deleteIcon}
      </i>
    </div>
  )
}

export default Todo
