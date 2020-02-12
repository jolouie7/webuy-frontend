const getProducts = () => {
  return dispatch => {
    // const token = localStorage.token;
      return fetch("http://localhost:3000/products", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.message) {
            // An error will occur if the token is invalid.
            // If this happens, you may want to remove the invalid token.
            // console.log("remove token");
            localStorage.removeItem("token");
          } else {
            // console.log(data)
            // console.log(data.products) // an array of objs
            dispatch(storeProducts(data.products))
            // dispatch(loginUser(data.product.data.attributes));
          }
        });
  };
};

// move to action file
const storeProducts = productObj => ({
  type: "GET_ALL_PRODUCTS",
  // payload: userObj.data.attributes
  payload: productObj
});

export default getProducts;
