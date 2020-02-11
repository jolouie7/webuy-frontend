import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import { connect } from "react-redux";
import { compose } from "redux";

class CheckoutForm extends Component {
  state = {
    complete: false
  };

  // check to see if theres a currentUser
  submit = async () => {
    // create an order POST /orders
    let data = await fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        // token: token.id,
        // orderId: this.props.orderId // project specfic
        user_id: this.props.currentUser.id,
        shipped: false,
        total: this.state.total,
        paid: true,
        tracking_number: Math.floor(Math.random() * 100000000000),
        complete: true
      })
    });

    let { token } = await this.props.stripe.createToken({ name: "Name" });
    let response = await fetch("http://localhost:3000/charges", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        token: token.id,
        orderId: this.props.orderId, // project specfic
        // user_id:
        // shipped:
        // total:
        // paid:
        // tracking_number:
        // complete:
      })
    });

    if (response.ok) {
      this.setState({
        complete: true
      });
    };
    // this.props.payForItems();
  };

  render() {
    console.log(this.props.currentUser);

    if (this.state.complete) return <h1>Purchase Complete!</h1>;

    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button onClick={this.submit}>
          Purchase
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

// export default injectStripe(CheckoutForm);
// export default injectStripe(CheckoutForm);
export default compose(injectStripe, connect(mapStateToProps))(CheckoutForm);
