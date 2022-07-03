import React, { useEffect, useRef, useState } from "react";
// import logo from "../assets/logo.png";

const LazyImage = ({ src, alt="", styles={},className="" }) => {
  const [show, setShow] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageRef = useRef(null);

  const observerCallback = function (entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) {
      return;
    }
    setImageLoaded(false);
    setShow(true);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      threshold: 0,
    });
    observer.observe(imageRef?.current);
    return () => {
      observer.disconnect(imageRef);
    };
  }, []);

  if (show)
    return (
      <img
        src={src}
        alt={alt}
        style={{ ...styles }}
        onLoad={() => {
          setImageLoaded(true);
        }}
        className={`${className} ${!imageLoaded ? "image_blur" : ""}`}
      />
    );
  else
    return (
      <span ref={imageRef} style={{ ...styles }} className="image_blur">
        Loading...
      </span>
      // <img
      //   ref={imageRef}
      //   src={logo}
      //   alt={alt}
      //   style={{ ...styles }}
      //   className={`${!imageLoaded ? "image_blur" : ""}`}
      // />
    );
};

export default LazyImage;
