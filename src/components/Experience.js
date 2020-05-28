import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import * as experienceList from "../assets/experienceList.json";

function Experience() {
  const experiences = experienceList.data;
  return (
    <div className="experienceContainer">
      <h2
        className="componentsHeading"
        style={{
          textAlign: "center",
          marginBottom: "1rem",
          fontSize: "xx-large",
        }}
      >
        Experiences
      </h2>

      <VerticalTimeline>
        {experiences.map((experience) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#e31b6d", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #e31b6d" }}
            date={experience.date}
            iconStyle={{ background: "#e31b6d", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              {experience.position}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              {experience.company}
            </h4>
            <ul>
              {experience.description.map((desc) => (
                <li>{desc}</li>
              ))}
            </ul>
            <div style={{ textAlign: "center" }}>
              <a
                style={{
                  padding: "0.3rem 2rem",
                  color: "#e31b6d",
                  background: "black",
                }}
                className="companyLink"
                href={experience.link}
              >
                Visit Compnay
              </a>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
