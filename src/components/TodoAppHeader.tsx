import '../style/components/todo-app-header.scss'

const TodoAppHeader = ({ amount }: { amount: number }) => {
  return (
    <header className="c-todo-app-header">
      <h1 className="c-todo-app-header__title">Hello {'Marty'}</h1>
      <h2 className="c-todo-app-header__subtitle">
        {amount === 0 ? 'Nothing to do.' : `There are ${amount} todos.`}
      </h2>
    </header>
  )
}

export default TodoAppHeader
