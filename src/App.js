import React, { Component } from "react";
// import { push, syncHistoryWithStore } from "react-router-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
// import NavBar from "./containers/navBar";
import SignUp from "./components/signUp";
import SignIn from "./components/signIn";
import HomePage from "./components/HomePage";
import getUser from "./actions/getUser";
import getProducts from "./actions/getProducts";
import getCategories from "./actions/getCategories";
import logout from "./actions/logout";
import NavBar from "./containers/navBar";
import SignOut from "./components/signOut";
import "./styles/App.scss";
import Footer from "./components/Footer";
import ProductPage from "./containers/ProductPage";
import ItemCarousel from "./components/ItemCarousel";
import Cart from "./components/Cart";
import CheckoutProcess1 from "./containers/CheckoutProcess1";

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.props.getUser();
    this.props.getProducts();
    this.props.getCategories();
    // this.props.getItems(); // Get all the items from the backend, map through them and render them onto the page

    //Adds a new cart for a user in localStorage if they don't have one yet
    let existing = localStorage.getItem("cartArray");
    existing = existing === null ? [] : JSON.parse(existing);
    localStorage.setItem("cartArray", JSON.stringify(existing));
  }

  // -------------------------This handleClick is for logging out. Maybe change the name of this event handler------------------
  // handleClick = event => {
  //   event.preventDefault();
  //   // Remove the token from localStorage
  //   localStorage.removeItem("token");
  //   // Remove the user object from the Redux store
  //   // debugger
  //   this.props.logout(this.props.history);
  //   // console.log(this.props.history)
  // };

  render() {
    return (
      <div>
        {/* <Route render={props => <NavBar {...props}/>} /> */}
        {<NavBar />}
        {/* {<ProductPage />} */}
        {/* {Object.keys(this.props.currentUser).length !== 0 ? <NavBar /> : null} */}
        <Switch>
          <Route exact path="/" render={props => <HomePage {...props} />} />
          <Route
            exact
            path={`/products/:id`}
            render={routerProps => <ProductPage {...routerProps} />}
          />
          {/* <Route exact path="/" render={routerProps => <HomePage {...routerProps} />} /> */}
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
          <switch>
            <Route
              exact
              path="/signin"
              render={props => <SignIn {...props} />}
            />
          </switch>
        </Switch>
        {/* when a user is logged in, the footer will show, else it won't show */}
        {/* {Object.keys(this.props.currentUser).length !== 0 ? <Footer /> : null} */}
        <Footer />
        {/* Place this code below somewhere instead of App.js */}
        {/* {Object.keys(this.props.currentUser).length !== 0 ? (
          <button onClick={this.handleClick}>Log Out</button>
        ) : null} */}
        {/* <SignOut onClick={this.handleClick}/> */}
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
