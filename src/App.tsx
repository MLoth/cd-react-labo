import { useState } from 'react'
import AppContainer from './components/AppContainer'
import AppRow from './components/AppRow'
import TodoAppHeader from './components/TodoAppHeader'
import TodoInput from './components/TodoInput'
import TodoItem from './components/TodoItem'
import Todo from './interfaces/Todo'

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  const appendTodo = (t: Todo) => {
    setTodos((oldTodos: Todo[]) => [...oldTodos, t])
  }

  return (
    <main>
      {/* CONTAINER: Zet het in het midden */}
      <AppContainer>
        {/* ROW: Geeft padding tot de randen */}
        <AppRow>
          {/* Content */}
          <TodoAppHeader amount={todos.length} />

          <TodoInput setNewTodo={(t: Todo) => appendTodo(t)} />

          <>
            {todos.map((t: Todo) => (
              <TodoItem todo={t} key={t.id} />
            ))}
          </>
        </AppRow>
      </AppContainer>
    </main>
  )
}

export default App
