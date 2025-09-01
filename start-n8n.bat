@echo off
echo Starting n8n AI Agent...

REM Set environment variables
set N8N_HOST=localhost
set N8N_PORT=5678
set N8N_ENCRYPTION_KEY=n8n8n8n8n8n8n8n8n8n8n8n8n8n8n8n8n8
set NODE_ENV=development

REM Create data directory if it doesn't exist
if not exist "data" mkdir data

REM Start n8n
echo Opening n8n at http://localhost:5678
start http://localhost:5678
n8n start

pause