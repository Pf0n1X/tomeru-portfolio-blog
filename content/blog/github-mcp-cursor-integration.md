---
title: "GitHub MCP — Streamline Git Operations in Cursor"
excerpt: "Configure the GitHub MCP in Cursor to perform Git operations like staging, committing, and creating pull requests directly from your IDE."
date: "2025-01-14"
tags: ["Cursor", "Git", "Developer Tools"]
published: true
---

# GitHub MCP — Streamline Git Operations in Cursor

You can use an MCP (Model Context Protocol) in Cursor to stage, commit, push, pull, create branches and even create pull requests directly from your IDE.

## Configuration

To configure the MCP on your repo, add the following code to the `.cursor/mcp.json` file:

```json
{
  "mcpServers": {
    "github": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "GITHUB_PERSONAL_ACCESS_TOKEN",
        "https://lnkd.in/dZVFzbWR"
      ],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "your_github_access_token"
      }
    }
  }
}
```

## Setup Requirements

Make sure you replace `your_github_access_token` with your own generated GitHub access token.

⚠️ **Important:** Make sure the token has:
- `repo` scope access authorization
- Authorization to access your organization (if needed)

## What You Can Do

With this MCP configured, you can perform Git operations directly from Cursor:
- ✅ Stage files
- ✅ Commit changes
- ✅ Push to remote
- ✅ Pull latest changes
- ✅ Create branches
- ✅ Create pull requests

This integration streamlines your development workflow by keeping you in your editor while managing version control operations.

For more information, check the official documentation.
