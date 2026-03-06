import { useScroll, motion } from 'motion/react';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[9998] origin-left bg-gradient-to-r from-emerald-500 to-amber-400"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
