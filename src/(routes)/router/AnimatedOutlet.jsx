import React from "react";
import { useOutlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import SectionTransition from "../../components/frame_components/SectionTransition";

const AnimatedOutlet = () => {
  const outlet = useOutlet();
  const location = useLocation();

  // Definimos las rutas que requieren animación
  const routesWithAnimation = ["/about", "/portfolio", "/skills"];

  // Determinamos si la ruta actual debe tener animación
  const shouldAnimate = routesWithAnimation.includes(location.pathname);

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
      >
        {shouldAnimate ? (
          <SectionTransition Section={() => outlet} />
        ) : (
          outlet
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedOutlet;

