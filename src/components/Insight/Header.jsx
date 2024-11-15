import React from "react";

const Header = () => {
  return (
    <section className="video_page-header insight_page-header2">
      <div className="in_video">
        <video autoPlay muted loop>
          <source src="assets/img/insight/header.mp4" type="video/mp4" />
        </video>
        <div className="insight_page-content">
          <div className="insight_page-text">
            <h3>Unlock Your Potential </h3>
            <h2>
              <span>with  </span>ATechSole
            </h2>
            <p>
            Empowering businesses with cutting-edge Cybersecurity, Artificial Intelligence, and Development solutions tailored to drive innovation and success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
