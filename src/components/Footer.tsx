import useCart from '../hooks/useCart'
import useFilter from '../hooks/useFilters'
import './Footer.css'
export default function Footer() {
  const { filters } = useFilter()
  const {cart} = useCart()
  return <footer className="footer">
    {
      JSON.stringify(filters, null, 2)
    }
    {
      JSON.stringify(cart, null, 2)
    }
    {/* <h4>
      Prueba tecnica de react - 
      <span>@tiuna</span>
    </h4>
    <h5>Shopping cart con useContext & useReducer</h5> */}
  </footer>
}