import React from "react";

const Benefits = () => {
  return (
    <section
      className="key_feature-area bg-cover section-padding"
      style={{
        backgroundImage: "url('assets/img/service/mbolie_solution.png')",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="key-header">
              <h2 className="text-center">
                Benefits of Hiring Our <strong>ATechSole</strong> ML & AI Engineers
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="key-single">
              <h3>Enhanced Development Capacity</h3>
              <p>
                Scale your projects with our expert team, equipped to handle various workloads efficiently, ensuring timely delivery without compromising quality.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="key-single">
              <h3>Highly Skilled Engineers</h3>
              <p>
                Our engineers bring extensive experience and diverse skill sets, allowing us to tackle complex problems with innovative solutions.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="key-single">
              <h3>Comprehensive ML & AI Expertise</h3>
              <p>
                Benefit from our deep understanding of machine learning and artificial intelligence, enabling us to create solutions tailored to your specific needs.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="key-single">
              <h3>Exceptional IT Services</h3>
              <p>
                Experience unparalleled support and maintenance services, ensuring your solutions remain cutting-edge and efficient throughout their lifecycle.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="rain-field">
        {/* The rain icons can remain as is, or you can customize them */}
        {Array.from({ length: 40 }).map((_, index) => (
          <i key={index} className="rain"></i>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
