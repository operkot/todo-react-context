import Provider from 'store/context'
import { TodoFilter } from 'components/todo-filter'
import { TodoForm } from 'components/todo-form'
import { TodoList } from 'components/todo-list'

export const App = () => (
  <Provider>
    <h1>React Context Todo</h1>

    <div>
      <TodoForm />
      <TodoFilter />
      <TodoList />
    </div>
  </Provider>
)
