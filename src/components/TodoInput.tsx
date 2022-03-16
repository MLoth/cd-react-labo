import '../style/components/todo-input.scss'

import { ChangeEvent, useState } from 'react'
import { Plus } from 'lucide-react'
import { uid } from 'uid'

import Todo from '../interfaces/Todo'

const TodoInput = ({ setNewTodo }: { setNewTodo: Function }) => {
  // TODO: Maak een nieuwe todo aan
  // npm install --save uid

  const [todo, setTodo] = useState<Todo>({
    id: uid(8),
    title: '',
    category: '',
  })

  const clickHandler = () => {
    console.log(todo)

    if (todo.title && todo.id && todo.category) {
      setNewTodo(todo)
    } else {
      // TODO: show error message
    }
  }

  return (
    <div className="c-todo-input">
      <div className="c-todo-input__container">
        <button className="c-todo-input-button" onClick={clickHandler}>
          <Plus className="c-todo-input-symbol" />
        </button>
        <input
          className="c-todo-input-text"
          placeholder="What needs to be done?"
          type="text"
          name="title"
          onInput={(e: any) =>
            setTodo((t: Todo) => {
              t.title = e.target.value
              return { ...t } // New value
            })
          }
          value={todo.title}
        />
      </div>

      <select
        className="c-todo-input-categories"
        name="categories"
        id="categories"
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          setTodo((t: Todo) => {
            t.category = e.target.options[e.target.selectedIndex].value
            return { ...t } // New value
          })
        }
      >
        <option disabled selected>
          Pick a category
        </option>
        <option value="school">School</option>
        <option value="work">Work</option>
        <option value="hobby">Hobby</option>
      </select>
    </div>
  )
}

export default TodoInput
