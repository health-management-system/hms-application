import React from "react";
import "./subtitle.css";

export default function Subtitle({ title = "Title" }) {
  return (
    <div data-cy="subtitle" className="subtitle-div rounded-md" id="title-box">
      {title}
    </div>
  );
}
