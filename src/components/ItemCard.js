import React, { Component } from 'react'

export class ItemCard extends Component {
  render() {
    return (
      <div>
        <div className="grid-item">
          <a href="#">
            <img src="logo512.png" alt="product" />
            <p>{this.props.name}</p>
            <p>${this.props.price}</p>
          </a>
        </div>
      </div>
    );
  }
}

export default ItemCard
