# Amit's Resume Website - Deployment Guide

This guide will walk you through deploying your AI-powered resume website to Vercel, where anyone can access it without needing a Claude account.

## 🎯 What You're Building

A public website where visitors can:
- View your professional resume
- Ask an AI assistant questions about your experience
- All powered by YOUR Claude API key (safely hidden on a server)

## 📋 What You Need

1. A free Vercel account (we'll create this together)
2. A free GitHub account (we'll create this if needed)
3. Your Claude API key from console.anthropic.com
4. About 20-30 minutes

---

## 🚀 STEP-BY-STEP INSTRUCTIONS

### STEP 1: Get Your Files Ready

All your files are in this folder: `/home/claude/amit-resume-deploy`

You need to download this entire folder to your computer.

**Option A - Download as ZIP:**
1. Right-click on the folder
2. Select "Download" or "Download as ZIP"
3. Save it somewhere you can find it (like your Desktop)
4. Unzip the folder

**Option B - If you're comfortable with terminal:**
```bash
cd /home/claude/amit-resume-deploy
```

---

### STEP 2: Create a GitHub Account (if you don't have one)

1. Go to https://github.com
2. Click "Sign up" in the top right
3. Follow the steps to create your account
4. Verify your email address

**Why GitHub?** Vercel needs to read your code from somewhere. GitHub is like a cloud storage for code.

---

### STEP 3: Upload Your Code to GitHub

1. Go to https://github.com
2. Log in
3. Click the green "New" button (or the "+" in the top right, then "New repository")

4. Fill in these details:
   - **Repository name:** amit-resume-website (or any name you like)
   - **Description:** My AI-powered resume website
   - **Visibility:** Public (so Vercel can access it)
   - **DO NOT** check "Add a README file"
   
5. Click "Create repository"

6. You'll see a page with instructions. Look for the section "uploading an existing file"

7. Click "uploading an existing file"

8. Drag ALL the files from your `amit-resume-deploy` folder into the browser
   - This includes: package.json, vercel.json, api folder, src folder, etc.
   - DO NOT include .env if it exists

9. Scroll down and click "Commit changes"

**✅ Checkpoint:** You should now see all your files listed on GitHub!

---

### STEP 4: Create a Vercel Account

1. Go to https://vercel.com
2. Click "Sign Up" in the top right
3. Choose "Continue with GitHub" (easiest option)
4. This will connect your GitHub and Vercel accounts
5. Authorize Vercel to access your GitHub

**Why Vercel?** It's free hosting that makes your website accessible to everyone on the internet.

---

### STEP 5: Deploy Your Website to Vercel

1. After signing in, you'll see your Vercel dashboard
2. Click "Add New..." button
3. Select "Project"
4. You'll see a list of your GitHub repositories
5. Find "amit-resume-website" (or whatever you named it)
6. Click "Import"

**Configure Your Project:**

7. You'll see a configuration screen. Most settings are fine as-is, but check these:

   - **Framework Preset:** Should say "Vite" (it should detect this automatically)
   - **Build Command:** `npm run build` (should be pre-filled)
   - **Output Directory:** `dist` (should be pre-filled)

8. **IMPORTANT:** Scroll down to "Environment Variables"

9. Click "Add" or the plus icon

10. Add your API key:
    - **Name:** `ANTHROPIC_API_KEY`
    - **Value:** Paste your Claude API key here (starts with `sk-ant-...`)
    - **Environment:** Leave "Production" selected

11. Click "Add" to save the environment variable

12. Click "Deploy" at the bottom

**⏳ Wait Time:** This will take 1-3 minutes. You'll see a build log with lots of text scrolling by.

---

### STEP 6: Your Website is LIVE! 🎉

When the deployment finishes, you'll see:
- Confetti animation 🎊
- A preview image of your website
- A URL like: `https://amit-resume-website.vercel.app`

**Test it:**
1. Click "Visit" or click on the URL
2. Your website should load
3. Try asking the AI assistant a question
4. If it responds, everything is working!

---

### STEP 7: Get a Custom Domain (Optional)

Your free Vercel URL works great, but you can also use your own domain:

1. In Vercel dashboard, go to your project
2. Click "Settings"
3. Click "Domains"
4. Add your domain (you need to own it first from GoDaddy, Namecheap, etc.)

---

## 🔧 How to Make Changes Later

### Update Your Website:

1. Go to GitHub
2. Navigate to your repository
3. Click on the file you want to edit
4. Click the pencil icon (Edit this file)
5. Make your changes
6. Scroll down and click "Commit changes"

**Vercel will automatically rebuild your site within a minute!**

### Update Your API Key:

1. Go to Vercel dashboard
2. Select your project
3. Go to "Settings" → "Environment Variables"
4. Find `ANTHROPIC_API_KEY`
5. Click the three dots → "Edit"
6. Update the value
7. Go to "Deployments" and click "Redeploy"

---

## 💰 Cost Monitoring

Your API key is used when visitors ask questions. To monitor costs:

1. Go to https://console.anthropic.com
2. Check your usage dashboard
3. Set up billing alerts if available

**Rate Limiting:** The code limits each visitor to 50 questions per hour, which helps control costs.

**Estimated Costs:**
- If 100 people each ask 3 questions: ~$0.50 - $1.00
- The system prompt uses prompt caching to reduce costs

---

## ❓ Troubleshooting

### "The website shows an error when I ask a question"

**Fix:**
1. Check that you added the `ANTHROPIC_API_KEY` environment variable
2. Make sure the key is correct (starts with `sk-ant-`)
3. Verify the key works at console.anthropic.com

### "I can't find my repository in Vercel"

**Fix:**
1. Make sure the repository is Public, not Private
2. In Vercel, click "Adjust GitHub App Permissions"
3. Give Vercel access to your repositories

### "Build failed"

**Fix:**
1. Check the build logs for errors
2. Make sure all files uploaded correctly to GitHub
3. Verify package.json is present

### "Rate limit exceeded" message

**This is working correctly!** It means:
- Someone has asked more than 50 questions in an hour
- This protects your API costs
- They can try again in an hour

---

## 📱 Sharing Your Website

Once deployed, share your URL with anyone:

**Your URL format:**
```
https://your-project-name.vercel.app
```

Or if you set up a custom domain:
```
https://yourname.com
```

**Ways to share:**
- Add to your LinkedIn profile
- Include in your resume PDF
- Share in networking emails
- Include in your email signature

---

## 🎯 What Happens When Someone Visits

1. **Visitor opens your website** → They see the resume interface
2. **Visitor asks a question** → Sent to YOUR Vercel server (not their browser)
3. **Your server** → Uses your API key to ask Claude (key stays hidden)
4. **Claude responds** → Answer sent back to visitor
5. **Visitor never sees your API key** → It's completely secure

---

## 🔐 Security Features Built In

✅ API key never exposed to visitors  
✅ Rate limiting (50 requests/hour per visitor)  
✅ Server-side API calls only  
✅ Environment variables encrypted by Vercel  
✅ No API key in your code on GitHub  

---

## 📞 Need Help?

If you get stuck:
1. Check the troubleshooting section above
2. Review the build logs in Vercel
3. Make sure all environment variables are set
4. Verify your API key is active at console.anthropic.com

---

## 🎓 What You Just Learned

Congratulations! You've:
- ✅ Created a full-stack web application
- ✅ Set up secure backend API handling
- ✅ Deployed to production hosting
- ✅ Configured environment variables
- ✅ Implemented rate limiting
- ✅ Created a public portfolio piece

This is real software engineering! 🚀
