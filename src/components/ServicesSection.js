import React from "react";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
import styled from "styled-components";
import { StyleAbout, StyleDescription, StyleImage } from "../styles";
//urmatoarele doua le folosim pt animatie la scroll
import { fade } from "../animation";
import { useScroll } from "./useScroll";

function ServicesSection() {
  const [element, controls] = useScroll();
  return (
    <StyleServices
      variants={fade}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <StyleDescription>
        <h2>
          High <span> quality </span> services
        </h2>
        <StyleCards>
          <StyleCard>
            <div className="icon">
              <img alt="icon" src={clock}></img>
              <h3>Efficient</h3>
            </div>
            <p>bla bla bla bla blabala</p>
          </StyleCard>
          <StyleCard>
            <div className="icon">
              <img alt="icon" src={teamwork}></img>
              <h3>Teamwork</h3>
            </div>
            <p>bla bla bla bla blabala</p>
          </StyleCard>
          <StyleCard>
            <div className="icon">
              <img alt="icon" src={diaphragm}></img>
              <h3>Diaphragm</h3>
            </div>
            <p>bla bla bla bla blabala</p>
          </StyleCard>
          <StyleCard>
            <div className="icon">
              <img alt="icon" src={money}></img>
              <h3>Affordable</h3>
            </div>
            <p>bla bla bla bla blabala</p>
          </StyleCard>
        </StyleCards>
      </StyleDescription>
      <StyleImage>
        <img alt="camera" src={home2}></img>
      </StyleImage>
    </StyleServices>
  );
}

//doresc sa modfici putin designul partii de About din aceasta componenta
const StyleServices = styled(StyleAbout)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const StyleCards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const StyleCard = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
  }
  h3 {
    margin-left: 1rem;
    background: white;
    color: black;
    padding: 1rem;
  }
`;

export default ServicesSection;
