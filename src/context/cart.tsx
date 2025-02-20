import { createContext, useReducer } from "react"; 

import { CART_ACTIONS, cartReducer, initialState } from "../reducers/cart";

export const CartContext = createContext<any>(null)

function useCartReducer (){
  const [state, dispatch] = useReducer(cartReducer, initialState)

  
  const addToCart = product => dispatch({
    type: CART_ACTIONS.ADD_TO_CART,
    payload: product
  })
  const removeFromCart = product => dispatch({
    type: CART_ACTIONS.REMOVE_FROM_CART,
    payload: product
  })

  const clearCart = () => dispatch({
    type: CART_ACTIONS.CLEAR_CART
  })

  return {
    state,
    addToCart,
    removeFromCart,
    clearCart
  }
}

export const CartProvider = ({children}) => {
  const {state, addToCart, removeFromCart, clearCart} = useCartReducer()
  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      removeFromCart,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  )
}