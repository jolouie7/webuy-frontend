const signUp = (e, userInfo) => {
  e.preventDefault();
  return dispatch => {
    console.log(userInfo)
    return fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        
          name: userInfo.name,
          username: userInfo.username,
          bio: userInfo.bio,
          password: userInfo.password,
          password_confirmation: userInfo.password_confirmation
      })
    })
    .then(res => res.json())
    .then(console.log);
  }
  // console.log(userInfo.name);
  // console.log(userInfo.username);
  // console.log(userInfo.bio);
  // console.log(userInfo.password);
  // console.log(userInfo.passwordConfirmation);
}

export default signUp;