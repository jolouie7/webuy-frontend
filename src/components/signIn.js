import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../actions/signIn";

class SignIn extends Component {
  state = {
    username: "",
    password: "",
    password_confirmation: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.signIn(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Login</h1>

        <label>Username</label>
        <input
          name="username"
          placeholder="Username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <br />

        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <br />

        <label>Password Conformation</label>
        <input
          type="password"
          name="password_confirmation"
          placeholder="Password Confirmation"
          value={this.state.password_confirmation}
          onChange={this.handleChange}
        />
        <br />

        <input type="submit" />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signIn: userInfo => dispatch(signIn(userInfo))
});

export default connect(null, mapDispatchToProps)(SignIn);


// -------------------------- my code --------------------------
// import React, { Component } from 'react'

// class signIn extends Component {
//   render() {
//     return (
//       <div>
//         from sign in
//       </div>
//     )
//   }
// }

// export default signIn
// -------------------------- my code --------------------------