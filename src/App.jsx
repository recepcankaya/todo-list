import "./App.css"
import Form from "./components/Form"
import List from "./components/List"
import { useState, useEffect } from "react"

function App() {
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("All")
  const [filterTodos, setFilterTodos] = useState([])

  useEffect(() => {
    handleFilter()
  }, [status, todos]) // eslint-disable-line

  const handleFilter = () => {
    switch (status) {
      case "Completed":
        setFilterTodos(todos.filter((item) => item.completed === true))
        break
      case "Active":
        setFilterTodos(todos.filter((item) => item.completed === false))
        break
      default:
        setFilterTodos(todos)
    }
  }

  return (
    <div className="App">
      <h1>todos</h1>
      <Form
        todos={todos}
        setTodos={setTodos}
        status={status}
        setStatus={setStatus}
      />
      <List todos={todos} setTodos={setTodos} filterTodos={filterTodos} />
    </div>
  )
}

export default App
