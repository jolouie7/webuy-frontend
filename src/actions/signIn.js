const signIn = (e, userInfo, history) => {
  e.preventDefault();
  return dispatch => {
    return fetch("http://localhost:3000/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user: {
          username: userInfo.username,
          password: userInfo.password,
          password_confirmation: userInfo.password_confirmation
        }
      })
    })
      .then(resp => resp.json())
      .then(data => {
      if (data.message) {
          console.log("ERROR with signing in");
          window.alert("Wrong Username or Password!")
        } else {
          localStorage.setItem("token", data.jwt);
          dispatch(loginUser(data.user.data.attributes));
          history.push("/");
        }
      })
  };
};

// move to signIn action file
const loginUser = userObj => ({
  type: "SIGNIN_USER",
  payload: userObj
});

export default signIn;