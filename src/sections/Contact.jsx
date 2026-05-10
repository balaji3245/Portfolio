import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Github, Instagram, Linkedin, Mail, MapPin, Phone, Send, UserRound } from "lucide-react";
import { usePortfolioContent } from "../context/PortfolioContent.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import { fadeUp } from "../utils/motion.js";

export default function Contact() {
  const {
    content: { profile },
  } = usePortfolioContent();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    company: "",
  });
  const [submitStatus, setSubmitStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const socials = [
    { label: "GitHub", href: profile.socials.github, icon: Github },
    { label: "Instagram", href: profile.socials.instagram, icon: Instagram },
    { label: "LinkedIn", href: profile.socials.linkedin, icon: Linkedin },
    { label: "Email", href: profile.socials.email, icon: Mail },
  ];
  const details = [
    { label: "Name", value: profile.name, icon: UserRound },
    { label: "Role", value: profile.role, icon: Briefcase },
    { label: "Location", value: profile.location, icon: MapPin },
    { label: "Email", value: profile.email, icon: Mail },
  ];

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    setSubmitStatus("Sending message...");

    try {
      const response = await fetch("/api/contact-submissions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...form,
          pageUrl: window.location.href,
        }),
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || "Message could not be sent.");
      }

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
        company: "",
      });
      setSubmitStatus("Message sent successfully.");
    } catch (error) {
      setSubmitStatus(error.message || "Message could not be sent.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Contact"
          title="Open to internships, collaborations, and real project work"
          text="I am looking for opportunities where I can contribute, learn from feedback, and keep improving both frontend execution and backend thinking."
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="glass mx-auto grid max-w-5xl gap-4 rounded-2xl p-4 sm:gap-5 sm:p-6 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="rounded-xl border border-line bg-white/5 p-5 sm:p-6">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.26em] text-cyan">
              Reach out
            </p>
            <div className="mt-4 flex items-center gap-4">
              <img
                src={profile.photo}
                alt={`${profile.name} profile`}
                className="h-16 w-16 shrink-0 rounded-2xl border border-line object-cover sm:h-20 sm:w-20"
              />
              <div className="min-w-0">
                <h3 className="text-xl font-bold text-white sm:text-2xl">{profile.name}</h3>
                <p className="mt-1 text-sm text-cyan">{profile.role}</p>
              </div>
            </div>
            <p className="mt-4 leading-7 text-slate-300">
              The easiest way to contact me is through the links here. I am especially interested in real-world learning, internships, and backend-oriented work.
            </p>

            <div className="mt-6 grid gap-3">
              {details.map(({ label, value, icon: Icon }) => (
                <div
                  key={label}
                  className="flex items-start gap-3 rounded-2xl border border-line bg-white/5 p-3"
                >
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-cyan/10 text-cyan">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{label}</p>
                    <p className="mt-1 break-words text-sm font-medium text-slate-100">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap justify-end gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white/5 text-slate-100 transition hover:border-cyan/40 hover:bg-white/10 hover:text-cyan"
                  aria-label={label}
                  title={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-line bg-white/5 p-5 sm:p-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan">
                  Ready to talk
                </p>
                <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">Send me a message</h3>
                <p className="mt-3 max-w-lg leading-7 text-slate-300">
                  Share your idea, internship opening, or collaboration plan. The message will be
                  saved in the admin inbox so I can follow up cleanly.
                </p>
              </div>

            </div>

            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
              <label className="hidden">
                <span>Company</span>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  tabIndex="-1"
                  autoComplete="off"
                />
              </label>

              <div className="grid gap-4">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-200">Your name</span>
                  <div className="flex min-h-12 items-center gap-3 rounded-xl border border-line bg-white/5 px-4 transition focus-within:border-cyan/50 focus-within:ring-4 focus-within:ring-cyan/10">
                    <UserRound className="h-4 w-4 shrink-0 text-slate-400" />
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your name"
                      className="w-full bg-transparent text-sm text-slate-100 outline-none placeholder:text-slate-500"
                    />
                  </div>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-200">Email address</span>
                  <div className="flex min-h-12 items-center gap-3 rounded-xl border border-line bg-white/5 px-4 transition focus-within:border-cyan/50 focus-within:ring-4 focus-within:ring-cyan/10">
                    <Mail className="h-4 w-4 shrink-0 text-slate-400" />
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full bg-transparent text-sm text-slate-100 outline-none placeholder:text-slate-500"
                    />
                  </div>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-200">Mobile number</span>
                  <div className="flex min-h-12 items-center gap-3 rounded-xl border border-line bg-white/5 px-4 transition focus-within:border-cyan/50 focus-within:ring-4 focus-within:ring-cyan/10">
                    <Phone className="h-4 w-4 shrink-0 text-slate-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full bg-transparent text-sm text-slate-100 outline-none placeholder:text-slate-500"
                    />
                  </div>
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-200">Message</span>
                <div className="rounded-2xl border border-line bg-white/5 p-4 transition focus-within:border-cyan/50 focus-within:ring-4 focus-within:ring-cyan/10">
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me a little about your project, role, or opportunity."
                    rows="4"
                    className="w-full resize-none bg-transparent text-sm leading-6 text-slate-100 outline-none placeholder:text-slate-500"
                  />
                </div>
              </label>

              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan via-violet to-pink px-6 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cyan focus:ring-offset-2 focus:ring-offset-ink sm:w-auto"
                >
                  <Send className="h-4 w-4" />
                  {submitting ? "Sending" : "Send Message"}
                </button>
              </div>
              {submitStatus ? (
                <p className="text-center text-sm font-medium text-slate-300">{submitStatus}</p>
              ) : null}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
