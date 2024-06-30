import { motion } from 'framer-motion'
import React from 'react';

const Marquee = ({ isReverse, title }) => {

  const spanContent = (
    <span className={"text-4xl md:text-7xl lg:text-8xl font-roboto font-bold uppercase mx-4 lg:mx-8"}>
      {title}
    </span>
  );

  return (
    <motion.div
      className={`${title ? "opacity-100" : "opacity-0" } inline-block opacity-0 overflow-y-hidden transition-opacity whitespace-nowrap duration-200 ${isReverse ? "" : "mt-8"}`}
      animate={{ x: isReverse ? ['0%', '-100%'] : ['-90%', '10%'] }}
      transition={{ repeat: Infinity, duration: 240, ease: 'linear' }}
    >
      {Array.from({ length: 100 }, (_, index) => (
        <React.Fragment key={index}>
          {spanContent}
        </React.Fragment>
      ))}
    </motion.div>

  )
}

export default Marquee
