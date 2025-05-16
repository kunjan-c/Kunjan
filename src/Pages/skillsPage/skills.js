import React from "react";
import "./skills.css";

const skillsData = {
  "Front End": [
    "HTML", "CSS", "CSS3", "LESS", "SCSS", "JavaScript", "TypeScript",
    "ReactJS", "Redux", "Redux Toolkit", "React Hooks", "React Router",
    "Next.js", "Vue.js", "Bootstrap", "React-Bootstrap", "Material UI",
    "Tailwind", "Vite", "jQuery", "GraphQL", "JSON", "REST API", "OOP",
    "Responsive Design", "Cross-browser Compatibility"
  ],
  "Back End": ["Node.js", "Express.js", "Python"],
  "Database": ["MongoDB", "SQL", "PostgreSQL"],
  "AI Tools": ["OpenAI (ChatGPT)", "Google Gemini"],
  "Task & Project Management": ["GitHub", "Git", "Bitbucket", "JIRA"],
  "Development Tools": ["Visual Studio Code", "NPM", "Chrome Debug Tools"],
  "Design Tools": ["Canva", "GIMP", "Figma"],
  "Digital Marketing": [
    "Google Keyword Planner", "Google AdWords", "Google Analytics",
    "MailChimp", "Facebook Ads", "Instagram Marketing",
    "Google Trends", "Keywords Everywhere", "Buffer", "SEO"
  ],
  "Utilities": ["Microsoft Office", "Tally ERP 9"],
  "Operating Systems": ["Windows", "macOS", "Linux"],
};

export default function SkillsSection() {
  return (
    <div className="skills-section" id="skills">
      <h2 className="section-title">Skills</h2>
      {Object.entries(skillsData).map(([category, skills]) => (
        <div key={category} className="skill-group">
          <h3 className="skill-category">{category}</h3>
          <ul className="skill-list">
            {skills.map((skill, idx) => (
              <li key={idx} className="skill-item">{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
