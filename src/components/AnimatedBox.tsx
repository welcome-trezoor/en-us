import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedBoxProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedBox: React.FC<AnimatedBoxProps> = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedBox;