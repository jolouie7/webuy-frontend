import React from 'react';
// import "../images/logo192.png";
import "../styles/ItemDealsStyle.scss";
import "../images/arrow-right-solid.svg"

export default function ItemDeals() {
  return (
    <div className="item-deal__container">
      <div className="item-deal__title">
        <h1>Today's Deal Get 20% off</h1>
        <h1>All Beauty Products!</h1>
      </div>

      <div className="item-deal__group">
        <div className="grid-item">
          <h6>Selected For You</h6>
          <img
            src="https://images.unsplash.com/photo-1577741314755-048d8525d31e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
            alt="selected item for you"
          />
          {/* <img src="" alt="select arrow" /> */}
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="arrow-right"
            className="svg-inline--fa fa-arrow-right fa-w-14"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <a href="#" cursor="pointer">
              <path
                fill="currentColor"
                d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
              ></path>
            </a>
          </svg>
        </div>
        <div className="grid-item">
          <h6>Todays Features</h6>
          <img
            src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80"
            alt="todays feature items"
          />
          {/* <img src="#" alt="select arrow" /> */}
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="arrow-right"
            className="svg-inline--fa fa-arrow-right fa-w-14"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <a href="#" cursor="pointer">
              <path
                fill="currentColor"
                d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
              ></path>
            </a>
          </svg>
        </div>
        <div className="grid-item">
          <h6>Gifts</h6>
          <img
            src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1624&q=80"
            alt="gifts"
          />
          {/* <img src="#" alt="select arrow" /> */}

          {/* <img src="#" /> */}
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="arrow-right"
            className="svg-inline--fa fa-arrow-right fa-w-14"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <a href="#" cursor="pointer">
              <path
                fill="currentColor"
                d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
              ></path>
            </a>
          </svg>
        </div>
      </div>
    </div>
  );
}
