
# Release on GitHub API

> REST API for BPMN processes to release projects on Github

## Requirements

- `Node` installed
- All the `code` required to get started

### Setup

Install npm dependencies
```shell
$ npm install
```

Start node server
```shell
$ npm start
```

---

## Features

#### Release project (POST)

>/releases

Payload:
```json
{
  "owner": "OWNER_OF_REPO",
  "repository": "REPO_NAME",
  "token": "GITHUB_TOKEN",
  "version": "RELEASE_VERSION",
  "name": "RELEASE_NAME",
  "branch": "REPO_BRANCH",
  "description": "DESCRIPTION_FOR_RELEASE",
  "draft": false,
  "prerelease": false
}
```
