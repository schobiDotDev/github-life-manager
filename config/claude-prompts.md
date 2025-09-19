# Claude Code Enhancement Prompts

This file contains standardized prompts for different content types to ensure consistent enhancement and organization.

## Task Enhancement Prompt

```
You are enhancing a TASK for a life management system. Please:

1. **Analyze the task content** and extract:
   - Core objective
   - Priority level
   - Dependencies
   - Estimated effort

2. **Enhance the task by**:
   - Making the title action-oriented and clear
   - Breaking down complex tasks into smaller subtasks
   - Adding specific acceptance criteria
   - Suggesting realistic deadlines
   - Identifying potential blockers

3. **Structure using the task template** with these improvements:
   - Clear, actionable language
   - SMART criteria where applicable
   - Proper categorization and tagging
   - Resource requirements

4. **Create cross-references** to related projects or goals if relevant
```

## Project Enhancement Prompt

```
You are enhancing a PROJECT for a life management system. Please:

1. **Analyze the project scope** and extract:
   - Main objectives and goals
   - Success metrics
   - Resource requirements
   - Timeline expectations

2. **Enhance the project by**:
   - Creating clear project phases
   - Defining SMART goals and objectives
   - Identifying stakeholders and responsibilities
   - Risk assessment and mitigation strategies
   - Breaking down into actionable milestones

3. **Structure using the project template** with these improvements:
   - Executive summary approach
   - Detailed planning with phases
   - Success metrics and KPIs
   - Resource allocation
   - Timeline with milestones

4. **Generate related tasks** that support project completion
```

## Note Enhancement Prompt

```
You are enhancing a NOTE for a life management system. Please:

1. **Analyze the note content** and extract:
   - Main topics and themes
   - Key insights or learnings
   - Actionable items
   - Source information

2. **Enhance the note by**:
   - Organizing content with clear headers
   - Extracting key takeaways
   - Identifying follow-up actions
   - Adding relevant context
   - Improving readability and structure

3. **Structure using the note template** with these improvements:
   - Logical content organization
   - Clear key takeaways
   - Actionable follow-up items
   - Proper categorization
   - Related content suggestions

4. **Link to related content** when applicable (projects, tasks, goals)
```

## Goal Enhancement Prompt

```
You are enhancing a GOAL for a life management system. Please:

1. **Analyze the goal** and extract:
   - Core objective
   - Motivation and why
   - Current state vs desired state
   - Success indicators

2. **Enhance the goal by**:
   - Applying SMART criteria (Specific, Measurable, Achievable, Relevant, Time-bound)
   - Breaking down into actionable phases
   - Identifying potential obstacles and solutions
   - Creating progress tracking mechanisms
   - Establishing accountability measures

3. **Structure using the goal template** with these improvements:
   - Clear SMART goal definition
   - Phased action plan
   - Progress tracking system
   - Obstacle identification and solutions
   - Motivation reinforcement

4. **Create supporting tasks** that contribute to goal achievement
```

## General Enhancement Guidelines

### Writing Style
- Use clear, concise language
- Write in active voice
- Use bullet points for lists
- Include specific details and numbers where possible
- Maintain professional yet personal tone

### Organization Principles
- Start with overview/summary
- Use consistent header structure
- Group related information
- Include metadata (dates, tags, status)
- Add cross-references to related content

### Content Improvement
- Add missing context where helpful
- Suggest realistic timelines
- Include resource requirements
- Identify dependencies and relationships
- Propose success metrics

### File Naming Conventions
- Tasks: `YYYY-MM-DD-task-title.md`
- Projects: `project-name.md`
- Notes: `YYYY-MM-DD-note-title.md`
- Goals: `goal-title.md`

Use kebab-case for multi-word titles (e.g., `learn-python-programming.md`)

### Tagging Strategy
Use consistent tags across content types:
- **Priority**: `high-priority`, `medium-priority`, `low-priority`
- **Categories**: `work`, `personal`, `health`, `education`, `finance`
- **Status**: `active`, `completed`, `on-hold`, `cancelled`
- **Time**: `daily`, `weekly`, `monthly`, `quarterly`
- **Context**: `home`, `office`, `travel`, `online`

### Cross-Referencing
When creating cross-references:
- Link related goals to supporting tasks
- Connect project tasks to main project file
- Reference notes that inform decisions
- Create learning trails between related content