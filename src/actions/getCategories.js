const getCategories = () => {
  return dispatch => {
    const token = localStorage.token;
    if (token) {
      return fetch("http://localhost:3000/categories", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`
        }
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.message) {
            // An error will occur if the token is invalid.
            // If this happens, you may want to remove the invalid token.
            console.log("remove token");
            localStorage.removeItem("token");
          } else {
            console.log(data);
            // console.log(data.data.map(category => category.attributes.name));
            // console.log(data.categories);
            // dispatch(storeCategories(data.data.map(category => category.attributes.name))); // gives me all my categories
            // dispatch(storeCategories(data.data.forEach(category => category.attributes.name))); // gives me all my categories
            // dispatch(loginUser(data.product.data.attributes));
          }
        });
    }
  };
};

// move to action file
const storeCategories = categoryObj => ({
  type: "GET_ALL_CATEGORIES",
  // payload: userObj.data.attributes
  payload: categoryObj
});

export default getCategories;
