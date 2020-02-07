import React, { Component } from 'react'
import { connect } from "react-redux";

export class ProductPage extends Component {
  render() {
    // console.log((this.props.categories[0]))
    return (
      <div>
        {/* <p>{this.props.categories.map(category => category.name)}</p> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories
});

export default connect(mapStateToProps)(ProductPage);
