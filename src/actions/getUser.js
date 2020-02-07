const getUser = () => {
  return dispatch => {
    const token = localStorage.token;
    if (token) {
      return fetch("http://localhost:3000/profile", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.message) {
            // An error will occur if the token is invalid.
            // If this happens, you may want to remove the invalid token.
            console.log("remove token")
            localStorage.removeItem("token")
          } else {
            // dispatch(loginUser(data.user.data.attributes))
          }
        })
    }
  }
}

// move to signIn action file
const loginUser = userObj => ({
  type: "SIGNIN_USER",
  // payload: userObj.data.attributes
  payload: userObj
});

export default getUser;