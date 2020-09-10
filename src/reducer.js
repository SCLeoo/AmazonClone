export const initialState = {
  basket: [],
  user: null,
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
  //console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      console.log(index);
      console.log(state.basket);
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as it's not in basket!`
        );
      }
      console.log(newBasket);
      return {
        ...state,
        basket: newBasket,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
