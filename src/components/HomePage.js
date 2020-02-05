import React, { Component } from 'react'
import { connect } from "react-redux";
import {Link} from "react-router-dom";
import ItemCarousel from "./ItemCarousel";
// import Footer from "./Footer";
import ItemDeals from "../containers/ItemDeals";

class HomePage extends Component {
  render() {
    // when I refresh currentUser first is undef then has data later on
    console.log(this.props.currentUser);
    return (
      <div>
        { this.props.currentUser.name ? <p> Hi, {this.props.currentUser.name}</p> : <Link to="/signin">SignIn</Link> }
        {/* <p> Hi, {this.props.currentUser.name}</p> */}
        {/* {console.log(this.props.currentUser)} */}
                <div id="main-page">
          <ItemDeals />
          <ItemCarousel />
          <hr />
          <ItemCarousel />
          <hr />
          <ItemCarousel />
          <hr />
          <ItemCarousel />
          
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export default connect(mapStateToProps)(HomePage)
