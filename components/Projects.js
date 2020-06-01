import React from "react";

function Projects() {
  return (
    <div className="projectContainer">
      <h2
        className="componentsHeading"
        style={{ textAlign: "center", marginBottom: 0, fontSize: "xx-large" }}
      >
        Projects
      </h2>
      <div className="projects">
        <div className="figure">
          <img
            alt="Find Restaurant"
            className="image"
            src="/images/restaurant.jpg"
          />
          <figcaption className="captionTransform">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://restaurant-review-mithhu.netlify.app/"
              style={{
                padding: "0.3rem 2rem",
                background: "#0f1126",
                color: "#e31b6d",
              }}
            >
              Find Restaurant
            </a>
          </figcaption>
        </div>
        <div className="figure">
          <img alt="CatFight" className="image" src="/images/catFight.jpg" />
          <figcaption className="captionTransform">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://mithhu.github.io/catfight"
              style={{
                padding: "0.3rem 2rem",
                background: "#0f1126",
                color: "#e31b6d",
              }}
            >
              CatFight
            </a>
          </figcaption>
        </div>
        <div className="figure">
          <img
            alt="Brooklyn Film Festival"
            className="image"
            src="/images/brooklyn.jpg"
          />
          <figcaption className="captionTransform">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://mithhu.github.io/brooklynfilmfestival/"
              style={{
                padding: "0.3rem 2rem",
                background: "#0f1126",
                color: "#e31b6d",
              }}
            >
              Brooklyn Film Festival
            </a>
          </figcaption>
        </div>
        <div className="figure">
          <img alt="Phone Store" className="image" src="/images/store.jpg" />
          <figcaption className="captionTransform">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://react-phone-store-e-commerce.netlify.app/"
              style={{
                padding: "0.3rem 2rem",
                background: "#0f1126",
                color: "#e31b6d",
              }}
            >
              Phone Store
            </a>
          </figcaption>
        </div>
        <div className="figure">
          <img alt="Natours" className="image" src="/images/natours.jpg" />
          <figcaption className="captionTransform">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://mithhu.github.io/natours"
              style={{
                padding: "0.3rem 2rem",
                background: "#0f1126",
                color: "#e31b6d",
              }}
            >
              Natours
            </a>
          </figcaption>
        </div>
        <div className="figure">
          <img
            alt="Twitch TV Stream"
            className="image"
            src="/images/twitch.jpg"
          />
          <figcaption className="captionTransform">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://codepen.io/mithhu/full/jGrgMV"
              style={{
                padding: "0.3rem 2rem",
                background: "#0f1126",
                color: "#e31b6d",
              }}
            >
              Twitch TV Stream
            </a>
          </figcaption>
        </div>
      </div>
    </div>
  );
}

export default Projects;
