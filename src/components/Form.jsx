import React, { useState } from "react"

function Form({ todos, setTodos }) {
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

  return (
    <div>
      <form onSubmit={handleForm}>
        <input
          type="text"
          onChange={handleInput}
          value={controlInput}
          placeholder="What needs to be done?"
        />
      </form>
    </div>
  )
}

export default Form
