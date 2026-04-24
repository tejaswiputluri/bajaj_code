# 🚀 AFTER PUSHING TO GITHUB - DEPLOY ON VERCEL

Once your code is on GitHub, follow these steps to deploy:

## Step 1: Go to Vercel
- Open https://vercel.com
- Click "Sign Up" or "Log In"
- **Choose**: "Continue with GitHub"

## Step 2: Authorize Vercel
- Click "Authorize Vercel"
- It will ask permission to access your repos
- Click "Authorize"

## Step 3: Import Your Repository
- You'll see "Create a new project"
- Under "Import Git Repository"
- Find `srm-fullstack-challenge` in the list
- Click on it

## Step 4: Configure (if needed)
- **Project Name**: Keep as `srm-fullstack-challenge`
- **Framework**: It should auto-detect (Node.js)
- **Root Directory**: Leave blank
- Everything else: Leave default

## Step 5: Deploy
- Click "Deploy"
- Wait 1-2 minutes for deployment to complete
- You'll see: "Deployment completed" ✅

## Your URLs After Deployment:

**Frontend**: https://srm-fullstack-challenge.vercel.app
**API Base URL**: https://srm-fullstack-challenge.vercel.app
**Full API Endpoint**: https://srm-fullstack-challenge.vercel.app/bfhl

## Test Your Deployment

### Test Frontend
Open: https://srm-fullstack-challenge.vercel.app
You should see the UI load ✅

### Test API
In PowerShell:
```powershell
$uri = "https://srm-fullstack-challenge.vercel.app/bfhl"
$body = '{"data":["A->B","B->C"]}'
$response = Invoke-WebRequest -Uri $uri -Method POST -ContentType "application/json" -Body $body
$response.Content
```

Should return JSON with your credentials ✅

## Your Submission Form Info:

Copy these exactly:

- **GitHub Repository**: https://github.com/tejaswiputluri/srm-fullstack-challenge
- **Frontend URL**: https://srm-fullstack-challenge.vercel.app
- **Backend API Base URL**: https://srm-fullstack-challenge.vercel.app

✅ Done! You're ready to submit!
