import React from "react";
import LazyImage from "../../utils/LazyImage";
import RevealSection from "../../utils/RevealSection";
import "./features.css";
import digitImg from "../../assets/digital.jpg";
import cardImg from "../../assets/card.jpg";
import growImg from "../../assets/grow.jpg";

const Features = ({ sectionRef, feature_reveal }) => {
  return (
    <div
      ref={sectionRef}
      className={`section section-features ${
        !feature_reveal ? "section--hidden" : ""
      }`}
      data-reveal="feature"
    >
      <div className="feature_heading">
        <p>FEATURES</p>
        <h1>Everything you need in a modern bank and more.</h1>
      </div>
      <div className="feature_content">
        <LazyImage src={digitImg} alt="Digital img" />
        <div className="feature_content_features">
          <div className="features_icon">
            <ion-icon name="tv-outline"></ion-icon>
          </div>
          <h2>100% digital bank</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias
            sint quos? Accusantium a fugiat porro reiciendis saepe quibusdam
            debitis ducimus
          </p>
        </div>
        <div className="feature_content_features">
          <div className="features_icon">
            <ion-icon name="tv-outline"></ion-icon>
          </div>
          <h2>Watch your money grow</h2>
          <p>
            Nesciunt quos autem dolorum voluptates cum dolores dicta fuga
            inventore ab? Nulla incidunt eius numquam sequi iste pariatur
            quibusdam
          </p>
        </div>
        <LazyImage src={cardImg} alt="Card img" />
        <LazyImage src={growImg} alt="Grow img" />
        <div className="feature_content_features">
          <div className="features_icon">
            <ion-icon name="server-outline"></ion-icon>
          </div>
          <h2>Free debit card included</h2>
          <p>
            Quasi, fugit in cumque cupiditate reprehenderit debitis animi enim
            eveniet consequatur odit quam quos possimus assumenda dicta fuga
            inventore ab.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RevealSection(Features);
