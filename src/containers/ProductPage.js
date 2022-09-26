import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/ProductPageStyle.scss";

export class ProductPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
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
    localStorage.setItem("cartArray", JSON.stringify(existing));
  };
  render() {
    const item = this.props.products.find(
      (product) => product.id == this.props.match.params.id
    );
    return (
      <div className="main__container">
        {Object.keys(this.props.products).length !== 0 ? (
          <div className="item__container">
            <img src={item.image} alt="product" />
            <div>
              <div className="product-details__container">
                <h1 className="product__name product__feature">{item.name}</h1>
                <div className="product__price product__feature">
                  ${item.price}
                </div>
                <div className="product__rating product__feature">
                  Rating: {item.rating}
                </div>
                <div className="product__reviews product__feature">
                  Item Reviews
                </div>
                <div className="product__description product__feature">
                  Description: {item.description}
                </div>
                <div className="product__colors product__feature">
                  Different Item Colors
                </div>
                <div className="product__quantity product__feature">
                  Quantity: {item.quantity}
                </div>
              </div>
              <div className="order-box__container"></div>
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

const mapStateToProps = (state) => ({
  categories: state.categories,
  products: state.products,
});

export default connect(mapStateToProps)(ProductPage);
