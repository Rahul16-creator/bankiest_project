import React from "react";
import "./footer.css";
import LazyImage from "../../utils/LazyImage";

const Footer = () => {
  return (
    <div className={"footer"}>
      <div className="footer_list">
        <ul className="footer_list_items">
          <li>about</li>
          <li>pricing</li>
          <li>terms of use</li>
          <li>privacy policy</li>
          <li>careers</li>
          <li>blog</li>
          <li>contact us</li>
        </ul>
      </div>
      <LazyImage
        src="/assets/icon.png"
        alt="Digital img"
        styles={{ position: "relative", width: "5rem", height: "5rem" }}
      />
      <p>
        © Copyright by <span> Rahul krishnan. </span> Use for learning or your
        portfolio. Don't use to teach. Don't claim as your own product.
      </p>
    </div>
  );
};

export default Footer;
