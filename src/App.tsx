import AppContainer from './components/AppContainer'
import AppRow from './components/AppRow'
import TodoAppHeader from './components/TodoAppHeader'
import TodoInput from './components/TodoInput'
import TodoItem from './components/TodoItem'

function App() {
  // const dummyItems = new Array(6)

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
