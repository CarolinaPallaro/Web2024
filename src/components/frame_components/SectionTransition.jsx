import React from "react";
import { motion } from "framer-motion";
import transitions from "./transition.module.css";

const SectionTransition = ({ Section }) => {
  return (
    <>
      <Section />
      <motion.div
        className={transitions.slideIn}
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />

      <motion.div
        className={transitions.slideOut}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
};

export default SectionTransition;
