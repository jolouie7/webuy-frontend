const getProducts = () => {
  return dispatch => {
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
            localStorage.removeItem("token");
          } else {
            dispatch(storeProducts(data.products))
          }
        });
  };
};

// move to action file
const storeProducts = productObj => ({
  type: "GET_ALL_PRODUCTS",
  payload: productObj
});

export default getProducts;
