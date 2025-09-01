require('dotenv').config();
const axios = require('axios');

async function testSetup() {
  console.log('🧪 Testing n8n AI Agent Setup (No Docker)...\n');
  
  try {
    // Test 1: Environment variables
    console.log('1. Environment Variables:');
    console.log('   Node.js version:', process.version);
    console.log('   OpenAI API Key:', process.env.OPENAI_API_KEY ? '✅ Set' : '❌ Missing');
    console.log('   Posts Directory:', process.env.POSTS_OUTPUT_DIR ? '✅ Set' : '❌ Missing');
    
    // Test 2: n8n installation
    console.log('\n2. n8n Installation:');
    try {
      const { exec } = require('child_process');
      exec('n8n --version', (error, stdout, stderr) => {
        if (error) {
          console.log('   ❌ n8n not installed globally');
          console.log('   Run: npm install -g n8n');
        } else {
          console.log('   ✅ n8n version:', stdout.trim());
        }
      });
    } catch (e) {
      console.log('   ❌ n8n check failed');
    }
    
    // Test 3: Dependencies
    console.log('\n3. Dependencies:');
    const deps = ['axios', 'xml2js', 'dotenv'];
    deps.forEach(dep => {
      try {
        require(dep);
        console.log(`   ✅ ${dep}: Available`);
      } catch(e) {
        console.log(`   ❌ ${dep}: Missing`);
      }
    });
    
    // Test 4: RSS Feed
    console.log('\n4. RSS Feed Test:');
    try {
      const rssUrl = process.env.GOOGLE_NEWS_RSS;
      const response = await axios.get(rssUrl, { timeout: 5000 });
      console.log('   ✅ RSS feed accessible, status:', response.status);
      console.log('   ✅ Data length:', response.data.length, 'characters');
    } catch (error) {
      console.log('   ⚠️  RSS feed test failed:', error.message);
    }
    
    // Test 5: OpenAI API
    if (process.env.OPENAI_API_KEY && process.env.OPENAI_API_KEY !== 'your_openai_api_key_here') {
      console.log('\n5. OpenAI API Test:');
      try {
        const response = await axios.post('https://api.openai.com/v1/models', {}, {
          headers: {
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
            'Content-Type': 'application/json'
          },
          timeout: 10000
        });
        console.log('   ✅ OpenAI API accessible');
      } catch (error) {
        console.log('   ⚠️  OpenAI API test failed:', error.response?.status || error.message);
      }
    }
    
    console.log('\n🎉 Setup test completed!');
    console.log('\n📋 Next steps:');
    console.log('1. Update .env file with your OpenAI API key');
    console.log('2. Run: npm run dev  (or double-click start-n8n.bat)');
    console.log('3. Open: http://localhost:5678');
    console.log('4. Import the workflow JSON');
    console.log('5. Generated posts will be saved in: generated-posts/ folder');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
}

testSetup();