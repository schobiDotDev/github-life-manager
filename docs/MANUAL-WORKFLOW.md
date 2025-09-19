# Manual Enhancement Workflow with Claude CLI

This workflow uses your authenticated Claude CLI to enhance content without any API costs.

## Quick Workflow

### 1. Create Issue
```bash
gh issue create --template task.yml --title "[TASK] Complete project documentation" --body "Need to write comprehensive docs for the new feature"
```

### 2. Enhance with Claude CLI
```bash
# Get the issue content
gh issue view 1 --json title,body

# Use Claude to enhance (copy the issue content into Claude)
claude

# In Claude session, ask:
# "Please enhance this task using the task template:
# Title: [paste title]
# Body: [paste body]"
```

### 3. Create Enhanced File
Save Claude's output to the appropriate directory and commit:
```bash
# Save to content/tasks/2024-01-15-complete-project-documentation.md
git add content/tasks/2024-01-15-complete-project-documentation.md
git commit -m "Add enhanced task: Complete project documentation"
git push
```

### 4. Close Issue
```bash
gh issue close 1 --comment "Enhanced and saved to content/tasks/2024-01-15-complete-project-documentation.md"
```

## Streamlined Script

You can create a helper script to make this easier:

```bash
#!/bin/bash
# enhance-issue.sh
ISSUE_NUM=$1
ISSUE_DATA=$(gh issue view $ISSUE_NUM --json title,body,labels)
echo "Issue data copied to clipboard. Paste into Claude CLI for enhancement."
echo "$ISSUE_DATA" | pbcopy  # macOS clipboard
```

This approach gives you all the benefits without any API costs!