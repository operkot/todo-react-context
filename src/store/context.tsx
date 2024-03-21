import { ReactNode, createContext } from 'react'
import { useStoreData } from './hooks/use-store-data'

type UseStoreDataReturnType = ReturnType<typeof useStoreData>

export const StoreContext = createContext<UseStoreDataReturnType | null>(null)

const Provider = ({ children }: { children: ReactNode }) => {
  const storeData = useStoreData()

  return (
    <StoreContext.Provider value={storeData}>{children}</StoreContext.Provider>
  )
}

export default Provider
