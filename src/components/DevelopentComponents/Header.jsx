import React from "react";

const Header = () => {
  return (
    <section
      className="development-header"
      style={{ backgroundImage: " url('assets/img/tool/deve.jpg');" }}
    >
      <div className="container container-menu">
        <div className="row">
          <div className="col-lg-12">
            <div className="video_page-content">
              <div className="video_page-text development_text">
                <h3></h3>
                <h2>
                  Node.js <span>team</span>{" "}
                </h2>
                <p>
                  You will get all the products you like. Welcome to our digital
                  products from <strong>ATechSole</strong>
                </p>
              </div>
              <div className="development-button">
                <a href="#" className="main_button development_btn">
                  <span className="button__label">Tech a call</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
