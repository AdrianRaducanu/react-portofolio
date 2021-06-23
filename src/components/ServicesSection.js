import React from "react";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
function ServicesSection() {
  return (
    <div className="services">
      <div className="description">
        <h2>
          High <span> quality </span> services
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img alt="icon" src={clock}></img>
              <h3>Efficient</h3>
            </div>
            <p>bla bla bla bla blabala</p>
          </div>
          <div className="card">
            <div className="icon">
              <img alt="icon" src={teamwork}></img>
              <h3>Teamwork</h3>
            </div>
            <p>bla bla bla bla blabala</p>
          </div>
          <div className="card">
            <div className="icon">
              <img alt="icon" src={diaphragm}></img>
              <h3>Diaphragm</h3>
            </div>
            <p>bla bla bla bla blabala</p>
          </div>
          <div className="card">
            <div className="icon">
              <img alt="icon" src={money}></img>
              <h3>Affordable</h3>
            </div>
            <p>bla bla bla bla blabala</p>
          </div>
        </div>
      </div>
      <div className="image">
        <img alt="camera" src={home2}></img>
      </div>
    </div>
  );
}

export default ServicesSection;
