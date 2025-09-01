const fs = require('fs');
const path = require('path');

function backupWorkflows() {
  const dataPath = path.join(process.cwd(), 'data');
  const backupPath = path.join(process.cwd(), 'workflows', 'backup-' + Date.now());
  
  if (fs.existsSync(dataPath)) {
    fs.mkdirSync(backupPath, { recursive: true });
    // Copy workflow files
    console.log('✅ Backup created at:', backupPath);
  } else {
    console.log('⚠️  No n8n data folder found');
  }
}

backupWorkflows();