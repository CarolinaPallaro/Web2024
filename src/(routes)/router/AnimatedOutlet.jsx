import React, { useState } from "react";
import { useLocation, useOutlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
const AnimatedOutlet = () => {

 const location = useLocation(); 
  const o = useOutlet();
  const [outlet] = useState(o);

  return (
    <>
      <AnimatePresence mode="wait">
        key={location.pathname}
        {outlet}
      </AnimatePresence>
    </>
  );
};

export default AnimatedOutlet;
