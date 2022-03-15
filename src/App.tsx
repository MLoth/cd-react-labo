import { useState } from 'react'
import AppContainer from './components/AppContainer'
import AppRow from './components/AppRow'
import TodoAppHeader from './components/TodoAppHeader'
import TodoInput from './components/TodoInput'
import TodoItem from './components/TodoItem'
import Todo from './interfaces/Todo'

function App() {
  return (
    <main>
      {/* CONTAINER: Zet het in het midden */}
      <AppContainer>
        {/* ROW: Geeft padding tot de randen */}
        <AppRow>
          {/* Content */}
          <TodoAppHeader />

          <TodoInput />

          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />

          {/* {dummyItems.map(() => (
          ))} */}
        </AppRow>
      </AppContainer>
    </main>
  )
}

export default App
