import { useState, useId } from 'react'
import useFilter from '../hooks/useFilters'
import './Filters.css'

export default function Filters() {
  const {setFilters, filters} = useFilter()

  const [minPrice, setMinPrice] = useState(0)
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  
  const handleChangeMinPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(Number(event.target.value))
    setFilters(prevState =>({
      ...prevState,
      minPrice: Number(event.target.value)
    }))
  }

  const handleChangeCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Precio mínimo:</label>
        <input 
          type="range"
          id={minPriceFilterId}
          min={0}
          max={1000} 
          onChange={handleChangeMinPrice}
          value={filters.minPrice}/>
          <span>${filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Categoria:</label>
        <select 
          id={categoryFilterId} 
          onChange={handleChangeCategory}
          value={filters.category}>
          <option value="all">All</option>
          <option value="laptops">Portátiles</option>
          <option value="smartphones">Celulares</option>
        </select>
      </div>
    </section>
  )
}