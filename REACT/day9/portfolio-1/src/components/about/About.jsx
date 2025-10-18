import React from "react";
import "./About.css";

// About component uses the local About.css styles (not Tailwind)
const About = () => {
  const skillsData = [
    { name: "HTML & CSS", width: "50%" },
    { name: "React JS", width: "70%" },
    { name: "JavaScript", width: "60%" },
    { name: "Next JS", width: "50%" },
  ];

  const achievementsData = [
    { count: "10+", text: "Years Of Experience" },
    { count: "90+", text: "Projects Completed" },
    { count: "15+", text: "Happy Clients" },
  ];

  return (
    <div id="about" className="about">

      {/* Title Section */}
      <div className="about-title">
        <h1>About Me</h1>
        <img
          src="https://placehold.co/150x10/DF8908/B415FF"
          alt="Theme Pattern"
        />
      </div>

      {/* About Sections (Image and Text/Skills) */}
      <div className="about-sections">
        <div className="about-left">
          <img
            src="https://placehold.co/350x450/32323c/ffffff?text=Developer+Profile"
            alt="Profile"
          />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
              nam vel. Animi nobis officia corporis corrupti tempora, rem
              doloremque necessitatibus?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
              impedit in cupiditate neque nostrum tempora, totam ratione dicta
              ullam excepturi.
            </p>
          </div>

          <div className="about-skills">
            {skillsData.map((skill) => (
              <div key={skill.name} className="about-skill">
                <p>{skill.name}</p>
                <hr style={{ width: skill.width }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="about-achievements">
        {achievementsData.map((achievement, index) => (
          <React.Fragment key={achievement.text}>
            <div className="about-achievement">
              <h1>{achievement.count}</h1>
              <p>{achievement.text}</p>
            </div>

            {index < achievementsData.length - 1 && <hr />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default About;
