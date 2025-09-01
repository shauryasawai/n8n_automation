const fs = require('fs');
const path = require('path');

// Fixed Workflow JSON for n8n (no external dependencies)
const workflowJSON = {
  "name": "AI Drone News Agent - Fixed",
  "nodes": [
    {
      "parameters": {
        "rule": {
          "interval": [
            {
              "field": "cronExpression",
              "expression": "0 9 * * *"
            }
          ]
        }
      },
      "id": "1",
      "name": "Daily 9AM Trigger",
      "type": "n8n-nodes-base.cron",
      "typeVersion": 1,
      "position": [240, 300]
    },
    {
      "parameters": {
        "url": "https://news.google.com/rss/search?q=drone+technology+India&hl=en-IN&gl=IN&ceid=IN:en",
        "options": {
          "response": {
            "response": {
              "responseFormat": "xml"
            }
          }
        }
      },
      "id": "2",
      "name": "Fetch Drone News",
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 4.1,
      "position": [460, 300]
    },
    {
      "parameters": {
        "jsCode": `// Simple RSS parser using n8n's built-in XML parsing (NO external modules)
const input = $input.all()[0].json;

// n8n automatically converts XML to JSON when responseFormat is set to "xml"
// Let's find the news items in the parsed structure
let articles = [];

try {
  // Debug: Log the structure we received
  console.log('RSS data structure keys:', Object.keys(input));
  
  // Try different possible RSS structures that n8n might create
  if (input.rss?.channel?.item) {
    articles = Array.isArray(input.rss.channel.item) ? input.rss.channel.item : [input.rss.channel.item];
    console.log('Found articles in rss.channel.item:', articles.length);
  } else if (input.channel?.item) {
    articles = Array.isArray(input.channel.item) ? input.channel.item : [input.channel.item];
    console.log('Found articles in channel.item:', articles.length);
  } else if (input.item) {
    articles = Array.isArray(input.item) ? input.item : [input.item];
    console.log('Found articles in item:', articles.length);
  } else {
    // Try to find any array that might contain items
    for (const key of Object.keys(input)) {
      const value = input[key];
      if (Array.isArray(value) && value.length > 0 && value[0].title) {
        articles = value;
        console.log('Found articles in key:', key, 'count:', articles.length);
        break;
      }
    }
  }
  
  // If we still don't have articles, return debug information
  if (articles.length === 0) {
    console.log('No articles found. Full structure:', JSON.stringify(input, null, 2).substring(0, 1000));
    return [{ 
      json: { 
        error: 'No articles found in RSS feed', 
        availableKeys: Object.keys(input),
        sampleStructure: JSON.stringify(input, null, 2).substring(0, 500) + '...',
        debug: true
      } 
    }];
  }
  
  // Process top 3 articles
  console.log('Processing', Math.min(3, articles.length), 'articles...');
  
  return articles.slice(0, 3).map((article, index) => {
    // Clean HTML tags from text
    const cleanText = (text) => {
      if (!text) return '';
      return String(text)
        .replace(/<[^>]*>/g, '') // Remove HTML tags
        .replace(/&[^;]+;/g, ' ') // Remove HTML entities
        .replace(/\\s+/g, ' ') // Normalize whitespace
        .trim();
    };
    
    // Extract domain from URL
    const extractSource = (url) => {
      try {
        if (!url) return 'Unknown';
        const domain = new URL(String(url)).hostname;
        return domain.replace('www.', '');
      } catch {
        return 'Unknown';
      }
    };
    
    const processedArticle = {
      json: {
        id: index + 1,
        title: cleanText(article.title),
        link: String(article.link || ''),
        description: cleanText(article.description).substring(0, 300),
        pubDate: String(article.pubDate || ''),
        source: extractSource(article.link),
        originalTitle: article.title // Keep original for debugging
      }
    };
    
    console.log('Processed article', index + 1, ':', processedArticle.json.title);
    return processedArticle;
  });
  
} catch (error) {
  console.error('RSS processing error:', error);
  return [{ 
    json: { 
      error: 'Processing failed', 
      message: error.message,
      inputType: typeof input,
      inputKeys: Object.keys(input)
    } 
  }];
}`
      },
      "id": "3",
      "name": "Parse & Select Articles",
      "type": "n8n-nodes-base.code",
      "typeVersion": 2,
      "position": [680, 300]
    },
    {
      "parameters": {
        "url": "https://api.openai.com/v1/chat/completions",
        "method": "POST",
        "sendHeaders": true,
        "headerParameters": {
          "parameters": [
            {
              "name": "Authorization",
              "value": "Bearer sk-your-openai-key-replace-this"
            },
            {
              "name": "Content-Type", 
              "value": "application/json"
            }
          ]
        },
        "sendBody": true,
        "contentType": "json",
        "jsonParameters": true,
        "body": "={\n  \"model\": \"gpt-3.5-turbo\",\n  \"messages\": [\n    {\n      \"role\": \"system\",\n      \"content\": \"You are a professional social media content creator specializing in drone technology news. Create engaging, informative posts with relevant hashtags.\"\n    },\n    {\n      \"role\": \"user\",\n      \"content\": \"Create an engaging social media post about this drone news article. Write 2-3 compelling paragraphs and include 5-7 relevant hashtags. Make it shareable and informative.\\n\\nTitle: \" + $json.title + \"\\nDescription: \" + $json.description + \"\\nSource: \" + $json.source\n    }\n  ],\n  \"max_tokens\": 400,\n  \"temperature\": 0.7\n}"
      },
      "id": "4",
      "name": "AI Summarization",
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 4.1,
      "position": [900, 300]
    },
    {
      "parameters": {
        "jsCode": `// Format AI response into social media caption
const items = $input.all();

console.log('Formatting', items.length, 'items...');

return items.map((item, index) => {
  const aiResponse = item.json.choices?.[0]?.message?.content || 'AI summary not available';
  const title = item.json.title || 'News Update';
  const link = item.json.link || '';
  const id = item.json.id || index + 1;
  const source = item.json.source || 'Unknown';
  
  // Create formatted caption with emojis and structure
  const caption = \`🚀 Drone Update #\${id} 🚀

\${aiResponse}

🔗 Read more: \${link}
📰 Source: \${source}

#DroneNews #UAVTechnology #Innovation #TechUpdate #DroneTech\`;

  console.log(\`Formatted caption for article \${id}: \${caption.length} characters\`);

  return {
    json: {
      caption: caption,
      title: title,
      link: link,
      summary: aiResponse,
      characterCount: caption.length,
      id: id,
      source: source
    }
  };
});`
      },
      "id": "5",
      "name": "Format Social Caption",
      "type": "n8n-nodes-base.code",
      "typeVersion": 2,
      "position": [1120, 300]
    },
    {
      "parameters": {
        "jsCode": `const fs = require('fs');
const path = require('path');

// Get posts output directory from environment or use default
const outputDir = process.env.POSTS_OUTPUT_DIR || path.join(process.cwd(), 'generated-posts');

console.log('Output directory:', outputDir);

// Ensure directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
  console.log('✅ Created posts directory:', outputDir);
}

const items = $input.all();
console.log('Saving', items.length, 'posts...');

return items.map((item, index) => {
  const caption = item.json.caption || 'No content available';
  const title = item.json.title || 'Drone News';
  const link = item.json.link || '';
  const summary = item.json.summary || '';
  const source = item.json.source || 'Unknown';
  const id = item.json.id || index + 1;
  
  // Create timestamp for filename
  const now = new Date();
  const timestamp = now.toISOString().replace(/[:.]/g, '-');
  const filename = \`drone-post-\${timestamp}-\${id}.md\`;
  const filepath = path.join(outputDir, filename);
  
  // Create rich markdown content
  const markdownContent = \`# Drone News Post #\${id}

**Generated:** \${now.toLocaleString()}
**Original Title:** \${title}
**Source:** \${source}

---

## 📱 Social Media Content

\${caption}

---

## 📊 Metadata

- **Character Count:** \${caption.length}
- **Word Count:** \${caption.split(/\\s+/).length}
- **Source:** \${source}
- **Original Link:** \${link}
- **Generated:** \${now.toISOString()}

## 🤖 AI Summary

\${summary}

## 📄 Original Article Info

- **Title:** \${title}
- **Link:** [\${title}](\${link})
- **Source Domain:** \${source}

---

*Generated by n8n AI Agent - Drone News Automation*
*File: \${filename}*
\`;

  try {
    // Save file
    fs.writeFileSync(filepath, markdownContent, 'utf8');
    
    console.log(\`✅ Saved post #\${id}: \${filename}\`);
    
    return {
      json: {
        success: true,
        filename: filename,
        filepath: filepath,
        caption: caption,
        title: title,
        characterCount: caption.length,
        wordCount: caption.split(/\\s+/).length,
        savedAt: now.toISOString(),
        id: id
      }
    };
  } catch (error) {
    console.error(\`❌ Failed to save post #\${id}:\`, error.message);
    return {
      json: {
        success: false,
        error: error.message,
        caption: caption,
        title: title,
        id: id
      }
    };
  }
});`
      },
      "id": "6",
      "name": "Save Posts Locally",
      "type": "n8n-nodes-base.code",
      "typeVersion": 2,
      "position": [1340, 300]
    }
  ],
  "pinData": {},
  "connections": {
    "Daily 9AM Trigger": {
      "main": [
        [
          {
            "node": "Fetch Drone News",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Fetch Drone News": {
      "main": [
        [
          {
            "node": "Parse & Select Articles",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Parse & Select Articles": {
      "main": [
        [
          {
            "node": "AI Summarization",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "AI Summarization": {
      "main": [
        [
          {
            "node": "Format Social Caption",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Format Social Caption": {
      "main": [
        [
          {
            "node": "Save Posts Locally",
            "type": "main",
            "index": 0
          }
        ]
      ]
    }
  },
  "active": false,
  "settings": {
    "saveManualExecutions": true
  },
  "versionId": "1",
  "id": "drone-news-agent-fixed"
};

// Ensure workflows directory exists
const workflowsDir = path.join(__dirname, '../../workflows');
if (!fs.existsSync(workflowsDir)) {
  fs.mkdirSync(workflowsDir, { recursive: true });
  console.log('✅ Created workflows directory');
}

// Save workflow to file
const workflowPath = path.join(workflowsDir, 'drone-news-agent-fixed.json');

try {
  fs.writeFileSync(workflowPath, JSON.stringify(workflowJSON, null, 2));
  
  console.log('✅ Fixed Workflow JSON saved successfully!');
  console.log('📂 Location:', workflowPath);
  console.log('');
  console.log('🔧 Key fixes applied:');
  console.log('   ❌ Removed xml2js dependency');
  console.log('   ✅ Uses n8n built-in XML parsing');
  console.log('   ✅ Added comprehensive debugging');
  console.log('   ✅ Improved error handling');
  console.log('   ✅ Enhanced logging');
  console.log('');
  console.log('📋 Next steps:');
  console.log('1. Open n8n at: http://localhost:5678');
  console.log('2. Create new workflow');
  console.log('3. Import from file: drone-news-agent-fixed.json');
  console.log('4. Replace "sk-your-openai-key-replace-this" with your real API key');
  console.log('5. Test the workflow!');
  console.log('');
  console.log('🎯 This workflow will:');
  console.log('   - Fetch drone news from Google RSS');
  console.log('   - Parse without external dependencies');
  console.log('   - Generate AI summaries with OpenAI');
  console.log('   - Save posts as rich Markdown files');
  console.log('   - Provide detailed logging for debugging');

} catch (error) {
  console.error('❌ Error saving workflow:', error.message);
}