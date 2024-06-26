import React, { useState } from "react";
import "./collapsable.css";
import arrowCollapse from "../../../assets/icons/arrow-collapse.svg";

function Collapsable({ headLabel, children }) {
  //state
  const [isOpen, setIsOpen] = useState(false);

  //comportements
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  //render
  return (
    <div className="collapsable-item">
      <div className="collapsable-head">
        <span>{headLabel}</span>
        <button className="toggle" onClick={handleClick}>
          <img
            className={
              isOpen
                ? "arrow-icon arrow-icon-open"
                : "arrow-icon arrow-icon-closed"
            }
            src={arrowCollapse}
            alt="logo kasa application"
          />
        </button>
      </div>
      {isOpen && <div className="collapsable-content">{children}</div>}
    </div>
  );
}

export default Collapsable;
