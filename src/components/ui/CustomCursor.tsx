import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Position of the mouse cursor
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for the outer follower ring
  const ringX = useSpring(mouseX, { damping: 25, stiffness: 220, mass: 0.6 });
  const ringY = useSpring(mouseY, { damping: 25, stiffness: 220, mass: 0.6 });

  useEffect(() => {
    // Hide custom cursor on touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Dynamic hover detection for interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isInteractive = 
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'SELECT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('button') !== null ||
        target.closest('a') !== null ||
        target.closest('.cursor-pointer') !== null ||
        target.classList.contains('cursor-pointer') ||
        target.getAttribute('role') === 'button';

      setIsHovered(!!isInteractive);
    };

    const handleMouseLeaveWindow = () => {
      setIsVisible(false);
    };

    const handleMouseEnterWindow = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeaveWindow);
    document.addEventListener('mouseenter', handleMouseEnterWindow);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      document.removeEventListener('mouseenter', handleMouseEnterWindow);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      {/* Outer Follower Ring */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovered ? 48 : isClicking ? 20 : 28,
          height: isHovered ? 48 : isClicking ? 20 : 28,
          backgroundColor: isHovered ? 'rgba(20, 184, 166, 0.15)' : 'transparent', // Teal background on hover
          borderColor: isHovered ? '#14b8a6' : '#f59e0b', // Teal border on hover, Amber border normally
          borderWidth: isHovered ? 1.5 : 2,
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 28,
        }}
        className="absolute rounded-full border-2 border-solid pointer-events-none mix-blend-difference"
      />

      {/* Inner Dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 2.5 : isClicking ? 0.75 : 1,
          backgroundColor: isHovered ? '#14b8a6' : '#f59e0b', // Teal on hover, Amber normally
          opacity: isHovered ? 0.8 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 450,
          damping: 24,
        }}
        className="absolute w-2 h-2 rounded-full pointer-events-none mix-blend-difference"
      />
    </div>
  );
};
