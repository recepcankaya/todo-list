import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons"

function Form({ todos, setTodos }) {
  const [controlInput, setControlInput] = useState("")

  const element = <FontAwesomeIcon icon={faSquarePlus} />

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
        <input type="text" onChange={handleInput} value={controlInput} />
        <button className="add-button">{element}</button>
      </form>
    </div>
  )
}

export default Form
