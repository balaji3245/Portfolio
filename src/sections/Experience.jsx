import { motion } from "framer-motion";
import { usePortfolioContent } from "../context/PortfolioContent.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import { fadeUp, stagger } from "../utils/motion.js";

export default function Experience() {
  const {
    content: { timeline },
  } = usePortfolioContent();

  return (
    <section id="experience" className="py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Journey"
          title="How the learning path is taking shape"
          text="A timeline of where the focus has been and what each phase has added to the portfolio."
        />

        <motion.div
          className="relative mx-auto max-w-4xl"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="absolute left-5 top-4 h-[calc(100%-2rem)] w-px bg-gradient-to-b from-cyan via-violet to-transparent sm:left-1/2" />
          <div className="grid gap-6">
            {timeline.map((item, index) => (
              <motion.article
                key={`${item.period}-${item.title}`}
                variants={fadeUp}
                className={`relative grid gap-4 sm:grid-cols-2 ${index % 2 === 0 ? "" : "sm:[&>div:first-child]:col-start-2"}`}
              >
                <div className={`ml-14 rounded-[2rem] p-6 glass sm:ml-0 ${index % 2 === 0 ? "sm:mr-8" : "sm:ml-8"}`}>
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.26em] text-cyan">
                    {item.period}
                  </p>
                  <h3 className="mt-3 text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{item.body}</p>
                </div>
                <span className="absolute left-3 top-7 h-4 w-4 rounded-full border-2 border-ink bg-cyan shadow-[0_0_18px_rgba(69,216,255,0.8)] sm:left-1/2 sm:-translate-x-1/2" />
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
