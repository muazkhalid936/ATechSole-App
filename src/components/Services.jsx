import React from "react";

const Services = () => {
  return (
    <section className="service-area homepage__services home-services section">
      <div className="container">
        <div className="row">
          <div className="service-head">
            <h2 className="service-title">Our Service</h2>
            <div className="home-services__splitter"></div>
            <div className="home-services__wrapper">
              <div className="home-services__item">
                <a href="Service-Details" className="home-services__item-link">
                  <figure className="home-services__item-figure">
                    <img
                      src="assets/img/service/2.png"
                      alt="sr"
                      className="home-services__item-image"
                    />
                  </figure>

                  <div className="home-services__item-name">
                    <span className="home-services__item-name-wrapper">
                      Web App <br /> Development
                    </span>
                  </div>
                </a>
              </div>

              <div className="home-services__item">
                <a href="Service-Details" className="home-services__item-link">
                  <figure className="home-services__item-figure">
                    <img
                      src="assets/img/service/4.png"
                      alt="sr"
                      className="home-services__item-image"
                    />
                  </figure>
                  <div className="home-services__item-name">
                    <span className="home-services__item-name-wrapper">
                      Mobile App <br /> Development
                    </span>
                  </div>
                </a>
              </div>

              <div className="home-services__item">
                <a href="Service-Details" className="home-services__item-link">
                  <figure className="home-services__item-figure">
                    <img
                      src="assets/img/service/3.png"
                      alt="sr"
                      className="home-services__item-image  "
                    />
                  </figure>
                  <div className="home-services__item-name">
                    <span className="home-services__item-name-wrapper">
                      Cyber
                      <br /> Security
                    </span>
                  </div>
                </a>
              </div>

              <div className="home-services__item">
                <a href="Product-Design" className="home-services__item-link">
                  <figure className="home-services__item-figure">
                    <img
                      src="assets/img/service/1.png"
                      alt="sr"
                      className="home-services__item-image"
                    />
                  </figure>
                  <div className="home-services__item-name">
                    <span className="home-services__item-name-wrapper">
                      Software <br /> Development <br />{" "}
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="transparent-grid">
        <div className="transparent-grid__container">
          <div className="transparent-grid__row">
            <div className="transparent-grid__column"></div>
            <div className="transparent-grid__column"></div>
            <div className="transparent-grid__column"></div>
            <div className="transparent-grid__column"></div>
            <div className="transparent-grid__column"></div>
            <div className="transparent-grid__column"></div>
            <div className="transparent-grid__column"></div>
            <div className="transparent-grid__column"></div>
            <div className="transparent-grid__column"></div>
            <div className="transparent-grid__column"></div>
            <div className="transparent-grid__column"></div>
            <div className="transparent-grid__column"></div>
          </div>
        </div>
      </div>

      <div className="home-services__cutoff">
        <div className="transparent-grid">
          <div className="transparent-grid__container">
            <div className="transparent-grid__row">
              <div className="transparent-grid__column"></div>
              <div className="transparent-grid__column"></div>
              <div className="transparent-grid__column"></div>
              <div className="transparent-grid__column"></div>
              <div className="transparent-grid__column"></div>
              <div className="transparent-grid__column"></div>
              <div className="transparent-grid__column"></div>
              <div className="transparent-grid__column"></div>
              <div className="transparent-grid__column"></div>
              <div className="transparent-grid__column"></div>
              <div className="transparent-grid__column"></div>
              <div className="transparent-grid__column"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
