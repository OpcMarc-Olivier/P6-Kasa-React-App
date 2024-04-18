import React from "react";
import "../styles/collapsable.css";

function Collapsable({ label }) {
  return (
    <div className="collapsable-item">
      Collapsable
      <button>
        <img src="../assets/icons/arrow-collapse.svg" alt="" />
      </button>
    </div>
  );
}

export default Collapsable;
