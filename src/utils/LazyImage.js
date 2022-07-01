import React, { useEffect, useRef, useState } from "react";

const LazyImage = ({ src, alt, styles }) => {
  const [show, setShow] = useState(false);
  const imageRef = useRef(null);

  const observerCallback = function (entries, observer) {
    const [entry] = entries;
    console.log(entry.isIntersecting);
    if (!entry.isIntersecting) {
      return;
    }
    setShow(true);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      threshold: 1,
    });
    observer.observe(imageRef.current);
    return () => {
      observer.disconnect(imageRef);
    };
  }, []);

  if (show) return <img src={src} alt={alt} style={{ ...styles }} />;
  else
    return (
      <span ref={imageRef} style={{ ...styles }}>
        Loading...
      </span>
    );
};

export default LazyImage;
