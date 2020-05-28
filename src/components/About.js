import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import resume from "../assets/images/resume.png";
import github from "../assets/icon/github.svg";
import cv from "../assets/icon/cv.svg";
import linkedin from "../assets/icon/linkedin.svg";

import MahamudulResume from "../assets/Mahamudul_Resume.pdf";

function About() {
  return (
    <div className="about">
      <div style={{ flex: 1, paddingRight: "2rem" }}>
        {/* <Animated animationIn="fadeInRight" isVisible={true}> */}
        <h1
          style={{
            marginBottom: ".2rem",
            marginTop: "0",
            fontSize: "5rem",
            letterSpacing: "0.5rem",
            fontWeight: "lighter",
          }}
        >
          Mithhu
        </h1>
        {/* </Animated> */}
        {/* <Animated animationIn="fadeInUpBig" isVisible={true}> */}
        <p style={{ margin: 0, paddingLeft: "0.5rem", fontWeight: 600 }}>
          mithhu333@gmail.com | +8801742001078
        </p>
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
        {/* </Animated> */}
        {/* <Animated animationIn="fadeInDownBig" isVisible={true}> */}
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
            <p style={{ fontWeight: 600 }}>
              JavaScript(ES6) | Python | C++ | ReactJS | Redux | TypeScript |
              React Router | CSS3 | Sass | HTML5 | Firebase | git
            </p>
          </div>
        </div>
        {/* </Animated> */}
        {/* <Animated animationIn="fadeInRight" isVisible={true}> */}
        <div>
          <h2
            style={{
              textDecoration: "underline",
              marginBottom: 0,
              marginTop: "3rem",
            }}
          >
            Education
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <div>
              <h3 style={{ marginBottom: 0 }}>
                East West Universiy{" "}
                <span style={{ fontWeight: "lighter", fontSize: "medium" }}>
                  (2015-2018)
                </span>
              </h3>
              <p style={{ margin: 0 }}>
                Bachelor of Engineering (B.Eng.), Electrical and Electronics
                Engineering
              </p>
            </div>
            <div>
              <h3 style={{ marginBottom: 0 }}>
                OpenClassrooms{" "}
                <span style={{ fontWeight: "lighter", fontSize: "medium" }}>
                  (2019-2020)
                </span>
              </h3>
              <p style={{ margin: 0 }}>
                Bachelor's-level diploma, Front-end developer path
              </p>
            </div>
          </div>
        </div>
        {/* </Animated> */}
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
