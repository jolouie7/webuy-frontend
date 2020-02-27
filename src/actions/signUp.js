const signUp = (e, userInfo, history) => {
  // do something with loading here
  e.preventDefault();
  return dispatch => {
    return fetch("https://webuy-backend.herokuapp.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user: {
          name: userInfo.name,
          username: userInfo.username,
          bio: userInfo.bio,
          password: userInfo.password,
          password_confirmation: userInfo.password_confirmation,
          email: userInfo.email
        }
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          console.log("There was an error when creating a user account");
          window.alert("There was an error when creating a user account");
        } else {
          localStorage.setItem("token", data.jwt);
          dispatch(loginUser(data.user.data.attributes));
          history.push("/");
        }
      });
  }
}

// move to signIn action file
const loginUser = userObj => ({
  type: "SIGNIN_USER",
  payload: userObj
});

export default signUp;