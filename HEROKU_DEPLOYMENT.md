# 🚀 Deploy to Heroku - Complete Guide

## Prerequisites

1. **Heroku Account** - Sign up at https://www.heroku.com
2. **Heroku CLI** - Download from https://devcenter.heroku.com/articles/heroku-cli
3. **Git** - Already installed and configured

## Step 1: Install Heroku CLI

### Windows (PowerShell as Administrator)
```powershell
choco install heroku-cli

# Or download installer from https://devcenter.heroku.com/articles/heroku-cli
```

### Verify Installation
```bash
heroku --version
```

---

## Step 2: Login to Heroku

```bash
heroku login
```

This will open your browser to authenticate. Follow the prompts.

---

## Step 3: Create a Heroku App

```bash
heroku create YOUR-APP-NAME

# Replace YOUR-APP-NAME with something like:
# - hierarchy-builder-srm
# - srm-bfhl-api
# - tejaswi-hierarchy-api

# Example:
heroku create hierarchy-builder-tejaswi
```

**Note:** The app name must be unique across all Heroku apps.

---

## Step 4: Deploy Your Code

```bash
git push heroku main
```

Heroku will:
- Build your app
- Install dependencies from package.json
- Run the `start` script from package.json
- Start the web process

---

## Step 5: Get Your Backend API Base URL

After deployment completes, you'll see:

```
remote: -----> Compressing...
remote: -----> Launching...
remote:        Released v1
remote:        https://YOUR-APP-NAME.herokuapp.com deployed to Heroku
```

**Your Backend API Base URL is:**
```
https://YOUR-APP-NAME.herokuapp.com
```

### ✅ Correct Format (Use this):
```
https://hierarchy-builder-tejaswi.herokuapp.com
```

### ❌ Wrong Format (Don't use this):
```
https://hierarchy-builder-tejaswi.herokuapp.com/bfhl
```

---

## Step 6: Test Your Deployment

```bash
# Open the app
heroku open

# Or visit directly
https://YOUR-APP-NAME.herokuapp.com
```

---

## Step 7: View Logs

```bash
# Real-time logs
heroku logs --tail

# Last 50 lines
heroku logs
```

---

## API Testing

Your endpoint will be:
```
POST https://YOUR-APP-NAME.herokuapp.com/bfhl
```

### Example Request:
```bash
curl -X POST https://hierarchy-builder-tejaswi.herokuapp.com/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data":["A->B","A->C","B->D"]}'
```

### Example Response:
```json
{
  "user_id": "tejaswiputluri_06072006",
  "email_id": "tejaswi_putluri@srmap.edu.in",
  "college_roll_number": "AP23110010532",
  "num_trees": 1,
  "num_cycles": 0,
  "largest_tree_root": "A",
  "hierarchies": [...],
  "invalid_entries": [],
  "duplicate_edges": []
}
```

---

## Troubleshooting

### Build Failed
```bash
# Check logs
heroku logs --tail

# Common issues:
# - Missing Procfile
# - Incorrect start script in package.json
# - Missing dependencies
```

### App Crashes After Deploy
```bash
# View real-time logs
heroku logs --tail

# Restart the app
heroku restart
```

### Port Issues
The app automatically uses the PORT environment variable. Your `server.js` already handles this:
```javascript
const PORT = process.env.PORT || 3001;
```

---

## Complete URLs for Submission

After deployment, use:

**Base URL (for forms):**
```
https://YOUR-APP-NAME.herokuapp.com
```

**Full API Endpoint:**
```
https://YOUR-APP-NAME.herokuapp.com/bfhl
```

**Frontend URL:**
```
https://YOUR-APP-NAME.herokuapp.com/
```

---

## Next Steps

1. ✅ Create Heroku app: `heroku create YOUR-APP-NAME`
2. ✅ Deploy code: `git push heroku main`
3. ✅ Get URL: `heroku open` or check your Heroku dashboard
4. ✅ Fill submission form with the Base URL
5. ✅ Test the API endpoint

---

## Useful Heroku Commands

```bash
# List all your apps
heroku apps

# View app info
heroku info

# View environment variables
heroku config

# Add environment variable
heroku config:set KEY=VALUE

# Remove app
heroku apps:destroy --app YOUR-APP-NAME

# Deploy from different branch
git push heroku other-branch:main
```

---

## Important Notes

- **Free Tier**: Heroku free tier apps sleep after 30 mins of inactivity
- **Paid Tier**: $7/month for always-on apps
- **Build Time**: Usually 1-2 minutes
- **Logs**: Keep last 1500 lines (free tier)

---

Need help? Check [Heroku Documentation](https://devcenter.heroku.com)
