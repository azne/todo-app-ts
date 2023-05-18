import React, { useState, useRef, FormEventHandler } from 'react'
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid'
import './App.css'

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [isError, setIsError] = useState(false)
  const todoNameRef = useRef<HTMLInputElement>(null)

  type Todo = {
    id: string
    taskName: string
    completed: boolean
  }

  const handleAddTodo: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    console.log("@todoNameRef.current.value", todoNameRef.current?.value)
    const taskName = todoNameRef.current?.value || ''
    if(taskName === '') {
      setIsError(true)
      return
    } else {
      setIsError(false)
    }
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), taskName: taskName, completed: false}]
    })
    if(todoNameRef.current) {
      todoNameRef.current.value = ''
    }
  }

  const toggleTodo = (id: string) => {
    const newTodos = [...todos]
    const todo = newTodos.find((todo) => todo.id === id)
    if(todo) {
      todo.completed = !todo.completed
    }
    setTodos(newTodos)
  }

  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed)
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <header className="App-header">ヽ(`･ω･´) Todoリスト Ts (`･ω･´)ﾉ</header>
      <div className="main">
        <div className="numText">残タスク：{todos.filter((todo) => !todo.completed).length}件</div>
        <form onSubmit={handleAddTodo}>
          {isError && <div className="noticeArea">タスクが入力されていません。</div>}
          <input type="text" ref={todoNameRef} placeholder="ここにタスクを記入" className="todoInput" />
          <button type="submit" className="todoAddBtn">タスクを追加</button>
        </form>

        <TodoList todos={todos} toggleTodo={toggleTodo} />

        {todos.length > 0 ? (
          <button onClick={handleClear} className="todoClearBtn">
            完了したタスクの削除
          </button>
        ) : null}
      </div>
    </div>
  )
}

export default App
