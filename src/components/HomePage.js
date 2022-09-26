import React, { Component } from "react";
import { connect } from "react-redux";
import ItemCarousel from "./ItemCarousel";
import ItemDeals from "../containers/ItemDeals";

class HomePage extends Component {
  render() {
    return (
      <div>
        <div id="main-page">
          <ItemDeals />
          {this.props.categories.slice(0, 4).map((category) => (
            <ItemCarousel category={category} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
  categories: state.categories,
});

export default connect(mapStateToProps)(HomePage);
