import React, { Component } from "react";
import { connect } from "react-redux";
// import { userPostFetch } from "../redux/actions";
import signUp from "../actions/signUp";

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

  handleSubmit = event => {
    event.preventDefault();
    console.log("handle submit")
    this.props.signUp(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Sign Up For An Account</h1>

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

        <label>Password Confirmation</label>
        <input
          type="password"
          name="password_confirmation"
          placeholder="Password_confirmation"
          value={this.state.password_confirmation}
          onChange={this.handleChange}
        />
        <br />

        <label>Name</label>
        <input
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <br />

        <label>Bio</label>
        <textarea
          name="bio"
          placeholder="Bio"
          value={this.state.bio}
          onChange={this.handleChange}
        />
        <br />

        <label>Email</label>
        <input
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <br />

        <input type="submit" />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signUp: userInfo => dispatch(signUp(userInfo))
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