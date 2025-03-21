/**
 * Easypanel Webhook Setup Script
 * 
 * This script helps set up a webhook between GitHub and Easypanel
 * for automatic deployments. It requires Node.js and the 'axios' package.
 * 
 * Usage:
 * 1. Install axios: npm install axios
 * 2. Set the required environment variables:
 *    - EASYPANEL_API_URL: URL of your Easypanel instance
 *    - EASYPANEL_API_TOKEN: API token for your Easypanel instance
 *    - GITHUB_WEBHOOK_SECRET: Secret for GitHub webhook authentication
 * 3. Run the script: node easypanel-webhook.js
 */

const axios = require('axios');
const crypto = require('crypto');
const http = require('http');
const { exec } = require('child_process');

// Configuration (load from environment variables or set here)
const EASYPANEL_API_URL = process.env.EASYPANEL_API_URL || 'https://your-easypanel-instance.com/api';
const EASYPANEL_API_TOKEN = process.env.EASYPANEL_API_TOKEN;
const GITHUB_WEBHOOK_SECRET = process.env.GITHUB_WEBHOOK_SECRET;
const PORT = process.env.PORT || 3000;

// Validate required environment variables
if (!EASYPANEL_API_TOKEN || !GITHUB_WEBHOOK_SECRET) {
  console.error('Error: EASYPANEL_API_TOKEN and GITHUB_WEBHOOK_SECRET environment variables are required');
  process.exit(1);
}

// Create a simple webhook server
const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/webhook') {
    console.log('Received webhook request');

    // Verify GitHub signature
    const signature = req.headers['x-hub-signature-256'];
    if (!signature) {
      console.error('No GitHub signature found in request');
      res.statusCode = 401;
      res.end('Unauthorized');
      return;
    }

    // Read request body
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      // Verify signature
      const hmac = crypto.createHmac('sha256', GITHUB_WEBHOOK_SECRET);
      const computedSignature = 'sha256=' + hmac.update(body).digest('hex');
      
      if (signature !== computedSignature) {
        console.error('Invalid GitHub signature');
        res.statusCode = 401;
        res.end('Unauthorized');
        return;
      }

      try {
        const payload = JSON.parse(body);
        const branch = payload.ref ? payload.ref.replace('refs/heads/', '') : '';
        
        // Only process pushes to the master branch
        if (payload.repository && branch === 'master') {
          console.log('Processing webhook for push to master branch');
          
          // Trigger Easypanel deployment
          triggerEasypanelDeployment(payload.repository.full_name, branch, payload.after)
            .then(() => {
              console.log('Easypanel deployment triggered successfully');
              res.statusCode = 200;
              res.end('OK');
            })
            .catch(error => {
              console.error('Error triggering Easypanel deployment:', error.message);
              res.statusCode = 500;
              res.end('Error triggering deployment');
            });
        } else {
          console.log('Ignoring webhook for non-master branch or non-push event');
          res.statusCode = 200;
          res.end('Ignored');
        }
      } catch (error) {
        console.error('Error processing webhook payload:', error.message);
        res.statusCode = 400;
        res.end('Bad Request');
      }
    });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

// Function to trigger Easypanel deployment
async function triggerEasypanelDeployment(repository, branch, commit) {
  const projectName = 'digitaalgelijk-website'; // Replace with your Easypanel project name
  
  const response = await axios.post(`${EASYPANEL_API_URL}/projects/${projectName}/deploy`, {
    repository,
    branch,
    commit
  }, {
    headers: {
      'Authorization': `Bearer ${EASYPANEL_API_TOKEN}`,
      'Content-Type': 'application/json'
    }
  });
  
  if (response.status !== 200) {
    throw new Error(`Easypanel API returned status ${response.status}`);
  }
  
  return response.data;
}

// Start the server
server.listen(PORT, () => {
  console.log(`Webhook server listening on port ${PORT}`);
  console.log('------------------------------------------------------');
  console.log('Add this webhook URL to your GitHub repository:');
  console.log(`https://your-server.com:${PORT}/webhook`);
  console.log('Content type: application/json');
  console.log(`Secret: ${GITHUB_WEBHOOK_SECRET}`);
  console.log('Events: Just the push event');
  console.log('------------------------------------------------------');
}); 