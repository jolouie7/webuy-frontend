import React, { Component } from 'react'
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// Find out which product was clicked and display there info
export class ProductPage extends Component {
  // const key = Object.keys(this.props.category)
  render() {
    console.log((this.props.products))
    console.log((typeof this.props.match.params.id)) // gives ID

    // const product = {(Object.keys(this.props.products).length !== 0) ? (this.props.products).map(
    //   (item => console.log(item))) : null}
    // ;

    const item = this.props.products.find(
      // product => product.id == parseInt(this.props.match.params.id)
      product => product.id == this.props.match.params.id
    );

    const quantity = Math.floor(Math.random() * 11);
    return (
      <div>
        {/* side imgs */}
        <img src="/logo192.png" />
        <img src="/logo192.png" />
        <img src="/logo192.png" />
        {/* main img */}
        <img src="/logo192.png" />
        {Object.keys(this.props.products).length !== 0 ? (
          <div>
            <h1>{item.name}</h1>
            <div>${item.price}</div>
            <div>Rating: {item.rating}</div>
            <div>Item Reviews</div>
            <div>Description: {item.description}</div>
            <div>Different Item Colors</div>
            <div>Quantity: {quantity}</div>
            <div>Order Box</div>
            <div>Quantity: {quantity}</div>
            <div>Color</div>
            <div>Item Price: {item.price}</div>
            <div>Postage</div>
            <Link to="/cart_items">
              <button>Add To Cart</button>
            </Link>
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

export default connect(mapStateToProps)(ProductPage);
