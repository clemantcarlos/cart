import { createContext, useState } from 'react'

interface filters {
  category: string
  minPrice: number
}
interface IFiltersContext {
  filters: filters
  setFilters: React.Dispatch<React.SetStateAction<filters>>
}
// crear el contexto
export const FiltersContext = createContext<IFiltersContext | null>(null)

// crear el provider
export const FiltersProvider = ({children}) => {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })
  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters
    }}>
      {children}
    </FiltersContext.Provider>
  )
}