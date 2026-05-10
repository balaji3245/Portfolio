const DEFAULT_REPO = "balaji3245/Portfolio";
const DEFAULT_BRANCH = "main";
const DEFAULT_CONTENT_PATH = "portfolio-content.json";
const MAX_SUBMISSIONS = 100;

function sendJson(response, statusCode, payload) {
  response.statusCode = statusCode;
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.setHeader("Cache-Control", "no-store");
  response.end(JSON.stringify(payload));
}

function encodePath(path) {
  return path.split("/").map(encodeURIComponent).join("/");
}

function getConfig() {
  return {
    branch: process.env.GITHUB_CONTENT_BRANCH || DEFAULT_BRANCH,
    contentPath: process.env.GITHUB_CONTENT_PATH || DEFAULT_CONTENT_PATH,
    repo: process.env.GITHUB_CONTENT_REPO || DEFAULT_REPO,
    token: process.env.GITHUB_CONTENT_TOKEN || process.env.GITHUB_TOKEN,
  };
}

async function readRequestBody(request) {
  if (request.body && typeof request.body === "object") {
    return request.body;
  }

  if (typeof request.body === "string") {
    return JSON.parse(request.body || "{}");
  }

  const chunks = [];
  for await (const chunk of request) {
    chunks.push(chunk);
  }
  const rawBody = Buffer.concat(chunks).toString("utf8");
  return rawBody ? JSON.parse(rawBody) : {};
}

async function githubRequest(url, options = {}) {
  const response = await fetch(url, {
    method: options.method || "GET",
    headers: {
      Accept: "application/vnd.github+json",
      "User-Agent": "balaji-portfolio-contact",
      "X-GitHub-Api-Version": "2022-11-28",
      ...(options.token ? { Authorization: `Bearer ${options.token}` } : {}),
      ...(options.body ? { "Content-Type": "application/json" } : {}),
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
  });
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const error = new Error(data.message || "GitHub request failed");
    error.statusCode = response.status;
    throw error;
  }

  return data;
}

async function fetchContentFile(config) {
  const url = `https://api.github.com/repos/${config.repo}/contents/${encodePath(
    config.contentPath,
  )}?ref=${encodeURIComponent(config.branch)}`;
  return githubRequest(url, { token: config.token });
}

async function readPortfolioContent(config) {
  const file = await fetchContentFile(config);
  const json = Buffer.from(file.content || "", "base64").toString("utf8");
  return {
    content: json ? JSON.parse(json) : {},
    sha: file.sha,
  };
}

async function writePortfolioContent(config, content, sha) {
  const url = `https://api.github.com/repos/${config.repo}/contents/${encodePath(
    config.contentPath,
  )}`;
  const json = `${JSON.stringify(content, null, 2)}\n`;

  return githubRequest(url, {
    body: {
      branch: config.branch,
      content: Buffer.from(json, "utf8").toString("base64"),
      message: "Add portfolio contact submission",
      sha,
    },
    method: "PUT",
    token: config.token,
  });
}

function cleanText(value, maxLength) {
  return String(value || "").trim().slice(0, maxLength);
}

function createSubmission(body, request) {
  const submission = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`,
    name: cleanText(body.name, 120),
    email: cleanText(body.email, 180),
    phone: cleanText(body.phone, 40),
    message: cleanText(body.message, 2000),
    pageUrl: cleanText(body.pageUrl, 500),
    submittedAt: new Date().toISOString(),
    userAgent: cleanText(request.headers["user-agent"], 300),
  };

  if (!submission.name || !submission.email || !submission.message) {
    const error = new Error("Name, email, and message are required.");
    error.statusCode = 400;
    throw error;
  }

  return submission;
}

export default async function handler(request, response) {
  if (request.method === "OPTIONS") {
    response.statusCode = 204;
    response.end();
    return;
  }

  if (request.method !== "POST") {
    response.setHeader("Allow", "POST, OPTIONS");
    sendJson(response, 405, { error: "Method not allowed." });
    return;
  }

  const config = getConfig();

  if (!config.token) {
    sendJson(response, 500, { error: "GitHub token is not configured." });
    return;
  }

  try {
    const body = await readRequestBody(request);

    if (body.company) {
      sendJson(response, 200, { ok: true });
      return;
    }

    const submission = createSubmission(body, request);
    const { content, sha } = await readPortfolioContent(config);
    const submissions = Array.isArray(content.contactSubmissions)
      ? content.contactSubmissions
      : [];
    const nextContent = {
      ...content,
      contactSubmissions: [submission, ...submissions].slice(0, MAX_SUBMISSIONS),
    };

    await writePortfolioContent(config, nextContent, sha);
    sendJson(response, 200, { ok: true, submission });
  } catch (error) {
    sendJson(response, error.statusCode || 500, {
      error: error.message || "Unable to save contact submission.",
    });
  }
}
