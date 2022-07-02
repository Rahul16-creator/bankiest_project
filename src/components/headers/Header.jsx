import React, { useEffect, useState } from "react";
import Logo from "../Logo/Logo.index";
import Navigations from "../navigations/navigation";
import headerStyle from "./header.module.css";

const Header = ({ currentRef }) => {
  const [navActive, setNavActive] = useState(false);

  useEffect(() => {
    const observerCallback = function (entries, observer) {
      const [entry] = entries;
      if (!entry.isIntersecting) {
        setNavActive(true);
      } else {
        setNavActive(false);
      }
    };
    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin:"-90px",
      threshold: 0,
    });
    observer.observe(currentRef.current);

    return () => {
      observer.disconnect(currentRef);
    };
  }, [  navActive, currentRef]);

  return (
    <div className={`${headerStyle.header} ${navActive ? headerStyle.active : ""}`}>
      <Logo />
      <Navigations />
    </div>
  );
};

export default Header;
