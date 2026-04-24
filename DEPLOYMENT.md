# Deployment Guide

## Option 1: Deploy on Vercel (Recommended)

### Prerequisites
- GitHub account with the code pushed to a public repository
- Vercel account (free tier available)

### Steps

1. **Push code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/srm-fullstack-challenge.git
   git branch -M main
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Click "Deploy"
   - Vercel will automatically detect the configuration and deploy

3. **Your deployment will be available at:**
   - API: `https://your-project-name.vercel.app/bfhl`
   - Frontend: `https://your-project-name.vercel.app`

## Option 2: Deploy on Render

### Steps

1. **Push code to GitHub** (same as Option 1)

2. **Deploy on Render**
   - Go to [render.com](https://render.com)
   - Sign up with GitHub
   - Click "New +"
   - Select "Web Service"
   - Connect your repository
   - Configure:
     - **Name**: srm-fullstack-challenge
     - **Environment**: Node
     - **Build Command**: `npm install`
     - **Start Command**: `npm start`
   - Click "Deploy"

3. **Your deployment will be available at:**
   - API: `https://your-service-name.onrender.com/bfhl`
   - Frontend: `https://your-service-name.onrender.com`

## Option 3: Deploy on Railway

### Steps

1. **Push code to GitHub** (same as Option 1)

2. **Deploy on Railway**
   - Go to [railway.app](https://railway.app)
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Connect your repository
   - Railway auto-detects Node.js and deploys

3. **Your deployment will be available at the Railway-provided URL**

## Option 4: Deploy on Netlify (Frontend) + Any Backend

If you want to separate frontend and backend:

### Frontend on Netlify
1. Create a static build of the frontend
2. Push to GitHub
3. Connect to Netlify
4. In frontend code, update API_URL to your backend URL

### Backend elsewhere (Vercel, Render, Railway)
- Deploy the backend separately on any Node.js hosting

## Testing Your Deployment

1. **Test the API endpoint**:
   ```bash
   curl -X POST https://your-app.com/bfhl \
     -H "Content-Type: application/json" \
     -d '{"data": ["A->B", "B->C"]}'
   ```

2. **Test the frontend**:
   - Visit `https://your-app.com`
   - Try the example or enter your own data
   - Click Submit and verify the response

## Important Notes

### Before Deployment
1. Update `USER_ID`, `EMAIL_ID`, and `COLLEGE_ROLL_NUMBER` in `server.js` with your actual credentials
2. Ensure CORS is enabled (already configured in server.js)
3. Test locally: `npm install && npm start`

### Credentials in server.js
```javascript
const USER_ID = "tejaprakash_24042001"; // Update this
const EMAIL_ID = "tejaprakash@college.edu"; // Update this
const COLLEGE_ROLL_NUMBER = "21CS1001"; // Update this
```

### Environment Variables (Optional)
You can use environment variables instead of hardcoding:

Create a `.env` file locally:
```
USER_ID=yourname_ddmmyyyy
EMAIL_ID=your.email@college.edu
COLLEGE_ROLL_NUMBER=21CSXXXX
PORT=3001
```

Then update server.js:
```javascript
require('dotenv').config();

const USER_ID = process.env.USER_ID || "tejaprakash_24042001";
const EMAIL_ID = process.env.EMAIL_ID || "tejaprakash@college.edu";
const COLLEGE_ROLL_NUMBER = process.env.COLLEGE_ROLL_NUMBER || "21CS1001";
```

And install dotenv:
```bash
npm install dotenv
```

## Troubleshooting

### "Cannot find module" errors
- Run `npm install` in the deployment environment
- Check that package.json is in the root directory

### CORS errors from frontend
- Ensure `const cors = require('cors');` and `app.use(cors());` are in server.js

### Port issues
- Vercel/Render/Railway set the PORT environment variable automatically
- The app uses `process.env.PORT || 3001`

### Frontend showing 404
- Ensure Express serves static files: `app.use(express.static('public'));`
- Verify public/index.html exists

## Monitoring

### Vercel Logs
- Go to your project on vercel.com
- Click "Deployments"
- Select a deployment to view logs

### Render Logs
- Go to your service on render.com
- Click "Logs" in the dashboard

### Railway Logs
- Select your project on railway.app
- View logs in the console
