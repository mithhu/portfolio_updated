import React from "react";
import Zoom from "react-medium-image-zoom";
import Github from "../public/icons/github.svg";
import Cv from "../public/icons/cv.svg";
import Linkedin from "../public/icons/linkedin.svg";

function About() {
  return (
    <div className="about">
      <div style={{ flex: 1, paddingRight: "2rem" }}>
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
              <Linkedin
                style={{ width: "2rem", height: "2rem" }}
                alt="LinkedIn"
              />
            </a>
          </div>
          <div className="linkHover" style={{ padding: ".5rem" }}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/mithhu"
            >
              <Github style={{ width: "2rem", height: "2rem" }} alt="Github" />
            </a>
          </div>
          <div className="linkHover" style={{ padding: ".5rem" }}>
            <a href="/Mahamudul_Resume.pdf" target="_blank">
              <Cv style={{ width: "2rem", height: "2rem" }} alt="Resume" />
            </a>
          </div>
        </div>
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
              <span style={{ fontWeight: 800 }}>Front-end: </span>
              JavaScript(ES6) | Python | C++ | React | Redux | TypeScript |
              React Query | Next | D3 | CSS3 React Router | CSS3 | Sass | HTML5
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <p style={{ fontWeight: 600 }}>
              <span style={{ fontWeight: 800 }}>Backend: </span>
              Python | Webpack | SQL | C++ | Node | Express | Object Oriented
              Programming
            </p>
          </div>
        </div>
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
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "column",
            }}
          >
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
      </div>
      <div className="zoomImage" style={{ flex: 1, alignItems: "center" }}>
        <Zoom zoomMargin={40}>
          <img
            style={{ boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" }}
            alt="Resume"
            src="/images/resume.jpg"
            width="500"
          />
        </Zoom>
      </div>
    </div>
  );
}

export default About;
