import React from "react";

const End = () => {
  return (
    <>
      <section className="question-faq section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="expart-title">
                <h2 className="text-dark">
                  Any<span> Question</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row pt-40">
            <div className="col-lg-12">
              <div className="question-faq">
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        What services do you offer?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        We offer a range of services, including web development, app development, AI solutions, and cybersecurity. Our team specializes in both frontend and backend technologies, ensuring comprehensive support for your projects.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        How do you ensure the quality of your work?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        We maintain high-quality standards through rigorous testing, code reviews, and regular client feedback sessions. Our experienced team is committed to delivering robust and efficient solutions that meet your requirements.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        Can you work with our existing team?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Absolutely! We can seamlessly integrate with your existing team to enhance productivity and bring in our expertise. Collaboration is key, and we are flexible in our approach to work alongside your staff.
                      </div>
                    </div>
                  </div>
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
      </section>
      <section
        className="desing_small-word section-padding"
        style={{ backgroundImage: "url('assets/img/design/small_bg.jpg')" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="expart-title">
                <h2 className="text-light">
                  Without further ado let's get the <span>job done</span>
                </h2>
                <div className="design-button">
                  <a href="#" className="main_button">
                    <span className="button__label">Contact Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="small_word-single">
                <div className="img">
                  <img src="assets/img/design/c1.png" alt="s" />
                </div>
                <h5>Diagram & information</h5>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="small_word-single">
                <div className="img">
                  <img src="assets/img/design/c2.png" alt="s" />
                </div>
                <h5>People can understand</h5>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="small_word-single">
                <div className="img">
                  <img src="assets/img/design/c3.png" alt="s" />
                </div>
                <h5>Compatible project</h5>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="small_word-single">
                <div className="img">
                  <img src="assets/img/design/c4.png" alt="s" />
                </div>
                <h5>Always be prepared</h5>
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
      </section>
    </>
  );
};

export default End;
