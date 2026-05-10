import { useEffect, useState } from "react";
import {
  Download,
  Eye,
  FolderKanban,
  Inbox,
  Layers3,
  Mail,
  Phone,
  Plus,
  RotateCcw,
  Save,
  Search,
  ScrollText,
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

function formatSubmissionDate(value) {
  const date = new Date(value);

  if (!value || Number.isNaN(date.getTime())) {
    return "Unknown time";
  }

  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

export default function AdminPage() {
  const { content, resetContent, saveContent } = usePortfolioContent();
  const [draft, setDraft] = useState(content);
  const [status, setStatus] = useState(defaultStatus);
  const [adminPassword, setAdminPassword] = useState("");
  const [saving, setSaving] = useState(false);
  const [selectedSubmissionId, setSelectedSubmissionId] = useState("");
  const [submissionSearch, setSubmissionSearch] = useState("");
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [selectedSkillGroupIndex, setSelectedSkillGroupIndex] = useState(0);
  const [selectedTimelineIndex, setSelectedTimelineIndex] = useState(0);
  const [selectedStatIndex, setSelectedStatIndex] = useState(0);

  useEffect(() => {
    setDraft(content);
    setStatus(defaultStatus);
  }, [content]);

  useEffect(() => {
    const submissions = draft.contactSubmissions || [];

    if (!submissions.length) {
      setSelectedSubmissionId("");
      return;
    }

    if (!submissions.some((submission) => submission.id === selectedSubmissionId)) {
      setSelectedSubmissionId(submissions[0].id || "");
    }
  }, [draft.contactSubmissions, selectedSubmissionId]);

  useEffect(() => {
    setSelectedProjectIndex((index) => Math.min(index, Math.max(draft.projects.length - 1, 0)));
    setSelectedSkillGroupIndex((index) => Math.min(index, Math.max(draft.skillGroups.length - 1, 0)));
    setSelectedTimelineIndex((index) => Math.min(index, Math.max(draft.timeline.length - 1, 0)));
    setSelectedStatIndex((index) => Math.min(index, Math.max(draft.stats.length - 1, 0)));
  }, [draft.projects.length, draft.skillGroups.length, draft.timeline.length, draft.stats.length]);

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
    const nextIndex = draft.projects.length;

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
    setSelectedProjectIndex(nextIndex);
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
    const nextIndex = draft.timeline.length;

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
    setSelectedTimelineIndex(nextIndex);
  };

  const removeTimelineItem = (index) => {
    updateDraft((current) => ({
      ...current,
      timeline: current.timeline.filter((_, itemIndex) => itemIndex !== index),
    }));
  };

  const removeContactSubmission = (id) => {
    updateDraft((current) => ({
      ...current,
      contactSubmissions: (current.contactSubmissions || []).filter(
        (submission) => submission.id !== id,
      ),
    }));
  };

  const handleSave = async () => {
    if (!adminPassword.trim()) {
      setStatus("Enter admin password");
      return;
    }

    setSaving(true);
    setStatus("Saving to GitHub");

    try {
      const saved = await saveContent(draft, {
        password: adminPassword.trim(),
        remote: true,
      });
      setDraft(saved);
      setStatus("Saved to GitHub");
    } catch (error) {
      setStatus(error.message || "Save failed");
    } finally {
      setSaving(false);
    }
  };

  const handleReset = async () => {
    if (!window.confirm("Reset portfolio content to defaults?")) {
      return;
    }

    if (!adminPassword.trim()) {
      setStatus("Enter admin password");
      return;
    }

    setSaving(true);
    setStatus("Resetting GitHub content");

    try {
      const defaults = await resetContent({
        password: adminPassword.trim(),
        remote: true,
      });
      setDraft(defaults);
      setStatus("Reset on GitHub");
    } catch (error) {
      setStatus(error.message || "Reset failed");
    } finally {
      setSaving(false);
    }
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
    { label: "Messages", value: (draft.contactSubmissions || []).length, icon: Inbox },
    { label: "Skill items", value: countSkills(draft.skillGroups), icon: Layers3 },
    { label: "Journey items", value: draft.timeline.length, icon: ScrollText },
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
                  Open one section at a time, edit the content, save it to GitHub, then preview the site.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-line bg-white/5 px-3 py-2 text-xs font-semibold text-slate-300">
                {status}
              </span>
              <label className="min-w-[12rem]">
                <span className="sr-only">Admin password</span>
                <input
                  type="password"
                  value={adminPassword}
                  onChange={(event) => setAdminPassword(event.target.value)}
                  placeholder="Admin password"
                  className="h-10 w-full rounded-full border border-line bg-white/5 px-4 text-sm text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan/50 focus:ring-4 focus:ring-cyan/10"
                />
              </label>
              <a href="/" className="admin-action">
                <Eye size={16} />
                View Site
              </a>
              <button type="button" className="admin-action" onClick={handleExport}>
                <Download size={16} />
                Export
              </button>
              <button type="button" className="admin-action disabled:cursor-not-allowed disabled:opacity-60" onClick={handleReset} disabled={saving}>
                <RotateCcw size={16} />
                Reset
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan via-violet to-pink px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
                onClick={handleSave}
                disabled={saving}
              >
                <Save size={16} />
                {saving ? "Saving" : "Save Changes"}
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
            <ProfileEditor
              profile={draft.profile}
              onProfileChange={updateProfile}
              onSocialChange={updateSocial}
            />
          </SectionBlock>

          <SectionBlock
            id="messages"
            title="Contact messages"
            description="Messages submitted from the portfolio contact form."
          >
            <ContactInbox
              onRemove={removeContactSubmission}
              onSearchChange={setSubmissionSearch}
              onSelect={setSelectedSubmissionId}
              search={submissionSearch}
              selectedId={selectedSubmissionId}
              submissions={draft.contactSubmissions || []}
            />
          </SectionBlock>

          <SectionBlock
            id="hero"
            title="Hero fallback and badges"
            description="These fallback stats appear if GitHub data is unavailable. Tech badges power the About section."
          >
            <HeroEditor
              onSelect={setSelectedStatIndex}
              onStatChange={updateStat}
              onTechBadgesChange={(value) => updateDraft((current) => ({ ...current, techBadges: value }))}
              selectedIndex={selectedStatIndex}
              stats={draft.stats}
              techBadges={draft.techBadges}
            />
          </SectionBlock>

          <SectionBlock
            id="projects"
            title="Projects"
            description="Select a project from the list, edit the details, then save."
            action={<AddButton label="Add Project" onClick={addProject} />}
          >
            <ProjectsEditor
              onProjectChange={updateProject}
              onRemove={removeProject}
              onSelect={setSelectedProjectIndex}
              projects={draft.projects}
              selectedIndex={selectedProjectIndex}
            />
          </SectionBlock>

          <SectionBlock
            id="skills"
            title="Skills"
            description="Edit each group separately. Skill percentages should stay between 0 and 100."
          >
            <SkillsEditor
              groups={draft.skillGroups}
              onAddSkill={addSkill}
              onGroupChange={updateSkillGroup}
              onRemoveSkill={removeSkill}
              onSelect={setSelectedSkillGroupIndex}
              onSkillChange={updateSkill}
              selectedIndex={selectedSkillGroupIndex}
            />
          </SectionBlock>

          <SectionBlock
            id="journey"
            title="Journey"
            description="Select a timeline item from the list, edit the details, then save."
            action={<AddButton label="Add Item" onClick={addTimelineItem} />}
          >
            <JourneyEditor
              onRemove={removeTimelineItem}
              onSelect={setSelectedTimelineIndex}
              onTimelineChange={updateTimeline}
              selectedIndex={selectedTimelineIndex}
              timeline={draft.timeline}
            />
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

function ContentWorkspace({ children, list, minHeight = "min-h-[30rem]" }) {
  return (
    <div className={`grid ${minHeight} overflow-hidden rounded-2xl border border-line bg-white/[0.03] lg:grid-cols-[320px_minmax(0,1fr)]`}>
      <div className="border-b border-line bg-black/10 p-2 lg:border-b-0 lg:border-r">
        {list}
      </div>
      <div className="min-w-0 p-4 sm:p-5">{children}</div>
    </div>
  );
}

function ListButton({ active, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`mb-2 w-full rounded-xl border p-3 text-left transition ${
        active
          ? "border-cyan/40 bg-cyan/10"
          : "border-transparent bg-white/[0.03] hover:border-line hover:bg-white/[0.06]"
      }`}
    >
      {children}
    </button>
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

function ProfileEditor({ onProfileChange, onSocialChange, profile }) {
  const list = (
    <div>
      {[
        ["Identity", profile.name, profile.role],
        ["Contact", profile.email, profile.location],
        ["Social links", profile.socials.github, profile.socials.linkedin],
      ].map(([title, lineOne, lineTwo]) => (
        <ListButton key={title} active={title === "Identity"}>
          <p className="text-sm font-semibold text-white">{title}</p>
          <p className="mt-1 truncate text-xs text-cyan">{lineOne}</p>
          <p className="mt-1 truncate text-xs text-slate-400">{lineTwo}</p>
        </ListButton>
      ))}
      <div className="rounded-xl border border-line bg-white/[0.03] p-4">
        <img
          src={profile.photo}
          alt={`${profile.name} preview`}
          className="mx-auto h-20 w-20 rounded-full border border-cyan/30 object-cover p-0.5"
        />
        <p className="mt-3 truncate text-center text-sm font-semibold text-white">{profile.name}</p>
        <p className="mt-1 truncate text-center text-xs text-slate-400">{profile.role}</p>
      </div>
    </div>
  );

  return (
    <ContentWorkspace list={list}>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Name" value={profile.name} onChange={(value) => onProfileChange("name", value)} />
        <Field label="Role" value={profile.role} onChange={(value) => onProfileChange("role", value)} />
        <Field label="Location" value={profile.location} onChange={(value) => onProfileChange("location", value)} />
        <Field label="Email" value={profile.email} onChange={(value) => onProfileChange("email", value)} />
        <Field label="Photo URL" value={profile.photo} onChange={(value) => onProfileChange("photo", value)} />
        <Field label="GitHub Username" value={profile.githubUsername} onChange={(value) => onProfileChange("githubUsername", value)} />
        <TextArea label="Tagline" value={profile.tagline} onChange={(value) => onProfileChange("tagline", value)} />
        <TextArea label="Summary" value={profile.summary} onChange={(value) => onProfileChange("summary", value)} />
        <Field label="GitHub Link" value={profile.socials.github} onChange={(value) => onSocialChange("github", value)} />
        <Field label="LinkedIn Link" value={profile.socials.linkedin} onChange={(value) => onSocialChange("linkedin", value)} />
        <Field label="Instagram Link" value={profile.socials.instagram} onChange={(value) => onSocialChange("instagram", value)} />
        <Field label="Email Link" value={profile.socials.email} onChange={(value) => onSocialChange("email", value)} />
      </div>
    </ContentWorkspace>
  );
}

function HeroEditor({ onSelect, onStatChange, onTechBadgesChange, selectedIndex, stats, techBadges }) {
  const selectedStat = stats[selectedIndex] || stats[0];

  return (
    <ContentWorkspace
      list={
        <div>
          {stats.map((stat, index) => (
            <ListButton key={`${stat.label}-${index}`} active={index === selectedIndex} onClick={() => onSelect(index)}>
              <div className="flex items-center justify-between gap-3">
                <p className="truncate text-sm font-semibold text-white">{stat.label}</p>
                <p className="text-lg font-bold text-cyan">{stat.value}</p>
              </div>
            </ListButton>
          ))}
          <div className="rounded-xl border border-line bg-white/[0.03] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Badges</p>
            <p className="mt-2 text-sm text-slate-300">{techBadges.length} tech badges</p>
          </div>
        </div>
      }
      minHeight="min-h-[22rem]"
    >
      {selectedStat ? (
        <div className="grid gap-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Value" value={selectedStat.value} onChange={(value) => onStatChange(selectedIndex, "value", value)} />
            <Field label="Label" value={selectedStat.label} onChange={(value) => onStatChange(selectedIndex, "label", value)} />
          </div>
          <CsvField label="Tech Badges" value={techBadges} onChange={onTechBadgesChange} />
        </div>
      ) : null}
    </ContentWorkspace>
  );
}

function ProjectsEditor({ onProjectChange, onRemove, onSelect, projects, selectedIndex }) {
  const selectedProject = projects[selectedIndex] || projects[0];

  return (
    <ContentWorkspace
      list={
        <div className="max-h-[31rem] overflow-y-auto">
          {projects.map((project, index) => (
            <ListButton key={`${project.title}-${index}`} active={index === selectedIndex} onClick={() => onSelect(index)}>
              <p className="truncate text-sm font-semibold text-white">{project.title || `Project ${index + 1}`}</p>
              <p className="mt-1 truncate text-xs text-cyan">{project.category || "project"}</p>
              <p className="mt-1 truncate text-xs text-slate-400">{(project.tech || []).slice(0, 3).join(", ") || "No tech tags"}</p>
            </ListButton>
          ))}
        </div>
      }
    >
      {selectedProject ? (
        <div className="grid gap-4">
          <div className="flex flex-wrap items-start justify-between gap-3 border-b border-line pb-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan">Selected project</p>
              <h3 className="mt-2 text-2xl font-bold text-white">{selectedProject.title || `Project ${selectedIndex + 1}`}</h3>
            </div>
            <DangerButton label="Remove Project" onClick={() => onRemove(selectedIndex)} />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Title" value={selectedProject.title} onChange={(value) => onProjectChange(selectedIndex, "title", value)} />
            <Field label="Category" value={selectedProject.category} onChange={(value) => onProjectChange(selectedIndex, "category", value)} />
            <Field label="GitHub URL" value={selectedProject.github} onChange={(value) => onProjectChange(selectedIndex, "github", value)} />
            <Field label="Live Demo URL" value={selectedProject.live || ""} onChange={(value) => onProjectChange(selectedIndex, "live", value)} />
            <SelectField label="Accent" value={selectedProject.accent} options={accentOptions} onChange={(value) => onProjectChange(selectedIndex, "accent", value)} />
            <CsvField label="Tech tags" value={selectedProject.tech} onChange={(value) => onProjectChange(selectedIndex, "tech", value)} />
            <TextArea label="Description" value={selectedProject.description} onChange={(value) => onProjectChange(selectedIndex, "description", value)} />
          </div>
        </div>
      ) : (
        <EmptyState text="Add a project to start editing." />
      )}
    </ContentWorkspace>
  );
}

function SkillsEditor({ groups, onAddSkill, onGroupChange, onRemoveSkill, onSelect, onSkillChange, selectedIndex }) {
  const selectedGroup = groups[selectedIndex] || groups[0];

  return (
    <ContentWorkspace
      list={
        <div>
          {groups.map((group, index) => (
            <ListButton key={`${group.title}-${index}`} active={index === selectedIndex} onClick={() => onSelect(index)}>
              <p className="truncate text-sm font-semibold text-white">{group.title}</p>
              <p className="mt-1 text-xs text-cyan">{group.skills.length} skills</p>
              <p className="mt-1 truncate text-xs text-slate-400">{group.description}</p>
            </ListButton>
          ))}
        </div>
      }
    >
      {selectedGroup ? (
        <div className="grid gap-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Group Title" value={selectedGroup.title} onChange={(value) => onGroupChange(selectedIndex, "title", value)} />
            <Field label="Group Description" value={selectedGroup.description} onChange={(value) => onGroupChange(selectedIndex, "description", value)} />
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
            <p className="text-sm text-slate-400">Skill items inside this group</p>
            <AddButton label="Add Skill" onClick={() => onAddSkill(selectedIndex)} />
          </div>
          <div className="grid gap-3">
            {selectedGroup.skills.map((skill, skillIndex) => (
              <div key={`${skill.name}-${skillIndex}`} className="grid gap-3 rounded-2xl border border-line bg-white/[0.03] p-3 md:grid-cols-[minmax(0,1fr)_130px_auto] md:items-end">
                <Field label="Skill" value={skill.name} onChange={(value) => onSkillChange(selectedIndex, skillIndex, "name", value)} />
                <Field label="Level" type="number" value={skill.level} onChange={(value) => onSkillChange(selectedIndex, skillIndex, "level", value)} />
                <DangerButton label="Remove Skill" onClick={() => onRemoveSkill(selectedIndex, skillIndex)} />
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </ContentWorkspace>
  );
}

function JourneyEditor({ onRemove, onSelect, onTimelineChange, selectedIndex, timeline }) {
  const selectedItem = timeline[selectedIndex] || timeline[0];

  return (
    <ContentWorkspace
      list={
        <div className="max-h-[28rem] overflow-y-auto">
          {timeline.map((item, index) => (
            <ListButton key={`${item.period}-${index}`} active={index === selectedIndex} onClick={() => onSelect(index)}>
              <p className="truncate text-sm font-semibold text-white">{item.title}</p>
              <p className="mt-1 text-xs text-cyan">{item.period}</p>
              <p className="mt-1 max-h-10 overflow-hidden text-xs leading-5 text-slate-400">{item.body}</p>
            </ListButton>
          ))}
        </div>
      }
      minHeight="min-h-[24rem]"
    >
      {selectedItem ? (
        <div className="grid gap-4">
          <div className="flex justify-end">
            <DangerButton label="Remove Item" onClick={() => onRemove(selectedIndex)} />
          </div>
          <div className="grid gap-4 md:grid-cols-[180px_1fr]">
            <Field label="Period" value={selectedItem.period} onChange={(value) => onTimelineChange(selectedIndex, "period", value)} />
            <Field label="Title" value={selectedItem.title} onChange={(value) => onTimelineChange(selectedIndex, "title", value)} />
            <TextArea label="Body" value={selectedItem.body} onChange={(value) => onTimelineChange(selectedIndex, "body", value)} />
          </div>
        </div>
      ) : (
        <EmptyState text="Add a journey item to start editing." />
      )}
    </ContentWorkspace>
  );
}

function EmptyState({ text }) {
  return (
    <div className="grid h-full place-items-center rounded-2xl border border-line bg-white/[0.03] p-6 text-center text-sm text-slate-400">
      {text}
    </div>
  );
}

function ContactInbox({ onRemove, onSearchChange, onSelect, search, selectedId, submissions }) {
  const normalizedSearch = search.trim().toLowerCase();
  const filteredSubmissions = normalizedSearch
    ? submissions.filter((submission) =>
        [submission.name, submission.email, submission.phone, submission.message]
          .join(" ")
          .toLowerCase()
          .includes(normalizedSearch),
      )
    : submissions;
  const selectedSubmission =
    filteredSubmissions.find((submission) => submission.id === selectedId) ||
    filteredSubmissions[0] ||
    null;

  if (!submissions.length) {
    return (
      <div className="rounded-2xl border border-line bg-white/[0.03] p-5 text-sm text-slate-400">
        No contact messages yet.
      </div>
    );
  }

  return (
    <div className="grid min-h-[34rem] overflow-hidden rounded-2xl border border-line bg-white/[0.03] lg:grid-cols-[340px_minmax(0,1fr)]">
      <div className="border-b border-line bg-black/10 lg:border-b-0 lg:border-r">
        <div className="border-b border-line p-4">
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-semibold text-white">{submissions.length} messages</p>
            <p className="text-xs text-slate-400">{filteredSubmissions.length} shown</p>
          </div>
          <label className="mt-3 flex min-h-11 items-center gap-3 rounded-xl border border-line bg-white/5 px-3 transition focus-within:border-cyan/50 focus-within:ring-4 focus-within:ring-cyan/10">
            <Search size={16} className="shrink-0 text-slate-400" />
            <span className="sr-only">Search messages</span>
            <input
              type="search"
              value={search}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Search messages"
              className="w-full bg-transparent text-sm text-slate-100 outline-none placeholder:text-slate-500"
            />
          </label>
        </div>

        <div className="max-h-[28rem] overflow-y-auto p-2">
          {filteredSubmissions.length ? (
            filteredSubmissions.map((submission, index) => {
              const isSelected = selectedSubmission?.id === submission.id;

              return (
                <button
                  key={submission.id || `${submission.email}-${index}`}
                  type="button"
                  onClick={() => onSelect(submission.id)}
                  className={`mb-2 grid w-full gap-2 rounded-xl border p-3 text-left transition ${
                    isSelected
                      ? "border-cyan/40 bg-cyan/10"
                      : "border-transparent bg-white/[0.03] hover:border-line hover:bg-white/[0.06]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <p className="min-w-0 truncate text-sm font-semibold text-white">
                      {submission.name || "Unknown sender"}
                    </p>
                    <span className="shrink-0 text-[11px] text-slate-500">
                      {formatSubmissionDate(submission.submittedAt)}
                    </span>
                  </div>
                  <p className="truncate text-xs text-cyan">{submission.email || "No email"}</p>
                  <p className="max-h-10 overflow-hidden text-xs leading-5 text-slate-400">
                    {submission.message || "No message"}
                  </p>
                </button>
              );
            })
          ) : (
            <div className="rounded-xl border border-line bg-white/[0.03] p-4 text-sm text-slate-400">
              No messages match your search.
            </div>
          )}
        </div>
      </div>

      <div className="min-w-0 p-4 sm:p-5">
        {selectedSubmission ? (
          <div className="grid h-full content-start gap-4">
            <div className="flex flex-wrap items-start justify-between gap-3 border-b border-line pb-4">
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
                  Selected message
                </p>
                <h3 className="mt-2 break-words text-2xl font-bold text-white">
                  {selectedSubmission.name || "Unknown sender"}
                </h3>
                <p className="mt-1 text-sm text-slate-400">
                  {formatSubmissionDate(selectedSubmission.submittedAt)}
                </p>
              </div>
              <DangerButton
                label="Remove Message"
                onClick={() => onRemove(selectedSubmission.id)}
              />
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <InfoLine
                icon={Mail}
                label="Email"
                value={selectedSubmission.email}
                href={selectedSubmission.email ? `mailto:${selectedSubmission.email}` : ""}
              />
              <InfoLine icon={Phone} label="Mobile" value={selectedSubmission.phone || "Not provided"} />
              <InfoLine label="Page" value={selectedSubmission.pageUrl || "Not captured"} href={selectedSubmission.pageUrl} />
              <InfoLine label="Browser" value={selectedSubmission.userAgent || "Not captured"} />
            </div>

            <div className="rounded-2xl border border-line bg-white/[0.03] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Message
              </p>
              <p className="mt-3 max-h-72 overflow-y-auto whitespace-pre-wrap text-sm leading-6 text-slate-100">
                {selectedSubmission.message || "No message"}
              </p>
            </div>
          </div>
        ) : (
          <div className="grid h-full place-items-center rounded-2xl border border-line bg-white/[0.03] p-6 text-center text-sm text-slate-400">
            Select a message to view details.
          </div>
        )}
      </div>
    </div>
  );
}

function InfoLine({ href, icon: Icon, label, value }) {
  const content = value || "Not provided";

  return (
    <div className="min-w-0 rounded-2xl border border-line bg-white/[0.03] p-4">
      <div className="flex items-center gap-2">
        {Icon ? <Icon size={14} className="shrink-0 text-cyan" /> : null}
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
          {label}
        </p>
      </div>
      {href ? (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer" : undefined}
          className="mt-2 block break-words text-sm font-medium text-cyan transition hover:text-white"
        >
          {content}
        </a>
      ) : (
        <p className="mt-2 break-words text-sm font-medium text-slate-100">{content}</p>
      )}
    </div>
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
