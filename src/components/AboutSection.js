import React from "react";
import home1 from "../img/home1.png";
import { StyleAbout, StyleDescription, StyleHide, StyleImage } from "../styles";
function AboutSection() {
  return (
    <StyleAbout>
      <StyleDescription>
        <div className="title">
          <StyleHide>
            <h2>We work to make</h2>
          </StyleHide>
          <StyleHide>
            <h2>
              your <span> dreams</span> come
            </h2>
          </StyleHide>
          <StyleHide>
            <h2>true</h2>
          </StyleHide>
        </div>
        <p>Contact us for any photography ideas that you have ;)</p>
        <button>Contact</button>
      </StyleDescription>
      <StyleImage>
        <img src={home1} alt="guy with camera"></img>
      </StyleImage>
    </StyleAbout>
  );
}

export default AboutSection;
