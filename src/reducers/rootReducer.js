const initialState ={
  currentUser: {},
  loading: false
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USERINFO":
      return state;
    default:
      return state;
  }
}

export default rootReducer;