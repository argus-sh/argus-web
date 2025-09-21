import type { GitHubOrg, GitHubRepo } from "./types";

const GITHUB_API_BASE = "https://api.github.com";
const ORG_NAME = "argus-sh";

export async function fetchOrgRepos(): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/orgs/${ORG_NAME}/repos?sort=updated&per_page=10`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      },
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch repos: ${response.status}`);
    }

    const repos = await response.json();
    return repos;
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    // Return fallback data
    return [
      {
        id: 1,
        name: "argus-ts",
        full_name: "argus-sh/argus-ts",
        description:
          "A minimal, type-safe, and elegant CLI framework for TypeScript.",
        html_url: "https://github.com/argus-sh/argus-ts",
        clone_url: "https://github.com/argus-sh/argus-ts.git",
        language: "TypeScript",
        stargazers_count: 5,
        forks_count: 0,
        updated_at: new Date().toISOString(),
        created_at: "2024-08-24T00:00:00Z",
        topics: ["cli", "typescript", "framework", "command-line"],
        license: {
          name: "MIT License",
          spdx_id: "MIT",
        },
      },
    ];
  }
}

export async function fetchOrgInfo(): Promise<GitHubOrg | null> {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/orgs/${ORG_NAME}`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch org info: ${response.status}`);
    }

    const org = await response.json();
    return org;
  } catch (error) {
    console.error("Error fetching GitHub org info:", error);
    return null;
  }
}

