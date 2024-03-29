import React, { Component } from "react";
import "../styles/ItemCarousel.scss";
import "../images/logo192.png";
import { connect } from "react-redux";
import ItemCard from "../components/ItemCard";

class ItemCarousel extends Component {
  render() {
    const key = Object.keys(this.props.category);
    return (
      <div className="main-container">
        <div className="carousel__category">
          <div className={"carousel__category-item"}>{key[0]}</div>
          <a src="#" alt="see all">
            See All
          </a>
        </div>
        <div className="grid-container">
          <div className="grid-item">
            <a href="#">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="angle-left"
                className="svg-inline--fa fa-angle-left fa-w-8"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
              >
                <path
                  fill="currentColor"
                  d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"
                ></path>
              </svg>
            </a>
          </div>

          {Object.keys(this.props.category).length !== 0
            ? this.props.category[key[0]].slice(0, 5).map((product) => {
                return (
                  <div id="product">
                    <ItemCard {...product} />
                  </div>
                );
              })
            : null}

          <div className="grid-item">
            <a href="#">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="angle-right"
                className="svg-inline--fa fa-angle-right fa-w-8"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
              >
                <path
                  fill="currentColor"
                  d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps)(ItemCarousel);
