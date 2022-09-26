import React from "react";
import "../styles/Footer.scss";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <div className="footer-left-container">
          <p>SUBSCRIBE TO NEWSLETTERS</p>
          <p>Username/Email Address</p>
          <input />
          <p>SIGN UP</p>
        </div>
      </div>
      <div className="footer-right-group">
        <div className="footer-right-1">
          <p>COMPANY</p>
          <div className="footer__clickables-1">
            <a href="#">About Us</a>
            <a href="#">Careers</a>
          </div>
        </div>
        <div className="footer-right-2">
          <p>SUPPORT</p>
          <div className="footer__clickables-2">
            <a href="#">Track Orders</a>
            <a href="#">Delivery</a>
            <a href="#">Returns and Replacements</a>
            <a href="#">FAQ</a>
          </div>
        </div>
        <div className="footer-right-3">
          <p>CONTACT</p>
          <div className="footer__clickables-3">
            <a href="#">Chat Now</a>
            <a href="#">Call Us</a>
          </div>
        </div>
      </div>
      <div className="social-media">
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Linkedin</a>
        <a href="#">Pinterest</a>
      </div>
    </div>
  );
}
