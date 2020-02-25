import React, { Component } from "react";
import {
  // BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import SignUp from "./components/signUp";
import SignIn from "./components/signIn";
import HomePage from "./components/HomePage";
import getUser from "./actions/getUser";
import getProducts from "./actions/getProducts";
import getCategories from "./actions/getCategories";
import logout from "./actions/logout";
import NavBar from "./containers/navBar";
// import SignOut from "./components/signOut";
import "./styles/App.scss";
import Footer from "./components/Footer";
import ProductPage from "./containers/ProductPage";
import ItemCarousel from "./components/ItemCarousel";
import Cart from "./components/Cart";
import CheckoutProcess1 from "./containers/CheckoutProcess1";

class App extends Component {

  componentDidMount() {
    this.props.getUser();
    this.props.getProducts();
    this.props.getCategories();

    //Adds a new cart for a user in localStorage if they don't have one yet
    let existing = localStorage.getItem("cartArray");
    existing = existing === null ? [] : JSON.parse(existing);
    localStorage.setItem("cartArray", JSON.stringify(existing));
  }

  render() {
    return (
      <div>
        {<NavBar />}
        <Switch>
          <Route exact path="/" render={props => <HomePage {...props} />} />
          <Route
            exact
            path={`/products/:id`}
            render={routerProps => <ProductPage {...routerProps} />}
          />
          <Route exact path="/signup" render={props => <SignUp {...props} />} />
          <Route
            exact
            path="/products"
            render={props => <ItemCarousel {...props} />}
          />
          <Route
            exact
            path="/cart_items"
            render={props => <Cart {...props} />}
          />
          <Route
            exact
            path="/checkout"
            render={props => <CheckoutProcess1 {...props} />}
          />
          <Route exact path="/signin" render={props => <SignIn {...props} />} />
        </Switch>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  categories: state.categories
});

const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(getUser()),
  getProducts: () => dispatch(getProducts()),
  getCategories: () => dispatch(getCategories()),
  logout: history => dispatch(logout(history))
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(App);
