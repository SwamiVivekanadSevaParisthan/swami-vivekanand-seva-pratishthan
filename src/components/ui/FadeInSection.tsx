import React, { ReactNode } from 'react';
import { motion } from 'motion/react';

interface FadeInSectionProps {
  children: ReactNode;
}

export default function FadeInSection({ children }: FadeInSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
      transition={{
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1], // Custom premium easeOut Expo/Cubic curve
      }}
    >
      {children}
    </motion.div>
  );
}
