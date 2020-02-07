import React, { Component } from 'react'
// import { push, syncHistoryWithStore } from "react-router-redux";
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import {compose} from "redux";
// import NavBar from "./containers/navBar";
import SignUp from "./components/signUp";
import SignIn from "./components/signIn";
import HomePage from "./components/HomePage";
import getUser from "./actions/getUser"
import getProducts from "./actions/getProducts"
import getCategories from "./actions/getCategories"
import logout from "./actions/logout"
import NavBar from "./containers/navBar";
import SignOut from "./components/signOut"
import "./styles/App.scss"
import Footer from "./components/Footer";

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.props.getUser();
    this.props.getProducts();
    this.props.getCategories();
    // this.props.getItems(); // Get all the items from the backend, map through them and render them onto the page
  }

  // handleClick = () => {
  //   fetch("http://localhost:3000/users", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json"
  //     },
  //     body: JSON.stringify({
  //       user: {
  //         name: "willy",
  //         username: "willy1119",
  //         email: "willy111@gmail.com",
  //         bio: "I love life",
  //         password: "1Wqe93aw",
  //         password_confirmation: "1Wqe93aw"
  //       }
  //     })
  //   })
  //     .then(res => res.json())
  //     .then(data => console.log(data));
  // }

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
        {/* {Object.keys(this.props.currentUser).length !== 0 ? <NavBar /> : null} */}
        <Switch>
          <Route exact path="/" render={props => <HomePage {...props} />} />
          <Route exact path="/signup" render={props => <SignUp {...props} />} />
          <switch>
            <Route exact path="/signin" render={props => <SignIn {...props} />} />
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
  currentUser: state.currentUser
});

const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(getUser()),
  getProducts: () => dispatch(getProducts()),
  getCategories: () => dispatch(getCategories()),
  logout: (history) => dispatch(logout(history))
});

export default compose(withRouter,connect(mapStateToProps, mapDispatchToProps))(App);