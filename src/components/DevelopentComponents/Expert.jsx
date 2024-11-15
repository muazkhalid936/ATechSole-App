import React from "react";

const Expert = () => {
  return (
    <section className="expart_slider-section" style={{overflow:"hidden"}}>
      <div className="container container-menu">
        <div className="row">
          <div className="col-lg-12">
            <div className="expart-title">
              <h2>
                Take a look all of <span>our Experience Developers</span>
              </h2>
              <p>The stronger the team, the better the project</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="developer-slider owl-carousel owl-theme">
              <div className="developer-single">
                <div className="developer-header">
                  <h3>Mustansar Riaz</h3>
                  <span className="exprience_list">
                    Java, React Js, Vue Js, PHP, Zend Framework, Laravel,
                    Symfony, RESTful APIs, Eloquent, Doctrine, MySQL, MongoDB,
                    Javascript, HTML, CSS, GIT, Vagrant, Docker.
                  </span>
                </div>
                <div className="developer_img">
                  <div className="developer_img-item">
                    <img src="assets/img/developer/3.png" alt="developer" />
                  </div>
                </div>
              </div>
              <div className="developer-single">
                <div className="developer-header">
                  <h3>Sardar Wali</h3>
                  <span className="exprience_list">
                    TypeScript, React Js, Vue Js, PHP, Zend Framework, Laravel,
                    Symfony, RESTful APIs, Eloquent, Doctrine, MySQL, MongoDB,
                    Javascript, HTML, CSS, GIT, Vagrant, Docker.
                  </span>
                </div>
                <div className="developer_img">
                  <div className="developer_img-item">
                    <img src="assets/img/developer/2.png" alt="developer" />
                  </div>
                </div>
              </div>

              <div className="developer-single">
                <div className="developer-header">
                  <h3>Ghazanfar Riaz</h3>
                  <span className="exprience_list">
                    Redux, React Js, Vue Js, PHP, Zend Framework, Laravel,
                    Symfony, RESTful APIs, Eloquent, Doctrine, MySQL, MongoDB,
                    Javascript, HTML, CSS, GIT, Vagrant, Docker.
                  </span>
                </div>
                <div className="developer_img">
                  <div className="developer_img-item">
                    <img src="assets/img/developer/3.png" alt="developer" />
                  </div>
                </div>
              </div>
              <div className="developer-single">
                <div className="developer-header">
                  <h3>Nick jone</h3>
                  <span className="exprience_list">
                    Java, React Js, Vue Js, PHP, Zend Framework, Laravel,
                    Symfony, RESTful APIs, Eloquent, Doctrine, MySQL, MongoDB,
                    Javascript, HTML, CSS, GIT, Vagrant, Docker.
                  </span>
                </div>
                <div className="developer_img">
                  <div className="developer_img-item">
                    <img src="assets/img/developer/4.png" alt="developer" />
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

export default Expert;
