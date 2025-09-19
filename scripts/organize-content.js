#!/usr/bin/env node

/**
 * Content Organization Helper Script
 *
 * This script helps organize and maintain the life management content.
 * Run with: node scripts/organize-content.js [command]
 *
 * Commands:
 * - archive: Move completed items to archive
 * - index: Generate content index files
 * - stats: Show content statistics
 * - cleanup: Remove empty files and directories
 */

const fs = require('fs');
const path = require('path');

const CONTENT_DIR = path.join(__dirname, '..', 'content');
const ARCHIVE_DIR = path.join(CONTENT_DIR, 'archive');

// Ensure archive directory exists
if (!fs.existsSync(ARCHIVE_DIR)) {
    fs.mkdirSync(ARCHIVE_DIR, { recursive: true });
}

/**
 * Archive completed items
 */
function archiveCompleted() {
    console.log('🗃️  Archiving completed items...');

    const contentTypes = ['tasks', 'projects', 'goals'];
    let archivedCount = 0;

    contentTypes.forEach(type => {
        const typeDir = path.join(CONTENT_DIR, type);
        if (!fs.existsSync(typeDir)) return;

        const files = fs.readdirSync(typeDir);

        files.forEach(file => {
            if (file === '.gitkeep') return;

            const filePath = path.join(typeDir, file);
            const content = fs.readFileSync(filePath, 'utf8');

            // Check if item is completed
            const isCompleted = content.includes('**Status:** Completed') ||
                              content.includes('**Status:** Complete') ||
                              content.includes('- [x]') && content.split('- [x]').length > content.split('- [ ]').length;

            if (isCompleted) {
                const archiveTypeDir = path.join(ARCHIVE_DIR, type);
                if (!fs.existsSync(archiveTypeDir)) {
                    fs.mkdirSync(archiveTypeDir, { recursive: true });
                }

                const newPath = path.join(archiveTypeDir, file);
                fs.renameSync(filePath, newPath);
                archivedCount++;
                console.log(`  ✅ Archived: ${type}/${file}`);
            }
        });
    });

    console.log(`📦 Archived ${archivedCount} completed items`);
}

/**
 * Generate content index files
 */
function generateIndex() {
    console.log('📑 Generating content indexes...');

    const contentTypes = {
        tasks: '📋 Tasks',
        projects: '🚀 Projects',
        notes: '📝 Notes',
        goals: '🎯 Goals'
    };

    Object.entries(contentTypes).forEach(([type, emoji]) => {
        const typeDir = path.join(CONTENT_DIR, type);
        if (!fs.existsSync(typeDir)) return;

        const files = fs.readdirSync(typeDir)
            .filter(file => file.endsWith('.md'))
            .sort();

        let indexContent = `# ${emoji}\n\n`;
        indexContent += `This directory contains ${files.length} ${type}.\n\n`;

        if (files.length > 0) {
            indexContent += '## Contents\n\n';

            files.forEach(file => {
                const filePath = path.join(typeDir, file);
                const content = fs.readFileSync(filePath, 'utf8');
                const titleMatch = content.match(/# (.+)/);
                const title = titleMatch ? titleMatch[1] : file.replace('.md', '');

                indexContent += `- [${title}](${file})\n`;
            });
        }

        indexContent += '\n---\n';
        indexContent += `*Generated on ${new Date().toISOString().split('T')[0]}*\n`;

        const indexPath = path.join(typeDir, 'INDEX.md');
        fs.writeFileSync(indexPath, indexContent);
        console.log(`  📄 Generated: ${type}/INDEX.md`);
    });
}

/**
 * Show content statistics
 */
function showStats() {
    console.log('📊 Content Statistics\n');

    const contentTypes = ['tasks', 'projects', 'notes', 'goals'];
    const stats = {};

    contentTypes.forEach(type => {
        const typeDir = path.join(CONTENT_DIR, type);
        if (!fs.existsSync(typeDir)) {
            stats[type] = 0;
            return;
        }

        const files = fs.readdirSync(typeDir)
            .filter(file => file.endsWith('.md'));
        stats[type] = files.length;
    });

    // Archive stats
    const archiveDir = path.join(CONTENT_DIR, 'archive');
    let archiveCount = 0;
    if (fs.existsSync(archiveDir)) {
        contentTypes.forEach(type => {
            const archiveTypeDir = path.join(archiveDir, type);
            if (fs.existsSync(archiveTypeDir)) {
                const files = fs.readdirSync(archiveTypeDir)
                    .filter(file => file.endsWith('.md'));
                archiveCount += files.length;
            }
        });
    }

    console.log('📋 Tasks:', stats.tasks);
    console.log('🚀 Projects:', stats.projects);
    console.log('📝 Notes:', stats.notes);
    console.log('🎯 Goals:', stats.goals);
    console.log('📦 Archived:', archiveCount);
    console.log('\n📈 Total Active:', Object.values(stats).reduce((a, b) => a + b, 0));
    console.log('📈 Total Overall:', Object.values(stats).reduce((a, b) => a + b, 0) + archiveCount);
}

/**
 * Clean up empty files and directories
 */
function cleanup() {
    console.log('🧹 Cleaning up...');

    const contentTypes = ['tasks', 'projects', 'notes', 'goals'];
    let cleanedCount = 0;

    contentTypes.forEach(type => {
        const typeDir = path.join(CONTENT_DIR, type);
        if (!fs.existsSync(typeDir)) return;

        const files = fs.readdirSync(typeDir);

        files.forEach(file => {
            if (file === '.gitkeep' || file === 'INDEX.md') return;

            const filePath = path.join(typeDir, file);
            const stats = fs.statSync(filePath);

            if (stats.isFile() && stats.size === 0) {
                fs.unlinkSync(filePath);
                cleanedCount++;
                console.log(`  🗑️  Removed empty file: ${type}/${file}`);
            }
        });
    });

    console.log(`🧹 Cleaned up ${cleanedCount} empty files`);
}

// Main execution
const command = process.argv[2] || 'help';

switch (command) {
    case 'archive':
        archiveCompleted();
        break;
    case 'index':
        generateIndex();
        break;
    case 'stats':
        showStats();
        break;
    case 'cleanup':
        cleanup();
        break;
    case 'all':
        cleanup();
        archiveCompleted();
        generateIndex();
        showStats();
        break;
    default:
        console.log('📚 GitHub Life Manager - Content Organization Script');
        console.log('');
        console.log('Usage: node scripts/organize-content.js [command]');
        console.log('');
        console.log('Commands:');
        console.log('  archive  - Move completed items to archive');
        console.log('  index    - Generate content index files');
        console.log('  stats    - Show content statistics');
        console.log('  cleanup  - Remove empty files');
        console.log('  all      - Run all commands');
        console.log('  help     - Show this help message');
}