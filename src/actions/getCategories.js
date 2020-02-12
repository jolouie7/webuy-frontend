const getCategories = () => {
  return dispatch => {
    // const token = localStorage.token;
      return fetch("http://localhost:3000/categories", {
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
            // console.log(data);
            // array of category products
            // console.log(data.map(item => item.products));
            const array = [];
            for( let i = 0; i < data.length; i++){
              let obj = {};
              obj[data[i].name] = data[i].products
              array.push(obj)
            }

            // console.log(array)

            dispatch(storeCategories(array));
            // dispatch(loginUser(data.product.data.attributes));
          }
        });
  };
};

// move to action file
const storeCategories = categoryObj => ({
  type: "GET_ALL_CATEGORIES",
  // payload: userObj.data.attributes
  payload: categoryObj
});

export default getCategories;
