import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { usePortfolioContent } from "../context/PortfolioContent.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import { fadeUp, stagger } from "../utils/motion.js";

export default function Projects() {
  const {
    content: { projects },
  } = usePortfolioContent();

  return (
    <section id="projects" className="py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Projects"
          title="Selected work from public experiments and portfolio builds"
          text="A mix of UI systems, API-inspired thinking, and practical web projects that show how I learn by shipping."
        />

        <motion.div
          className="grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={fadeUp}
              className="glass rounded-[1.5rem] p-5 sm:rounded-[2rem] sm:p-6"
            >
              <div className="mb-5 flex items-center justify-between gap-3">
                <span className="rounded-full border border-cyan/20 bg-cyan/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan">
                  {project.category}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white sm:text-2xl">{project.title}</h3>
              <p className="mt-4 leading-7 text-slate-300 sm:min-h-[7rem]">{project.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-line bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:flex-wrap">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-line bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-cyan/40 hover:bg-white/10 sm:w-auto"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href={project.live || project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan via-violet to-pink px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-95 sm:w-auto"
                >
                  {project.live ? "Live Demo" : "View Site"}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
