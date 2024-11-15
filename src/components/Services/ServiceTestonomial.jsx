import React from "react";
import { FaStar } from "react-icons/fa";

const ServiceTestonomial = () => {
  return (
    <section className="testimonail-client-area" style={{ overflow: "hidden" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="client_testimonail-left">
              <h4>
                <span>Clients</span> are saying{" "}
              </h4>
            </div>
          </div>
          <div className="col-lg-9 col-md-12">
            <div className="client-testimonial">
              <div className="client-testimonial-slider owl-carousel">
                <div className="clients-single">
                  <div className="client_item-single-left">
                    <div className="client_t-img">
                      <figure className="testimonials-slider__avatar-figure">
                        <img
                          className="slider_img_avatar"
                          src="assets/img/client-testi/1.png"
                          alt="Jackson Doe"
                        />
                      </figure>
                    </div>
                  </div>
                  <div className="client_item-single-right">
                    <div className="clients-descrip">
                      <p>
                        “Their MERN expertise made our app responsive and user-friendly.”
                      </p>
                    </div>
                    <div className="clients-name">
                      <h4>Jackson Doe</h4>
                    </div>
                    <div className="clients-company">
                      <h4>Founder @ Nitext LLb</h4>
                    </div>
                    <div className="client-rating">
                      <ul>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="clients-single">
                  <div className="client_item-single-left">
                    <div className="client_t-img">
                      <figure className="testimonials-slider__avatar-figure">
                        <img
                          className="slider_img_avatar"
                          src="assets/img/client-testi/2.png"
                          alt="Niclos Poran"
                        />
                      </figure>
                    </div>
                  </div>
                  <div className="client_item-single-right">
                    <div className="clients-descrip">
                      <p>
                        “The MEVN stack helped us deliver our project efficiently.”
                      </p>
                    </div>
                    <div className="clients-name">
                      <h4>Niclos Poran</h4>
                    </div>
                    <div className="clients-company">
                      <h4>CEO @ Kingfisher Soft</h4>
                    </div>
                    <div className="client-rating">
                      <ul>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="clients-single">
                  <div className="client_item-single-left">
                    <div className="client_t-img">
                      <figure className="testimonials-slider__avatar-figure">
                        <img
                          className="slider_img_avatar"
                          src="assets/img/client-testi/3.png"
                          alt="Donald Trump"
                        />
                      </figure>
                    </div>
                  </div>
                  <div className="client_item-single-right">
                    <div className="clients-descrip">
                      <p>
                        “Their MEAN solution was robust and scalable for our needs.”
                      </p>
                    </div>
                    <div className="clients-name">
                      <h4>Donald Trump</h4>
                    </div>
                    <div className="clients-company">
                      <h4>CEO @ Blackberry Soft</h4>
                    </div>
                    <div className="client-rating">
                      <ul>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="clients-single">
                  <div className="client_item-single-left">
                    <div className="client_t-img">
                      <figure className="testimonials-slider__avatar-figure">
                        <img
                          className="slider_img_avatar"
                          src="assets/img/client-testi/4.png"
                          alt="Amir Hasan"
                        />
                      </figure>
                    </div>
                  </div>
                  <div className="client_item-single-right">
                    <div className="clients-descrip">
                      <p>
                        “They delivered high-quality results with the MERN stack.”
                      </p>
                    </div>
                    <div className="clients-name">
                      <h4>Amir Hasan</h4>
                    </div>
                    <div className="clients-company">
                      <h4>CEO @ Orange Lab</h4>
                    </div>
                    <div className="client-rating">
                      <ul>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceTestonomial;
