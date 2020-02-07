const initialState ={
  currentUser: {},
  products: [],
  categories: [],
  loading: false
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNIN_USER":
      console.log(action.payload)
      return {...state, currentUser: action.payload}
      case "LOGOUT_USER":
        return {...state, currentUser: {}}
      case "GET_ALL_PRODUCTS":
        return {...state, products: action.payload}
      case "GET_ALL_CATEGORIES":
        return {...state, categories: action.payload}
    default:
      return state;
  }
}

export default rootReducer;