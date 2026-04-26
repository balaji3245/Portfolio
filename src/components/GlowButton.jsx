import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function GlowButton({ href, children, variant = "primary" }) {
  const isPrimary = variant === "primary";

  return (
    <motion.a
      href={href}
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={[
        "group inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full px-5 text-xs font-semibold transition sm:min-w-[9.5rem] sm:w-auto sm:px-6 sm:text-sm",
        "focus:outline-none focus:ring-2 focus:ring-cyan focus:ring-offset-2 focus:ring-offset-ink",
        isPrimary
          ? "bg-gradient-to-r from-cyan via-violet to-pink text-white shadow-glow"
          : "border border-line bg-white/5 text-slate-100 hover:border-cyan/50 hover:bg-white/10",
      ].join(" ")}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
    </motion.a>
  );
}
