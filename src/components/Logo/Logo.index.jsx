import React from "react";
import LogoStyle from "./logo.module.css";

const Logo = () => {
  return (
    <div  className={LogoStyle.logo}>
      <img src={"/assets/logo.png"} alt={"Logo img"} />
    </div>
  );
};

export default Logo;
