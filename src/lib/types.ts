export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  clone_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  created_at: string;
  topics: string[];
  license: {
    name: string;
    spdx_id: string;
  } | null;
}

export interface GitHubOrg {
  id: number;
  name: string;
  login: string;
  avatar_url: string;
  description: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

