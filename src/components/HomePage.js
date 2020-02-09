import React, { Component } from 'react'
import { connect } from "react-redux";
import {Link, Route} from "react-router-dom";
import ItemCarousel from "./ItemCarousel";
// import Footer from "./Footer";
import ItemDeals from "../containers/ItemDeals";
// import { AirlineSeatIndividualSuite } from 'material-ui-icons';
import ProductPage from "../containers/ProductPage"

class HomePage extends Component {
  render() {
    console.log(this.props.match)
    // when I refresh currentUser first is undef then has data later on
    console.log(this.props);
    return (
      <div>
        {/* { this.props.currentUser.name ? <p> Hi, {this.props.currentUser.name}</p> : <Link to="/signin">SignIn</Link> } */}
        {/* <p> Hi, {this.props.currentUser.name}</p> */}
        {/* {console.log(this.props.currentUser)} */}
        <div id="main-page">
          <ItemDeals />
          {this.props.categories.map(category => (
            <ItemCarousel category={category} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  categories: state.categories
});

export default connect(mapStateToProps)(HomePage)
