# GitHub Life Manager 🚀

An open-source life management system that uses GitHub Issues and Claude Code to automatically enhance and organize your tasks, projects, notes, and goals.

## ✨ Features

- **📝 Easy Content Input**: Use GitHub issue templates to quickly capture tasks, projects, notes, and goals
- **🤖 AI Enhancement**: Claude Code automatically improves and structures your content
- **📁 Organized Storage**: Content is automatically filed in the right directories with consistent formatting
- **📱 Mobile Friendly**: Works with Siri Shortcuts, GitHub mobile app, or any tool that can create GitHub issues
- **🔄 Version Control**: Full history and backup through Git
- **👥 Collaborative**: Multiple users can contribute to the same life management system
- **🔒 Privacy First**: Your data stays in your repository

## 🚀 Quick Start

### 1. Set Up Repository

1. **Fork or clone this repository**
   ```bash
   git clone https://github.com/your-username/github-life-manager.git
   cd github-life-manager
   ```

2. **Add your Anthropic API key to GitHub Secrets**
   - Go to your repository Settings → Secrets and variables → Actions
   - Add a new secret named `ANTHROPIC_API_KEY`
   - Paste your Claude API key from https://console.anthropic.com/

### 2. Install Claude GitHub App (Recommended)

The easiest way to set up Claude Code integration:

1. **Open Claude Code in terminal**
   ```bash
   claude
   ```

2. **Run the setup command**
   ```
   /install-github-app
   ```

This will guide you through installing the GitHub app and setting up the required secrets.

### 3. Manual Setup (Alternative)

If you prefer manual setup:

1. **Install the Claude GitHub app**: https://github.com/apps/claude
2. **The workflow is already configured** in `.github/workflows/claude-enhance.yml`

### 4. Start Using

Create your first item by opening a GitHub issue:

1. Go to **Issues** → **New Issue**
2. Choose a template (Task, Project, Note, or Goal)
3. Fill out the form
4. **Add the label `needs-ai`**
5. Submit the issue

Claude Code will automatically:
- Enhance and structure your content
- Create a properly formatted file in the appropriate directory
- Open a pull request with the changes
- Close the original issue

## 📋 Content Types

### 🔧 Tasks
Perfect for actionable items with deadlines and priorities.
- **Template**: Captures title, description, priority, due date, context
- **Enhancement**: Adds acceptance criteria, dependencies, resource requirements
- **Storage**: `content/tasks/YYYY-MM-DD-task-title.md`

### 🚀 Projects
For larger initiatives with multiple phases and stakeholders.
- **Template**: Captures goals, requirements, timeline, resources
- **Enhancement**: Adds project phases, risk assessment, success metrics
- **Storage**: `content/projects/project-name.md`

### 📝 Notes
For meeting notes, research, ideas, and knowledge capture.
- **Template**: Captures content, source, related topics
- **Enhancement**: Organizes with headers, extracts key takeaways, suggests follow-ups
- **Storage**: `content/notes/YYYY-MM-DD-note-title.md`

### 🎯 Goals
For personal and professional objectives with tracking.
- **Template**: Captures goal, timeframe, success criteria
- **Enhancement**: Applies SMART criteria, creates action plans, identifies obstacles
- **Storage**: `content/goals/goal-title.md`

## 📱 Mobile Integration

### Siri Shortcuts (iOS)

Create a Siri Shortcut to quickly capture content:

1. **Download Shortcuts app**
2. **Create new shortcut** with these actions:
   - Ask for input (text)
   - Get contents of URL: `https://github.com/your-username/github-life-manager/issues/new?labels=needs-ai,quick&title=[QUICK]%20&body=` + input text
3. **Add to Siri** with phrase like "Add to life manager"

### GitHub Mobile App

Use the GitHub mobile app to create issues on the go with the pre-configured templates.

## 🔧 Customization

### Modify Templates

Edit files in `templates/` to customize the output format:
- `task-template.md`
- `project-template.md`
- `note-template.md`
- `goal-template.md`

### Adjust Claude Prompts

Modify `.github/workflows/claude-enhance.yml` to change how Claude processes your content.

### Add New Content Types

1. Create new issue template in `.github/ISSUE_TEMPLATE/`
2. Add corresponding template in `templates/`
3. Update the workflow to handle the new type

## 📁 Repository Structure

```
github-life-manager/
├── .github/
│   ├── workflows/
│   │   └── claude-enhance.yml      # Main enhancement workflow
│   └── ISSUE_TEMPLATE/             # Issue templates
├── content/
│   ├── projects/                   # Enhanced project files
│   ├── tasks/                      # Structured task files
│   ├── notes/                      # Organized notes
│   ├── goals/                      # Goal tracking files
│   └── archive/                    # Completed items
├── templates/                      # Content templates for Claude
├── config/                         # Configuration and prompts
├── scripts/                        # Helper scripts
└── docs/                          # Documentation
```

## 🤝 Contributing

This is an open-source project! Contributions are welcome:

1. **Fork the repository**
2. **Create a feature branch**
3. **Submit a pull request**

### Ideas for Contributions

- Additional content types (habits, finances, health tracking)
- Mobile app integrations
- Dashboard generation
- Analytics and reporting
- Integration with other productivity tools

## 🔒 Privacy & Security

- **Your data stays in your repository** - no external services
- **API keys are stored securely** in GitHub Secrets
- **Full control** over your content and processing
- **Open source** - you can audit and modify everything

## 📚 Documentation

- [Usage Guide](docs/USAGE.md) - Detailed usage instructions
- [Setup Guide](docs/SETUP.md) - Step-by-step setup
- [Customization Guide](docs/CUSTOMIZATION.md) - How to customize the system
- [Troubleshooting](docs/TROUBLESHOOTING.md) - Common issues and solutions

## 🆘 Support

- **Issues**: Report bugs or request features in GitHub Issues
- **Discussions**: Ask questions in GitHub Discussions
- **Documentation**: Check the docs/ folder for detailed guides

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Made with ❤️ for better life organization through the power of GitHub and AI**