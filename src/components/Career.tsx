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
                <h4>Full-Stack Developer & AI Engineer</h4>
                <h5>IILM University</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Developing CodePilot AI, an LLM-powered coding assistant, and AI Emotion
              Detection system using facial recognition with CNN. Building RESTful API
              services and integrating Firebase for scalable applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer</h4>
                <h5>Nidhaan.in · Remote</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Aug 2024 – Oct 2024. Created responsive web pages from Figma designs,
              integrated REST APIs, and ensured cross-browser compatibility. Delivered
              high-quality user interfaces with modern web technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
