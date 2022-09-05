import React, { useState } from "react"

function Form({ todos, setTodos, status, setStatus }) {
  const [controlInput, setControlInput] = useState("")

  const handleInput = (e) => {
    setControlInput(e.target.value)
  }

  const handleForm = (e) => {
    e.preventDefault()

    setTodos([
      ...todos,
      {
        text: controlInput,
        completed: false,
        id: Math.floor(Math.random() * 100 + 1),
      },
    ])
    setControlInput("")
  }

  const handleStatus = (e) => {
    setStatus(e.target.innerText)
  }

  return (
    <div>
      <form onSubmit={handleForm}>
        <input
          type="text"
          onChange={handleInput}
          value={controlInput}
          placeholder="What needs to be done?"
        />
        <ul className="links-container" onClick={handleStatus}>
          <li className="links">
            <a href="#completed">Completed</a>
          </li>
          <li className="links">
            <a href="#active">Active</a>
          </li>
          <li className="links">
            <a href="#all">All</a>
          </li>
        </ul>
      </form>
    </div>
  )
}

export default Form
