import React, { Component } from 'react'
import {Link} from "react-router-dom"
import "../styles/ItemCard.scss"

export class ItemCard extends Component {
  render() {
    return (
      <div>
        <div className="grid-item">
          <Link
            key={this.props.id}
            to={`/products/${this.props.id}`}
            style={{ textDecoration: "none" }}
          >
            <img src={this.props.image} alt="product" />
            <p className={"item-card__name"}>{this.props.name}</p>
            <p className={"item-card__price"}>${this.props.price}</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default ItemCard
