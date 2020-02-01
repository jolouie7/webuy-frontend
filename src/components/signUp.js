import React, { Component } from 'react'
import { connect } from "react-redux"
import signUp from "../actions/signUp";

class SignUp extends Component {
  state = {
    name: "",
    username: "",
    bio: "",
    password: "",
    password_confirmation: ""
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("from handle submit")
  }

  render() {
    return (
      <div>
        <form
          onSubmit={e => {
            this.props.signUp(e, this.state);
          }}
        >
          <div>
            <label>Name</label>
            <input type="text" name="name" onChange={this.handleChange} value={this.state.name}/>
          </div>
          <div>
            <label>Username</label>
            <input type="text" name="username" onChange={this.handleChange} value={this.state.username}/>
          </div>
          <div>
            <label>Bio</label>
            <input type="text" name="bio" onChange={this.handleChange} value={this.state.bio}/>
          </div>
          <div>
            <label>Password</label>
            <input type="password" name="password" onChange={this.handleChange} value={this.state.password}/>
          </div>
          <div>
            <label>Password Confirmation</label>
            <input type="password" name="password_confirmation" onChange={this.handleChange} value={this.state.password_confirmation}/>
          </div>
          <div>
            <input type="submit" />
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signUp: (e, userInfo) => { dispatch(signUp(e, userInfo)) }
  }
}

export default connect(null, mapDispatchToProps)(SignUp);