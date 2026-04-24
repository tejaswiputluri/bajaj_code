# 🚀 Deploy to Hugging Face Spaces

This guide will help you deploy the Hierarchy Builder to **Hugging Face Spaces**.

## Prerequisites

1. **Hugging Face Account** - Sign up at https://huggingface.co
2. **Git installed** - For version control
3. **Git LFS** (Large File Storage) - For handling large files

## Step-by-Step Deployment

### Step 1: Install Git LFS
```bash
# On Windows (using PowerShell as Admin)
choco install git-lfs

# Or download from https://git-lfs.com
```

### Step 2: Create a New Space on Hugging Face

1. Go to https://huggingface.co/spaces
2. Click **"Create new Space"**
3. Fill in the details:
   - **Space name**: `hierarchy-builder` (or your choice)
   - **Space type**: Select **"Docker"**
   - **Visibility**: **"Public"** or **"Private"**
4. Click **"Create Space"**

### Step 3: Clone Your New Space

```bash
# Replace with your Hugging Face username
git clone https://huggingface.co/spaces/YOUR_USERNAME/hierarchy-builder
cd hierarchy-builder
```

### Step 4: Copy Project Files

Copy these files from your local project to the cloned Space:

```
├── server.js
├── package.json
├── package-lock.json
├── Dockerfile
├── .dockerignore
├── public/
│   └── index.html
└── README.md
```

### Step 5: Update the README

Create a `README.md` in your Space with:

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

Interactive web application for processing hierarchical node relationships with cycle detection and tree analysis.

## Features

- 🌳 Build hierarchies from node relationships
- 🔄 Detect cycles in graphs
- 📊 Calculate tree depths
- ✅ Input validation
- 📈 Real-time processing

## How to Use

1. Enter node relationships (format: `A->B`)
2. Click Submit
3. View results with tree visualization

## Example Input

```
A->B
A->C
B->D
D->E
E->F
G->H
```

## Technical Stack

- **Backend**: Node.js + Express.js
- **Frontend**: HTML5, CSS3, JavaScript
- **Icons**: Font Awesome
- **Deployment**: Docker + Hugging Face Spaces

## API Endpoint

- **POST** `/bfhl` - Process hierarchy data

## Response Format

```json
{
  "user_id": "tejaswiputluri_06072006",
  "num_trees": 2,
  "num_cycles": 0,
  "largest_tree_root": "A",
  "hierarchies": [...],
  "invalid_entries": [],
  "duplicate_edges": []
}
```
```

### Step 6: Commit and Push

```bash
git add .
git commit -m "Deploy Hierarchy Builder to Hugging Face Spaces"
git push
```

### Step 7: Wait for Build

1. Go to your Space page
2. Watch the **"Building"** status
3. Once complete, your app will be live! 🎉

---

## 📋 Deployment Checklist

- [ ] Hugging Face account created
- [ ] New Space created (Docker type)
- [ ] Files copied to Space
- [ ] `Dockerfile` configured
- [ ] `package.json` verified
- [ ] `public/index.html` present
- [ ] `server.js` in root directory
- [ ] `README.md` created
- [ ] Files committed and pushed
- [ ] Build completed successfully

---

## 🔗 Access Your App

After deployment, your Space will be live at:
```
https://huggingface.co/spaces/YOUR_USERNAME/hierarchy-builder
```

The app will be accessible directly in the browser with your custom UI! ✨

---

## Troubleshooting

### Build Fails
- Check Docker logs: Click "Logs" tab in Space settings
- Ensure all files are pushed: `git push`
- Verify `package.json` dependencies

### App Crashes on Startup
- Check the logs for error messages
- Ensure `PORT` environment variable is respected
- Verify Node.js version compatibility (Node 18+)

### CORS Issues
- Already configured in `server.js`
- Should work seamlessly with Hugging Face hosting

---

## 📝 Notes

- The app runs on **port 7860** (default for Hugging Face Spaces)
- Docker container takes 2-5 minutes to build
- Frontend served from `/public` directory
- All user data processed in-memory (no persistence)

---

Need help? Check the [Hugging Face Spaces Documentation](https://huggingface.co/docs/hub/spaces)
