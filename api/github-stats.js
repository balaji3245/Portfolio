const GITHUB_API = "https://api.github.com";

function sendJson(response, statusCode, payload) {
  response.statusCode = statusCode;
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.setHeader("Cache-Control", "no-store");
  response.end(JSON.stringify(payload));
}

function getGithubNextPage(linkHeader) {
  if (!linkHeader) {
    return null;
  }

  const nextLink = linkHeader
    .split(",")
    .map((link) => link.trim())
    .find((link) => link.endsWith('rel="next"'));

  return nextLink?.match(/<([^>]+)>/)?.[1] || null;
}

async function githubRequest(url, token) {
  const response = await fetch(url, {
    headers: {
      Accept: "application/vnd.github+json",
      "User-Agent": "balaji-portfolio-stats",
      "X-GitHub-Api-Version": "2022-11-28",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const error = new Error(data.message || "GitHub request failed");
    error.statusCode = response.status;
    throw error;
  }

  return { data, link: response.headers.get("Link") };
}

async function fetchAllRepos(username, token) {
  const repos = [];
  const publicUrl = `${GITHUB_API}/users/${encodeURIComponent(
    username,
  )}/repos?type=owner&sort=pushed&direction=desc&per_page=100`;
  let url = token
    ? `${GITHUB_API}/user/repos?visibility=all&affiliation=owner&sort=pushed&direction=desc&per_page=100`
    : publicUrl;

  while (url) {
    const { data, link } = await githubRequest(url, token);
    const pageRepos = Array.isArray(data) ? data : [];
    repos.push(
      ...pageRepos.filter((repo) => repo.owner?.login?.toLowerCase() === username.toLowerCase()),
    );
    url = getGithubNextPage(link);
  }

  if (token && repos.length === 0) {
    return fetchAllRepos(username, "");
  }

  return repos;
}

export default async function handler(request, response) {
  if (request.method === "OPTIONS") {
    response.statusCode = 204;
    response.end();
    return;
  }

  if (request.method !== "GET") {
    response.setHeader("Allow", "GET, OPTIONS");
    sendJson(response, 405, { error: "Method not allowed." });
    return;
  }

  const username = request.query?.username || "balaji3245";
  const token = process.env.GITHUB_CONTENT_TOKEN || process.env.GITHUB_TOKEN || "";

  try {
    const [{ data: user }, repos] = await Promise.all([
      githubRequest(`${GITHUB_API}/users/${encodeURIComponent(username)}`, ""),
      fetchAllRepos(username, token),
    ]);
    const latestRepo = repos[0] || null;

    sendJson(response, 200, {
      createdAt: user.created_at || null,
      latestLanguage: latestRepo?.language || null,
      totalRepos: repos.length,
    });
  } catch (error) {
    sendJson(response, error.statusCode || 500, {
      error: error.message || "GitHub stats request failed.",
    });
  }
}
