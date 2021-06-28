import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

//Link il folosesc pentru a schimba adresa URL, adica din http.../main -> http.../main/ourWork
function Nav() {
  const location = useLocation();
  console.log(location);
  return (
    <StyleNav>
      <h1>
        <Link id="logo" to="/">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">1. About Us</Link>
          <StyleLine
            transition={{ duration: 0.75 }}
            initial={{ width: "1%" }}
            animate={{ width: location.pathname === "/" ? "50%" : "1%" }}
          ></StyleLine>
        </li>
        <li>
          <Link to="/work">2. Our work</Link>
          <StyleLine
            transition={{ duration: 0.75 }}
            initial={{ width: "1%" }}
            animate={{
              width: location.pathname.startsWith("/work") ? "50%" : "1%",
            }}
          ></StyleLine>
        </li>
        <li>
          <Link to="/contact">3. Contact Us</Link>
          <StyleLine
            transition={{ duration: 0.75 }}
            initial={{ width: "1%" }}
            animate={{ width: location.pathname === "/contact" ? "50%" : "1%" }}
          ></StyleLine>
        </li>
      </ul>
    </StyleNav>
  );
}
const StyleNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  position: sticky;
  top: 0;
  z-index: 10;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 1.5rem;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
`;
const StyleLine = styled(motion.div)`
  height: 0.1rem;
  background: #23d997;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 60%;
`;
export default Nav;
