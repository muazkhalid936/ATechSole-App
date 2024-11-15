import React from "react";
import { FaCheckCircle, FaUserFriends, FaPager, FaPeopleArrows, FaConnectdevelop, FaUsers, FaFileAlt, FaForumbee } from 'react-icons/fa';

const DetailProjectHandle = () => {
  return (
    <section className="handle-project section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="expart-title">
              <h2 className="text-dark">
                how we <span>handle work</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row pt-40">
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
            <div className="talent-single">
              <div className="icon">
                <span>
                  <FaCheckCircle />
                </span>
              </div>
              <p className="text-dark">UX/UI support from 20 day</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
            <div className="talent-single">
              <div className="icon">
                <span>
                  <FaUserFriends />
                </span>
              </div>
              <p className="text-dark">Versatile talent team</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
            <div className="talent-single">
              <div className="icon">
                <span>
                  <FaPager />
                </span>
              </div>
              <p className="text-dark">UX/UI support from 20 day</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
            <div className="talent-single">
              <div className="icon">
                <span>
                  <FaPeopleArrows />
                </span>
              </div>
              <p className="text-dark">Always free consultation</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
            <div className="talent-single">
              <div className="icon">
                <span>
                  <FaConnectdevelop />
                </span>
              </div>
              <p className="text-dark">Developer onboarding</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
            <div className="talent-single">
              <div className="icon">
                <span>
                  <FaUsers />
                </span>
              </div>
              <p className="text-dark">Expert team composition</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
            <div className="talent-single">
              <div className="icon">
                <span>
                  <FaFileAlt />
                </span>
              </div>
              <p className="text-dark">Experts’ resumes within 1 week</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
            <div className="talent-single">
              <div className="icon">
                <span>
                  <FaForumbee />
                </span>
              </div>
              <p className="text-dark">6-week trial period</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailProjectHandle;
