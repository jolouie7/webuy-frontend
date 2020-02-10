import React, { Component } from "react";
import { connect } from "react-redux";
import signIn from "../actions/signIn";
import { Link } from "react-router-dom";

class SignIn extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   this.props.signIn(e, this.state, this.props.history);
  // };

  render() {
    // console.log(this.props)
    return (
      <div>
        <form
          onSubmit={e => {
            this.props.signIn(e, this.state, this.props.history);
          }}
        >
          <h1>Sign In</h1>

          <label>Username</label>
          <input
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <br />

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <br />

          <input type="submit" value="Login" />
        </form>
        <Link to="/signup">Sign Up</Link>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signIn: (e, userInfo, history) => dispatch(signIn(e, userInfo, history))
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