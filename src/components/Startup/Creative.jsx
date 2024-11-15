import React from "react";

const Creative = () => {
  return (
    <section className="creative-info">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="expart-title text-center ">
              <h2 className="text-light">
                {" "}
                why <span className="why_title">AtechSole?</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row pt-60">
          <div className="col-lg-12">
            <div className="creative_info-items">
              <div className="creative_info-items-musk"></div>
              <ul>
                <li>
                  <p>450+ clients worldwide</p>
                </li>
                <li>
                  <p>300+ expert-level engineer</p>
                </li>
                <li>
                  <p>Rated 4.8 / 5.0 by 89 clients</p>
                </li>
                <li>
                  <p>Full-stack. Since 2004</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Creative;
