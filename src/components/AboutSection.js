import React from "react";
import home1 from "../img/home1.png";
import { StyleAbout, StyleDescription, StyleHide, StyleImage } from "../styles";
import { motion } from "framer-motion";
import { titleAnimation, fade, imgAnimation } from "../animation";
import Wave from "./Wave";

function AboutSection() {
  return (
    <StyleAbout>
      <StyleDescription>
        <div className="title">
          <StyleHide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </StyleHide>
          <StyleHide>
            <motion.h2 variants={titleAnimation}>
              your <span> dreams</span> come
            </motion.h2>
          </StyleHide>
          <StyleHide>
            <motion.h2 variants={titleAnimation}>true</motion.h2>
          </StyleHide>
        </div>
        <motion.p variants={fade}>
          Contact us for any photography ideas that you have ;)
        </motion.p>
        <motion.button variants={fade}>Contact</motion.button>
      </StyleDescription>
      <StyleImage>
        <motion.img
          variants={imgAnimation}
          src={home1}
          alt="guy with camera"
        ></motion.img>
      </StyleImage>
      <Wave />
    </StyleAbout>
  );
}

export default AboutSection;
