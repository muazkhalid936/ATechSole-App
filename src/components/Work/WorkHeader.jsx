import React from "react";
import Work from "../Work";

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
            <Work />
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
            <Work />
            {/* <!--end work-area --> */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default WorkHeader;
