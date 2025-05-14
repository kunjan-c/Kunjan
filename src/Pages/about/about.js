import React from "react";
import "./about.css";

export default function About() {
  return (
    <section className="about-container"  id="about">
      <div className="about-text-wrapper">
        <h2 className="about-title">About Me</h2>
        <div className="about-content">
          <div className="about-item">
            <span className="icon">👩‍💻</span>
            <div className="content">
              <p className="intro">
                Hi, I’m a <span className="highlight">Frontend Engineer</span> with
                <strong> 3+ years of experience</strong> crafting elegant,
                responsive, and performant web applications.
              </p>
            </div>
          </div>
          
          <div className="about-item">
            <span className="icon">🛠️</span>
            <div className="content">
              <p>
                My stack includes <strong>ReactJS, HTML, CSS, JavaScript,</strong>{" "}
                and modern frameworks like <strong>Next.js</strong> and{" "}
                <strong>Redux</strong>. With a background in Commerce, I bring a
                unique mix of creative design thinking and business logic to every
                project.
              </p>
            </div>
          </div>

          <div className="about-item">
            <span className="icon">💡</span>
            <div className="content">
              <p>
                I take pride in building smooth UI/UX, writing clean code, and
                collaborating across teams. My portfolio is proof of my attention to
                detail and passion for user-centric experiences.
              </p>
            </div>
          </div>
          
          <p className="closing">
            Let’s connect and turn your vision into an interactive reality.
          </p>
        </div>
      </div>
    </section>
  );
}
