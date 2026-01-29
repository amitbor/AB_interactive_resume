# 🔧 Troubleshooting Guide

Common issues and how to fix them.

---

## Issue: "I can't find my files to upload"

**Where are they?**
- Location: `/home/claude/amit-resume-deploy`
- You need to download this entire folder to your computer first

**How to download:**
1. Right-click on the `amit-resume-deploy` folder
2. Choose "Download" or "Download as ZIP"
3. Save to your Desktop or Downloads folder
4. Unzip if needed

---

## Issue: "GitHub won't let me upload"

**Fix Option 1 - Use GitHub Desktop (Easiest):**
1. Download GitHub Desktop from desktop.github.com
2. Install it
3. Sign in with your GitHub account
4. Click "Add" → "Add existing repository"
5. Select your amit-resume-deploy folder
6. Click "Publish repository"

**Fix Option 2 - Manual Upload:**
1. On GitHub, make sure you're on the "Code" tab
2. Click "Add file" → "Upload files"
3. Drag ALL files and folders
4. Wait for upload to complete
5. Click "Commit changes"

---

## Issue: "Vercel deployment failed"

**Check the build logs:**
1. In Vercel, go to your project
2. Click on the failed deployment
3. Read the error message

**Common fixes:**

**If it says "package.json not found":**
- Make sure package.json is in the ROOT of your repository
- Not in a subfolder

**If it says "Build failed":**
- Check that all files uploaded correctly
- Make sure you have: package.json, vercel.json, src folder, api folder

**If it says "Cannot find module":**
- This usually fixes itself on the next deployment
- Try clicking "Redeploy" in Vercel

---

## Issue: "AI doesn't respond / Error message in chat"

**Step 1: Check your API key**
1. Go to console.anthropic.com
2. Verify your API key is active
3. Try creating a new API key if needed

**Step 2: Check Vercel environment variable**
1. Go to Vercel dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Make sure `ANTHROPIC_API_KEY` exists
5. Click the three dots → Edit
6. Re-paste your API key
7. Save

**Step 3: Redeploy**
1. Go to Deployments tab
2. Click the three dots on the latest deployment
3. Click "Redeploy"
4. Wait for it to finish
5. Test again

---

## Issue: "Rate limit exceeded" message

**This is actually WORKING correctly!**

This message means:
- Someone asked more than 50 questions in one hour
- This protects you from high API costs
- It's a feature, not a bug!

**What to do:**
- Wait one hour and try again
- OR adjust the limit in api/chat.js (line 10)

**To change the limit:**
1. Go to GitHub
2. Open api/chat.js
3. Find line 10: `const MAX_REQUESTS_PER_HOUR = 50;`
4. Change 50 to whatever you want
5. Commit changes
6. Vercel will auto-redeploy

---

## Issue: "I can't see my repository in Vercel"

**Fix: Adjust GitHub permissions**

1. In Vercel, when adding a project
2. Look for "Adjust GitHub App Permissions"
3. Click it
4. Make sure Vercel can access your repositories
5. Go back to Vercel and try importing again

**Alternative: Make repository Public**
1. Go to your GitHub repository
2. Click Settings
3. Scroll to bottom → "Danger Zone"
4. Click "Change visibility"
5. Choose "Make public"

---

## Issue: "Website loads but looks broken"

**Missing styles:**
1. Check that TailwindCSS is loading
2. Open browser developer tools (F12)
3. Check Console tab for errors
4. Most likely the CDN link is blocked

**Fix:**
1. Try a different browser
2. Disable ad blockers temporarily
3. Check your internet connection

---

## Issue: "I want to update my API key"

**Steps:**
1. Go to Vercel dashboard
2. Click on your project
3. Go to Settings
4. Click "Environment Variables"
5. Find `ANTHROPIC_API_KEY`
6. Click three dots → Edit
7. Paste new API key
8. Save
9. Go to Deployments tab
10. Click "Redeploy"

---

## Issue: "How do I know if it's working?"

**Test checklist:**
1. ✅ Website loads at your Vercel URL
2. ✅ You can see the resume sections
3. ✅ Chat interface is visible
4. ✅ You can type a message
5. ✅ AI responds to your question
6. ✅ Response is relevant to Amit's experience

**If ALL these work: It's working perfectly!**

---

## Issue: "Costs are too high"

**Check your usage:**
1. Go to console.anthropic.com
2. Click "Usage" or "Billing"
3. See how many API calls you're getting

**Reduce costs:**

**Option 1: Lower rate limit**
- Edit api/chat.js line 10
- Change from 50 to 20 or 10

**Option 2: Add authentication**
- This requires more advanced setup
- Consider adding a simple password

**Option 3: Monitor closely**
- Set up billing alerts in Anthropic console
- Check usage weekly

---

## Issue: "Someone shared a broken link"

**Most likely causes:**

1. **You redeployed with a new project name**
   - Fix: Share the new URL

2. **Your Vercel project was deleted**
   - Fix: Redeploy following the guide

3. **Vercel free tier expired**
   - Fix: Check Vercel dashboard for notices

---

## Issue: "I want to make changes to the design"

**Easy changes:**

**Change colors:**
1. Go to GitHub → src/App.jsx
2. Search for color classes like `bg-slate-700`
3. Replace with other Tailwind colors
4. Commit changes

**Change text:**
1. Find the text in App.jsx
2. Edit it directly
3. Commit changes

**More complex changes:**
- You'll need to learn React/JavaScript
- Or hire someone on Fiverr/Upwork

---

## Issue: "I deleted something by accident"

**On GitHub:**
1. Go to your repository
2. Click "Commits"
3. Find the commit before you deleted
4. Click "<>" icon to view that version
5. Copy the code
6. Go back to current version
7. Re-create the file
8. Paste the code
9. Commit

**On Vercel:**
- Vercel keeps deployment history
- You can rollback to previous deployments
- Go to Deployments → Click three dots → "Promote to Production"

---

## Issue: "It worked yesterday but not today"

**Possible causes:**

1. **API key expired or disabled**
   - Check console.anthropic.com
   - Generate new key if needed

2. **Vercel deployment failed**
   - Check Vercel dashboard for errors
   - Redeploy if needed

3. **Hit rate limits**
   - Wait an hour
   - Or increase limits in api/chat.js

4. **GitHub webhook broken**
   - Reconnect GitHub in Vercel settings

---

## Still Stuck?

**Before asking for help, gather this info:**

1. What did you do right before the problem started?
2. What error message do you see (take a screenshot)?
3. Did you check the Vercel deployment logs?
4. Did you verify your API key works at console.anthropic.com?
5. What browser are you using?

**Where to get help:**
- Vercel documentation: vercel.com/docs
- Anthropic documentation: docs.anthropic.com
- GitHub documentation: docs.github.com

---

## Quick Diagnostic Commands

**Check if your site is online:**
- Visit your URL in an incognito/private browser window
- If it loads, your site is working

**Check if API is working:**
- Open browser developer tools (F12)
- Go to Network tab
- Ask the AI a question
- Look for `/api/chat` request
- Check if it returns 200 (success) or an error

**Check GitHub repository:**
- Make sure all these files exist:
  - package.json
  - vercel.json
  - api/chat.js
  - src/App.jsx
  - src/main.jsx
  - index.html

---

**Most problems are solved by:**
1. ✅ Double-checking the API key
2. ✅ Redeploying in Vercel
3. ✅ Making sure all files uploaded correctly
4. ✅ Waiting a few minutes and trying again
