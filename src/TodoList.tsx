import React from 'react'
import Todo from './Todo'

type TodoProps = {
  todos: Todo[];
  toggleTodo: (id: string) => void;
}

const TodoList = ({ todos, toggleTodo }: TodoProps) => {
  return (
    <>
    {todos.map((todo) => (
      <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo} />
    ))}
    </>
  )
}

export default TodoList