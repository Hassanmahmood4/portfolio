import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-decorative" aria-hidden="true">
          <div className="landing-circle1" />
          <div className="landing-circle2" />
        </div>
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              HASSAN
              <br />
              <span>MAHMOOD</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Software &</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Tech</div>
              <div className="landing-h2-2">Business</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Business</div>
              <div className="landing-h2-info-1">Tech</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
