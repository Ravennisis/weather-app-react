import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="code">
      <a href="https://github.com/Ravennisis/weather-app-react" target="_blank" rel="noreferrer">
        Open-source code
      </a>{" "}
      by{" "}
      <a
        href="https://www.linkedin.com/in/ravenn-annibal-91811b201/"
        target="_blank" rel="noreferrer"
      >
        Ravenn Annibal
      </a>
      , hosted on{" "}
      <a href="https://brave-wiles-2e5325.netlify.app" target="_blank" rel="noreferrer">
        Netlify
      </a>
    </div>
  );
}