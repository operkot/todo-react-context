import { useContext, useSyncExternalStore } from 'react'

import type { Store } from 'store/types'
import { StoreContext } from 'store/context'

export const useStore = <SelectorOutput,>(
  selector: (store: Store) => SelectorOutput
): [SelectorOutput, (value: Partial<Store>) => void] => {
  const store = useContext(StoreContext)

  if (!store) throw new Error('Store not found!')

  const state = useSyncExternalStore(store.subscribe, () =>
    selector(store.get())
  )

  return [state, store.set]
}
