import React from "react";

const Header = () => {
  return (
    <section
      className="page-header header-service"
      style={{ backgroundImage: "url('assets/img/service/page-header.jpg')" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page_header-content">
              <h4 className="home-intro__overheading underlined-heading underlined-heading--animate">
                <span className="underlined-heading__wrapper">
                  <span className="underlined-heading__content">services</span>
                </span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
