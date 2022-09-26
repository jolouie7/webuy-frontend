const getUser = () => {
  return (dispatch) => {
    const token = localStorage.token;
    if (token) {
      return fetch("https://webuy-backend.herokuapp.com/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          if (data.message) {
            localStorage.removeItem("token");
          } else {
            dispatch(loginUser(data.user.data.attributes));
          }
        });
    }
  };
};

const loginUser = (userObj) => ({
  type: "SIGNIN_USER",
  payload: userObj,
});

export default getUser;
