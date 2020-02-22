import React, { Component } from 'react'
import mainLogo from "../../src/images/logo.png"
import "../styles/NavBarStyle.scss"
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import { compose } from "redux";
import logout from "../actions/logout";

class NavBar extends Component {

  handleClick = event => {
    event.preventDefault();
    // Remove the token from localStorage
    localStorage.removeItem("token");
    // Remove the user object from the Redux store
    this.props.logout(this.props.history);
  };

  render() {
    return (
      <div className="navbar__container">
        <div className="navbar__img">
          <Link to={`/`}>
            <img src={mainLogo} alt="main logo" />
          </Link>
        </div>
        <div className="navbar__search">
          <input type="text" name="search"/>
        </div>
        <div className="navbar__buttons">
          <div className="navbar__login">
            {this.props.currentUser.name ? (
              <button onClick={this.handleClick} className={"navbar__button"}>
                LOGOUT
              </button>
            ) : (
              <Link to="/signin">
                <button className={"navbar__button"}>SIGN IN</button>
              </Link>
            )}
          </div>
          <div className="navbar__orders">
            <button href="#" className={"navbar__button"}>
              MY ORDERS
            </button>
          </div>
          <div className="navbar__cart">
            <Link to="/cart_items">
              <button href="#" className={"navbar__button"}>
                CART
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: history => dispatch(logout(history))
})

export default compose(withRouter,connect(mapStateToProps, mapDispatchToProps))(NavBar);