import React from "react";
import { motion } from "framer-motion";
import transitionIn from './transition.module'

const transition = (Ogcomponent) => {
    return () => (
      <>
        <Ogcomponent />
        <motion.div
          className={transitionIn.slideIn}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 0 }}
          exit={{ scaleX: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.div
          className="slide-out"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 0 }}
          exit={{ scaleX: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
      </>
    );
}

export default transition;