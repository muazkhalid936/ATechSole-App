"use client";
import React from "react";
import { FaCaretDown } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero-area section">
      <div className="container-fluid">
        <div className="row">
          <h4 className="home-intro__overheading underlined-heading underlined-heading--animate">
            <span className="underlined-heading__wrapper">
              <span className="underlined-heading__content">we are</span>
            </span>
          </h4>
        </div>
        <div className="row">
          <div className="slider-main " style={{ overflowX: "hidden" }}>
            <div className="hero-slider owl-carousel owl-theme">
              <div className="hero-single titlt" data-tilt data-tilt-max="10">
                <img
                  src="/assets/img/banner/1.png"
                  className="w-full"
                  alt="hero1"
                />
              </div>
              <div className="hero-single titlt" data-tilt data-tilt-max="20">
                <img src="/assets/img/banner/2.png" alt="hero1" />
              </div>
              <div className="hero-single titlt" data-tilt data-tilt-max="20">
                <img src="/assets/img/banner/3.png" alt="hero1" />
              </div>
            </div>
            <span className="hero__text_more">pull the magnet</span>
            <p className="hero__subtitle">
              Atechsole is a Professional, Website and Mobile App Development
              Companythat Endeavor on Highly Proficient, Intuitive and Cost
              Effective Software solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
