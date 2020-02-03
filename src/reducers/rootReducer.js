const initialState ={
  currentUser: {},
  loading: false
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNIN_USER":
      console.log(action.payload) // undefined
      return {...state, currentUser: action.payload}
      case "LOGOUT_USER":
        return {...state, currentUser: {}}
    default:
      return state;
  }
}

export default rootReducer;