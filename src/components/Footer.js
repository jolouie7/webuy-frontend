import React from 'react'
import "../styles/Footer.scss"
// convert non-BEM to BEM
export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <p>SUBSCRIBE TO NEWSLETTERS</p>
        <p>Username/Email Address</p>
        <input />
        <p>SIGN UP</p>
      </div>
      <div className="footer-right-group">
        <div className="footer-right-1">
          <p>COMPANY</p>
          <a>About Us</a>
          <a>Careers</a>
        </div>
        <div className="footer-right-2">
          <p>SUPPORT</p>
          <div className-="footer__clickables">
            <a>Track Orders</a>
            <a>Delivery</a>
            <a>Returns and Replacements</a>
            <a>FAQ</a>
          </div>
        </div>
        <div className="footer-right-3">
          <p>CONTACT</p>
          <a>Chat Now</a>
          <a>Call Us</a>
        </div>
      </div>
      <div className="social-media">
        <a>facebook</a>
        <a>twitter</a>
        <a>linkedin</a>
        <a>pinterest</a>
      </div>
    </div>
  );
}
