import React, { Component } from 'react'
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import "../styles/ProductPageStyle.scss"

export class ProductPage extends Component {
  componentDidMount() {
    // scroll up after clicking on a product
    // https://stackoverflow.com/questions/33188994/scroll-to-the-top-of-the-page-after-render-in-react-js
    window.scrollTo(0, 0)
  }

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
  }
  render() {
    const item = this.props.products.find(
      product => product.id == this.props.match.params.id
    );
    return (
      <div className="main__container">
        {Object.keys(this.props.products).length !== 0 ? (
          <div className="item__container">
            <img src={item.image} alt="product" />
            <div>
              <div className="product-details__container">
                <h1 className="product__name">{item.name}</h1>
                <div className="product__price">${item.price}</div>
                <div className="product__rating">Rating: {item.rating}</div>
                <div className="product__reviews">Item Reviews</div>
                <div className="product__description">
                  Description: {item.description}
                </div>
                <div className="product__colors">Different Item Colors</div>
                <div className="product__quantity">
                  Quantity: {item.quantity}
                </div>
              </div>
              <div className="order-box__container">
                {/* --------------------Do Not delete--------------------- */}
                {/* <div className="product__order-box">Order Box</div> */}
                {/* <div className="product__quantity">Quantity: {item.quantity}</div>
              <div className="product__color">Color</div>
              <div className="product__price">Item Price: {item.price}</div>
              <div>Postage: FREE</div> */}
                {/* --------------------Do Not delete--------------------- */}
              </div>
              <button
                onClick={() => {
                  this.handleClick(item);
                }}
              >
                Add To Cart
              </button>
            </div>
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
