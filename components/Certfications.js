import React from "react";

function Certifications() {
  return (
    <div className="projectContainer">
      <h2
        className="componentsHeading"
        style={{ textAlign: "center", marginBottom: 0, fontSize: "xx-large" }}
      >
        Certifications
      </h2>
      <div className="projects">
        <div className="figure">
          <img
            alt="HackerInter"
            className="image"
            src="/images/hackerInter.png"
          />
          <figcaption className="captionTransform">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.hackerrank.com/certificates/0d0faa66f4b4"
              style={{
                padding: "0.3rem 2rem",
                background: "#0f1126",
                color: "#e31b6d",
              }}
            >
              Problem Solving (Intermediate)
            </a>
          </figcaption>
        </div>
        <div className="figure">
          <img
            alt="hackerAdvanced"
            className="image"
            src="/images/hackerAdvanced.png"
          />
          <figcaption className="captionTransform">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.hackerrank.com/certificates/5c9fcd464025"
              style={{
                padding: "0.3rem 2rem",
                background: "#0f1126",
                color: "#e31b6d",
              }}
            >
              Problem Solving (Advanced)
            </a>
          </figcaption>
        </div>
        <div className="figure">
          <img
            alt="hackerBasic"
            className="image"
            src="/images/hackerBasic.png"
          />
          <figcaption className="captionTransform">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.hackerrank.com/certificates/4964365800a2"
              style={{
                padding: "0.3rem 2rem",
                background: "#0f1126",
                color: "#e31b6d",
              }}
            >
              Problem Solving (Basic)
            </a>
          </figcaption>
        </div>
        <div className="figure">
          <img alt="cAdvanced" className="image" src="/images/cAdvanced.png" />
          <figcaption className="captionTransform">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://courses.edx.org/certificates/7c393759eab749fbaca3a5fc1746bbe9"
              style={{
                padding: "0.3rem 2rem",
                background: "#0f1126",
                color: "#e31b6d",
              }}
            >
              C: Advanced Data Types
            </a>
          </figcaption>
        </div>
        <div className="figure">
          <img alt="cAdvanced" className="image" src="/images/cAdvanced.png" />
          <figcaption className="captionTransform">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://courses.edx.org/certificates/5b5f5d40150d44b091f031f8d051e56d"
              style={{
                padding: "0.3rem 2rem",
                background: "#0f1126",
                color: "#e31b6d",
              }}
            >
              C: Memory Management
            </a>
          </figcaption>
        </div>
        <div className="figure">
          <img alt="cPointers" className="image" src="/images/cPointers.png" />
          <figcaption className="captionTransform">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://courses.edx.org/certificates/9f3402215cf14609967e0044a4243c50"
              style={{
                padding: "0.3rem 2rem",
                background: "#0f1126",
                color: "#e31b6d",
              }}
            >
              C: Pointers
            </a>
          </figcaption>
        </div>
        <div className="figure">
          <img alt="fcc" className="image" src="/images/fcc.png" />
          <figcaption className="captionTransform">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.freecodecamp.org/certification/mithhu/javascript-algorithms-and-data-structures"
              style={{
                padding: "0.3rem 2rem",
                background: "#0f1126",
                color: "#e31b6d",
              }}
            >
              JS Algo &amp; DS
            </a>
          </figcaption>
        </div>
        <div className="figure">
          <img alt="test" className="image" src="/images/test.png" />
          <figcaption className="captionTransform">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://openclassrooms.com/en/course-certificates/1651117985"
              style={{
                padding: "0.3rem 2rem",
                background: "#0f1126",
                color: "#e31b6d",
              }}
            >
              Test Your Website’s Interface
            </a>
          </figcaption>
        </div>
        <div className="figure">
          <img alt="git" className="image" src="/images/git.png" />
          <figcaption className="captionTransform">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://openclassrooms.com/en/course-certificates/5015340593"
              style={{
                padding: "0.3rem 2rem",
                background: "#0f1126",
                color: "#e31b6d",
              }}
            >
              Manage your code with Git
            </a>
          </figcaption>
        </div>
      </div>
    </div>
  );
}

export default Certifications;
