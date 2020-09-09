export const initialState = {
  basket: [],
};

/* Selector Function
export function getBasketTotal(basket) {
  return basket?.reduce((sum, item) => sum + item.price, 0);
}
*/

// Redux Selector, notice the const, it actually modifies its value if something in the state(basket) refreshes
export const getBasketTotal = (basket) => {
  return basket?.reduce((sum, item) => sum + item.price, 0);
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    default:
      return state;
  }
};

export default reducer;
