import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  imgAnimation,
  lineAnimation,
  slider,
  sliderContainer,
} from "../animation";

function OurWork() {
  return (
    <StyleWork
      style={{ background: "#eeeeee" }}
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <motion.div variants={sliderContainer}>
        <StyleFrame1 variants={slider}></StyleFrame1>
        <StyleFrame2 variants={slider}></StyleFrame2>
        <StyleFrame3 variants={slider}></StyleFrame3>
        <StyleFrame4 variants={slider}></StyleFrame4>
      </motion.div>

      <StyleMovie>
        <motion.h2 variants={fade}>The Athelete</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <StyleHide>
            <motion.img
              variants={imgAnimation}
              src={athlete}
              alt="athlete"
            ></motion.img>
          </StyleHide>
        </Link>
      </StyleMovie>
      <StyleMovie>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link to="/work/the-racer">
          <img src={theracer} alt="theracer"></img>
        </Link>
      </StyleMovie>
      <StyleMovie>
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link to="/work/good-times">
          <img src={goodtimes} alt="goodtimes"></img>
        </Link>
      </StyleMovie>
    </StyleWork>
  );
}

const StyleWork = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;
const StyleMovie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.3rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const StyleHide = styled.div`
  overflow: hidden;
`;

const StyleFrame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const StyleFrame2 = styled(StyleFrame1)`
  background: #ff8efb;
`;
const StyleFrame3 = styled(StyleFrame1)`
  background: #8ed2ff;
`;
const StyleFrame4 = styled(StyleFrame1)`
  background: #8effa0;
`;

export default OurWork;
