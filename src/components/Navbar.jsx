import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Instagram, Menu, X } from "lucide-react";
import { usePortfolioContent } from "../context/PortfolioContent.jsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const {
    content: { navItems, profile },
  } = usePortfolioContent();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        className={[
          "mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-3 transition-all duration-300",
          scrolled ? "glass" : "border border-transparent bg-transparent",
        ].join(" ")}
      >
        <a href="#home" className="flex items-center gap-3" aria-label={`${profile.name} home`}>
          <img
            src={profile.photo}
            alt={`${profile.name} profile`}
            className="h-10 w-10 rounded-full border border-cyan/30 object-cover p-0.5"
          />
          <span className="text-sm font-bold tracking-wide text-white">{profile.name}</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/8 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-line bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan/40 hover:bg-white/10"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={profile.socials.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-line bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan/40 hover:bg-white/10"
            aria-label="Instagram"
          >
            <Instagram className="h-4 w-4" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white/5 text-white md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-3 max-w-7xl rounded-3xl border border-line bg-ink/95 p-3 shadow-depth backdrop-blur md:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/8"
            >
              {item.label}
            </a>
          ))}
        </motion.div>
      ) : null}
    </header>
  );
}
