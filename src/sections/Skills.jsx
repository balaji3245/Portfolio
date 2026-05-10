import { motion } from "framer-motion";
import { Code2, GitBranch, Server } from "lucide-react";
import { usePortfolioContent } from "../context/PortfolioContent.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import { fadeUp, stagger } from "../utils/motion.js";

const iconMap = {
  Frontend: Code2,
  "Backend Path": Server,
  "Creative Tools": GitBranch,
};

export default function Skills() {
  const {
    content: { skillGroups },
  } = usePortfolioContent();

  return (
    <section id="skills" className="py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Skills"
          title="Current stack and backend growth path"
          text="The portfolio currently shows strong UI delivery and project structure, while the learning path is moving deeper into APIs, Node.js, and data flow."
        />

        <motion.div
          className="grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillGroups.map((group) => {
            const Icon = iconMap[group.title] || Server;

            return (
              <motion.article
                key={group.title}
                variants={fadeUp}
                className="glass rounded-2xl p-5 sm:p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-cyan/10 text-cyan">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold text-white sm:text-xl">{group.title}</h3>
                    <p className="mt-1 text-sm text-slate-400">{group.description}</p>
                  </div>
                </div>

                <div className="mt-6 grid gap-5 sm:mt-7">
                  {group.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-2 flex items-center justify-between gap-4">
                        <span className="text-sm font-medium text-slate-200">{skill.name}</span>
                        <span className="font-mono text-xs text-cyan">{skill.level}%</span>
                      </div>
                      <div className="h-2.5 overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-cyan via-violet to-pink"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true, margin: "-100px" }}
                          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
