import React, { Component } from 'react'

export class Cart extends Component {
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
    return (
      <div>
        Cart
      </div>
    )
  }
}

export default Cart