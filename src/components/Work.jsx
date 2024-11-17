import React from "react";
import { FaCaretRight } from "react-icons/fa"; // Import the icon you want to use

const Work = () => {
  return (
    <section className="section work-area">
      <div className="container">
        <div className="row">
          <h4 className="home-intro__overheading underlined-heading underlined-heading--animate">
            <span className="underlined-heading__wrapper">
              <span className="underlined-heading__content text-dark">
                our work
              </span>
            </span>
          </h4>
        </div>
        <div className="row pt-40">
          <div className="col-lg-4 offset-lg-1 work-left col-md-6">
            <div
              className="work-item wow fadeInLeft"
              data-wow-duration="1500ms"
              data-wow-delay="0ms"
            >
              <div className="work-img">
                <img
                  className="main-image"
                  src="assets/img/work/1.jpg"
                  alt="Work"
                />
                <img
                  className="title-image"
                  src="assets/img/work/resturon.png"
                  alt="Work"
                />
                <img
                  className="count-image"
                  src="assets/img/work/f4.png"
                  alt="Work"
                />
              </div>
              <div className="work-content">
                <div className="work-title">
                  <span className="title">
                    <a href="#">
                    Resturon <FaCaretRight className="arrow" />
                    </a>
                  </span>
                </div>
                <div className="work-des">
                  <p>
                  An online platform for burger lovers, offering a wide selection of gourmet burgers from various restaurants with delivery options. Users can browse, customize, and order their favorite burgers with ease.
                  </p>
                </div>
                <div className="work-tag">
                  <ul>
                    <li>
                      <a href="#">Laravel</a>
                    </li>
                    <li>
                      <a href="#">React Js</a>
                    </li>
                    <li>
                      <a href="#">Node Js</a>
                    </li>
                    <li>
                      <a href="#">Angular</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="work-item wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="0ms"
            >
              <div className="work-img">
                <img
                  className="main-image"
                  src="assets/img/work/2.jpg"
                  alt="Work"
                />
                <img
                  className="title-image"
                  src="assets/img/work/furnishing.png"
                  alt="Work"
                />
                <img
                  className="count-image"
                  src="assets/img/work/f3.png"
                  alt="Work"
                />
              </div>
              <div className="work-content">
                <div className="work-title">
                  <span className="title">
                    <a href="#">
                    FurniNest <FaCaretRight className="arrow" />
                    </a>
                  </span>
                </div>
                <div className="work-des">
                  <p>
                  An e-commerce platform specializing in modern and customizable furniture. Users can explore a range of stylish furniture collections and purchase directly from the app, with virtual room preview features.
                  </p>
                </div>
                <div className="work-tag">
                  <ul>
                    <li>
                      <a href="#">Django</a>
                    </li>
                    <li>
                      <a href="#">Vue Js</a>
                    </li>
                    <li>
                      <a href="#">Node Js</a>
                    </li>
                    <li>
                      <a href="#">Tailwind CSS</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 col-md-6">
            <div
              className="work-item wow fadeInRight"
              data-wow-duration="1500ms"
              data-wow-delay="50ms"
            >
              <div className="work-img">
                <img
                  className="main-image"
                  src="assets/img/work/3.jpg"
                  alt="Work"
                />
                <img
                  className="title-image"
                  src="assets/img/work/army.png"
                  alt="Work"
                />
                <img
                  className="count-image"
                  src="assets/img/work/f1.png"
                  alt="Work"
                />
              </div>
              <div className="work-content">
                <div className="work-title">
                  <span className="title">
                    <a href="#">
                      Army-map <FaCaretRight className="arrow" />
                    </a>
                  </span>
                </div>
                <div className="work-des">
                  <p>
                  A real-time mapping tool for military use, offering detailed terrain data and strategic planning features.
                  </p>
                </div>
                <div className="work-tag">
                  <ul>
                    <li>
                      <a href="#">Python</a>
                    </li>
                    <li>
                      <a href="#">Django</a>
                    </li>
                    <li>
                      <a href="#">Leaflet Js</a>
                    </li>
                    <li>
                      <a href="#">PostgreSQL</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="work-item wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="50ms"
            >
              <div className="work-img">
                <img
                  className="main-image"
                  src="assets/img/work/4.jpg"
                  alt="Work"
                />
                <img
                  className="title-image"
                  src="assets/img/work/ridezibe.png"
                  alt="Work"
                />
                <img
                  className="count-image"
                  src="assets/img/work/f2.png"
                  alt="Work"
                />
              </div>
              <div className="work-content">
                <div className="work-title">
                  <span className="title">
                    <a href="#">
                      RideZib <FaCaretRight className="arrow" />
                    </a>
                  </span>
                </div>
                <div className="work-des">
                  <p>
                  A ride-hailing app for quick bookings, ride-sharing, and optimized routes for safe transportation.
                  </p>
                </div>
                <div className="work-tag">
                  <ul>
                    <li>
                      <a href="#">Swift (iOS)</a>
                    </li>
                    <li>
                      <a href="#">Kotlin (Android)</a>
                    </li>
                    <li>
                      <a href="#">Node Js</a>
                    </li>
                    <li>
                      <a href="#">Firebase</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="work_more">
            <span className="title">
              <a href="Work">
                see all (23) works <FaCaretRight className="arrow" />
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
