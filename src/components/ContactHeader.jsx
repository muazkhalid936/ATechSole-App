import React from "react";

const ContactHeader = () => {
  return (
    <section
      className="all_page-header"
      style={{ backgroundImage: " url('assets/img/header_bg.jpg')" }}
    >
      <div className="conatiner container-menu">
        <div className="row">
          <div className="col-lg-12">
            <div className="all_page-content">
              <div className="all_page-text">
                <h2>
                  Hire <span>Us</span>
                </h2>
                <p>Create the world of your dreams</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHeader;
