import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
function OurWork() {
  return (
    <StyleWork>
      <StyleMovie>
        <h2>The Athelete</h2>
        <div className="line"></div>
        <Link>
          <img src={athlete} alt="athlete"></img>
        </Link>
      </StyleMovie>
      <StyleMovie>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link>
          <img src={theracer} alt="theracer"></img>
        </Link>
      </StyleMovie>
      <StyleMovie>
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link>
          <img src={goodtimes} alt="goodtimes"></img>
        </Link>
      </StyleMovie>
    </StyleWork>
  );
}

const StyleWork = styled.div`
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
    background: #cccccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default OurWork;
