import React from "react";
import styled from "styled-components";
import { StyleAbout } from "../styles";
import Toggle from "../components/Toggle";
import { AnimateSharedLayout } from "framer-motion";
//pentur a folosi aceasta componenta, wrap-uim codul care se doreste a avea animatie, fiind incapsulat NEAPARAT de un motion.div ce contine "layout" --> in cazul nostru, acest motion div este in Toggle.js

function FaqSection() {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How do I start?">
          <div className="answers">
            <p>Blablab blabala</p>
            <p>
              Blab blabala Blab blabala Blab blabala Blab blabalaBlab blabala
            </p>
          </div>
        </Toggle>
        <Toggle title="When do you start?">
          <div className="answers">
            <p>Blablab blabala</p>
            <p>
              Blab blabala Blab blabala Blab blabala Blab blabalaBlab blabala
            </p>
          </div>
        </Toggle>
        <Toggle title="Payment Methods">
          <div className="answers">
            <p>Blablab blabala</p>
            <p>
              Blab blabala Blab blabala Blab blabala Blab blabalaBlab blabala
            </p>
          </div>
        </Toggle>
        <Toggle title="What's your prices?">
          <div className="answers">
            <p>Blablab blabala</p>
            <p>
              Blab blabala Blab blabala Blab blabala Blab blabalaBlab blabala
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
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
