import React from "react"
import Todo from "./Todo"

function List({ todos, setTodos, filterTodos }) {
  return (
    <div>
      {filterTodos.map((todo) => {
        return (
          <div key={todo.id}>
            <ul>
              <Todo
                todo={todo}
                todos={todos}
                setTodos={setTodos}
                text={todo.text}
              />
            </ul>
          </div>
        )
      })}
    </div>
  )
}

export default List
