import { Todo } from 'shared/types'

export type Store = {
  tasks: Todo[]
  filter: string
}
