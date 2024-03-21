import { useStore } from 'store'

export const TodoFilter = () => {
  const [filter, setStore] = useStore(state => state.filter)

  const setFilterHandler = (value: string) => setStore({ filter: value })

  return (
    <div>
      <button
        disabled={filter === 'all'}
        onClick={() => setFilterHandler('all')}
      >
        All
      </button>
      <button
        disabled={filter === 'completed'}
        onClick={() => setFilterHandler('completed')}
      >
        Completed
      </button>
      <button
        disabled={filter === 'active'}
        onClick={() => setFilterHandler('active')}
      >
        Active
      </button>
    </div>
  )
}
