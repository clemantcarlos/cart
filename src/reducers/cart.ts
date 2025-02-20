export const initialState: any = []

export const CART_ACTIONS = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
}

export function cartReducer(state, action) {
  const {payload: actionPayload, type: actionType} = action 
  switch (actionType) {
    case CART_ACTIONS.ADD_TO_CART: {
      const productInCart = state.findIndex((item) => item.id === actionPayload.id)
      
      if(productInCart >= 0) {  
        const newState = structuredClone(actionPayload)
        newState[productInCart].quantity += 1
        return newState
      }
      return [...state, 
        {
          ...actionPayload,
          quantity: 1
        }
      ]
    }
    case CART_ACTIONS.REMOVE_FROM_CART: {
      const { id } = actionPayload
      return state.filter((item:any) => item.id !== id)
    }
    case CART_ACTIONS.CLEAR_CART:
      return initialState
  }
  return state
}
