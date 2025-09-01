# 🚀 n8n AI Drone News Agent

**Automated AI-powered system that discovers, summarizes, and saves drone technology news using n8n workflow automation**

[![n8n](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAulBMVEX////qS3EQEzAAABzqSG/pOma2trwAACUAABDpQmt3eIMLDy7q6uz74ebqRm0WGTUAAAAAABfpNmTvfpYAACEAACfym63++vv4zdX97/IAAB4AACOnp6zrUnfwiqD3ws3uc4/xlKfT09fsXX7619786e31tMH0q7pfYG3ta4hrbHgmKD/2vsm/v8Rzc36Xl5/Z2dxPUGCHh5E/QFLud5Gio6giJDz0rbyNjpbHyMzw8PEyNEhHSFmCgoz4+2trAAAElElEQVR4nO3aa1vaTBAGYBJyYA1iWAiRgFo5g6K01lY8/P+/9c6EhECRABsolve5P7TpMpfOdI9ZzeUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgg/NaW8qr68tj53EofkUKQ9OMkmyfHzuXg6hrQosY8iS7UTO4NiFKXKM8wV685h40h/1exeShenXsfPauLrnAcHB2r6hE8+bYGe2Dfz7XrYmkqrqpaaVvR01tL3ptaSbE4si8pbkojpnbPnQM3hmWlG7jD2+oXunv9PVaj6PB6MPae57KLuWf9WWqsPWrUPU8r5F3Hw+QrIouryuaWDtKxW6j1HIdXfeqDfqz/P0A6SoY8oYg+p39rDRFV9edwujxR9WjEr9EL3Yk99jSMMyyWzzYVNiEHvw7R3fsvaa65Py+1+ustPqXvd5Nd7kt7LA/2uId/3dFrtvxi+PxeEp/W2ejh8dJ0n7h6PZH+DTO63phkhqsrqdJIWhm1Za6pvtTmtQq20sHTRqkq6Nw86nNcvPlcm4a5G3PrrrfX+P2wNGDZvg0KVNvtlKDVdXbZrQ4CnOhH3/LUnyWrixE0zwT/ZUvsfHkbVEPBU1eVZjtxP+Xvxy98RI+TanCQjE1WLVAUUpW/SS9mkxaxTCJpmaxOs8W3p66Kx/GSetVvVEuB5x4YxS1fzR0pxp20runO3fpwYraXKCQMkxRM+uz1ksu0DClNPljsxZH34s1w5DegM2UN+AwaafwozWx7mhx0d1o6L3mqTDveWo92brjTtOD1dyb3HX9es6/MahEcT1r5pklhjRou9dhQNQzPseUFL5NmHQ0zZ5oY8jHR5jiG5VYLQdc6HRTsJI2pSxn08/nsmbnkUve1n7OIvo89Wad2OHNQNQ+/0qpOOnGbNHMtWjGRZOPTJxovgXW5mAF4byKU+a6jGGFtI2Fsxf/Q+PWq3BJMlUmPicd9UouRwcY+yx6/qAFxQvKed7w3/0NwSq4KHM+r3hFNEqEx+J8Be1xc9Q67/AdcdLRSjnbBKOkP7iLnqzWeBQ+pAcr4QqTg3J74UydDEaOSc7YKmN0bdITOrR5g/DxMaCOa6YFq9m9D8199iFtFvNmnY5tb2nBaraZh8M9zcNPkuZNUI9aRzQVC2nBinZaS88zraWfJP1G/eZFrQOq0PVTghVtuR9GB4FM++EnSXNV8aqZp2obacGqsp1ptr3MX5N0k1ZQ5yJs52Lt0SEqzHIu3f4yf13SF1SXUx69nHnh8WxyiAozvFvscJm/LulinivzGjYdbBzXSg9WF78f3i6/H1Y2vR/ucJlvuUHgxknb+aDwED2/DtzA9hzHaxTuWpuCM9jtHT86h+9ymT95bjaf41eEJj2P5x8Vmw/vb0+Dl9Y2wX9Bck9zmpf5udkGyndtJ3mZH5rfl57eZX5s4c4702X+F9Yx4u3lVCuMfvaU6TL/6/NP88eGy052t0hscZn/rzv5X8H4H/wazebL/BOw4TIfAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMvgPmmpo1f4bpWAAAAAASUVORK5CYII=)](https://n8n.io/)
[![OpenAI](https://img.shields.io/badge/OpenAI-GPT--3.5%20Turbo-74AA9C?style=flat-square)](https://openai.com/)
[![Node.js](https://img.shields.io/badge/Node.js-16%2B-339933?style=flat-square)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Workflow Details](#-workflow-details)
- [Generated Content](#-generated-content)
- [Management Commands](#-management-commands)
- [Troubleshooting](#-troubleshooting)
- [Customization](#-customization)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Overview

This project creates an intelligent news automation system that:

1. **📰 Discovers** latest drone technology news from Google News RSS
2. **🤖 Processes** articles using OpenAI GPT-3.5 for engaging summaries
3. **📝 Generates** social media ready content with hashtags and emojis
4. **💾 Saves** formatted posts as Markdown files locally
5. **⏰ Automates** the entire process to run daily at 9 AM IST

### Architecture Flow
```
Google RSS → Parse Articles → AI Processing → Content Formatting → Local Storage
     ↓              ↓              ↓                ↓                ↓
 News Feed    Top 3 Articles   GPT Summary    Social Media Post    .md Files
```

---

## ✨ Features

### 🔄 Automated Workflow
- **Daily Scheduling**: Runs automatically at 9 AM IST
- **RSS Monitoring**: Fetches latest drone technology news
- **Smart Processing**: Processes top 3 most recent articles

### 🤖 AI-Powered Content
- **OpenAI Integration**: Uses GPT-3.5-turbo for content generation
- **Social Media Optimized**: Creates engaging posts with emojis and hashtags
- **Professional Formatting**: Generates platform-ready content

### 💾 Local Storage & Management
- **Markdown Files**: Saves posts as rich, formatted .md files
- **Organized Structure**: Timestamped filenames for easy tracking
- **Management Tools**: Built-in utilities for viewing and organizing posts

### 🛠️ Developer-Friendly
- **No Docker Required**: Runs directly with Node.js and n8n
- **Easy Setup**: Interactive setup wizard included
- **Comprehensive Logging**: Detailed execution logs for debugging
- **Modular Design**: Easy to customize and extend

---

## 📋 Prerequisites

### Required Software
- **Node.js**: Version 16 or higher ([Download](https://nodejs.org/))
- **npm**: Comes with Node.js
- **OpenAI API Key**: From [platform.openai.com](https://platform.openai.com/)

### System Requirements
- **Windows**: 10/11 (tested)
- **RAM**: 4GB minimum
- **Disk Space**: 1GB for dependencies and generated content
- **Internet**: Required for RSS feeds and OpenAI API

---

## 🚀 Installation

### Step 1: Clone or Download Project
```bash
# Option A: If you have git
git clone <repository-url>
cd n8n-ai-agent

# Option B: Manual setup
mkdir n8n-ai-agent
cd n8n-ai-agent
```

### Step 2: Install Global Dependencies
```bash
# Install n8n globally
npm install -g n8n

# Verify installation
n8n --version
node --version
npm --version
```

### Step 3: Project Setup
```bash
# Initialize project (if manual setup)
npm init -y

# Install project dependencies
npm install axios dotenv xml2js node-cron winston open

# Create project structure
mkdir workflows scripts config logs data generated-posts
mkdir scripts/functions scripts/tests scripts/utils
```

### Step 4: Setup Files

Create these essential files:

#### `package.json`
```json
{
  "name": "n8n-ai-agent",
  "version": "1.0.0",
  "description": "AI-powered drone news agent with n8n",
  "scripts": {
    "start": "n8n start",
    "dev": "set NODE_ENV=development && n8n start",
    "test": "node scripts/tests/workflow-test.js",
    "setup:wizard": "node scripts/utils/setup-wizard.js",
    "posts:list": "node scripts/utils/post-manager.js list",
    "posts:latest": "node scripts/utils/post-manager.js latest",
    "posts:open": "node scripts/utils/open-posts.js",
    "quick-test": "node scripts/utils/quick-test.js",
    "import-workflow": "node scripts/utils/import-workflow.js"
  },
  "dependencies": {
    "axios": "^1.6.0",
    "dotenv": "^16.3.1",
    "xml2js": "^0.6.2",
    "node-cron": "^3.0.2",
    "winston": "^3.11.0",
    "open": "^8.4.0"
  }
}
```

#### `.env`
```env
# n8n Configuration
N8N_HOST=localhost
N8N_PORT=5678
N8N_PROTOCOL=http
N8N_ENCRYPTION_KEY=n8n8n8n8n8n8n8n8n8n8n8n8n8n8n8n8n8

# API Keys
OPENAI_API_KEY=your_openai_api_key_here

# File Storage
POSTS_OUTPUT_DIR=./generated-posts

# News Sources
GOOGLE_NEWS_RSS=https://news.google.com/rss/search?q=drone+technology+India&hl=en-IN&gl=IN&ceid=IN:en

# Environment
NODE_ENV=development
```

### Step 5: Quick Setup (Recommended)
```bash
# Run interactive setup wizard
npm run setup:wizard

# Or test current setup
npm run quick-test
```

---

## ⚙️ Configuration

### 1. OpenAI API Key Setup
1. **Get API Key**: Visit [platform.openai.com](https://platform.openai.com/)
2. **Create Account**: Sign up or log in
3. **Generate Key**: Go to API Keys section
4. **Update .env**: Replace `your_openai_api_key_here` with your actual key

### 2. Customize News Sources
Edit the RSS URL in `.env` to change topics:

```env
# Drone news India (default)
GOOGLE_NEWS_RSS=https://news.google.com/rss/search?q=drone+technology+India

# Alternative topics:
# AI and Robotics
GOOGLE_NEWS_RSS=https://news.google.com/rss/search?q=artificial+intelligence+robotics

# Tech Startups
GOOGLE_NEWS_RSS=https://news.google.com/rss/search?q=tech+startup+funding

# Commercial Drones
GOOGLE_NEWS_RSS=https://news.google.com/rss/search?q=commercial+drone+delivery
```

### 3. Adjust Scheduling
The workflow runs daily at 9 AM IST by default. To change:
1. **Open n8n**: http://localhost:5678
2. **Edit Cron Trigger**: Modify the cron expression
3. **Examples**:
   - Every 6 hours: `0 */6 * * *`
   - Weekdays only: `0 9 * * 1-5`
   - Twice daily: `0 9,18 * * *`

---

## 🎮 Usage

### Starting the System

#### Method 1: Command Line
```bash
# Start n8n development server
npm run dev

# In another terminal, test the setup
npm run quick-test
```

#### Method 2: Windows Batch File
1. **Double-click** `start-n8n.bat` (if created)
2. **Wait** for n8n to start
3. **Access** at http://localhost:5678

### Importing the Workflow

#### Step 1: Generate Workflow File
```bash
npm run import-workflow
```

#### Step 2: Import in n8n
1. **Open** http://localhost:5678 in browser
2. **Click** "New Workflow"
3. **Click** the "⋯" menu → "Import from file"
4. **Select** `workflows/drone-news-agent.json`
5. **Save** the workflow

#### Step 3: Configure API Key
1. **Click** on "AI Summarization" node
2. **Find** Authorization header
3. **Replace** placeholder with: `Bearer YOUR_ACTUAL_OPENAI_API_KEY`

#### Step 4: Add File Saving
1. **Add** "Write Binary File" node after the last Code node
2. **Configure**:
   - File Name: `={{ $json.filename }}`
   - Binary Data: `={{ $json.content }}`
   - Create Directory: ✅ Enable

### Testing the Workflow

#### Manual Execution
1. **In n8n**, click "Execute Workflow"
2. **Watch** each node execute
3. **Check** execution log for any errors
4. **Verify** files are created

#### Check Generated Posts
```bash
# List all saved posts
npm run posts:list

# View latest post
npm run posts:latest

# Open posts folder
npm run posts:open
```

### Activating Automation
1. **In n8n**, toggle "Active" switch to ON
2. **Workflow** will now run automatically at scheduled time
3. **Monitor** executions in n8n dashboard

---

## 📁 Project Structure

```
n8n-ai-agent/
├── 📋 README.md                    # This file
├── 📦 package.json                 # Dependencies and scripts
├── 🔧 .env                        # Environment configuration
├── 🚫 .gitignore                  # Git ignore rules
├── 🖥️ start-n8n.bat              # Windows launcher
│
├── 📁 generated-posts/             # 🎯 Generated content saved here
│   ├── drone-post-2024-09-01-1.md
│   ├── drone-post-2024-09-01-2.md
│   └── daily-summary-2024-09-01.md
│
├── 📁 workflows/                   # n8n workflow exports
│   ├── drone-news-agent.json
│   └── simple-drone-agent.json
│
├── 📁 scripts/                     # Utility scripts
│   ├── 📁 functions/              # Reusable functions
│   │   ├── newsParser.js
│   │   └── contentFormatter.js
│   ├── 📁 tests/                  # Test scripts
│   │   ├── workflow-test.js
│   │   └── quick-test.js
│   └── 📁 utils/                  # Management utilities
│       ├── setup-wizard.js
│       ├── post-manager.js
│       ├── import-workflow.js
│       └── open-posts.js
│
├── 📁 data/                       # n8n data storage
├── 📁 logs/                       # Application logs
└── 📁 config/                     # Configuration files
```

---

## 🔄 Workflow Details

### Node Breakdown

#### 1. **Daily Trigger** (Cron)
- **Purpose**: Schedules workflow execution
- **Configuration**: `0 9 * * *` (9 AM daily)
- **Customizable**: Change timing via cron expression

#### 2. **Fetch Drone News** (HTTP Request)
- **Purpose**: Gets RSS feed from Google News
- **URL**: Configurable drone technology search
- **Output**: XML news feed data

#### 3. **Parse & Select Articles** (Code)
- **Purpose**: Extracts top 3 articles from RSS
- **Processing**: Cleans HTML, extracts metadata
- **Output**: Structured article data

#### 4. **AI Summarization** (HTTP Request)
- **Purpose**: Generates engaging social media content
- **API**: OpenAI GPT-3.5-turbo
- **Customizable**: Modify prompts for different styles

#### 5. **Format Social Caption** (Code)
- **Purpose**: Creates final social media posts
- **Features**: Adds emojis, hashtags, formatting
- **Output**: Ready-to-post content

#### 6. **Save Posts Locally** (Write Binary File)
- **Purpose**: Saves posts as Markdown files
- **Location**: `generated-posts/` directory
- **Format**: Rich Markdown with metadata

### Data Flow Example

```yaml
Input RSS:
  - Title: "New Drone Technology Revolutionizes Delivery"
  - Description: "Companies are adopting advanced UAV systems..."
  - Link: "https://example.com/drone-news"

AI Processing:
  - System Prompt: "Create engaging social media content..."
  - User Prompt: "Summarize this drone news: [article data]"
  - Output: "🚀 Exciting news in drone tech! Companies are..."

Final Output:
  - File: "drone-post-2024-09-01T09-30-15-1.md"
  - Content: Formatted Markdown with metadata
  - Saved: In generated-posts/ directory
```

---

## 📄 Generated Content

### File Format Example

Each generated post is saved as a Markdown file:

```markdown
# Drone News Post #1

**Generated:** 9/1/2024, 9:30:15 AM
**Original Title:** Revolutionary Drone Technology Announced
**Source:** techcrunch.com

---

## 📱 Social Media Content

🚀 Drone Update #1 🚀

Exciting developments in drone technology! A breakthrough in autonomous navigation systems is set to revolutionize commercial deliveries. This innovation promises to make drone deliveries safer and more efficient than ever before.

The new technology addresses key challenges in urban drone operations, including obstacle avoidance and weather adaptation. Industry experts predict this could accelerate widespread adoption of delivery drones by major retailers.

🔗 Read more: https://example.com/drone-news
📰 Source: techcrunch.com

#DroneNews #UAVTechnology #Innovation #TechUpdate #DroneTech #DeliveryDrones #AutonomousVehicles

---

## 📊 Metadata

- **Character Count:** 487
- **Word Count:** 67
- **Source:** techcrunch.com
- **Original Link:** https://example.com/drone-news
- **Generated:** 2024-09-01T04:00:15.123Z

## 🤖 AI Summary

[Full AI-generated content here...]

## 📄 Original Article Info

- **Title:** Revolutionary Drone Technology Announced
- **Link:** [Revolutionary Drone Technology Announced](https://example.com/drone-news)
- **Source Domain:** techcrunch.com

---

*Generated by n8n AI Agent - Drone News Automation*
*File: drone-post-2024-09-01T04-00-15-123Z-1.md*
```

---

## 🎮 Management Commands

### Core Commands
```bash
# Start/Stop System
npm run dev              # Start n8n development server
npm run start           # Start n8n production mode

# Testing & Setup
npm run quick-test      # Test all system components
npm run setup:wizard    # Interactive setup guide
npm test               # Run basic tests
```

### Post Management
```bash
# View Posts
npm run posts:list      # List all saved posts
npm run posts:latest    # Show latest post content
npm run posts:open      # Open posts folder in Explorer

# Advanced Management
node scripts/utils/post-manager.js summary    # Create daily summary
node scripts/utils/post-manager.js export html   # Export to HTML
node scripts/utils/post-manager.js clean 30      # Archive old posts
```

### Development
```bash
# Workflow Management
npm run import-workflow     # Generate workflow JSON
node scripts/utils/backup-workflow.js     # Backup workflows

# Monitoring
node scripts/utils/monitor-posts.js       # Real-time monitoring
```

---

## 🐛 Troubleshooting

### Common Issues

#### 1. "Cannot find module 'xml2js'" Error
**Problem**: n8n Code node can't access external modules
**Solution**: Use the built-in XML parsing approach
```javascript
// ❌ Don't use this in Code nodes
const xml2js = require('xml2js');

// ✅ Use this instead
const input = $input.all()[0].json; // n8n auto-parses XML
```

#### 2. "You must provide a model parameter" (OpenAI)
**Problem**: JSON body not properly formatted in HTTP Request node
**Solutions**:
- **Option A**: Use Code node with native HTTPS (recommended)
- **Option B**: Set `jsonParameters: true` in HTTP Request node
- **Option C**: Use expression format: `={"model": "gpt-3.5-turbo", ...}`

#### 3. "Port 5678 already in use"
```bash
# Check what's using the port
netstat -ano | findstr :5678

# Kill the process
taskkill /PID <process_id> /F

# Or change port in .env
N8N_PORT=5679
```

#### 4. "ENOENT: no such file or directory"
**Problem**: Directory doesn't exist
**Solution**: Enable "Create Directory" option in Write Binary File node

#### 5. OpenAI API Rate Limits
**Problem**: Too many requests to OpenAI API
**Solutions**:
- Check your API usage at platform.openai.com
- Add delays between requests
- Reduce the number of articles processed

#### 6. RSS Feed Not Accessible
```bash
# Test RSS feed manually
curl "https://news.google.com/rss/search?q=drone+technology"

# Or use browser to verify feed is accessible
```

### Debug Mode

Enable detailed logging:
```bash
# Set environment variable
set NODE_ENV=development

# Start with debug logging
npm run dev

# Check logs in n8n execution view
```

### Getting Help

1. **Run Diagnostics**: `npm run quick-test`
2. **Check Logs**: Look at n8n execution logs
3. **Monitor Posts**: `npm run monitor`
4. **Test Components**: Run individual test scripts

---

## 🎨 Customization

### Changing News Topics

Edit `.env` file:
```env
# Technology focus
GOOGLE_NEWS_RSS=https://news.google.com/rss/search?q=artificial+intelligence+technology

# Business focus  
GOOGLE_NEWS_RSS=https://news.google.com/rss/search?q=startup+funding+venture+capital

# Geographic focus
GOOGLE_NEWS_RSS=https://news.google.com/rss/search?q=drone+technology+India&gl=IN
```

### Modifying AI Prompts

In the "AI Summarization" node, customize the system prompt:
```json
{
  "role": "system",
  "content": "You are a [YOUR STYLE] content creator. Create [YOUR FORMAT] posts for [YOUR AUDIENCE]..."
}
```

### Adjusting Content Format

Modify the "Format Social Caption" Code node:
```javascript
// Custom caption format
const caption = `🎯 [Your Brand] Update #${id}

${aiResponse}

💡 Key Insight: [Add your insights]
🔗 Learn more: ${link}

[Your custom hashtags]`;
```

### Adding Multiple Output Formats

Create additional nodes for different platforms:
- **Twitter**: Character limit considerations
- **LinkedIn**: Professional formatting
- **Instagram**: Visual-focused content
- **Email**: Newsletter format

### Custom File Organization

Modify the filename format:
```javascript
// Organize by date
const filename = `${now.getFullYear()}/${now.getMonth()+1}/drone-post-${timestamp}.md`;

// Organize by topic
const topic = extractTopic(title); // Custom function
const filename = `${topic}/drone-post-${timestamp}.md`;
```

---

## 🔄 Advanced Features

### Multi-Source RSS Feeds

Modify the workflow to handle multiple sources:
```javascript
const sources = [
  'https://news.google.com/rss/search?q=drone+technology',
  'https://feeds.reuters.com/reuters/technologyNews',
  'https://techcrunch.com/feed/'
];

// Process each source
```

### Content Analytics

Add analytics tracking:
```javascript
// Track performance metrics
const analytics = {
  timestamp: new Date(),
  characterCount: content.length,
  hashtagCount: (content.match(/#\w+/g) || []).length,
  engagement: calculateEngagement(content)
};
```

### Webhook Integration

Add webhook notifications:
```javascript
// Notify external systems
const webhookPayload = {
  event: 'post_generated',
  post: postData,
  timestamp: new Date().toISOString()
};
```

---

## 🤝 Contributing

### Development Setup
1. **Fork** the repository
2. **Create** feature branch: `git checkout -b feature/amazing-feature`
3. **Test** your changes: `npm run quick-test`
4. **Commit** changes: `git commit -m 'Add amazing feature'`
5. **Push** to branch: `git push origin feature/amazing-feature`
6. **Create** Pull Request

### Code Style
- Use **clear variable names**
- Add **console.log** statements for debugging
- Include **error handling** in all functions
- Write **descriptive comments**

### Testing
```bash
# Test individual components
npm test

# Test full workflow
npm run quick-test

# Monitor real-time
npm run monitor
```

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 n8n AI Drone News Agent

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 🎯 Quick Start Summary

For the impatient developers:

```bash
# 1. Install Prerequisites
npm install -g n8n

# 2. Setup Project
mkdir n8n-ai-agent && cd n8n-ai-agent
npm init -y && npm install axios dotenv xml2js winston

# 3. Get OpenAI API Key
# Visit: https://platform.openai.com/

# 4. Create .env file with your API key

# 5. Start n8n
npm run dev

# 6. Import workflow at http://localhost:5678

# 7. Test and activate!
```

**🎉 That's it! Your AI drone news agent is ready to automatically generate engaging content daily!**

---

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/your-repo/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-repo/discussions) 
- **Documentation**: This README and inline comments
- **n8n Community**: [n8n Community Forum](https://community.n8n.io/)

---

**Happy Automating! 🚀**

*Last updated: September 2024*
