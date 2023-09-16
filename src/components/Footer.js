import React from "react";
import './css/home.css'

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>Institute</h4>
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Career with us</a>
                </li>
                <li>
                  <a href="#">CCNA Scope</a>
                </li>
                <li>
                  <a href="#">CCNP Scope</a>
                </li>
                <li>
                  <a href="#">CCIE Scope</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>get help</h4>
              <ul>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Reviews</a>
                </li>
                <li>
                  <a href="#">Need Support</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <a href="https://www.facebook.com/IIHTJAIPUR">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="https://www.youtube.com/@jjakhar">
                  <i className="fab fa-youtube" />
                </a>
                <a href="https://www.instagram.com/ins_global/">
                  <i className="fab fa-instagram" />
                </a>
                <a href="https://www.linkedin.com/company/institute-of-network-solutions/">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
