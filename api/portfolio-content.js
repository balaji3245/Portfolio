const DEFAULT_REPO = "balaji3245/Portfolio";
const DEFAULT_BRANCH = "main";
const DEFAULT_CONTENT_PATH = "portfolio-content.json";

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
    adminPassword: process.env.PORTFOLIO_ADMIN_PASSWORD,
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
  const headers = {
    Accept: "application/vnd.github+json",
    "User-Agent": "balaji-portfolio-admin",
    "X-GitHub-Api-Version": "2022-11-28",
    ...(options.token ? { Authorization: `Bearer ${options.token}` } : {}),
  };

  const response = await fetch(url, {
    method: options.method || "GET",
    headers: {
      ...headers,
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

  try {
    return await githubRequest(url, { token: config.token });
  } catch (error) {
    if (error.statusCode === 404) {
      return null;
    }
    throw error;
  }
}

async function readPortfolioContent(config) {
  const file = await fetchContentFile(config);

  if (!file?.content) {
    return null;
  }

  const json = Buffer.from(file.content, "base64").toString("utf8");
  return JSON.parse(json);
}

async function writePortfolioContent(config, content) {
  if (!config.token) {
    const error = new Error("GitHub token is not configured.");
    error.statusCode = 500;
    throw error;
  }

  const existingFile = await fetchContentFile(config);
  const url = `https://api.github.com/repos/${config.repo}/contents/${encodePath(
    config.contentPath,
  )}`;
  const json = `${JSON.stringify(content, null, 2)}\n`;
  const payload = {
    branch: config.branch,
    content: Buffer.from(json, "utf8").toString("base64"),
    message: "Update portfolio content from admin panel",
    ...(existingFile?.sha ? { sha: existingFile.sha } : {}),
  };

  return githubRequest(url, {
    body: payload,
    method: "PUT",
    token: config.token,
  });
}

export default async function handler(request, response) {
  if (request.method === "OPTIONS") {
    response.statusCode = 204;
    response.end();
    return;
  }

  const config = getConfig();

  try {
    if (request.method === "GET") {
      const content = await readPortfolioContent(config);
      sendJson(response, 200, { content });
      return;
    }

    if (request.method === "POST") {
      if (!config.adminPassword) {
        sendJson(response, 500, { error: "Admin password is not configured." });
        return;
      }

      const body = await readRequestBody(request);

      if (body.password !== config.adminPassword) {
        sendJson(response, 401, { error: "Invalid admin password." });
        return;
      }

      if (!body.content || typeof body.content !== "object") {
        sendJson(response, 400, { error: "Portfolio content is required." });
        return;
      }

      const result = await writePortfolioContent(config, body.content);
      sendJson(response, 200, {
        content: body.content,
        commit: result.commit?.sha,
      });
      return;
    }

    response.setHeader("Allow", "GET, POST, OPTIONS");
    sendJson(response, 405, { error: "Method not allowed." });
  } catch (error) {
    sendJson(response, error.statusCode || 500, {
      error: error.message || "Portfolio content request failed.",
    });
  }
}
