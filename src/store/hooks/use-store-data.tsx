import { useCallback, useRef } from 'react'
import { Store } from 'store/types'

export const useStoreData = (): {
  get: () => Store
  set: (value: Partial<Store>) => void
  subscribe: (cd: () => void) => () => void
} => {
  const store = useRef<Store>({ tasks: [], filter: 'all' })
  const subscribers = useRef(new Set<() => void>())

  const get = useCallback(() => store.current, [])

  const set = useCallback((value: Partial<Store>) => {
    store.current = { ...store.current, ...value }
    subscribers.current.forEach(cb => cb())
  }, [])

  const subscribe = useCallback((cb: () => void) => {
    subscribers.current.add(cb)
    return () => subscribers.current.delete(cb)
  }, [])

  return { get, set, subscribe }
}
