# 🤗 Deploy to Hugging Face Spaces - Complete Guide

## Prerequisites

1. **Hugging Face Account** - Sign up at https://huggingface.co
2. **Git installed** - Already have it ✅
3. **Git LFS** (optional but recommended)

---

## Step 1: Create a Hugging Face Account

Go to https://huggingface.co and sign up (free account works!)

---

## Step 2: Create an Access Token

1. Go to https://huggingface.co/settings/tokens
2. Click "New token"
3. Set name: `huggingface-deploy`
4. Set role: `write`
5. Click "Create token"
6. **Copy the token** (you'll use it soon)

---

## Step 3: Create a New Space

1. Go to https://huggingface.co/spaces
2. Click **"Create new Space"**
3. Fill in:
   - **Space name**: `hierarchy-builder` (or your choice)
   - **License**: Apache 2.0
   - **Space SDK**: **Docker** ⭐ (Important!)
   - **Visibility**: **Public**
4. Click **"Create Space"**

You'll be taken to your new Space dashboard.

---

## Step 4: Clone Your Hugging Face Space

```bash
# Replace YOUR_USERNAME with your Hugging Face username
git clone https://huggingface.co/spaces/YOUR_USERNAME/hierarchy-builder
cd hierarchy-builder
```

---

## Step 5: Add Your Project Files

Copy these files from your local project to the cloned Space folder:

```
hierarchy-builder/
├── Dockerfile          ✅ (already in your repo)
├── .dockerignore       ✅ (already in your repo)
├── server.js
├── package.json
├── package-lock.json
├── public/
│   └── index.html
└── README.md
```

### Using PowerShell:

```powershell
# From your bajaj project directory
$spaceDir = "C:\path\to\hierarchy-builder"

Copy-Item server.js $spaceDir\
Copy-Item package.json $spaceDir\
Copy-Item package-lock.json $spaceDir\
Copy-Item Dockerfile $spaceDir\
Copy-Item .dockerignore $spaceDir\
Copy-Item -Recurse public $spaceDir\
Copy-Item README.md $spaceDir\
```

---

## Step 6: Create README.md (Optional but Recommended)

Create a `README.md` in the Space folder:

```markdown
---
title: Hierarchy Builder
emoji: 🌳
colorFrom: blue
colorTo: purple
sdk: docker
app_port: 7860
---

# Hierarchy Builder - SRM Full Stack Challenge

Interactive web application for processing hierarchical node relationships.

## Features

- 🌳 Build hierarchies from node relationships
- 🔄 Detect cycles in graphs  
- 📊 Calculate tree depths
- ✅ Input validation
- 📈 Real-time processing

## How to Use

1. Enter node relationships (format: `A->B`)
2. Click Submit
3. View results with visualization

## Example Input

```
A->B
A->C
B->D
D->E
E->F
G->H
```

## API

- **Endpoint**: POST `/bfhl`
- **Base URL**: This Space URL
- **User ID**: tejaswiputluri_06072006

## Built With

- Node.js + Express.js
- HTML5 + CSS3 + JavaScript
- Docker + Hugging Face Spaces
```

---

## Step 7: Commit and Push to Hugging Face

```bash
cd hierarchy-builder

git add .
git commit -m "Deploy Hierarchy Builder to Hugging Face Spaces"
git push
```

**This will trigger an automatic build!** ⏳ Wait 2-5 minutes...

---

## Step 8: Wait for Build to Complete

1. Go to your Space: https://huggingface.co/spaces/YOUR_USERNAME/hierarchy-builder
2. Watch the **"Building"** status in the right panel
3. Once complete, you'll see a green checkmark ✅

---

## Step 9: Get Your Public URL

Once deployed, your app will be live at:

```
https://huggingface.co/spaces/YOUR_USERNAME/hierarchy-builder
```

### ✅ Backend API Base URL (for submission):
```
https://huggingface.co/spaces/YOUR_USERNAME/hierarchy-builder
```

---

## 🧪 Testing Your Deployment

### Visit the App
```
https://huggingface.co/spaces/YOUR_USERNAME/hierarchy-builder
```

### Test the API
```bash
curl -X POST https://huggingface.co/spaces/YOUR_USERNAME/hierarchy-builder/call/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data":["A->B","A->C","B->D"]}'
```

---

## 📝 Submission Form Fields

| Field | Value |
|-------|-------|
| **Backend API Base URL** | `https://huggingface.co/spaces/YOUR_USERNAME/hierarchy-builder` |
| **Frontend URL** | `https://huggingface.co/spaces/YOUR_USERNAME/hierarchy-builder` |
| **GitHub Repository** | `https://github.com/tejaswiputluri/bajaj_code` |
| **User ID** | `tejaswiputluri_06072006` |
| **Email** | `tejaswi_putluri@srmap.edu.in` |
| **College Roll Number** | `AP23110010532` |

---

## 📋 Hugging Face Spaces Deployment Checklist

- [ ] Create Hugging Face account
- [ ] Generate access token
- [ ] Create new Space (Docker type, Public)
- [ ] Clone Space repository locally
- [ ] Copy project files (server.js, package.json, Dockerfile, public/, etc.)
- [ ] Create README.md
- [ ] Commit and push files
- [ ] Wait for build to complete (watch the status)
- [ ] Test the deployed app
- [ ] Copy Space URL for submission form
- [ ] Fill SRM submission form

---

## ✨ Advantages of Hugging Face Spaces

✅ **Free tier** - No credit card required
✅ **Auto-scaling** - Handles traffic automatically
✅ **Fast builds** - Docker support
✅ **Persistent** - Apps stay online 24/7
✅ **Easy sharing** - Direct public links
✅ **No maintenance** - Fully managed

---

## Troubleshooting

### Build Failed
- Check the logs in the Space dashboard
- Common issues: Missing files, Docker syntax errors
- Verify Dockerfile is in root directory

### App Crashes
- Check Space logs (click "Logs" tab)
- Verify PORT environment variable handling
- Check package.json has all dependencies

### Can't Access App
- Wait 5 minutes for initial build
- Refresh the page
- Check Hugging Face status

---

## Need Help?

- **Hugging Face Spaces Docs**: https://huggingface.co/docs/hub/spaces
- **Docker Docs**: https://docs.docker.com/
- **Your GitHub Repo**: https://github.com/tejaswiputluri/bajaj_code

---

## 🚀 Quick Start Commands

```bash
# 1. Clone your Space
git clone https://huggingface.co/spaces/YOUR_USERNAME/hierarchy-builder
cd hierarchy-builder

# 2. Copy files from your project
# (Use PowerShell commands from Step 5)

# 3. Push to Hugging Face
git add .
git commit -m "Deploy Hierarchy Builder"
git push

# Done! 🎉 Your app will be live in 2-5 minutes
```

---

**Let me know your Hugging Face username and I'll help verify the deployment!** 🎯
