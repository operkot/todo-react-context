import { useStore } from 'store'
import { TodoItem } from './todo-item'
import { useMemo } from 'react'

export const TodoList = () => {
  const [tasks] = useStore(state => state.tasks)
  const [filter] = useStore(state => state.filter)
  const filteredTasks = useMemo(() => {
    return tasks.filter(task => {
      if (filter === 'active') return !task.completed
      if (filter === 'completed') return task.completed
      return task
    })
  }, [tasks, filter])

  if (!filteredTasks.length) return <h2>No tasks found...</h2>

  return (
    <section>
      {filteredTasks.map(task => (
        <TodoItem key={task.id} {...task} />
      ))}
    </section>
  )
}
