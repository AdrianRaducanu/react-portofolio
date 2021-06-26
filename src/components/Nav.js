import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Link il folosesc pentru a schimba adresa URL, adica din http.../main -> http.../main/ourWork
function Nav() {
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
        </li>
        <li>
          <Link to="/work">2. Our work</Link>
        </li>
        <li>
          <Link to="/contact">3. Contact Us</Link>
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
export default Nav;
