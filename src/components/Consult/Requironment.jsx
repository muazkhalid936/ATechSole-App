import React from "react";

const Requironment = () => {
  return (
    <>
      <section className="service_requirements section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="requirements-heding-title">
                <h2>First of all I will understand and then I will work</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolores, numquam tempora voluptatum animi eos accusantium
                  earum placeat, sunt ullam.consectetur adipisicing elit.
                  Dolores, numquam tempora voluptatum animi Reiciendis velit aut
                  molestias adipisci nobis non earum architecto tenetur nulla.
                </p>
                <a className="default-anchor" href="#">
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="requirements-content">
                <h2 className="requirement_title">Main Requirements</h2>
                <div className="requirement_splitter"></div>
                <div className="requirement-daigram">
                  <div className="daigram_item-single">
                    <div className="daigram_item-name">
                      <h5>Innovation</h5>
                    </div>
                  </div>
                  <div className="daigram_item-single">
                    <div className="daigram_item-name">
                      <h5>Design</h5>
                    </div>
                  </div>
                  <div className="daigram_item-single">
                    <div className="daigram_item-name">
                      <h5>Development</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className="talks-area"
        style={{ backgroundImage: "url('assets/img/service/talks.png')" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-7">
              <div className="talks-content">
                <p>
                  If you have any software problem or stuck in any work, you can
                  contact us.We are always with you for any help in any work
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-5">
              <div className="default-button">
                <a href="#" className="main_button service_btn">
                  <span className="button__label">Lets's talk</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Requironment;
