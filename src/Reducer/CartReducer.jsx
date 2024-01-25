const CartReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CART_LOADING':
      return {
        ...state,
        loading: true,
      };

    case 'SET_CART_API_DATA':
      return {
        ...state,
        loading: false,
        cart: action.payload,
      };

    case 'SET_CART_ERROR':
      return {
        ...state,
        loading: false,
        error: true,
      };

    // SET_INCREMENT;
    case 'SET_INCREMENT':
      let updatedProduct = state.cart.map((curElem) => {
        if (curElem.id === action.payload) {
          let incrementAmount = curElem.amount + 1;
          return {
            ...curElem,
            amount: incrementAmount,
          };
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      };

    // SET_DECREMENT;
    case 'SET_DECREMENT':
      let updateDecreaseProduct = state.cart.map((curElem) => {
        if (curElem.id === action.payload) {
          let decrementAmount = curElem.amount - 1;
          if (decrementAmount <= 1) {
            decrementAmount = 1;
          }
          return {
            ...curElem,
            amount: decrementAmount,
          };
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        cart: updateDecreaseProduct,
      };

    default:
      return state;
  }

  return state;
};

export default CartReducer;
