import React, { Component } from "react";
import { connect } from "react-redux";
import signUp from "../actions/signUp";
import "../styles/SignUpStyle.scss";

class Signup extends Component {
  state = {
    name: "",
    username: "",
    password: "",
    password_confirmation: "",
    email: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className="container">
        <form
          className="form__container"
          onSubmit={(e) => {
            this.props.signUp(e, this.state, this.props.history);
          }}
        >
          <div className="form__input-fields">
            <h1 className="content-center">Create Account</h1>

            <div className="form__group">
              <label>Username</label>

              <input
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
              <br />
            </div>

            <div className="form__group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <br />
            </div>

            <div className="form__group">
              <label>Password Confirmation</label>
              <input
                type="password"
                name="password_confirmation"
                value={this.state.password_confirmation}
                onChange={this.handleChange}
              />
              <br />
            </div>

            <div className="form__group">
              <label>Name</label>
              <input
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
              <br />
            </div>

            <div className="form__group">
              <label>Email</label>
              <input
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <br />
            </div>
          </div>
          <div className="form__signup">
            <input type="submit" value="SignUp" />
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUp: (e, userInfo, history) => dispatch(signUp(e, userInfo, history)),
});

export default connect(null, mapDispatchToProps)(Signup);
