import React from "react";
import "./profession.css"; // Add custom styling
import lipl from '../../utils/lipl-logo.jpg';
import zignuts from '../../utils/zignuts-logo.png'

const Profession = () => {
  const experience = {
    name: "John Doe",
    title: "Node.js Developer",
    contact: "johndoe@example.com",
    location: "City, State",
    experiences: [
      {
        company: "Luminous Infoways Pvt. Ltd.",
        duration: "Jan 2024 – Present",
        background:lipl,
        responsibilities: [
          "Designed and developed scalable RESTful APIs using Node.js and Express.js, improving response times by 25%.",
          "Built responsive, component-based UIs using React.js and ensured smooth API interactions.",
          "Worked with MySQL and MongoDB to develop and maintain databases and data models",
          "Implemented authentication and authorization using JWT and Passport.js",
          "Collaborated with the frontend development team to ensure seamless integration of the backend and frontend",
          "Systems Participated in agile development practices, including daily stand-ups and sprint reviews",
          "Optimized database queries in MongoDB and MySQL, reducing execution time by 40%.",
        ],
        achievements: [
          "Delivered a high-traffic e-commerce platform that handled 100,000+ daily users without downtime.",
          "Reduced server costs by 20% through the implementation of efficient caching strategies using Redis.",
        ],
        tools: [
          "Node.js",
          "Express.js",
          "React js",
          "Redux",
          "Nest js",
          "MongoDB",
          "MySQL",
        ],
      },
      {
        company: "Zignuts Technolab Pvt. Ltd.",
        duration: "Jan 2022 – Jan-2024",
        background:zignuts,
        responsibilities: [
          "Designed and developed scalable RESTful APIs using Node.js and Express.js, improving response times by 25%.",
          "Integrated third-party APIs and payment gateways, ensuring secure and seamless user experiences.",
          "Built microservices architecture, allowing independent deployment and efficient scaling of applications.",
          "Optimized database queries in MongoDB,PostgreSQL and MySQL, reducing execution time by 40%.",
          "Implemented authentication and authorization using JWT and Passport.js and file management with AWS S3.",
          "Collaborated with the frontend development team to ensure seamless integration of the backend and frontend",
          "Systems Participated in agile development practices, including daily stand-ups and sprint reviews",
          "Successfully delivered a high-traffic e-commerce platform capable of handling a large number of daily users without experiencing downtime."
        ],
        achievements: [
          "Delivered a high-traffic e-commerce platform that handled 100,000+ daily users without downtime.",
          "Reduced server costs by 20% through the implementation of efficient caching strategies using Redis.",
        ],
        tools: [
          "Node.js",
          "Express.js",
          "Sails js",
          "MongoDB",
          "MySQL",
          "PostgreSQL",
          "Redis",
          "AWS S3",
          "Docker",
        ],
      },
    ],
  };

  return (
    <div id='profession'>
      {/* Header Section */}
      
        <h2 className="clientPageTitle">Professional Experience</h2>
  
      {/* Professional Experience */}
      <section className="experience-section">
        {experience.experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="company-content">
              <img src={exp.background} className="company company-logo" />
              <h4 className="company">{exp.company}</h4>
            </div>
            <p className="duration"><strong>{exp.duration}</strong></p>
            <ul>
              {exp.responsibilities.map((task, idx) => (
                <p key={idx}>{task}</p>
              ))}
            </ul>
            {/* <h5>Key Achievements</h5>
            <ul>
              {exp.achievements.map((achieve, idx) => (
                <p key={idx}>{achieve}</p>
              ))}
            </ul> */}
            {/* Tools & Technologies */}
            <div className="tools-section">
              <h3>Tools & Technologies</h3>
              <div className="tools">
                {experience.experiences[index].tools.map((tool, idx) => (
                  <span key={idx} className="tool-badge">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

    </div>
  );
};

export default Profession;
