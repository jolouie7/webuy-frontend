import React, { Component } from "react";
import { connect } from "react-redux";
// import { userPostFetch } from "../redux/actions";
import signUp from "../actions/signUp";
import "../styles/SignUpStyle.css"

class Signup extends Component {
  state = {
    name: "",
    username: "",
    bio: "",
    password: "",
    password_confirmation: "",
    email: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  // handleSubmit = event => {
  //   event.preventDefault();
  //   console.log("handle submit")
  //   this.props.signUp(this.state);
  // };

  render() {
    // console.log(this.props)
    return (
      <div className="container">
        <form
          className="form__container"
          onSubmit={e => {
            this.props.signUp(e, this.state, this.props.history);
          }}
        >
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
            <label>Bio</label>
            <textarea
              name="bio"
              value={this.state.bio}
              onChange={this.handleChange}
              rows="2"
              cols="10"
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
          <div className="form__signup">
            <input type="submit" value="SignUp" />
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signUp: (e, userInfo, history) => dispatch(signUp(e, userInfo, history))
});

export default connect(null, mapDispatchToProps)(Signup);


// --------------------------------------------------------------- Where my code begins ---------------------------------------------------------------

// import React, { Component } from 'react'
// import { connect } from "react-redux"
// import signUp from "../actions/signUp";

// class SignUp extends Component {
//   state = {
//     name: "",
//     username: "",
//     bio: "",
//     password: "",
//     password_confirmation: ""
//   }

//   handleChange = (e) => {
//     this.setState({[e.target.name]: e.target.value})
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("from handle submit")
//     // -------------- What does these do? --------------
//     // this.props.userPostFetch(this.state);
//     // this.props.signUp(this.state);
//   }

//   render() {
//     return (
//       <div>
//         <form
//           onSubmit={e => {
//             this.props.signUp(e, this.state, this.props.history);
//           }}
//         >
//           <div>
//             <label>Name</label>
//             <input type="text" name="name" onChange={this.handleChange} value={this.state.name}/>
//           </div>
//           <div>
//             <label>Username</label>
//             <input type="text" name="username" onChange={this.handleChange} value={this.state.username}/>
//           </div>
//           <div>
//             <label>Bio</label>
//             <input type="text" name="bio" onChange={this.handleChange} value={this.state.bio}/>
//           </div>
//           <div>
//             <label>Password</label>
//             <input type="password" name="password" onChange={this.handleChange} value={this.state.password}/>
//           </div>
//           <div>
//             <label>Password Confirmation</label>
//             <input type="password" name="password_confirmation" onChange={this.handleChange} value={this.state.password_confirmation}/>
//           </div>
//           <div>
//             <input type="submit" />
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     signUp: (e, userInfo, history) => { dispatch(signUp(e, userInfo, history)); }
//   }
// }

// export default connect(null, mapDispatchToProps)(SignUp);

// --------------------------------------------------------------- Where my code ends ---------------------------------------------------------------