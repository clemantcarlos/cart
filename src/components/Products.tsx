import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons';
import useCart from '../hooks/useCart';

export type APIResponse = {
  id:                 number;
  title:              string;
  description:        string;
  price:              number;
  discountPercentage: number;
  rating:             number;
  stock:              number;
  brand:              string;
  category:           string;
  thumbnail:          string;
  images:             string[];
}
export default function Products({filteredProducts}: {filteredProducts: APIResponse[]}) {

  const { cart, addToCart, removeFromCart } = useCart()
  const checkProductInCart = (product) => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <main className='products'>
      <ul>
        {filteredProducts && filteredProducts.slice(0,10).map((product) => {
          const isProductInCart = checkProductInCart(product)
          return (
            <li key={product.id} className='product'>
              <img 
                src={product.thumbnail} 
                alt={product.title} 
              />
              <div>
                <strong>{product.title} - ${product.price}</strong>
              </div>
              <div>
                <button onClick={() => isProductInCart 
                  ? removeFromCart(product) 
                  : addToCart(product)
                }>
                  {
                    isProductInCart
                    ? <RemoveFromCartIcon />
                    : <AddToCartIcon />
                  }
                </button>
              </div>
            </li>
          )
        }
        )}
      </ul>
    </main>
  )
}