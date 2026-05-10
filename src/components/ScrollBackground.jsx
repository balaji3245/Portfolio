import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function ScrollBackground() {
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 20,
    mass: 0.25,
  });

  const orbOneY = useTransform(smoothProgress, [0, 1], ["-6%", "20%"]);
  const orbTwoY = useTransform(smoothProgress, [0, 1], ["8%", "-16%"]);
  const orbThreeY = useTransform(smoothProgress, [0, 1], ["0%", "12%"]);
  const gridY = useTransform(smoothProgress, [0, 1], ["0%", "18%"]);
  const streakY = useTransform(smoothProgress, [0, 1], ["-4%", "14%"]);
  const glowOpacity = useTransform(smoothProgress, [0, 0.5, 1], [0.3, 0.55, 0.35]);
  const rotate = useTransform(smoothProgress, [0, 1], ["0deg", "8deg"]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute left-[-12%] top-[-8%] h-[22rem] w-[22rem] rounded-full bg-cyan/12 blur-3xl sm:h-[30rem] sm:w-[30rem]"
        style={{ y: orbOneY, opacity: glowOpacity }}
      />
      <motion.div
        className="absolute right-[-10%] top-[12%] h-[20rem] w-[20rem] rounded-full bg-violet/12 blur-3xl sm:h-[28rem] sm:w-[28rem]"
        style={{ y: orbTwoY, rotate }}
      />
      <motion.div
        className="absolute bottom-[-10%] left-[18%] h-[18rem] w-[18rem] rounded-full bg-pink/10 blur-3xl sm:h-[24rem] sm:w-[24rem]"
        style={{ y: orbThreeY, opacity: glowOpacity }}
      />
      <motion.div
        className="absolute left-[8%] top-[18%] h-[28rem] w-px bg-gradient-to-b from-cyan/0 via-cyan/35 to-cyan/0 opacity-60"
        style={{ y: streakY }}
      />
      <motion.div
        className="absolute right-[12%] top-[28%] h-[22rem] w-px bg-gradient-to-b from-violet/0 via-violet/30 to-violet/0 opacity-50"
        style={{ y: gridY }}
      />

      <motion.div
        className="scroll-grid absolute inset-x-[-10%] top-0 h-[135%]"
        style={{ y: gridY }}
      />
      <div className="bg-noise absolute inset-0 opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(69,216,255,0.14),transparent_22%),radial-gradient(circle_at_84%_16%,rgba(157,124,255,0.16),transparent_24%),radial-gradient(circle_at_52%_84%,rgba(255,104,212,0.12),transparent_22%),linear-gradient(180deg,rgba(7,9,21,0.1),rgba(7,9,21,0.92))]" />
    </div>
  );
}
