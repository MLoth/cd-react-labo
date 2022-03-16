import { Check } from 'lucide-react'

import Todo from '../interfaces/Todo'
import '../style/components/c-todo-item.scss'

const TodoItem = ({ todo }: { todo: Todo }) => {
  return (
    <div className="c-todo-item">
      <input
        className="c-todo-item-input"
        type="checkbox"
        id={todo.id}
        defaultChecked={todo.completed}
      />
      <label className="c-todo-item-label" htmlFor={todo.id}>
        <Check className="c-todo-item-symbol" />
      </label>

      <div className="c-todo-item-content">
        <p className="c-todo-item-text">{todo.title}</p>
        <p className="c-todo-item-category">{todo.category}</p>
      </div>
    </div>
  )
}

export default TodoItem
