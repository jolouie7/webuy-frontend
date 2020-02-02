const initialState ={
  currentUser: {},
  loading: false
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNIN_USER":
      return {...state, currentUser: action.payload}
    default:
      return state;
  }
}

export default rootReducer;