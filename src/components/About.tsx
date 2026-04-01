import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I&apos;m a software developer who values clear product thinking and strong
          engineering. I enjoy turning ideas into real, shipped solutions — building
          interfaces people love, APIs that scale under pressure, and details that make
          products feel intentional.
        </p>
        <p className="para">
          My focus is full-stack development, where I combine clean frontend
          experiences with reliable backend systems. I work with modern tools, integrate
          APIs, handle secure data practices like API key management, and implement
          authentication systems such as Clerk.
        </p>
        <p className="para">
          I&apos;m also exploring machine learning to bring intelligent features into
          applications, aiming to build products that are not just functional, but smart
          and impactful.
        </p>
        <p className="para">
          I value collaboration with designers and stakeholders, and I&apos;m committed
          to continuous learning as technology evolves.
        </p>
      </div>
    </div>
  );
};

export default About;
