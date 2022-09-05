import "./App.css"
import Form from "./components/Form"
import List from "./components/List"
import { useState } from "react"

function App() {
  const [todos, setTodos] = useState([])

  return (
    <div className="App">
      <h1>todos</h1>
      <Form todos={todos} setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
