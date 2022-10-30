import React, { useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import * as experienceList from "../assets/experienceList.json";
import { scrollToTop } from "../utils";

function Experience() {
  const experiences = experienceList.data;
  useEffect(scrollToTop, []);
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
        Experience
      </h2>

      <VerticalTimeline layout="1-column-left">
        {experiences.map((experience) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#0fa3a3", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #0fa3a3" }}
            date={experience.date}
            iconStyle={{ background: "#0fa3a3", color: "#fff" }}
            key={experience.key}
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
                  background: "#0f1126",
                }}
                className="companyLink"
                target="_blank"
                rel="noopener noreferrer"
                href={experience.link}
              >
                Visit Company
              </a>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
