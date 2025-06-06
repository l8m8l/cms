---
description: Create a commit from currently staged changes. If on `main`, use a new branch.
---

1. Summarize the staged changes from this session (do not stage any new files).
2. If the current branch is `main`:
    - Create a new branch named {type}/{summary}, where type is one of `feat`, `refactor`, `chore`, or `fix`.
    - Switch to the new branch using git switch {type}/{summary} (or git checkout) before committing.
3. Generate a concise and meaningful commit message.
4. Commit only the currently staged changes using the generated message. Do not stage or modify unstaged files.
