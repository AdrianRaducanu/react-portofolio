import React, { useState } from "react";
import { motion } from "framer-motion";

function Toggle({ children, title }) {
  //children --tag special-- reprezinta ce se afla inntre <Toggle> si </Toggle> in FaqQuestions
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div layout onClick={() => setToggle(!toggle)}>
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ""}
      <div className="faq-line"></div>
    </motion.div>
  );
}
export default Toggle;
