import React from "react";

const page = () => {
  return (
    <>
      <section className="all_page-header">
        <div className="container container-menu">
          <div className="row">
            <div className="col-lg-12">
              <div className="all_page-content data-page-content">
                <div className="all_page-text">
                  <h2>Privacy Policy</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* // <!-- page-header end--> */}
      <section className="data-page bg-light section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="language-info data-info">
                <h3>Our Privacy Policy</h3>
                <p>
                  At <strong>ATechSole</strong>, we are committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your information.
                </p>
                <p>
                  We collect personal information when you interact with our services, including your name, email address, and any other information you provide. This data is used to improve our services and communicate with you effectively.
                </p>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
                </p>
                <h3>Services We Provide</h3>
                <ul>
                  <li>Frontend development using HTML, CSS, and JavaScript frameworks like React, Angular, and Vue.</li>
                  <li>Backend development with technologies such as Node.js, Python, Ruby, and frameworks like Express, Django, and Spring.</li>
                  <li>Cybersecurity services to protect your applications and data.</li>
                  <li>App development tailored to your business needs.</li>
                  <li>AI solutions for smarter and more efficient operations.</li>
                </ul>
              </div>

              <div className="language-info data-info">
                <h3>Information Notes</h3>
                <p>
                  We may use your information to send you updates about our services, promotional materials, and other information that may interest you. You have the option to opt out of receiving such communications at any time.
                </p>
                <p>
                  We will never sell or rent your personal information to third parties. Your data will only be shared with trusted partners who assist us in providing our services, and only for the purposes stated in this policy.
                </p>
              </div>

              <div className="language-info data-info">
                <h3>Who We Are:</h3>
                <p>
                  ATechSole is a full-service agency specializing in development, cybersecurity, and AI. We strive to create innovative solutions that enhance user experience and drive business success.
                </p>
                <p>
                  Our team is dedicated to maintaining the highest standards of security and privacy. We believe in transparency and will keep you informed about any changes to our privacy policy.
                </p>
                <p>
                  If you have any questions or concerns about our privacy policy or practices, please do not hesitate to contact us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
