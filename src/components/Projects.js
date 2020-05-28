import React from "react";
import catfight from "../assets/images/catFight.jpg";
import restaurant from "../assets/images/restaurant.jpg";
import brooklyn from "../assets/images/brooklyn.jpg";
import store from "../assets/images/store.jpg";
import natours from "../assets/images/natours.jpg";
import twitch from "../assets/images/twitch.jpg";

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
          <img alt="CatFight" className="image" src={catfight} />
          <figcaption className="captionTransform">
            <a
              href="/"
              style={{
                padding: "0.3rem 2rem",
                background: "#e31b6d",
                color: "white",
              }}
            >
              CatFight
            </a>
          </figcaption>
        </div>
        <div className="figure">
          <img alt="Find Restaurant" className="image" src={restaurant} />
          <figcaption className="captionTransform">
            <a
              href="/"
              style={{
                padding: "0.3rem 2rem",
                background: "#e31b6d",
                color: "white",
              }}
            >
              Find Restaurant
            </a>
          </figcaption>
        </div>
        <div className="figure">
          <img alt="Brooklyn Film Festival" className="image" src={brooklyn} />
          <figcaption className="captionTransform">
            <a
              href="/"
              style={{
                padding: "0.3rem 2rem",
                background: "#e31b6d",
                color: "white",
              }}
            >
              Brooklyn Film Festival
            </a>
          </figcaption>
        </div>
        <div className="figure">
          <img alt="Phone Store" className="image" src={store} />
          <figcaption className="captionTransform">
            <a
              href="/"
              style={{
                padding: "0.3rem 2rem",
                background: "#e31b6d",
                color: "white",
              }}
            >
              Phone Store
            </a>
          </figcaption>
        </div>
        <div className="figure">
          <img alt="Twitch TV Stream" className="image" src={twitch} />
          <figcaption className="captionTransform">
            <a
              href="/"
              style={{
                padding: "0.3rem 2rem",
                background: "#e31b6d",
                color: "white",
              }}
            >
              Twitch TV Stream
            </a>
          </figcaption>
        </div>
        <div className="figure">
          <img alt="Natours" className="image" src={natours} />
          <figcaption className="captionTransform">
            <a
              href="/"
              style={{
                padding: "0.3rem 2rem",
                background: "#e31b6d",
                color: "white",
              }}
            >
              Natours
            </a>
          </figcaption>
        </div>
      </div>
    </div>
  );
}

export default Projects;
