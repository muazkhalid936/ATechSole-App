import React from "react";

const WorkHeader = () => {
  return (
    <main className="work-page">
      <div
        className="work-all"
        style={{ backgroundImage: "url('assets/img/work/header_bg.jpg')" }}
      >
        <div className="work-head">
          <ul
            className="nav nav-tabs filter_nav-tabs"
            id="nav-tab2"
            role="tablist"
          >
            <li>
              <a
                className="nav-link"
                id="nav-industry-tab"
                data-bs-toggle="tab"
                href="#nav-industry"
                role="tab"
              >
                Industry
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                id="nav-expertise-tab"
                data-bs-toggle="tab"
                href="#nav-expertise"
                role="tab"
              >
                Expertise
              </a>
            </li>
          </ul>
        </div>
        <div className="tab-content text-center" id="nav-tabContent2">
          <div
            className="tab-pane fade active show"
            id="nav-industry"
            role="tabpanel"
          >
            <div className="work-filters">
              <div className="container">
                <div className="row">
                  <div className="work-filters-nav">
                    <div className="works-filters__list clearfix">
                      <ul className="works-filters__list-indastry d-flex">
                        <li>
                          <a className="filters_item current" href="#">
                            All
                          </a>
                        </li>
                        <li>
                          <a className="filters_item" href="#">
                            fintech
                          </a>
                        </li>
                        <li>
                          <a className="filters_item" href="#">
                            education
                          </a>
                        </li>
                        <li>
                          <a className="filters_item" href="#">
                            travel & hospitality
                          </a>
                        </li>
                        <li>
                          <a className="filters_item" href="#">
                            media & entertainment
                          </a>
                        </li>
                        <li>
                          <a className="filters_item" href="#">
                            facility management
                          </a>
                        </li>
                        <li>
                          <a className="filters_item" href="#">
                            sustainability
                          </a>
                        </li>
                        <li>
                          <a className="filters_item" href="#">
                            e-commerce
                          </a>
                        </li>
                        <li>
                          <a className="filters_item" href="#">
                            other
                          </a>
                        </li>
                      </ul>
                      <div id="marker"></div>
                    </div>
                  </div>
                  <div className="work-filter_nav2">
                    <div className="dropdown">
                      <button
                        className="dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        All
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            fintech
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            education
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            travel & hospitality
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            media & entertainment
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            facility management
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            sustainability
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            e-commerce
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            other
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--start work-area --> */}
            <div className="works_work-area">
              <div className="container">
                <div className="row pt-40">
                  <div className="col-lg-4 offset-lg-1 work-left col-md-6">
                    <div
                      className="work-item wow fadeInLeft"
                      data-wow-duration="1500ms"
                      data-wow-delay="0ms"
                    >
                      <div className="work-img">
                        <img
                          className="main-image"
                          src="assets/img/work/6.jpg"
                          alt="Work"
                        />
                        <img
                          className="title-image"
                          src="assets/img/work/football.png"
                          alt="Work"
                        />
                        <img
                          className="count-image"
                          src="assets/img/work/f4.png"
                          alt="Work"
                        />
                      </div>
                      <div className="work-content">
                        <div className="work-title">
                          <span className="title">
                            <a href="project_detail">
                              Football
                              <i className="fas fa-caret-right arrow"></i>
                            </a>
                          </span>
                        </div>
                        <div className="work-des">
                          <p>
                            {" "}
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. A, dolore, sapiente! Dicta iure non ipsam iu.
                          </p>
                        </div>
                        <div className="work-tag">
                          <ul>
                            <li>
                              <a href="javascript:void(0)">Laravel</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">angular</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">nodejs</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">react js</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="work-item  wow fadeInUp"
                      data-wow-duration="1500ms"
                      data-wow-delay="0ms"
                    >
                      <div className="work-img">
                        <img
                          className="main-image"
                          src="assets/img/work/7.jpg"
                          alt="Work"
                        />
                        <img
                          className="title-image"
                          src="assets/img/work/easyzet.png"
                          alt="Work"
                        />
                        <img
                          className="count-image"
                          src="assets/img/work/f6.png"
                          alt="Work"
                        />
                      </div>
                      <div className="work-content">
                        <div className="work-title">
                          <span className="title">
                            <a href="project_detail">
                              Easyzet{" "}
                              <i className="fas fa-caret-right arrow"></i>
                            </a>
                          </span>
                        </div>
                        <div className="work-des">
                          <p>
                            {" "}
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. A, dolore, sapiente! Dicta iure non ipsam iu.
                          </p>
                        </div>
                        <div className="work-tag">
                          <ul>
                            <li>
                              <a href="javascript:void(0)">Laravel</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">angular</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">nodejs</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">react js</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 offset-lg-1 col-md-6">
                    <div
                      className="work-item wow fadeInRight"
                      data-wow-duration="1500ms"
                      data-wow-delay="50ms"
                    >
                      <div className="work-img">
                        <img
                          className="main-image"
                          src="assets/img/work/5.jpg"
                          alt="Work"
                        />
                        <img
                          className="title-image"
                          src="assets/img/work/mediplant.png"
                          alt="Work"
                        />
                        <img
                          className="count-image"
                          src="assets/img/work/f7.png"
                          alt="Work"
                        />
                      </div>
                      <div className="work-content">
                        <div className="work-title">
                          <span className="title">
                            <a href="project_detail">
                              Mediplant
                              <i className="fas fa-caret-right arrow"></i>
                            </a>
                          </span>
                        </div>
                        <div className="work-des">
                          <p>
                            {" "}
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. A, dolore, sapiente! Dicta iure non ipsam iu.
                          </p>
                        </div>
                        <div className="work-tag">
                          <ul>
                            <li>
                              <a href="javascript:void(0)">type script</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">threejs</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">nodejs</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">webpack</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="work-item wow fadeInUp"
                      data-wow-duration="1500ms"
                      data-wow-delay="50ms"
                    >
                      <div className="work-img">
                        <img
                          className="main-image"
                          src="assets/img/work/1.jpg"
                          alt="Work"
                        />
                        <img
                          className="title-image"
                          src="assets/img/work/resturon.png"
                          alt="Work"
                        />
                        <img
                          className="count-image"
                          src="assets/img/work/f8.png"
                          alt="Work"
                        />
                      </div>
                      <div className="work-content">
                        <div className="work-title">
                          <span className="title">
                            <a href="project_detail">
                              Resturon{" "}
                              <i className="fas fa-caret-right arrow"></i>
                            </a>
                          </span>
                        </div>
                        <div className="work-des">
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. A, dolore, sapiente! Dicta iure non ipsam iu.
                          </p>
                        </div>
                        <div className="work-tag">
                          <ul>
                            <li>
                              <a href="javascript:void(0)">python</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">flutter</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">nodejs</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">react js</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--end work-area --> */}
          </div>
          <div className="tab-pane fade" id="nav-expertise" role="tabpanel">
            <div className="work-filters">
              <div className="container">
                <div className="row">
                  <div className="work-filters-nav">
                    <div className="works-filters__list clearfix">
                      <ul className="works-filters__list-indastry d-flex">
                        <li>
                          <a className="filters_item current" href="#">
                            all
                          </a>
                        </li>
                        <li>
                          <a className="filters_item" href="#">
                            fintech
                          </a>
                        </li>
                        <li>
                          <a className="filters_item" href="#">
                            education
                          </a>
                        </li>
                        <li>
                          <a className="filters_item" href="#">
                            travel & hospitality
                          </a>
                        </li>
                        <li>
                          <a className="filters_item" href="#">
                            media & entertainment
                          </a>
                        </li>
                        <li>
                          <a className="filters_item" href="#">
                            facility management
                          </a>
                        </li>
                        <li>
                          <a className="filters_item" href="#">
                            sustainability
                          </a>
                        </li>
                        <li>
                          <a className="filters_item" href="#">
                            e-commerce
                          </a>
                        </li>
                        <li>
                          <a className="filters_item" href="#">
                            other
                          </a>
                        </li>
                      </ul>
                      <div id="marker2"></div>
                    </div>
                  </div>
                  <div className="work-filter_nav2">
                    <div className="dropdown">
                      <button
                        className="dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        all
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            fintech
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            education
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            travel & hospitality
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            media & entertainment
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            facility management
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            sustainability
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            e-commerce
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            other
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--start work-area --> */}
            <div className="works_work-area">
              <div className="container">
                <div className="row pt-40">
                  <div className="col-lg-4 offset-lg-1 work-left col-md-6">
                    <div
                      className="work-item wow fadeInLeft"
                      data-wow-duration="1500ms"
                      data-wow-delay="0ms"
                    >
                      <div className="work-img">
                        <img
                          className="main-image"
                          src="assets/img/work/6.jpg"
                          alt="Work"
                        />
                        <img
                          className="title-image"
                          src="assets/img/work/football.png"
                          alt="Work"
                        />
                        <img
                          className="count-image"
                          src="assets/img/work/f4.png"
                          alt="Work"
                        />
                      </div>
                      <div className="work-content">
                        <div className="work-title">
                          <span className="title">
                            <a href="project_detail">
                              Football
                              <i className="fas fa-caret-right arrow"></i>
                            </a>
                          </span>
                        </div>
                        <div className="work-des">
                          <p>
                            {" "}
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. A, dolore, sapiente! Dicta iure non ipsam iu.
                          </p>
                        </div>
                        <div className="work-tag">
                          <ul>
                            <li>
                              <a href="javascript:void(0)">Laravel</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">angular</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">nodejs</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">react js</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="work-item  wow fadeInUp"
                      data-wow-duration="1500ms"
                      data-wow-delay="0ms"
                    >
                      <div className="work-img">
                        <img
                          className="main-image"
                          src="assets/img/work/7.jpg"
                          alt="Work"
                        />
                        <img
                          className="title-image"
                          src="assets/img/work/easyzet.png"
                          alt="Work"
                        />
                        <img
                          className="count-image"
                          src="assets/img/work/f6.png"
                          alt="Work"
                        />
                      </div>
                      <div className="work-content">
                        <div className="work-title">
                          <span className="title">
                            <a href="project_detail">
                              Easyzet{" "}
                              <i className="fas fa-caret-right arrow"></i>
                            </a>
                          </span>
                        </div>
                        <div className="work-des">
                          <p>
                            {" "}
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. A, dolore, sapiente! Dicta iure non ipsam iu.
                          </p>
                        </div>
                        <div className="work-tag">
                          <ul>
                            <li>
                              <a href="javascript:void(0)">Laravel</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">angular</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">nodejs</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">react js</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 offset-lg-1 col-md-6">
                    <div
                      className="work-item wow fadeInRight"
                      data-wow-duration="1500ms"
                      data-wow-delay="50ms"
                    >
                      <div className="work-img">
                        <img
                          className="main-image"
                          src="assets/img/work/5.jpg"
                          alt="Work"
                        />
                        <img
                          className="title-image"
                          src="assets/img/work/mediplant.png"
                          alt="Work"
                        />
                        <img
                          className="count-image"
                          src="assets/img/work/f7.png"
                          alt="Work"
                        />
                      </div>
                      <div className="work-content">
                        <div className="work-title">
                          <span className="title">
                            <a href="project_detail">
                              Mediplant
                              <i className="fas fa-caret-right arrow"></i>
                            </a>
                          </span>
                        </div>
                        <div className="work-des">
                          <p>
                            {" "}
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. A, dolore, sapiente! Dicta iure non ipsam iu.
                          </p>
                        </div>
                        <div className="work-tag">
                          <ul>
                            <li>
                              <a href="javascript:void(0)">type script</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">threejs</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">nodejs</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">webpack</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="work-item wow fadeInUp"
                      data-wow-duration="1500ms"
                      data-wow-delay="50ms"
                    >
                      <div className="work-img">
                        <img
                          className="main-image"
                          src="assets/img/work/1.jpg"
                          alt="Work"
                        />
                        <img
                          className="title-image"
                          src="assets/img/work/resturon.png"
                          alt="Work"
                        />
                        <img
                          className="count-image"
                          src="assets/img/work/f8.png"
                          alt="Work"
                        />
                      </div>
                      <div className="work-content">
                        <div className="work-title">
                          <span className="title">
                            <a href="project_detail">
                              Resturon{" "}
                              <i className="fas fa-caret-right arrow"></i>
                            </a>
                          </span>
                        </div>
                        <div className="work-des">
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. A, dolore, sapiente! Dicta iure non ipsam iu.
                          </p>
                        </div>
                        <div className="work-tag">
                          <ul>
                            <li>
                              <a href="javascript:void(0)">python</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">flutter</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">nodejs</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">react js</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--end work-area --> */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default WorkHeader;
