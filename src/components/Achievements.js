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
            key={achievement.key}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#0fa3a3", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #0fa3a3" }}
            date={achievement.date}
            iconStyle={{ background: "#0fa3a3", color: "#fff" }}
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
