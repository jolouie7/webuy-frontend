import React, { Component } from 'react'
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import AddItemToCart from "../actions/AddItemToCart"

// Find out which product was clicked and display there info
export class ProductPage extends Component {
    handleClick = (item) => {
      // Get the existing data
      let existing = localStorage.getItem("cartArray");
      // If no existing data, create an array
      // Otherwise, convert the localStorage string to an array
      existing = existing === null ? [] : JSON.parse(existing);
      // Add new data to localStorage Array
      existing.push(item);
      // Save back to localStorage
      localStorage.setItem("cartArray", JSON.stringify(existing))

      // const jason = JSON.parse(localStorage.getItem("cartArray");
      // const cartArray = [...jason];

      // uncomment this code
      // cartArray.push(item);
      // console.log(cartArray);
      // localStorage.setItem("cartArray", [JSON.parse(localStorage.getItem("cartArray"), JSON.stringify(cartArray)]); // might need to change item_id into int
      // const x = JSON.parse(localStorage.getItem("cartArray"));
      // console.log(x)
    }
  render() {
    // console.log((this.props.products))
    // console.log((typeof this.props.match.params.id)) // gives ID

    // const product = {(Object.keys(this.props.products).length !== 0) ? (this.props.products).map(
    //   (item => console.log(item))) : null}
    // ;

    const item = this.props.products.find(
      // product => product.id == parseInt(this.props.match.params.id)
      product => product.id == this.props.match.params.id
    );
    return (
      <div>
        {/* side imgs */}
        <img src="/logo192.png" />
        <img src="/logo192.png" />
        <img src="/logo192.png" />
        {/* main img */}
        <img src="/logo192.png" />
        {Object.keys(this.props.products).length !== 0 ? (
          <div className="asd">
            <h1>{item.name}</h1>
            <div>${item.price}</div>
            <div>Rating: {item.rating}</div>
            <div>Item Reviews</div>
            <div>Description: {item.description}</div>
            <div>Different Item Colors</div>
            <div>Order Box</div>
            <div>Quantity: {item.quantity}</div>
            <div>Color</div>
            <div>Item Price: {item.price}</div>
            <div>Postage: FREE</div>
            {/* <button onClick={console.log("hit", () => this.props.addToCart(item))}>Add To Cart</button> */}
            {/* make this an anonymous function, so it won't get fired when mounted */}
            <button onClick={() => {this.handleClick(item)}}>Add To Cart</button>
            {/* <button onClick={console.log("hit 47")}>Add To Cart</button> */}
            <button>Buy Now</button>
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  products: state.products
});

const mapDispatchToProps = dispatch => ({
  // addToCart: item => dispatch(AddItemToCart(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);