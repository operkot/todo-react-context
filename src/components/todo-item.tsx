import { Todo } from 'shared/types'
import { useStore } from 'store'

export const TodoItem = ({ id, title, completed }: Todo) => {
  const [tasks, setStore] = useStore(store => store.tasks)

  const toggleStateHandler = () => {
    setStore({
      tasks: tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    })
  }

  const deleteHandler = () => {
    setStore({ tasks: tasks.filter(task => task.id !== id) })
  }

  return (
    <article>
      <input
        type="checkbox"
        checked={completed}
        onChange={toggleStateHandler}
      />
      <h4>{title}</h4>
      <button type="button" onClick={deleteHandler}>
        &times;
      </button>
    </article>
  )
}
