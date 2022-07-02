import React from "react";
import LogoStyle from "./logo.module.css";
import logo from "../../assets/logo.png"

const Logo = () => {
  return (
    <div  className={LogoStyle.logo}>
      <img src={logo} alt={"Logo img"} />
    </div>
  );
};

export default Logo;
