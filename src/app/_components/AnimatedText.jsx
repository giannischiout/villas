import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
const AnimatedText = ({ text, style, className }) => {
    const ref = useRef(null);
    const isInView = useInView(ref);
  const defaultLetterAnimation = {
    hidden: { opacity: 0, y: 50},
    visible: { opacity: 1, y: 0 },
  };

  const containerAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    }
  };

  return (
    <div>
      <span className="sr-only">{text}</span>
      <motion.span
        className={`${className}`}
        aria-hidden
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{staggerChildren: 0.1, ease: "linear"}}
        variants={containerAnimation}
      >
        {text.split('').map((letter, index) => (
          <motion.span
         
            key={index}
            variants={defaultLetterAnimation}
          >
            {letter}
          </motion.span>
        ))}
      </motion.span>
    </div>
  );
};

export default AnimatedText;