const logoutUser = (history) => {
  history.push("/signin")
  return {type: "LOGOUT_USER"}
};

export default logoutUser;