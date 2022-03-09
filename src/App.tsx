import AppContainer from './components/AppContainer'
import AppRow from './components/AppRow'
import TodoInput from './components/TodoInput'

function App() {
  return (
    <main>
      {/* CONTAINER: Zet het in het midden */}
      <AppContainer>
        {/* ROW: Geeft padding tot de randen */}
        <AppRow>
          {/* Content */}
          <TodoInput />
        </AppRow>
      </AppContainer>
    </main>
  )
}

export default App
