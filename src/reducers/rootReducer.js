const initialState = {
  currentUser: {},
  products: [],
  categories: [],
  cart: [],
  loading: false
}

const rootReducer = (state = initialState, action) => {
  console.log("in reducer", state)
  switch (action.type) {
    case "SIGNIN_USER":
      return {...state, currentUser: action.payload}
    case "LOGOUT_USER":
      return {...state, currentUser: {}}
    case "GET_ALL_PRODUCTS":
      return {...state, products: action.payload}
    case "GET_ALL_CATEGORIES":
      return {...state, categories: action.payload}
    // case "ADD_ITEM_TO_CART":
    //   console.log(action.payload, "from reducer", state)
    //   return {...state, cart: [...state.cart, action.payload]} // Adding a new item might overide existing cart items
    default:
      return state;
  }
}

export default rootReducer;