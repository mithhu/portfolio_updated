import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import resume from "../assets/images/resume.png";
import github from "../assets/icon/github.svg";
import cv from "../assets/icon/cv.svg";
import linkedin from "../assets/icon/linkedin.svg";

import MahamudulResume from "../assets/Mahamudul_Resume.pdf";
import { Animated } from "react-animated-css";

function About() {
  return (
    <div className="about">
      <div style={{ flex: 1, paddingRight: "2rem" }}>
        <h2
          style={{
            marginBottom: 0,
            marginTop: 0,
            fontSize: "5rem",
            letterSpacing: "0.5rem",
          }}
        >
          Hello
        </h2>
        <h2 style={{ margin: 0, fontSize: "5rem", letterSpacing: "0.5rem" }}>
          I am
        </h2>
        <Animated animationIn="fadeInRight" isVisible={true}>
          <h1
            style={{
              marginBottom: ".2rem",
              fontSize: "5rem",
              letterSpacing: "0.5rem",
            }}
          >
            Mithhu
          </h1>
        </Animated>
        <div style={{ display: "flex" }}>
          <div className="linkHover" style={{ padding: ".5rem" }}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/mithhu"
            >
              <img style={{ width: "2rem" }} src={linkedin} alt="LinkedIn" />
            </a>
          </div>
          <div className="linkHover" style={{ padding: ".5rem" }}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/mithhu"
            >
              <img style={{ width: "2rem" }} src={github} alt="Github" />
            </a>
          </div>
          <div className="linkHover" style={{ padding: ".5rem" }}>
            <a href={MahamudulResume} target="_blank" rel="noopener noreferrer">
              <img style={{ width: "2rem" }} src={cv} alt="Resume" />
            </a>
          </div>
        </div>
        <Animated animationIn="fadeInDownBig" isVisible={true}>
          <div>
            <h2
              style={{
                textDecoration: "underline",
                marginBottom: 0,
                marginTop: "3rem",
              }}
            >
              Skills
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <p style={{ fontWeight: "bold" }}>
                JavaScript(ES6) | Python | ReactJs | Redux | TypeScript | React
                Router | CSS3 | Sass | HTML5 | Firebase | git
              </p>
            </div>
          </div>
        </Animated>
      </div>
      <div className="zoomImage" style={{ marginTop: "3rem", flex: 1 }}>
        <Zoom zoomMargin={40}>
          <img
            style={{ boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" }}
            alt="Resume"
            src={resume}
            width="500"
          />
        </Zoom>
      </div>
    </div>
  );
}

export default About;
