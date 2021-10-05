import React, { Component } from 'react'
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "../components/CheckoutForm";
import "../styles/CheckoutProcess1Style.scss"

export class CheckoutProcess1 extends Component {
  render() {
    return (
      <div>
        <StripeProvider
          apiKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
        >
          <div className="main__container">
            <h1>Check Out</h1>
            <div className="checkout__form">
              <Elements>
                <CheckoutForm />
              </Elements>
            </div>
          </div>
        </StripeProvider>
      </div>
    );
  }
}

export default CheckoutProcess1;