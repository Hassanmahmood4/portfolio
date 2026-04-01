import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const sections = [
  {
    title: "FULL STACK DEVELOPMENT",
    subtitle: "Modern, responsive applications",
    body: "I build modern, responsive web applications using frontend and backend technologies. I focus on creating smooth user experiences while ensuring the systems behind them are scalable and efficient.",
    tags: [
      "React",
      "Responsive UI",
      "Frontend",
      "Backend",
      "Scalability",
    ],
  },
  {
    title: "BACKEND & API DEVELOPMENT",
    subtitle: "Reliable, performant integrations",
    body: "I design and integrate APIs that are reliable and performant. I work with data handling, server-side logic, and secure practices like environment variables and API key management.",
    tags: [
      "REST APIs",
      "Server logic",
      "Data handling",
      "Env & secrets",
      "API keys",
    ],
  },
];

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="whatIDO-visual">
        <div className="what-box whatIDO-title-box">
          <h2 className="title">
            W<span className="hat-h2">HAT</span>
            <div>
              I<span className="do-h2"> DO</span>
            </div>
          </h2>
        </div>
        <div className="whatIDO-character-slot" aria-hidden="true" />
      </div>
      <div className="whatIDO-cards-column">
        <div className="what-box whatIDO-cards-box">
          <div className="what-box-in">
            <div className="what-border2">
              <svg width="100%" preserveAspectRatio="none">
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="7,7"
                />
                <line
                  x1="100%"
                  y1="0"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="7,7"
                />
              </svg>
            </div>
            <div className="what-grid-cards">
              {sections.map((section, index) => (
                <div
                  key={section.title}
                  className="what-content what-noTouch"
                  ref={(el) => setRef(el, index)}
                >
                  <div className="what-border1">
                    <svg height="100%">
                      {index === 0 && (
                        <line
                          x1="0"
                          y1="0"
                          x2="100%"
                          y2="0"
                          stroke="white"
                          strokeWidth="2"
                          strokeDasharray="6,6"
                        />
                      )}
                      <line
                        x1="0"
                        y1="100%"
                        x2="100%"
                        y2="100%"
                        stroke="white"
                        strokeWidth="2"
                        strokeDasharray="6,6"
                      />
                    </svg>
                  </div>
                  <div className="what-corner"></div>

                  <div className="what-content-in">
                    <h3>{section.title}</h3>
                    <h4 className="what-card-subtitle">{section.subtitle}</h4>
                    <p className="what-card-body">{section.body}</p>
                    <div className="what-card-detail">
                      <h5>Skillset & tools</h5>
                      <div className="what-content-flex">
                        {section.tags.map((tag) => (
                          <div key={tag} className="what-tags">
                            {tag}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="what-arrow" aria-hidden="true" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
