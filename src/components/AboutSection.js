import React from "react";
import home1 from "../img/home1.png";
import styled from "styled-components";

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

//styled components
const StyleAbout = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;
const StyleDescription = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;
const StyleImage = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;
const StyleHide = styled.div`
  overflow: hidden;
`;
export default AboutSection;
