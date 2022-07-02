import React, { useEffect, useRef, useState } from "react";
import LazyImage from "../../utils/LazyImage";
import "./features.css";

const Features = () => {
  const [reveal, setReveal] = useState(false);
  const sectionRef = useRef(null);

  const observerCallback = function (entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) {
      return;
    }
    setReveal(true);
  };

  useEffect(() => {

    let observer = new IntersectionObserver(observerCallback, {
      root: null,
      threshold: 0.15,
    });
    observer.observe(sectionRef?.current);
    return () => {
      observer.disconnect(sectionRef);
    };
  }, [sectionRef]);

  return (
    <div ref={sectionRef} className={`section section-features ${!reveal ? "section--hidden" : ""}`}>
      <div className="feature_heading">
        <p>FEATURES</p>
        <h1>Everything you need in a modern bank and more.</h1>
      </div>
      <div className="feature_content">
        <LazyImage
          src="/assets/digital.jpg"
          alt="Digital img"
          styles={{ position: "relative", width: "100%", height: "100%" }}
        />
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
        <LazyImage
          src="/assets/card.jpg"
          alt="Digital img"
          styles={{ position: "relative", width: "100%", height: "100%" }}
        />
        <LazyImage
          src="/assets/grow.jpg"
          alt="Digital img"
          styles={{ position: "relative", width: "100%", height: "100%" }}
        />
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

export default Features;
