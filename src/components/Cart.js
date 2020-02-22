import React, { Component } from "react";
import { connect } from "react-redux";
import AddTotal from "../actions/AddTotal";
import SubtractTotal from "../actions/SubtractTotal";
import createHistory from "history/createBrowserHistory";
import "../styles/CartStyle.scss";

export class Cart extends Component {
  state = {
    stateTotal: 0
  };
  componentDidMount() {
    //check to see if this array is empty
    if (JSON.parse(localStorage.getItem("cartArray").length !== 0)) {
      let itemArr = JSON.parse(localStorage.getItem("cartArray")).map(
        item => item.price
      );
      //add up amounts in total
      let totalAmount = 0;
      for (let i of itemArr) {
        totalAmount = parseInt(i) + totalAmount;
      }
      this.setState({ stateTotal: totalAmount });
      this.props.addTotal(totalAmount);
    } else {
      return (
        null
      );
    }
  }

  handleClick = e => {
    const hist = createHistory();
    // ------------------- Deleting an item from localstorage ------------------------
    const cartArray = JSON.parse(localStorage.getItem("cartArray"));
    let product_id = e.target.value;
    // remove that obj from the array in local storage
    // -------------- ISSUE: Since I am find the product based on id,
    // -------------- if 2 products were to have the same id, they would have the same idx
    // FIX: if product with the same id, increase the quantity when product is added the cart
    const idx = cartArray.findIndex(i => i.id == product_id);
    const newCartArray = cartArray.filter(item => item !== cartArray[idx]);
    // store the array back into localstorage
    localStorage.setItem("cartArray", JSON.stringify(newCartArray));

    //subtract from total
    let deletedItemPrice = cartArray[idx].price;
    this.setState(prevState => {
      return { stateTotal: prevState.stateTotal - deletedItemPrice };
    });
    this.props.subtractTotal(this.state.stateTotal);

    // this.props.history.push("/cart_items");
    this.forceUpdate();
    hist.go(0);
  };

  handleCheckout = () => {
    this.props.history.push("/checkout");
  };

  render() {
    let product = localStorage.getItem("cartArray");
    product = JSON.parse(product);

    return (
      <div className="main__container">
        <h1 className="cart__label">Your Cart</h1>
        {localStorage.getItem("cartArray")
          ? product.map((item, id) => (
              <div className="cart__item">
                <h1 className="item__name">{item.name}</h1>
                <h1 className="item__price">${item.price}</h1>
                <img className="item__image" src={item.image}></img>
                <button>+</button>
                <h3 className="item__quantity">Quantity: {item.quantity}</h3>
                <button>-</button>
                <button
                  className="item__delete"
                  onClick={this.handleClick}
                  value={item.id}
                >
                  Delete
                </button>
              </div>
            ))
          : null}
        <br />
        <h1 className="cart__total">Total: ${this.props.total}</h1>
        <button className="cart__checkout" onClick={this.handleCheckout}>
          Checkout
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  total: state.total
});

const mapDispatchToProps = dispatch => ({
  addTotal: amount => dispatch(AddTotal(amount)),
  subtractTotal: amount => dispatch(SubtractTotal(amount))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
