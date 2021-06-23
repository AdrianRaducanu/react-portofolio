import React from "react";
import styled from "styled-components";
import { StyleAbout } from "../styles";
function FaqSection() {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <div className="questions">
        <h4>How do I start?</h4>
        <div className="answers">
          <p>Blablab blabala</p>
          <p>Blab blabala Blab blabala Blab blabala Blab blabalaBlab blabala</p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="questions">
        <h4>Daily Schedule?</h4>
        <div className="answers">
          <p>Blablab blabala</p>
          <p>Blab blabala Blab blabala Blab blabala Blab blabalaBlab blabala</p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="questions">
        <h4>Payment Methods?</h4>
        <div className="answers">
          <p>Blablab blabala</p>
          <p>Blab blabala Blab blabala Blab blabala Blab blabalaBlab blabala</p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="questions">
        <h4>What products do you offer?</h4>
        <div className="answers">
          <p>Blablab blabala</p>
          <p>Blab blabala Blab blabala Blab blabala Blab blabalaBlab blabala</p>
        </div>
        <div className="faq-line"></div>
      </div>
    </Faq>
  );
}
const Faq = styled(StyleAbout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .questions {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;
export default FaqSection;
