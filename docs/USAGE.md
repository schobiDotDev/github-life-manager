# Usage Guide

This guide covers how to use the GitHub Life Manager effectively.

## Creating Content

### Using Issue Templates

1. **Navigate to Issues** in your repository
2. **Click "New Issue"**
3. **Select appropriate template**:
   - 📋 New Task - for actionable items
   - 🚀 New Project - for larger initiatives
   - 📝 New Note - for information capture
   - 🎯 New Goal - for objectives and targets

4. **Fill out the template** with your information
5. **Ensure `needs-ai` label is applied**
6. **Submit the issue**

### Quick Capture

For rapid content input, use the Quick Capture link:
- Creates a simple issue with just a title and body
- Perfect for capturing thoughts on the go
- Claude will categorize and enhance the content

## Enhancement Process

### What Happens When You Submit

1. **Issue Creation**: Your issue is created with the `needs-ai` label
2. **Trigger**: GitHub Action detects the label and starts Claude Code
3. **Analysis**: Claude analyzes your content and determines the type
4. **Enhancement**: Content is improved and structured using templates
5. **File Creation**: A properly formatted file is created in the appropriate directory
6. **Pull Request**: Claude opens a PR with the enhanced content
7. **Issue Closure**: Original issue is closed with a reference to the new content

### Review and Merge

- **Review the PR** to ensure the enhancement meets your needs
- **Make adjustments** if necessary by editing the files directly
- **Merge the PR** to add the content to your life management system

## Content Organization

### Directory Structure

Your content is automatically organized into:

```
content/
├── tasks/          # Daily and project tasks
├── projects/       # Large initiatives and projects
├── notes/          # Meeting notes, research, ideas
├── goals/          # Personal and professional goals
└── archive/        # Completed or outdated content
```

### File Naming

Files follow consistent naming conventions:
- **Tasks**: `2024-01-15-update-website.md`
- **Projects**: `website-redesign.md`
- **Notes**: `2024-01-15-team-meeting.md`
- **Goals**: `learn-python.md`

### Tagging System

Content is tagged for easy organization:
- **Priority**: `high-priority`, `medium-priority`, `low-priority`
- **Category**: `work`, `personal`, `health`, `education`
- **Status**: `active`, `completed`, `on-hold`
- **Context**: `home`, `office`, `travel`

## Mobile Workflows

### Siri Shortcuts (iOS)

Create shortcuts for common actions:

**Quick Task Shortcut**:
1. Open Shortcuts app
2. Create new shortcut
3. Add "Ask for Input" action
4. Add "Open URLs" action with:
   ```
   https://github.com/USERNAME/github-life-manager/issues/new?labels=needs-ai,task&title=[TASK]%20TITLE&body=DESCRIPTION
   ```

**Voice Note Shortcut**:
1. Add "Dictate Text" action
2. Pass output to GitHub issue creation URL

### GitHub Mobile App

Use the mobile app for quick issue creation:
1. Open repository in GitHub app
2. Tap Issues → New Issue
3. Select template and fill out
4. Submit with `needs-ai` label

## Advanced Usage

### Linking Content

Claude automatically creates cross-references between related content:
- Tasks link to their parent projects
- Goals reference supporting tasks
- Notes connect to relevant projects

### Progress Tracking

Update your content by:
1. **Editing files directly** in the repository
2. **Creating update issues** with progress information
3. **Moving completed items** to the archive folder

### Batch Operations

Process multiple items at once:
1. Create multiple issues with `needs-ai` label
2. Claude will process them in parallel
3. Review all PRs before merging

## Best Practices

### Writing Effective Issues

- **Be specific** in titles and descriptions
- **Include context** that helps Claude understand the intent
- **Use consistent terminology** across related content
- **Add relevant tags** in the template fields

### Managing Your System

- **Review PRs promptly** to maintain momentum
- **Archive completed content** to keep directories clean
- **Update goals and projects regularly** to track progress
- **Use the search feature** to find related content

### Maintenance

- **Weekly review** of all active content
- **Monthly archive** of completed items
- **Quarterly goal assessment** and updating
- **Annual system cleanup** and optimization

## Troubleshooting

### Common Issues

**Claude doesn't process my issue**:
- Ensure `needs-ai` label is applied
- Check that API key is set in repository secrets
- Verify workflow permissions are correct

**Content appears in wrong directory**:
- Check issue title prefix ([TASK], [PROJECT], etc.)
- Verify template was used correctly
- Edit the PR to move files if needed

**Enhancement quality is poor**:
- Provide more context in the original issue
- Use more specific language and details
- Consider customizing prompts for your use case

### Getting Help

- Check existing issues for solutions
- Create a bug report issue if needed
- Review documentation for additional guidance