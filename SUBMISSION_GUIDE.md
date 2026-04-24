# 📋 Deployment & Submission Guide for Tejaswi

## Your Information

- **Full Name**: Venkata Sai Tejaswi Putluri
- **Email**: tejaswi_putluri@srmap.edu.in
- **Roll Number**: AP23110010532
- **Date of Birth**: 06/07/2006
- **College**: SRM UNIVERSITY, AP
- **Branch**: CSE
- **GitHub**: https://github.com/tejaswiputluri

## ✅ What's Ready

Your API is **working** with your credentials:
```json
{
  "user_id": "tejaswiputluri_06072006",
  "email_id": "tejaswi_putluri@srmap.edu.in",
  "college_roll_number": "AP23110010532"
}
```

## 🚀 STEP 1: Push to GitHub (5 minutes)

### Step 1.1: Create a New Repository on GitHub

1. Go to **https://github.com/tejaswiputluri** (your profile)
2. Click **"New"** button (top left, next to your profile)
3. Fill in:
   - **Repository name**: `srm-fullstack-challenge`
   - **Description**: "SRM Full Stack Engineering Challenge - REST API with Frontend"
   - **Public**: ✅ (must be public)
   - **Add .gitignore**: Select "Node" (already done, but doesn't hurt)
   - Click **"Create repository"**

4. **Copy the repository URL**: It will be: 
   ```
   https://github.com/tejaswiputluri/srm-fullstack-challenge.git
   ```

### Step 1.2: Push Your Code to GitHub

**In PowerShell, run these commands:**

```powershell
cd c:\Users\tejap\OneDrive\Desktop\bajaj

# Initialize git (if not already done)
git init

# Configure your git (only needed once)
git config --global user.name "Venkata Sai Tejaswi Putluri"
git config --global user.email "tejaswi_putluri@srmap.edu.in"

# Add all files
git add .

# Create initial commit
git commit -m "SRM Full Stack Engineering Challenge - Complete Solution"

# Add remote origin (replace with your repo URL)
git remote add origin https://github.com/tejaswiputluri/srm-fullstack-challenge.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

**Expected output:**
```
Enumerating objects: ...
Counting objects: ...
Writing objects: ...
...
To https://github.com/tejaswiputluri/srm-fullstack-challenge.git
 * [new branch]      main -> main
```

✅ Your code is now on GitHub!

---

## 🌐 STEP 2: Deploy to Vercel (5 minutes)

### Step 2.1: Connect to Vercel

1. Go to **https://vercel.com**
2. Click **"Sign Up"** or **"Log In"**
   - **Option A**: Sign up with GitHub (easiest - just click "Continue with GitHub")
   - **Option B**: Use email/password
3. After login, click **"New Project"**
4. Click **"Import Git Repository"**
5. Select your GitHub account
6. Find and click on `srm-fullstack-challenge`
7. Click **"Import"**

### Step 2.2: Configure Vercel Settings

On the configuration page:
- **Project Name**: Keep as `srm-fullstack-challenge` (or change if you prefer)
- **Framework**: Select "Node.js"
- **Root Directory**: Leave blank (it's at root)
- **Build Command**: Leave default
- **Start Command**: Leave default
- **Environment Variables**: Leave blank (not needed)

### Step 2.3: Deploy!

Click **"Deploy"** button and wait (takes 1-2 minutes)

**You'll see:**
```
✓ Build successful
✓ Deployment complete
```

### Step 2.4: Get Your Vercel URLs

After deployment completes, you'll see:

**Your Vercel Dashboard will show:**
- Project name: `srm-fullstack-challenge`
- Live URL (click it): `https://srm-fullstack-challenge.vercel.app`

**These are your URLs:**
- **Frontend URL**: `https://srm-fullstack-challenge.vercel.app`
- **Backend API Base URL**: `https://srm-fullstack-challenge.vercel.app`
  (Note: The actual endpoint will be `/bfhl`, so full API is: `https://srm-fullstack-challenge.vercel.app/bfhl`)

✅ Your app is now live!

---

## 🧪 STEP 3: Test Your Deployed App (2 minutes)

### Test 3.1: Test Frontend

Open: `https://srm-fullstack-challenge.vercel.app`

You should see:
- The beautiful Hierarchy Builder UI
- "Load Example" button works
- Submit button works
- Results display correctly

### Test 3.2: Test API Directly

Copy this and paste into PowerShell:

```powershell
$uri = "https://srm-fullstack-challenge.vercel.app/bfhl"
$body = @{
    data = @("A->B", "B->C", "C->D")
} | ConvertTo-Json

$response = Invoke-WebRequest -Uri $uri -Method POST -ContentType "application/json" -Body $body
$response.Content | ConvertFrom-Json | ConvertTo-Json
```

**Expected output**: Should show your credentials and processed data ✅

---

## 📝 Prepare Your Submission Form

Now fill in the SRM submission form with:

### Form Fields:

1. **Full Name**
   ```
   Venkata Sai Tejaswi Putluri
   ```

2. **Email Address**
   ```
   tejaswi_putluri@srmap.edu.in
   ```

3. **College Roll Number**
   ```
   AP23110010532
   ```

4. **Date of Birth (DD/MM/YYYY)**
   ```
   06/07/2006
   ```

5. **College Name**
   ```
   SRM UNIVERSITY, AP
   ```

6. **Branch / Department**
   ```
   Computer Science Engineering
   ```

7. **GitHub Repository URL**
   ```
   https://github.com/tejaswiputluri/srm-fullstack-challenge
   ```

8. **Frontend URL**
   ```
   https://srm-fullstack-challenge.vercel.app
   ```

9. **Backend API Base URL** ⚠️ (Base URL ONLY — no /bfhl)
   ```
   https://srm-fullstack-challenge.vercel.app
   ```

10. **Resume Link**
    ```
    [Your Google Drive link with "Anyone with link can view" sharing]
    ```

11. **Confirmation Checkboxes**
    - ✅ My frontend URL is live and loads correctly
    - ✅ My backend API responds to POST /bfhl
    - ✅ CORS is enabled on my backend
    - ✅ My GitHub repository is public
    - ✅ This is entirely my own work

---

## 🔄 If You Want to Change/Update Your Code Later

After deployment, if you need to make changes:

1. Edit files locally
2. Test with `npm start`
3. Commit and push:
   ```powershell
   git add .
   git commit -m "Your message"
   git push
   ```
4. Vercel will **automatically redeploy** (takes ~1 minute)

---

## ✅ Pre-Submission Checklist

- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] Vercel deployment complete
- [ ] Frontend loads at https://srm-fullstack-challenge.vercel.app
- [ ] API responds with your credentials
- [ ] All URLs collected
- [ ] Submission form filled out
- [ ] Checkboxes confirmed

---

## 📞 Troubleshooting

### "Git not recognized"
- Install Git from https://git-scm.com/download/win
- Restart PowerShell

### "Remote origin already exists"
```powershell
git remote remove origin
git remote add origin https://github.com/tejaswiputluri/srm-fullstack-challenge.git
```

### "Vercel deployment failed"
- Check that package.json exists
- Check that server.js exists
- Verify vercel.json is correct
- Redeploy from Vercel dashboard

### "API returns 404"
- Make sure your deployed app shows the frontend
- Test in browser console to check API is reachable
- Check the backend error logs in Vercel dashboard

### "Frontend doesn't load"
- Clear browser cache (Ctrl+Shift+Delete)
- Try incognito mode
- Check browser console (F12) for errors

---

## 🎯 Quick Command Reference

```powershell
# Setup git
git config --global user.name "Venkata Sai Tejaswi Putluri"
git config --global user.email "tejaswi_putluri@srmap.edu.in"

# Push to GitHub
git init
git add .
git commit -m "SRM Challenge"
git remote add origin https://github.com/tejaswiputluri/srm-fullstack-challenge.git
git branch -M main
git push -u origin main

# Test locally before pushing
npm start              # Terminal 1
node test.js          # Terminal 2
npm stop              # Stop server
```

---

## 📊 Your URLs for Submission

Once deployed, you'll have:

| Item | URL |
|------|-----|
| GitHub Repo | `https://github.com/tejaswiputluri/srm-fullstack-challenge` |
| Frontend | `https://srm-fullstack-challenge.vercel.app` |
| API Base URL | `https://srm-fullstack-challenge.vercel.app` |
| Full API Endpoint | `https://srm-fullstack-challenge.vercel.app/bfhl` |

---

## ⏱️ Timeline

| Step | Time | Status |
|------|------|--------|
| Push to GitHub | 5 min | ⏳ Start here |
| Deploy to Vercel | 5 min | After GitHub |
| Test Deployment | 2 min | After Vercel |
| Fill Form | 2 min | Final step |
| **Total** | **~15 min** | ✅ Complete |

---

## 🚀 You're Almost There!

Your solution is complete and ready. Just:

1. ✅ Push to GitHub (follow Step 1.2)
2. ✅ Deploy to Vercel (follow Step 2)
3. ✅ Test (Step 3)
4. ✅ Submit (copy URLs from submission table)

**Good luck!** 🎉
