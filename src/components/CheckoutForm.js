import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import { connect } from "react-redux";
import { compose } from "redux";
import "../styles/CheckoutFormStyle.scss"

class CheckoutForm extends Component {
  state = {
    complete: false
  };

  submit = async () => {
    // create an order POST /orders
    let tokenId = localStorage.getItem("token");
    let data = await fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${tokenId}`,
        Accept: "application/json"
      },
      body: JSON.stringify({
        user_id: this.props.currentUser.id,
        shipped: false,
        total: this.props.total,
        paid: true,
        tracking_number: Math.floor(Math.random() * 10000000),
        complete: true
      })
    });
    let existing = localStorage.getItem("cartArray");
    existing = existing === null ? [] : JSON.parse(existing);
    localStorage.setItem("cartArray", JSON.stringify(existing));
  };

  // check to see if theres a currentUser
  submit = async () => {
    let tokenId = localStorage.getItem("token");

    let { token } = await this.props.stripe.createToken({ name: "Name" });
    let response = await fetch("http://localhost:3000/charges", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${tokenId}`,
        Accept: "application/json"
      },
      body: JSON.stringify({
        token: token.id,
        user_id: this.props.currentUser.id,
        total: this.props.total
      })
    });

    if (response.ok) {
      this.setState({
        complete: true
      });
    }

    //reset cart
    localStorage.setItem("cartArray", JSON.stringify([]));
  };

  render() {

    if (this.state.complete) return <h1>Purchase Complete!</h1>;

    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <div className="checkout__cardElement">
          <CardElement />
        </div>
        <button onClick={this.submit}>Purchase</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  total: state.total
});

export default compose(injectStripe, connect(mapStateToProps))(CheckoutForm);
