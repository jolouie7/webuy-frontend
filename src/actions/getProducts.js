const getProducts = () => {
  return (dispatch) => {
    return fetch("https://webuy-backend.herokuapp.com/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.message) {
          localStorage.removeItem("token");
        } else {
          dispatch(storeProducts(data.products));
        }
      });
  };
};

const storeProducts = (productObj) => ({
  type: "GET_ALL_PRODUCTS",
  payload: productObj,
});

export default getProducts;
