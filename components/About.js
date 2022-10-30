import React, { useEffect } from "react";
import Zoom from "react-medium-image-zoom";
import { AiFillGithub, AiFillLinkedin, AiOutlineFilePdf } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { SiLeetcode } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa";
import { scrollToTop } from "../utils";

function About() {
  useEffect(scrollToTop, []);
  return (
    <div className="about">
      <div style={{ flex: 1, paddingRight: "2rem" }}>
        <div class="about_mobile">
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
          <a
            style={{
              margin: 0,
              paddingLeft: "0.5rem",
              fontWeight: 600,
              color: "#e31b6d",
            }}
            href="mailto:mithhu121212@gmail.com"
          >
            mithhu121212@gmail.com
          </a>
          <div style={{ display: "flex" }}>
            <div className="linkHover" style={{ padding: ".5rem" }}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/mithhu"
              >
                <AiFillLinkedin
                  style={{ width: "2rem", height: "2rem" }}
                  alt="LinkedIn"
                  className="linkColor"
                />
              </a>
            </div>
            <div className="linkHover" style={{ padding: ".5rem" }}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/mithhu"
              >
                <AiFillGithub
                  style={{ width: "2rem", height: "2rem" }}
                  alt="Github"
                  className="linkColor"
                />
              </a>
            </div>
            <div className="linkHover" style={{ padding: ".5rem" }}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://leetcode.com/mithhu1/"
              >
                <SiLeetcode
                  style={{ width: "2rem", height: "2rem" }}
                  alt="LeetCode"
                  className="linkColor"
                />
              </a>
            </div>
            <div className="linkHover" style={{ padding: ".5rem" }}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.hackerrank.com/mithhu"
              >
                <FaHackerrank
                  style={{ width: "2rem", height: "2rem" }}
                  alt="HackerRank"
                  className="linkColor"
                />
              </a>
            </div>

            <div className="linkHover" style={{ padding: ".5rem" }}>
              <a href="/Mahamudul_Resume.pdf" target="_blank">
                <CgFileDocument
                  style={{ width: "2rem", height: "2rem" }}
                  alt="Resume"
                  className="linkColor"
                />
              </a>
            </div>
            <div className="linkHover" style={{ padding: ".5rem" }}>
              <a href="/Mahamudul_Portfolio.pdf" target="_blank">
                <AiOutlineFilePdf
                  style={{ width: "2rem", height: "2rem" }}
                  alt="Portfolio"
                  className="linkColor"
                />
              </a>
            </div>
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
              JavaScript(ES6) | React | Redux | TypeScript | React Query | Next
              | D3 | React Router | CSS3 | Sass | HTML5 | Three.js | Vue
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <p style={{ fontWeight: 600 }}>
              <span style={{ fontWeight: 800 }}>Backend: </span>
              Python | SQL | C++ | Node | Express
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <p style={{ fontWeight: 600 }}>
              <span style={{ fontWeight: 800 }}>Others: </span>
              Webpack | Object Oriented Programming | Functional Programming
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
            loading="lazy"
            style={{ boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" }}
            alt="Resume"
            src="/images/resume.png"
            width="500"
          />
        </Zoom>
      </div>
    </div>
  );
}

export default About;
