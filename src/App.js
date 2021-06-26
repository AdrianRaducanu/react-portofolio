import React from "react";
import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";
//Pentru schimbul intre pagini
import { Switch, Route, useLocation } from "react-router-dom";
//Pentru animatii -> observa cand o componenta e schimbata pt a anima procesul de iesire
import { AnimatePresence } from "framer-motion";
//exitBeforeEnter obliga tranzitia viitoare de intrare sa astepta ca tranzitia de iesire sa se termine

function App() {
  //desi apartine de Router, location e folosit de framer-motion pentru a stii cand se schimba componenta
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route path="/work/:id">
            <MovieDetail />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}
//cand path-ul convine :id inseamna ca e un wildcard, orice text am adauga dupa / ducandu-ne la componenta indicata de ruta
export default App;
