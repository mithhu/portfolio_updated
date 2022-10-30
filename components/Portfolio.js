import React, { useEffect } from "react";
import { scrollToTop } from "../utils";

function Portfolio() {
  useEffect(scrollToTop, []);
  return (
    <div className="projectContainer">
      <h2
        className="componentsHeading"
        style={{ textAlign: "center", marginBottom: 0, fontSize: "xx-large" }}
      >
        Portfolio
      </h2>
      <div className="portfolio">
        <div>
          <img
            loading="lazy"
            alt="HackerInter"
            className="image"
            src="/images/mahamudul_portfolio_qr.png"
            style={{
              width: 300,
              height: 300,
              boxShadow: "none",
            }}
          />
        </div>

        <p style={{ fontWeight: 600 }}>
          Scan or{" "}
          <a
            className="menuHover"
            href="/Mahamudul_Portfolio.pdf"
            target="_blank"
            style={{ padding: "5px" }}
          >
            click here
          </a>{" "}
          to download the detailed Work Portfolio
        </p>
      </div>
    </div>
  );
}

export default Portfolio;
