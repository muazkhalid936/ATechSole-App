import React from "react";

const Header = () => {
  return (
    <section
      className="all_page-header"
      style={{ backgroundImage: "url('assets/img/header_bg.png');" }}
    >
      <div className="conatiner container-menu">
        <div className="row">
          <div className="col-lg-12">
            <div className="all_page-content carrer_page-content des_page">
              <div className="all_page-text carrer_page-text">
                <h2>
                  Your business<span> is our design</span>
                </h2>
                <p>Work hard to achieve</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
