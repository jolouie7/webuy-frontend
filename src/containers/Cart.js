import React, { Component } from 'react'

export class Cart extends Component {
  handleClick = (e) => {
    // ------------------- Deleting an item from localstorage ------------------------
    // get the array from localstorage, change the datatype from a string to a json obj
    const cartArray = JSON.parse(localStorage.getItem("cartArray"));
    // loop through the array and find the obj with a id that matches the one that the user clicked delete for
    let product_id = e.target.value
    // remove that obj from the array in local storage
    // -------------- ISSUE: Since I am find the product based on id,
    // -------------- if 2 products were to have the same id, they would have the same idx
    // FIX: if product with the same id, increase the quantity when product is added the cart
    const idx = cartArray.findIndex(i => i.id == product_id)
    // console.log(cartArray[idx]);
    const newCartArray = cartArray.filter(
      item => item !== cartArray[idx]
    );
    console.log(newCartArray);
    // store the array back into localstorage
    localStorage.setItem("cartArray", JSON.stringify(newCartArray));

    this.props.history.push("/cart_items");
  }

  render() {
    // when user clicks the add item to card button, add to localstorage
    // figure out a way to get items rendered on the cart page. Find the specfic item that the user added to cart
    // SHORT TERM SOLUTION: go through all the items in products and find the id that matches the one in localstorage,
    // render that to the cart page

    // OTHER TASKS
    // get the total of all the items in localstorage
    // get the total number of items in localstorage

    // FOR CHECKOUT
    // when the user clicks checkout make a post request to the backend,
    // store the items of a single order to the backend

    // const product = JSON.parse(localStorage.getItem("cartArray"));
    let product = localStorage.getItem("cartArray");
    // console.log(JSON.parse(product))
    product = JSON.parse(product);
    // console.log(product[0])

    return (
      <div>
        <h1>Your Cart</h1>
        {localStorage.getItem("cartArray") ? product.map((item, id) =>
        <div>
          <h1>{item.name}</h1>
          <h1>${item.price}</h1>
          <h1>{item.image}</h1>
          <button>+</button>
          <h3>Quantity: {item.quantity}</h3>
          <button>-</button>
          <button onClick={this.handleClick} value={item.id}>Delete</button>
        </div>)
        : null}
        <br />
        <button>Checkout</button>
      </div>
    )
  }
}

export default Cart