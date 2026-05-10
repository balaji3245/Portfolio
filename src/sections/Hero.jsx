import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Sparkles, UserRound } from "lucide-react";
import GlowButton from "../components/GlowButton.jsx";
import { usePortfolioContent } from "../context/PortfolioContent.jsx";
import { fadeUp, stagger } from "../utils/motion.js";

const languageShortNames = {
  JavaScript: "JS",
  TypeScript: "TS",
};

export default function Hero() {
  const {
    content: { profile, stats },
  } = usePortfolioContent();
  const [githubStats, setGithubStats] = useState(stats);

  useEffect(() => {
    const controller = new AbortController();

    async function loadGithubStats() {
      try {
        const [userResponse, reposResponse] = await Promise.all([
          fetch(`https://api.github.com/users/${profile.githubUsername}`, {
            signal: controller.signal,
          }),
          fetch(
            `https://api.github.com/users/${profile.githubUsername}/repos?sort=pushed&direction=desc&per_page=1`,
            {
              signal: controller.signal,
            },
          ),
        ]);

        if (!userResponse.ok || !reposResponse.ok) {
          return;
        }

        const user = await userResponse.json();
        const repos = await reposResponse.json();
        const latestRepo = Array.isArray(repos) ? repos[0] : null;
        const language = latestRepo?.language || stats[2].value;
        const journeyYear = user.created_at
          ? String(new Date(user.created_at).getFullYear())
          : stats[1].value;
        const publicRepos = Number.isFinite(user.public_repos)
          ? String(user.public_repos)
          : stats[0].value;

        setGithubStats([
          { value: publicRepos, label: "public GitHub repos" },
          { value: journeyYear, label: "GitHub journey started" },
          {
            value: languageShortNames[language] || language || stats[2].value,
            label: "latest repo language",
          },
        ]);
      } catch (error) {
        if (error.name !== "AbortError") {
          setGithubStats(stats);
        }
      }
    }

    loadGithubStats();

    return () => controller.abort();
  }, [profile.githubUsername, stats]);

  return (
    <section id="home" className="relative overflow-hidden pt-24 sm:pt-32">
      <div className="section-shell grid min-h-[calc(100vh-7rem)] items-center gap-8 pb-14 sm:gap-12 sm:pb-16 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          className="max-w-3xl"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex max-w-full items-center gap-2 rounded-full border border-cyan/20 bg-cyan/10 px-3 py-2 text-xs font-medium text-cyan sm:px-4 sm:text-sm"
          >
            <Sparkles className="h-4 w-4" />
            Aspiring backend developer
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-5 break-words text-3xl font-extrabold tracking-tight text-white sm:mt-6 sm:text-5xl lg:text-6xl"
          >
            <span className="text-gradient">{profile.name}</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-xl text-xs leading-6 text-slate-300 sm:mt-6 sm:text-base sm:leading-7"
          >
            {profile.tagline}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <GlowButton href="#projects">View Projects</GlowButton>
            <GlowButton href="#contact" variant="secondary">
              Contact Me
            </GlowButton>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 grid max-w-2xl gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4">
            {githubStats.map((item) => (
              <div key={item.label} className="glass rounded-2xl p-4 sm:rounded-3xl">
                <p className="text-xl font-bold text-white sm:text-2xl">{item.value}</p>
                <p className="mt-1 text-xs text-slate-400 sm:text-sm">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
          className="relative"
        >
          <div className="absolute inset-0 aurora rounded-[2.5rem]" />
          <div className="glass relative overflow-hidden rounded-[1.75rem] p-4 shadow-depth sm:rounded-[2.5rem] sm:p-5">
            <div className="grid gap-4 rounded-[1.5rem] border border-line bg-ink/70 p-4 sm:gap-5 sm:rounded-[2rem] sm:p-5">
              <div className="flex items-center gap-4 rounded-[1.25rem] border border-line bg-white/5 p-4 sm:rounded-[1.5rem]">
                <img
                  src={profile.photo}
                  alt={`${profile.name} profile`}
                  className="h-20 w-20 shrink-0 rounded-2xl border border-line object-cover sm:h-24 sm:w-24"
                />
                <div className="min-w-0">
                  <p className="text-2xl font-bold text-white">{profile.name}</p>
                  <p className="mt-1 text-sm font-medium text-cyan">{profile.role}</p>
                </div>
              </div>

              {[
                { icon: UserRound, label: "Name", value: profile.name },
                { icon: MapPin, label: "Location", value: profile.location },
                { icon: Mail, label: "Email", value: profile.email },
              ].map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="rounded-[1.25rem] border border-line bg-white/5 p-4 sm:rounded-[1.5rem]"
                >
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-cyan/25 to-violet/25 text-cyan">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-white">{label}</p>
                      <p className="mt-1 text-sm text-slate-400">{value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
