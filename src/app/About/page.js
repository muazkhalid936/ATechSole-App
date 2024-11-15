"use client";
import ContactTeam from "@/components/ContactTeam";
import End from "@/components/Design/End";
import Services from "@/components/Services";
import Deliver from "@/components/Services/Deliver";
import React from "react";

const page = () => {
  return (
    <>
      <div>
        <div
          className="section about-home_section"
          id="section0"
          style={{ backgroundImage: "url('assets/img/about/bg_pic.png')" }}
        >
          <div className="container container-menu">
            <div className="row">
              <div className="col-lg-12">
                <div className="about-home_main">
                  <div className="about-home-content">
                    <div className="about-section__middle">
                      <div className="about-section__title">
                        <h1>
                          <strong>
                            <span style={{ color: "#ffffff" }}>#Meet</span>
                            <span style={{ color: "#ff4e00" }}>Creative</span>
                          </strong>
                        </h1>
                      </div>
                      <p className="about-section__desc">
                        Design and Development Team of Creative Technologists
                      </p>
                    </div>
                    <button
                      type="button"
                      className="about__intro__button"
                    ></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <Services />
        </div>
        <Deliver />
        <ContactTeam />
        <End/>
      </div>
    </>
  );
};

export default page;
