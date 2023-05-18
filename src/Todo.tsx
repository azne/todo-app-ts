import React from 'react'

type Todo = {
  id: string
  taskName: string
  completed: boolean
}

type TodoProps = {
  todo: Todo;
  toggleTodo: (id: string) => void;
}

const Todo = ({ todo, toggleTodo }: TodoProps) => {
  const handleTodoClick = () => {
    toggleTodo(todo.id)
  }

  return (
    <div className="todo">
      <label>
        <input type="checkbox" checked={todo.completed} readOnly onChange={handleTodoClick} />
        <span className="checkIcon"></span>
        {todo.taskName}
      </label>
    </div>
  )
}

export default Todo
