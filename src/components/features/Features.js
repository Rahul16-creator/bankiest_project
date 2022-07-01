import React from "react";
import "./features.css";

const Features = ({ currentRef }) => {
  return (
    <div ref={currentRef} className="section section-features">
      <div>Heading</div>
      <div>grids</div>
    </div>
  );
};

export default Features;
