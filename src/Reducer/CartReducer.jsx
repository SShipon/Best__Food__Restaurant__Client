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

    //CART_TOTAL_ITEM
    case 'CART_TOTAL_ITEM':
      let updatedCartItemVal = state.cart.reduce((initialVal, eachCartData) => {
        let { amount } = eachCartData; //cart data r current element er total amount
        initialVal = initialVal + amount;
        return initialVal;
      }, 0);
      return {
        ...state,
        total_item: updatedCartItemVal,
      };

    case 'CART_TOTAL_PRICE':
      let totalCartPrice = state.cart.reduce((initialVal, eachCartData) => {
        let { amount, price } = eachCartData;
        initialVal = initialVal + price * amount;
        return initialVal;
      }, 0);
      return {
        ...state,
        total_price: totalCartPrice,
      };

    default:
      return state;
  }

  return state;
};

export default CartReducer;
