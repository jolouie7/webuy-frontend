import React, { Component } from "react";
import { connect } from "react-redux";
import signIn from "../actions/signIn";
import { Link } from "react-router-dom";
import "../styles/SignInStyle.scss";

class SignIn extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className="signin__container">
        <div className="inner__container">
          <form
            onSubmit={e => {
              this.props.signIn(e, this.state, this.props.history);
            }}
          >
            <h1>Sign In</h1>

            <label>Username</label>
            <br />
            <input
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <br />

            <label>Password</label>
            <br />
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <br />

            <input type="submit" value="Login" />
          </form>
          <div className="signup__container">
            <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signIn: (e, userInfo, history) => dispatch(signIn(e, userInfo, history))
});

export default connect(null, mapDispatchToProps)(SignIn);