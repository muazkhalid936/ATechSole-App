import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer_area">
      <div className="container container-menu">
        <div className="row">
          <div className="footer_item">
            <h3 className="footer_heading">Address & Contact</h3>
            <div className="footer_item_content">
              <div className="footer_address">
                <ul>
                  <li>
                    <span className="country_name">Location:</span>Thokar,
                    Lahore
                  </li>
                  <li>
                    <span className="country_name">Phone:</span>
                    +92-325-3344552
                  </li>
                  <li>
                    <span className="country_name">Mail:</span>{" "}
                    info@atechsole.com
                  </li>
                  <li>
                    <span className="country_name">Website:</span>{" "}
                    www.atechsole.com
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer_social">
              <ul>
                <li>
                  <a href="#">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaYoutube />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_item">
            <h3 className="footer_heading">Quick Links</h3>
            <div className="footer_item_content">
              <div className="footer_link">
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="About"> About us</a>
                  </li>
                  <li>
                    <a href="Service"> Services</a>
                  </li>
                  <li>
                    <a href="Work"> Our work</a>
                  </li>
                  <li>
                    <a href="Career"> Careers</a>
                  </li>
                  <li>
                    <a href="Contact"> Contact</a>
                  </li>
                  <li>
                    <a href="Privacy-Policy"> Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer_item">
            <h3 className="footer_heading">Service</h3>
            <div className="footer_item_content">
              <div className="footer_link">
                <ul>
                  <li>
                    <a href="Development">Mobile app development </a>
                  </li>
                  <li>
                    <a href="Development">Web app development</a>
                  </li>
                  <li>
                    <a href="Product-Design">Product design </a>
                  </li>
                  <li>
                    <a href="Service-Details">Service Detail</a>
                  </li>

                  <li>
                    <a href="Startup-Detail">Software development consulting</a>
                  </li>

                  <li>
                    <a href="Development">Artificial Intelligence </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer_item">
            <h3 className="footer_heading">Resource</h3>
            <div className="footer_item_content">
              <div className="footer_link">
                <ul>
                  <li>
                    <a href="Insight">Expert discussions </a>
                  </li>
                  <li>
                    <a href="Insight">What clients say </a>
                  </li>
                  <li>
                    <a href="Product-Design">Product Design </a>
                  </li>
                  <li>
                    <a href="Work">How we work </a>
                  </li>
                  <li>
                    <a href="Insight">Insights </a>
                  </li>
                  {/* <li>
                    <a href="Blog">Blog</a>
                  </li> */}
                  <li>
                    <a href="Contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
