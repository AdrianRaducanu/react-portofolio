import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollTop() {
  const location = useLocation();
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, [location.pathname]);
  return null;
}

export default ScrollTop;
