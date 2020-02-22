const initialState = {
  currentUser: {},
  products: [],
  categories: [],
  cart: [],
  total: 0,
  loading: false
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNIN_USER":
      return {...state, currentUser: action.payload}
    case "LOGOUT_USER":
      return {...state, currentUser: {}}
    case "GET_ALL_PRODUCTS":
      return {...state, products: action.payload}
    case "GET_ALL_CATEGORIES":
      return {...state, categories: action.payload}
    case "ADD_TOTAL":
      return {...state, total: action.payload}
    case "SUBTRACT_TOTAL":
      return {...state, total: action.payload}
    default:
      return state;
  }
}

export default rootReducer;