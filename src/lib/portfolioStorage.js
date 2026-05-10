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

export function savePortfolioContent(content) {
  const merged = mergePortfolioContent(content);
  window.localStorage.setItem(PORTFOLIO_STORAGE_KEY, JSON.stringify(merged));
  return merged;
}

export function resetPortfolioContent() {
  window.localStorage.removeItem(PORTFOLIO_STORAGE_KEY);
  return cloneContent(defaultPortfolioContent);
}
