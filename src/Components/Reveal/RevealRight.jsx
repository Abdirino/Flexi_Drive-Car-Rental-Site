import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const RevealRight = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -74 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default RevealRight;
