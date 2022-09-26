const getCategories = () => {
  return (dispatch) => {
    return fetch("https://webuy-backend.herokuapp.com/categories", {
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
          const array = [];
          for (let i = 0; i < data.length; i++) {
            let obj = {};
            obj[data[i].name] = data[i].products;
            array.push(obj);
          }
          dispatch(storeCategories(array));
        }
      });
  };
};

const storeCategories = (categoryObj) => ({
  type: "GET_ALL_CATEGORIES",
  payload: categoryObj,
});

export default getCategories;
