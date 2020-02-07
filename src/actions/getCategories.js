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
            // array of category products
            // console.log(data.map(item => item.products));
            const array = [];
            for( let i = 0; i < data.length; i++){
              let obj = {};
              obj[data[i].name] = data[i].products
              array.push(obj)
            }
            // const categoryProducts = data.map(item => item.name)
            // category names
            // console.log(data.map(item => item.name));
            // const categoryNames = data.map(item => item.name)
            // console.log(categoryNames)
            
            // for(let name of categoryNames) {
            //   array.push({
            //     [name]: categoryProducts
            //   });
            // }
            console.log(array)
            // console.log(data.data.map(category => category.attributes.name));
            // console.log(data.categories);
            // dispatch(storeCategories(data.data.map(category => category.attributes.name))); // gives me all my categories
            // dispatch(storeCategories(data.data.forEach(category => category.attributes.name))); // gives me all my categories
            dispatch(storeCategories(array));
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
