import React, { useEffect, useRef, useState } from "react";

const LazyImage = ({ src, alt, styles }) => {
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
          console.log("loaded",imageLoaded);
          setImageLoaded(true)}
        }
        className={`${!imageLoaded ? "image_blur" : ""}`}
      />
    );
  else
    return (
      <span
        ref={imageRef}
        style={{ ...styles}}
        className="image_blur"
      >
        Loading...
      </span>
    );
};

export default LazyImage;
