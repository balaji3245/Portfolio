import {
  highlights,
  navItems,
  profile,
  projects,
  skillGroups,
  stats,
  techBadges,
  timeline,
} from "../data/portfolio.js";

export const PORTFOLIO_STORAGE_KEY = "balaji-portfolio-content-v1";

export const defaultPortfolioContent = {
  profile,
  navItems,
  stats,
  techBadges,
  projects,
  skillGroups,
  highlights,
  timeline,
};

const cloneContent = (content) => JSON.parse(JSON.stringify(content));

export function mergePortfolioContent(content = {}) {
  return {
    ...cloneContent(defaultPortfolioContent),
    ...content,
    profile: {
      ...defaultPortfolioContent.profile,
      ...(content.profile || {}),
      socials: {
        ...defaultPortfolioContent.profile.socials,
        ...(content.profile?.socials || {}),
      },
    },
    navItems: Array.isArray(content.navItems) ? content.navItems : defaultPortfolioContent.navItems,
    stats: Array.isArray(content.stats) ? content.stats : defaultPortfolioContent.stats,
    techBadges: Array.isArray(content.techBadges) ? content.techBadges : defaultPortfolioContent.techBadges,
    projects: Array.isArray(content.projects) ? content.projects : defaultPortfolioContent.projects,
    skillGroups: Array.isArray(content.skillGroups) ? content.skillGroups : defaultPortfolioContent.skillGroups,
    highlights: Array.isArray(content.highlights) ? content.highlights : defaultPortfolioContent.highlights,
    timeline: Array.isArray(content.timeline) ? content.timeline : defaultPortfolioContent.timeline,
  };
}

export function readPortfolioContent() {
  if (typeof window === "undefined") {
    return cloneContent(defaultPortfolioContent);
  }

  try {
    const stored = window.localStorage.getItem(PORTFOLIO_STORAGE_KEY);
    return stored ? mergePortfolioContent(JSON.parse(stored)) : cloneContent(defaultPortfolioContent);
  } catch {
    return cloneContent(defaultPortfolioContent);
  }
}

function saveLocalPortfolioContent(content) {
  const merged = mergePortfolioContent(content);
  window.localStorage.setItem(PORTFOLIO_STORAGE_KEY, JSON.stringify(merged));
  return merged;
}

async function readJsonResponse(response) {
  try {
    return await response.json();
  } catch {
    return {};
  }
}

export async function loadPortfolioContent() {
  const fallbackContent = readPortfolioContent();

  if (typeof window === "undefined") {
    return fallbackContent;
  }

  try {
    const response = await fetch("/api/portfolio-content", {
      cache: "no-store",
      headers: { Accept: "application/json" },
    });
    const data = await readJsonResponse(response);

    if (!response.ok || !data.content) {
      return fallbackContent;
    }

    return saveLocalPortfolioContent(data.content);
  } catch {
    return fallbackContent;
  }
}

export async function savePortfolioContent(content, options = {}) {
  const merged = mergePortfolioContent(content);

  if (!options.remote) {
    return saveLocalPortfolioContent(merged);
  }

  const response = await fetch("/api/portfolio-content", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      password: options.password,
      content: merged,
    }),
  });
  const data = await readJsonResponse(response);

  if (!response.ok) {
    throw new Error(data.error || "Unable to save portfolio content.");
  }

  return saveLocalPortfolioContent(data.content || merged);
}

export function resetPortfolioContent() {
  window.localStorage.removeItem(PORTFOLIO_STORAGE_KEY);
  return cloneContent(defaultPortfolioContent);
}
