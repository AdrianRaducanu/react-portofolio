import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export function useScroll() {
  const controls = useAnimation(); //actioneaza animatia pe segmente: start, hidden, exit
  const [element, view] = useInView({ threshold: 0.5 }); //threshold face ca atunci cand jumatate din componenta apare pe ecran sa se intample animatie, nu imediat
  //view reprezinta o variabila: true - "element" apare pe ecran, false - nu apare
  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }
  return [element, controls];
}
