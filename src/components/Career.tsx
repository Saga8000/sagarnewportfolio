import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Science Intern</h4>
                <h5>Softroniics</h5>
              </div>
              <h3>May 2025 – Oct 2025</h3>
            </div>
            <p>
              Forecasting and anomaly detection, data preprocessing, feature engineering, and validation, model optimization
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development Intern</h4>
                <h5>Hexcent Pvt Ltd</h5>
              </div>
              <h3>Apr 2024 – May 2024</h3>
            </div>
            <p>
              Built backend services using Python, Django, REST APIs, and databases
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
