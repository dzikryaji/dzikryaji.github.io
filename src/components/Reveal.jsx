import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Reveal = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="relative inline-block"
      initial={{
        display: 'none'
      }}
      animate={{
        display: "block"
      }}
      transition={{
        delay: 2
      }}
    >
      {children}
      <motion.div
        className="absolute bg-black z-10 h-full top-0 left-0"
        initial={{ width: '100%' }}
        animate={{ width: isInView ? '0%' : '100%' }}
        transition={{
          duration: 0.5,
          ease: 'easeInOut',
        }}
      />
    </motion.div>
  );
};

export default Reveal;
