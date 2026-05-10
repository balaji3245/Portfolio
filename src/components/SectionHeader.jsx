import { motion } from "framer-motion";
import { fadeUp } from "../utils/motion.js";

export default function SectionHeader({ eyebrow, title, text }) {
  return (
    <motion.div
      className="mx-auto mb-10 max-w-3xl text-center sm:mb-14"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-90px" }}
    >
      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan sm:text-xs sm:tracking-[0.32em]">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-4 text-sm leading-7 text-slate-300 sm:mt-5 sm:text-lg">{text}</p>
      ) : null}
    </motion.div>
  );
}
