import React from "react";
import Zoom from "react-medium-image-zoom";
import Github from "../public/github.svg";
import Cv from "../public/cv.svg";
import Linkedin from "../public/linkedin.svg";
import Link from "next/link";
// import { Document, Page, BlobProvider } from "@react-pdf";
// import { pdfjs } from "react-pdf";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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
            <Link href="/Mahamudul_Resume.pdf">
              <a target="_blank">
                <Cv style={{ width: "2rem", height: "2rem" }} alt="Resume" />
              </a>
            </Link>
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
              JavaScript(ES6) | Python | C++ | ReactJS | Redux | TypeScript |
              React Router | CSS3 | Sass | HTML5 | Firebase | git
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
            src="/resume.png"
            width="500"
          />
        </Zoom>
      </div>
    </div>
  );
}

export default About;
