// src/Footer.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import CompanyImage from "../Images/logo.webp"; // 画像のパスを適切に指定してください

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-nav container-fluid text-center">
        <div className="row">
          <div className="col-lg-6 col-md-12 mt-4">
            <h2>
              <img
                src={CompanyImage}
                alt="会社ロゴ"
                className="CompanyImage"
                height="50"
              />
            </h2>
            <p>完全予約制マンツー施術</p>
          </div>

          <div className="col-lg-6 col-md-12 text-lg-end text-md-center mt-4">
            <ul>
              <li>
                <a href="mailto:info@example.com">メール: info@example.com</a>
              </li>
              <li>
                <a href="tel:0123456789">電話: 012-345-6789</a>
              </li>
            </ul>
          </div>

          <div className="follow text-center p-3">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="me-3"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
          </div>

          <div className="copyright text-center p-3">© 2024 URBAN wellness</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
