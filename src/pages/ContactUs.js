import React from "react";
import { motion } from "framer-motion";
import { pageAnimation, titleAnimation } from "../animation";
import styled from "styled-components";

function ContactUs() {
  return (
    <StyleContact
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <StyleTitle>
        <StyleHide>
          <motion.h2 variants={titleAnimation}>Get in touch.</motion.h2>
        </StyleHide>
      </StyleTitle>
      <div>
        <StyleHide>
          <StyleSocial variants={titleAnimation}>
            <StyleCircle />
            <h2>Send Us A Message</h2>
          </StyleSocial>
        </StyleHide>
        <StyleHide>
          <StyleSocial variants={titleAnimation}>
            <StyleCircle />
            <h2>Send Us An Email</h2>
          </StyleSocial>
        </StyleHide>
        <StyleHide>
          <StyleSocial variants={titleAnimation}>
            <StyleCircle />
            <h2>Our Instagram</h2>
          </StyleSocial>
        </StyleHide>
      </div>
    </StyleContact>
  );
}
const StyleContact = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
`;
const StyleTitle = styled.div`
  margin-bottom: 4rem;
  color: black;
`;
const StyleHide = styled.div`
  overflow: hidden;
`;
const StyleCircle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;
const StyleSocial = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;
export default ContactUs;
