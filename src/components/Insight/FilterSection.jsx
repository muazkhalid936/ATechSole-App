import React from "react";

const FilterSection = () => {
  return (
    <section className="ingsight_blog-page pt-80">
      <div className="container container-menu">
        <div className="row pb-40">
          <div className="col-lg-12">
            <div className="insight_filtering-top">
              <form action="#">
                <div className="search-top_form">
                  <div className="filter-by">
                    <h5>Filter content by:</h5>
                  </div>
                  <div className="inight_filter-list">
                    <select className="form-select" defaultValue={"Type"}>
                      <option>Type</option>
                      <option value="1">video</option>
                      <option value="2">report</option>
                      <option value="3">e-book</option>
                      <option value="3">interview</option>
                      <option value="3">Go</option>
                    </select>
                  </div>
                  <div className="inight_filter-list">
                    <select className="form-select" defaultValue={"Industry"}>
                      <option>Industry</option>
                      <option value="1">education</option>
                      <option value="2">tretment</option>
                      <option value="3">healt</option>
                      <option value="3">games</option>
                      <option value="3">child</option>
                    </select>
                  </div>
                  <div className="inight_filter-list">
                    <select className="form-select" defaultValue={"Technoloyies"}>
                      <option>Technologies</option>
                      <option value="1">Java</option>
                      <option value="2">Phop</option>
                      <option value="3">React js</option>
                      <option value="3">Devops</option>
                      <option value="3">Go</option>
                    </select>
                  </div>
                  <div className="inight_filter-list">
                    <select className="form-select" defaultValue={"Themes"}>
                      <option>Themes</option>
                      <option value="1">testimonial</option>
                      <option value="2">we work</option>
                      <option value="3">clients</option>
                      <option value="3">service</option>
                      <option value="3">about</option>
                    </select>
                  </div>
                </div>
                <div className="search-bottom_form">
                  <div className="total_show">
                    <h5>454 Insights</h5>
                  </div>
                  <div className="popular_show">
                    <div className="filter-by filter-by_two">
                      <h5>Sort by:</h5>
                    </div>
                    <div className="inight_filter-list most_list">
                      <select className="form-select" defaultValue={"Most Popular"}>
                        <option>Most Popular</option>
                        <option value="1">Recent</option>
                      </select>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
    




        <div className="row">
  {[
    {
      imgSrc: "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "AI Insights",
      description: "Using AI to turn complex data into actionable business insights.",
      topics: ["Machine Learning", "Predictive Analytics", "Automation", "Data Mining"],
      detailLink: "Insight",
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Smart AI Solutions",
      description: "Delivering tailored AI solutions across various industries.",
      topics: ["NLP", "Computer Vision", "AI Development", "Smart Algorithms"],
      detailLink: "Insight",
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Full-Stack Dev",
      description: "Comprehensive development services for web and mobile apps.",
      topics: ["React", "Node.js", "Backend Solutions", "Frontend Design"],
      detailLink: "Insight",
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Digital Transform",
      description: "Building engaging digital experiences tailored to your needs.",
      topics: ["Web Development", "Mobile Apps", "Cross-Platform", "UI/UX Design"],
      detailLink: "Insight",
    },
    {
      imgSrc: "https://plus.unsplash.com/premium_photo-1674669009418-2643aa58b11b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Cyber Defense",
      description: "Protecting your business with proactive security solutions.",
      topics: ["Network Security", "Threat Intelligence", "Risk Assessment", "Security Audits"],
      detailLink: "Insight",
    },
    {
      imgSrc: "https://plus.unsplash.com/premium_photo-1681487814165-018814e29155?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Data Privacy",
      description: "Ensuring data privacy with compliance-focused solutions.",
      topics: ["Data Encryption", "Compliance", "Access Control", "Incident Response"],
      detailLink: "Insight",
    },
  ].map((project, index) => (
    <div key={index} className="col-lg-4 col-md-6">
      <div className="insight-blog-single">
        <div className="img">
          <img src={project.imgSrc} alt={project.title} />
          <div className="read_more-now">
            <div className="icon">
              <i className="far fa-comment-alt"></i>
            </div>
            <h4><a href="#">more</a></h4>
          </div>
        </div>
        <div className="insight-content">
          <h3><a href={project.detailLink}>{project.title}</a></h3>
          <p>{project.description}</p>
          <div className="insight-btn">
            <ul>
              {project.topics.map((topic, idx) => (
                <li key={idx}><a href="#">{topic}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  ))}
  <div className="insight_blog-more pt-40">
    <p>You are viewing 1 of 10 content pieces...</p>
    <div className="progress_insight">
      <div className="bar" style={{ width: "3%" }}>
        <p className="percent"></p>
      </div>
    </div>
    <div className="insight-btn">
      <a href="Insight" className="main_button">
        <span className="button__label">Go more</span>
      </a>
    </div>
  </div>
</div>



      </div>
      <div className="transparent-grid">
        <div className="transparent-grid__container">
          <div className="transparent-grid__row">
            <div className="transparent-grid__column"></div>
            <div className="transparent-grid__column"></div>
            <div className="transparent-grid__column"></div>
            <div className="transparent-grid__column"></div>
            <div className="transparent-grid__column"></div>
            <div className="transparent-grid__column"></div>
            <div className="transparent-grid__column"></div>
            <div className="transparent-grid__column"></div>
            <div className="transparent-grid__column"></div>
            <div className="transparent-grid__column"></div>
            <div className="transparent-grid__column"></div>
            <div className="transparent-grid__column"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterSection;
