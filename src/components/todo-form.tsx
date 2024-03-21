import { useRef } from 'react'
import { useStore } from 'store'

export const TodoForm = () => {
  const formRef: React.LegacyRef<HTMLFormElement> = useRef(null)
  const [tasks, setStore] = useStore(state => state.tasks)

  const submitHandler: React.FormEventHandler<HTMLFormElement> = (e): void => {
    e.preventDefault()

    const target = e.target as typeof e.target & {
      title: { value: string }
    }

    if (!target.title.value.trim().length) return

    setStore({
      tasks: [
        ...tasks,
        {
          id: Date.now().toString(),
          title: target.title.value,
          completed: false,
        },
      ],
    })

    if (formRef.current) formRef.current.reset()
  }

  return (
    <form ref={formRef} onSubmit={submitHandler}>
      <input type="text" name="title" placeholder="Enter todo title..." />
      <button>Add todo</button>
    </form>
  )
}
