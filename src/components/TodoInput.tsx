import '../style/components/todo-input.scss'

import { Plus } from 'lucide-react'

const TodoInput = () => {
  return (
    <div className="c-todo-input">
      <div className="c-todo-input__container">
        <button className="c-todo-input-button">
          <Plus className="c-todo-input-symbol" />
        </button>
        <input
          className="c-todo-input-text"
          placeholder="What needs to be done?"
          type="text"
          name=""
          id=""
        />
      </div>

      <select
        className="c-todo-input-categories"
        name="categories"
        id="categories"
      >
        <option value="school">School</option>
        <option value="work">Work</option>
        <option value="hobby">Hobby</option>
      </select>
    </div>
  )
}

export default TodoInput
