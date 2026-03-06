import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function Cursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const ringX = useSpring(mouseX, { damping: 22, stiffness: 250, mass: 0.5 });
  const ringY = useSpring(mouseY, { damping: 22, stiffness: 250, mass: 0.5 });

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);
    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);
    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHovering(!!target.closest('a, button, input, textarea, select, label, [role="button"]'));
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('mouseup', onUp);
    document.addEventListener('mouseover', onOver);
    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('mouseup', onUp);
      document.removeEventListener('mouseover', onOver);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Ring - follows with spring lag */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border mix-blend-difference"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
        animate={{
          width: hovering ? 52 : clicking ? 22 : 36,
          height: hovering ? 52 : clicking ? 22 : 36,
          borderColor: hovering ? '#10b981' : '#ffffff',
          opacity: visible ? 1 : 0,
          scale: clicking ? 0.85 : 1,
        }}
        transition={{ duration: 0.18, ease: 'easeOut' }}
      />

      {/* Dot - follows exactly */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-white mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          width: 6,
          height: 6,
        }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: clicking ? 2 : hovering ? 0 : 1,
        }}
        transition={{ duration: 0.12 }}
      />
    </>
  );
}
