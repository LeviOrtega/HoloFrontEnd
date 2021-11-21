import React from "react";

class About extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          color: "white",
          textAlign: "center",
        }}
      >
        <h3>Welcome to Holocron Resume</h3>
        <p>
          This website was created by me, Levi Ortega, for a Hackathon
          competition hosted by the company Spore. My idea behind this project
          was to create a fun and interactive experience when it came to
          reviewing resumes. I wanted to incorporate my love for Star Wars and
          challenge myself by taking on new technologies and competing in my
          first Hackathon. This project was created using React as the front
          end, and Firebase/Firestore for the back end, hosting, and database.
          All of the code is open source to view here:{" "}
        </p>
        <a href="https://github.com/LeviOrtega/HoloFrontEnd">
          https://github.com/LeviOrtega/HoloFrontEnd
        </a>
      </div>
    );
  }
}

export default About;
