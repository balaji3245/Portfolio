import { motion } from "framer-motion";
import { usePortfolioContent } from "../context/PortfolioContent.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import { fadeUp, stagger } from "../utils/motion.js";

export default function About() {
  const {
    content: { aboutPoints, profile, techBadges },
  } = usePortfolioContent();

  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="About"
          title="A practical builder with a backend-first direction"
          text={profile.summary}
        />

        <motion.div
          className="grid gap-4 sm:gap-5 lg:grid-cols-3"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {aboutPoints.map((point) => (
            <motion.article
              key={point.title}
              variants={fadeUp}
              className="glass rounded-[1.5rem] p-5 sm:rounded-[2rem] sm:p-6"
            >
              <h3 className="text-lg font-bold text-white sm:text-xl">{point.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{point.text}</p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="glass mt-6 rounded-[1.5rem] p-4 sm:mt-8 sm:rounded-[2rem] sm:p-5"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {techBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-line bg-white/5 px-3 py-2 text-sm font-medium text-slate-200 sm:px-4"
              >
                {badge}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
