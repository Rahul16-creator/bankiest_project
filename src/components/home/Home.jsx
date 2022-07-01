import React from "react";
import "./home.css";

const Home = ({currentRef}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
    <div className="section section_home" ref={currentRef}>
        <h1>
          When <span className="highlight sm-highlight"> banking </span> meets{" "}
          <span className="highlight">minimalist </span>
        </h1>
        <h4>A simpler banking experience for a simpler life.</h4>
        <a href="/#">Learn more ↓</a>
        <img src="/assets/hero.png" alt="home_img" className="home_img" />
      </div>
    </div>
  );
};

export default Home;
