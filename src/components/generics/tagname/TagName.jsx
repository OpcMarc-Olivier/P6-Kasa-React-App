import React from "react";
import "./tagName.css";

function TagName({ tag }) {
  return (
    <div className="tag">
      <p>{tag}</p>
    </div>
  );
}

export default TagName;
