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
                <h4>Software Developer</h4>
                <h5>Current focus</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building and shipping web products end to end—thoughtful UX,
              maintainable codebases, and reliable APIs—with emphasis on
              performance, accessibility, and collaboration.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full-stack engineering</h4>
                <h5>Product &amp; delivery</h5>
              </div>
              <h3>Recent</h3>
            </div>
            <p>
              Delivering features across the stack: front-end interfaces,
              services and data layers, integrations, and deployment workflows
              alongside design and product partners.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software engineering</h4>
                <h5>Web &amp; applications</h5>
              </div>
              <h3>Earlier</h3>
            </div>
            <p>
              Progressive responsibility across application development, tooling,
              testing, and iteration based on user and stakeholder feedback.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Foundations</h4>
                <h5>Computer science &amp; practice</h5>
              </div>
              <h3>Start</h3>
            </div>
            <p>
              Strong grounding in software fundamentals, data structures, and
              engineering practice—carried into every role and project since.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
