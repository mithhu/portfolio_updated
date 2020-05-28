import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import * as achievementList from "../assets/achievementList.json";

function Achievements() {
  const achievements = achievementList.data;
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
        Achievements
      </h2>

      <VerticalTimeline>
        {achievements.map((achievement) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#e31b6d", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #e31b6d" }}
            date={achievement.date}
            iconStyle={{ background: "#e31b6d", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              {achievement.position}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              {achievement.company}
            </h4>
            <ul>
              {achievement.description.map((desc) => (
                <li>{desc}</li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default Achievements;
