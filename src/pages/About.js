import React from "react";
import Sith, { Jedi } from "../resources/Holocron";
import Character from "../resources/Character";
import {
  BladeColors,
  HiltColors,
  RobeColors,
  EyeColors,
  SkinColors,
} from "../resources/Colors";
import "../components/About.css";
class About extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          color: "white",
          textAlign: "center",

          padding: "50px",
          paddingTop: "0px",
        }}
      >
        <h2>About Holocron Resume</h2>

        <p>
          This website was created by me, Levi Ortega, for a Hackathon
          hosted by the company Spore in which the project took 1st place. The
          idea behind this project was to create a fun and interactive
          experience when it came to reviewing resumes. I wanted to incorporate
          my love for Star Wars and challenge myself by taking on new
          technologies and competing in my first Hackathon. This project was
          created using React as the front end, and Firebase/Firestore for the
          back end, hosting, and database. All of the code is open source to
          view here:{" "}
        </p>
        <a
          className="git-link"
          href="https://github.com/LeviOrtega/HoloFrontEnd"
        >
          https://github.com/LeviOrtega/HoloFrontEnd
        </a>


        <h3>What are Holocrons?</h3>
        <p>
          Holocrons are ancient repositories of knowledge and wisdom in the Star
          Wars universe that can only be accessed by those skilled in the Force.
          I had noticed the similarities between these repositories and what we
          use Resumes for. Thus, Holocron Resume was born.
        </p>

        <a
          className="git-link"
          href="https://www.youtube.com/watch?v=pI53nV-qqYo"
          style={{margin: "10px", }}
        >
          Watch Demo
        </a>

        <h3>Choose a Side</h3>
        <div className="holocron-demo">
          <div className="sith-demo">
            <div className="character-hover-wrapper">
              <Character
                bladeColor={BladeColors[0]}
                hiltColor={HiltColors[2]}
                robeColor={RobeColors[5]}
                eyeColor={EyeColors[5]}
                skinColor={SkinColors[5]}
              />
            </div>
            <Sith></Sith>
          </div>
          <div className="jedi-demo">
            <div className="character-hover-wrapper">
              <Character
                bladeColor={BladeColors[4]}
                hiltColor={HiltColors[1]}
                robeColor={RobeColors[0]}
                eyeColor={EyeColors[0]}
                skinColor={SkinColors[2]}
              />
            </div>
            <Jedi></Jedi>
          </div>
        </div>

        
      </div>
    );
  }
}

export default About;
