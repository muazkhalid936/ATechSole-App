import React from "react";

const Ideas = () => {
  return (
    <section className="ingsight_blog-page ingsight_blog-page_two section-padding">
      <div className="container container-menu">
        <div className="row">
          <div className="col-lg-12">
            <div className="expart-title">
              <h2 className="text-light">
                New ideas are new <span>app inventions</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row pt-60">
          <div className="col-lg-4 col-md-6">
            <div className="insight-blog-single insight-blog-single_tow">
              <div className="img">
                <img src="assets/img/insight/in1.jpg" alt="inb" />
                <div className="read_more-now">
                  <div className="icon">
                    <i className="far fa-comment-alt"></i>
                  </div>
                  <h4>
                    <a href="insight_detail.html">more</a>
                  </h4>
                </div>
              </div>
              <div className="insight-content">
                <h3>
                  <a href="insight_detail.html">
                    In the modern age you can share your thoughts with everyone
                  </a>
                </h3>
                <div className="insight-btn">
                  <ul>
                    <li>
                      <a href="#">node js</a>
                    </li>
                    <li>
                      <a href="#">vue js</a>
                    </li>
                    <li>
                      <a href="#">desing</a>
                    </li>
                    <li>
                      <a href="#">web page</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="insight-blog-single insight-blog-single_tow">
              <div className="img">
                <img src="assets/img/insight/in2.jpg" alt="inb" />
                <div className="read_more-now">
                  <div className="technology-video">
                    <a
                      className="video-btn popup-youtube"
                      href="https://www.youtube.com/watch?v=Z0A7OMkYQf8"
                    >
                      <i className="fas fa-play"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="insight-content">
                <h3>
                  <a href="insight_detail.html">
                    How to make your products in front of everyone in the modern
                    world
                  </a>
                </h3>
                <div className="insight-btn">
                  <ul>
                    <li>
                      <a href="#">react js</a>
                    </li>
                    <li>
                      <a href="#">go</a>
                    </li>
                    <li>
                      <a href="#">java script</a>
                    </li>
                    <li>
                      <a href="#">app development</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="insight-blog-single insight-blog-single_tow">
              <div className="img">
                <img src="assets/img/insight/in4.jpg" alt="inb" />
                <div className="read_more-now">
                  <div className="icon">
                    <i className="far fa-comment-alt"></i>
                  </div>
                  <h4>
                    <a href="insight_detail.html">more</a>
                  </h4>
                </div>
              </div>
              <div className="insight-content">
                <h3>
                  <a href="insight_detail.html">
                    What should you consider first to get a good project?
                  </a>
                </h3>
                <div className="insight-btn">
                  <ul>
                    <li>
                      <a href="#">php</a>
                    </li>
                    <li>
                      <a href="#">angular</a>
                    </li>
                    <li>
                      <a href="#">react js</a>
                    </li>
                    <li>
                      <a href="#">web application</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="insight_blog-more pt-40">
            <div className="insight-btn">
              <a href="insight.html" className="main_button insight-button">
                <span className="button__label">Go more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ideas;
