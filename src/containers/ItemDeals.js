import React from 'react';
// import "../images/logo192.png";
import "../styles/ItemDealsStyle.scss";

export default function ItemDeals() {
  return (
    <div className="item-deal__container">
      <div className="item-deal__title">
        <h1>Today's Deal Get 20% off</h1>
        <h1>All Beauty Products!</h1>
      </div>

      <div>
        <div>
          <h6>Selected For You</h6>
          <img src="logo192.png" alt="selected item for you" />
          <img src="#" alt="select arrow" />
        </div>
        <div>
          <h6>Todays Features</h6>
          <img src="logo192.png" alt="todays feature items" />
          <img src="#" alt="select arrow" />
        </div>
        <div>
          <h6>Gifts</h6>
          <img src="logo192.png" alt="gifts" />
          <img src="#" alt="select arrow" />
        </div>
      </div>
    </div>
  );
}
