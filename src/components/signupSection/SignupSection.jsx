import React from "react";
import RevealSection from "../../utils/RevealSection";
import "./signupSection.css";

const SignupSection = ({sectionRef,signup_reveal}) => {
  return (
    <div className={`section section-signup `}>
      <div ref={sectionRef}  className={`section-signup-content ${!signup_reveal ? "section--hidden" : ""}`}  data-reveal="signup">
        <h3>
          The best day to join Bankist was one year ago. The second best is
          today!
        </h3>
      </div>
      <button className="btn section-signup-btn">Open your free account today!</button>
    </div>
  );
};

export default RevealSection(SignupSection);
