// const signUp = (e, userInfo, history) => {
const signUp = (userInfo) => {
  // do something with loading here
  return dispatch => {
    console.log(userInfo)
    return fetch("http://localhost:3000/users", {
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
        if (data.message) {
          console.log("There was an error when creating a user account");
        } else {
          localStorage.setItem("token", data.jwt);
          // check what data.user really is
          dispatch(loginUser(data.user));
          // console.log(data.user);
          // {data: {…}}
          // console.log(data.user.data);
          // {id: "18", type: "user", attributes: {…}}
          // console.log(data.user.data.attributes);
          console.log("action signup L36")
          // {username: "jo11", name: "jo", bio: "jo", email: "jo"}
          // ----------- Theres no password being shown for attributes ----------------------
        }
      });
      // .then(data => {
      //   // check to see if this is the current attributes
      //   dispatch({ type: "SET_CURRENT_USER", user: data.user });
      //   // dispatch({ type: "ADD_USER", user: data.user });
      //   localStorage.setItem("jwt", data["jwt"]);
      //   // return data.user.id;
      // })
      // .then(id =>
      //   typeof id === "number" ? history.push(`/`) : null
      // );
  }
}

// move to signIn action file
const loginUser = userObj => ({
  type: "SIGNIN_USER",
  payload: userObj
  // payload: userObj
});

export default signUp;