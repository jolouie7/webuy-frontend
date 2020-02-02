import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { connect } from "react-redux";
// import NavBar from "./containers/navBar";
import SignUp from "./components/signUp";
import SignIn from "./components/signIn";
import HomePage from "./components/HomePage";
import getUser from "./actions/getUser"

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.props.getUser()
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

  render() {
    return (
      <Router>
        <div>
          {/* <NavBar /> */}
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signin" component={SignIn} />
          </Switch>
          {/* <button onClick={this.handleClick}>Post</button> */}
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(getUser())
});

export default connect(null, mapDispatchToProps)(App);