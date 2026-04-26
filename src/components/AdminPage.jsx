import { useEffect, useState } from "react";
import {
  ChevronRight,
  Download,
  Eye,
  FolderKanban,
  Layers3,
  Plus,
  RotateCcw,
  Save,
  ScrollText,
  Tag,
  Trash2,
} from "lucide-react";
import { usePortfolioContent } from "../context/PortfolioContent.jsx";

const accentOptions = [
  "from-cyan-300 via-blue-400 to-violet-400",
  "from-emerald-300 via-cyan-300 to-blue-400",
  "from-violet-300 via-fuchsia-300 to-cyan-300",
  "from-blue-300 via-cyan-300 to-emerald-300",
  "from-amber-300 via-rose-300 to-violet-300",
  "from-lime-300 via-emerald-300 to-cyan-300",
];

const defaultStatus = "All changes saved";

const splitCsv = (value) =>
  value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

const countSkills = (groups) =>
  groups.reduce((total, group) => total + group.skills.length, 0);

export default function AdminPage() {
  const { content, resetContent, saveContent } = usePortfolioContent();
  const [draft, setDraft] = useState(content);
  const [status, setStatus] = useState(defaultStatus);

  useEffect(() => {
    setDraft(content);
    setStatus(defaultStatus);
  }, [content]);

  const updateDraft = (updater) => {
    setDraft((current) => updater(current));
    setStatus("Unsaved changes");
  };

  const updateProfile = (field, value) => {
    updateDraft((current) => ({
      ...current,
      profile: { ...current.profile, [field]: value },
    }));
  };

  const updateSocial = (field, value) => {
    updateDraft((current) => ({
      ...current,
      profile: {
        ...current.profile,
        socials: { ...current.profile.socials, [field]: value },
      },
    }));
  };

  const updateStat = (index, field, value) => {
    updateDraft((current) => ({
      ...current,
      stats: current.stats.map((item, itemIndex) =>
        itemIndex === index ? { ...item, [field]: value } : item,
      ),
    }));
  };

  const updateProject = (index, field, value) => {
    updateDraft((current) => ({
      ...current,
      projects: current.projects.map((project, projectIndex) =>
        projectIndex === index ? { ...project, [field]: value } : project,
      ),
    }));
  };

  const addProject = () => {
    updateDraft((current) => ({
      ...current,
      projects: [
        ...current.projects,
        {
          title: "New Project",
          description: "Short project description.",
          tech: ["HTML", "CSS", "JavaScript"],
          github: current.profile.socials.github,
          live: "",
          category: "project",
          accent: accentOptions[0],
        },
      ],
    }));
  };

  const removeProject = (index) => {
    updateDraft((current) => ({
      ...current,
      projects: current.projects.filter((_, projectIndex) => projectIndex !== index),
    }));
  };

  const updateSkillGroup = (index, field, value) => {
    updateDraft((current) => ({
      ...current,
      skillGroups: current.skillGroups.map((group, groupIndex) =>
        groupIndex === index ? { ...group, [field]: value } : group,
      ),
    }));
  };

  const updateSkill = (groupIndex, skillIndex, field, value) => {
    updateDraft((current) => ({
      ...current,
      skillGroups: current.skillGroups.map((group, currentGroupIndex) =>
        currentGroupIndex === groupIndex
          ? {
              ...group,
              skills: group.skills.map((skill, currentSkillIndex) =>
                currentSkillIndex === skillIndex
                  ? { ...skill, [field]: field === "level" ? Number(value) : value }
                  : skill,
              ),
            }
          : group,
      ),
    }));
  };

  const addSkill = (groupIndex) => {
    updateDraft((current) => ({
      ...current,
      skillGroups: current.skillGroups.map((group, currentGroupIndex) =>
        currentGroupIndex === groupIndex
          ? { ...group, skills: [...group.skills, { name: "New Skill", level: 70 }] }
          : group,
      ),
    }));
  };

  const removeSkill = (groupIndex, skillIndex) => {
    updateDraft((current) => ({
      ...current,
      skillGroups: current.skillGroups.map((group, currentGroupIndex) =>
        currentGroupIndex === groupIndex
          ? {
              ...group,
              skills: group.skills.filter((_, currentSkillIndex) => currentSkillIndex !== skillIndex),
            }
          : group,
      ),
    }));
  };

  const updateTimeline = (index, field, value) => {
    updateDraft((current) => ({
      ...current,
      timeline: current.timeline.map((item, itemIndex) =>
        itemIndex === index ? { ...item, [field]: value } : item,
      ),
    }));
  };

  const addTimelineItem = () => {
    updateDraft((current) => ({
      ...current,
      timeline: [
        ...current.timeline,
        {
          period: "New",
          title: "Timeline title",
          body: "Timeline detail.",
        },
      ],
    }));
  };

  const removeTimelineItem = (index) => {
    updateDraft((current) => ({
      ...current,
      timeline: current.timeline.filter((_, itemIndex) => itemIndex !== index),
    }));
  };

  const handleSave = () => {
    saveContent(draft);
    setStatus("Saved to this browser");
  };

  const handleReset = () => {
    if (!window.confirm("Reset portfolio content to defaults?")) {
      return;
    }

    const defaults = resetContent();
    setDraft(defaults);
    setStatus("Reset to defaults");
  };

  const handleExport = () => {
    const blob = new Blob([JSON.stringify(draft, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "portfolio-content.json";
    link.click();
    URL.revokeObjectURL(url);
    setStatus("Export complete");
  };

  const overviewItems = [
    { label: "Projects", value: draft.projects.length, icon: FolderKanban },
    { label: "Skill items", value: countSkills(draft.skillGroups), icon: Layers3 },
    { label: "Journey items", value: draft.timeline.length, icon: ScrollText },
    { label: "Tech badges", value: draft.techBadges.length, icon: Tag },
  ];

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(69,216,255,0.08),transparent_22%),radial-gradient(circle_at_top_right,rgba(157,124,255,0.12),transparent_24%),#070915] px-4 py-8 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="admin-panel p-5 sm:p-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex items-start gap-4">
              <img
                src={draft.profile.photo}
                alt={`${draft.profile.name} profile`}
                className="h-14 w-14 rounded-full border border-cyan/30 object-cover p-0.5"
              />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan">
                  Portfolio Admin
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-white">
                  Simple content editor
                </h1>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
                  Open one section at a time, edit the content, save it locally, then preview the site.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-line bg-white/5 px-3 py-2 text-xs font-semibold text-slate-300">
                {status}
              </span>
              <a href="/" className="admin-action">
                <Eye size={16} />
                View Site
              </a>
              <button type="button" className="admin-action" onClick={handleExport}>
                <Download size={16} />
                Export
              </button>
              <button type="button" className="admin-action" onClick={handleReset}>
                <RotateCcw size={16} />
                Reset
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan via-violet to-pink px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-95"
                onClick={handleSave}
              >
                <Save size={16} />
                Save Changes
              </button>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {overviewItems.map(({ label, value, icon: Icon }) => (
              <div key={label} className="rounded-2xl border border-line bg-white/5 px-4 py-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-medium text-slate-300">{label}</p>
                  <Icon size={18} className="text-cyan" />
                </div>
                <p className="mt-3 text-2xl font-bold tracking-tight text-white">{value}</p>
              </div>
            ))}
          </div>
        </header>

        <div className="mt-6 grid gap-6">
          <SectionBlock
            id="profile"
            title="Profile and links"
            description="Basic identity, photo, GitHub username, and social links."
          >
            <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_280px]">
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Name" value={draft.profile.name} onChange={(value) => updateProfile("name", value)} />
                <Field label="Role" value={draft.profile.role} onChange={(value) => updateProfile("role", value)} />
                <Field label="Location" value={draft.profile.location} onChange={(value) => updateProfile("location", value)} />
                <Field label="Email" value={draft.profile.email} onChange={(value) => updateProfile("email", value)} />
                <Field label="Photo URL" value={draft.profile.photo} onChange={(value) => updateProfile("photo", value)} />
                <Field
                  label="GitHub Username"
                  value={draft.profile.githubUsername}
                  onChange={(value) => updateProfile("githubUsername", value)}
                />
                <TextArea
                  label="Tagline"
                  value={draft.profile.tagline}
                  onChange={(value) => updateProfile("tagline", value)}
                />
                <TextArea
                  label="Summary"
                  value={draft.profile.summary}
                  onChange={(value) => updateProfile("summary", value)}
                />
              </div>

              <div className="rounded-2xl border border-line bg-white/5 p-5">
                <img
                  src={draft.profile.photo}
                  alt={`${draft.profile.name} preview`}
                  className="mx-auto h-24 w-24 rounded-full border border-cyan/30 object-cover p-0.5"
                />
                <h3 className="mt-4 text-center text-xl font-bold text-white">
                  {draft.profile.name}
                </h3>
                <p className="mt-1 text-center text-sm text-slate-300">
                  {draft.profile.role}
                </p>
                <p className="mt-1 text-center text-sm text-slate-400">
                  {draft.profile.location}
                </p>
                <div className="mt-4 rounded-2xl border border-line bg-white/5 px-4 py-3 text-sm text-slate-300">
                  Hero stats still auto-refresh from the GitHub username above.
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <Field label="GitHub Link" value={draft.profile.socials.github} onChange={(value) => updateSocial("github", value)} />
              <Field label="LinkedIn Link" value={draft.profile.socials.linkedin} onChange={(value) => updateSocial("linkedin", value)} />
              <Field label="Email Link" value={draft.profile.socials.email} onChange={(value) => updateSocial("email", value)} />
            </div>
          </SectionBlock>

          <SectionBlock
            id="hero"
            title="Hero fallback and badges"
            description="These fallback stats appear if GitHub data is unavailable. Tech badges power the About section."
          >
            <div className="grid gap-4 lg:grid-cols-3">
              {draft.stats.map((stat, index) => (
                <div key={`${stat.label}-${index}`} className="rounded-2xl border border-line bg-white/5 p-4">
                  <Field label="Value" value={stat.value} onChange={(value) => updateStat(index, "value", value)} />
                  <div className="mt-3">
                    <Field label="Label" value={stat.label} onChange={(value) => updateStat(index, "label", value)} />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5">
              <CsvField
                label="Tech Badges"
                value={draft.techBadges}
                onChange={(value) => updateDraft((current) => ({ ...current, techBadges: value }))}
              />
            </div>
          </SectionBlock>

          <SectionBlock
            id="projects"
            title="Projects"
            description="Each card stays collapsed until you need it. Add, edit, then save."
            action={<AddButton label="Add Project" onClick={addProject} />}
          >
            <div className="grid gap-3">
              {draft.projects.map((project, index) => (
                <AccordionEditor
                  key={`${project.title}-${index}`}
                  title={project.title || `Project ${index + 1}`}
                  subtitle={`${project.category || "project"} • ${(project.tech || []).slice(0, 3).join(", ") || "No tech tags yet"}`}
                  defaultOpen={index === 0}
                >
                  <div className="mb-4 flex items-center justify-between gap-3 rounded-2xl border border-line bg-white/[0.03] px-4 py-3">
                    <div>
                      <p className="text-sm font-semibold text-white">{project.title || `Project ${index + 1}`}</p>
                      <p className="text-xs text-slate-400">{project.github || "Add a GitHub URL"}</p>
                    </div>
                    <DangerButton label="Remove Project" onClick={() => removeProject(index)} />
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <Field label="Title" value={project.title} onChange={(value) => updateProject(index, "title", value)} />
                    <Field label="Category" value={project.category} onChange={(value) => updateProject(index, "category", value)} />
                    <Field label="GitHub URL" value={project.github} onChange={(value) => updateProject(index, "github", value)} />
                    <Field label="Live Demo URL" value={project.live || ""} onChange={(value) => updateProject(index, "live", value)} />
                    <SelectField label="Accent" value={project.accent} options={accentOptions} onChange={(value) => updateProject(index, "accent", value)} />
                    <CsvField label="Tech tags" value={project.tech} onChange={(value) => updateProject(index, "tech", value)} />
                    <TextArea
                      label="Description"
                      value={project.description}
                      onChange={(value) => updateProject(index, "description", value)}
                    />
                  </div>
                </AccordionEditor>
              ))}
            </div>
          </SectionBlock>

          <SectionBlock
            id="skills"
            title="Skills"
            description="Edit each group separately. Skill percentages should stay between 0 and 100."
          >
            <div className="grid gap-3">
              {draft.skillGroups.map((group, groupIndex) => (
                <AccordionEditor
                  key={`${group.title}-${groupIndex}`}
                  title={group.title}
                  subtitle={`${group.skills.length} skills`}
                  defaultOpen={groupIndex === 0}
                >
                  <div className="flex flex-col gap-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <Field label="Group Title" value={group.title} onChange={(value) => updateSkillGroup(groupIndex, "title", value)} />
                      <Field
                        label="Group Description"
                        value={group.description}
                        onChange={(value) => updateSkillGroup(groupIndex, "description", value)}
                      />
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p className="text-sm text-slate-400">
                        Skill items inside this group
                      </p>
                      <AddButton label="Add Skill" onClick={() => addSkill(groupIndex)} />
                    </div>

                    <div className="grid gap-3">
                      {group.skills.map((skill, skillIndex) => (
                        <div
                          key={`${skill.name}-${skillIndex}`}
                          className="grid gap-3 rounded-2xl border border-line bg-white/[0.03] p-3 md:grid-cols-[minmax(0,1fr)_130px_auto] md:items-end"
                        >
                          <Field label="Skill" value={skill.name} onChange={(value) => updateSkill(groupIndex, skillIndex, "name", value)} />
                          <Field
                            label="Level"
                            type="number"
                            value={skill.level}
                            onChange={(value) => updateSkill(groupIndex, skillIndex, "level", value)}
                          />
                          <DangerButton label="Remove Skill" onClick={() => removeSkill(groupIndex, skillIndex)} />
                        </div>
                      ))}
                    </div>
                  </div>
                </AccordionEditor>
              ))}
            </div>
          </SectionBlock>

          <SectionBlock
            id="journey"
            title="Journey"
            description="Timeline items are also collapsed, so the page stays easy to scan."
            action={<AddButton label="Add Item" onClick={addTimelineItem} />}
          >
            <div className="grid gap-3">
              {draft.timeline.map((item, index) => (
                <AccordionEditor
                  key={`${item.period}-${index}`}
                  title={item.title}
                  subtitle={item.period}
                  defaultOpen={index === 0}
                >
                  <div className="mb-4 flex justify-end">
                    <DangerButton label="Remove Item" onClick={() => removeTimelineItem(index)} />
                  </div>
                  <div className="grid gap-4 md:grid-cols-[180px_1fr]">
                    <Field label="Period" value={item.period} onChange={(value) => updateTimeline(index, "period", value)} />
                    <Field label="Title" value={item.title} onChange={(value) => updateTimeline(index, "title", value)} />
                    <TextArea label="Body" value={item.body} onChange={(value) => updateTimeline(index, "body", value)} />
                  </div>
                </AccordionEditor>
              ))}
            </div>
          </SectionBlock>
        </div>
      </div>
    </main>
  );
}

function SectionBlock({ action, children, description, id, title }) {
  return (
    <section id={id} className="admin-panel p-5 sm:p-6">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-white">{title}</h2>
          <p className="mt-1 text-sm leading-6 text-slate-400">{description}</p>
        </div>
        {action}
      </div>
      {children}
    </section>
  );
}

function AccordionEditor({ children, defaultOpen = false, subtitle, title }) {
  return (
    <details
      open={defaultOpen}
      className="editor-disclosure group rounded-2xl border border-line bg-white/[0.03]"
    >
      <summary className="flex cursor-pointer items-center justify-between gap-4 px-4 py-4">
        <div>
          <h3 className="text-base font-semibold text-white">{title}</h3>
          <p className="mt-1 text-sm text-slate-400">{subtitle}</p>
        </div>
        <ChevronRight size={18} className="editor-chevron shrink-0 text-slate-400 transition" />
      </summary>
      <div className="border-t border-line px-4 py-4">
        {children}
      </div>
    </details>
  );
}

function Field({ label, onChange, type = "text", value }) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-medium text-slate-200">{label}</span>
      <input
        type={type}
        value={value ?? ""}
        onChange={(event) => onChange(event.target.value)}
        className="admin-field"
      />
    </label>
  );
}

function TextArea({ label, onChange, value }) {
  return (
    <label className="grid gap-2 md:col-span-2">
      <span className="text-sm font-medium text-slate-200">{label}</span>
      <textarea
        value={value ?? ""}
        rows="4"
        onChange={(event) => onChange(event.target.value)}
        className="admin-area"
      />
    </label>
  );
}

function CsvField({ label, onChange, value }) {
  return (
    <Field
      label={label}
      value={(value || []).join(", ")}
      onChange={(nextValue) => onChange(splitCsv(nextValue))}
    />
  );
}

function SelectField({ label, onChange, options, value }) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-medium text-slate-200">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="admin-field"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function AddButton({ label, onClick }) {
  return (
    <button
      type="button"
      className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-4 py-2 text-sm font-semibold text-cyan transition hover:bg-cyan/20"
      onClick={onClick}
    >
      <Plus size={16} />
      {label}
    </button>
  );
}

function DangerButton({ label, onClick }) {
  return (
    <button
      type="button"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-pink/20 bg-pink/10 text-pink transition hover:bg-pink/20"
      onClick={onClick}
      aria-label={label}
      title={label}
    >
      <Trash2 size={16} />
    </button>
  );
}
