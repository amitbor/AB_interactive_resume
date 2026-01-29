# 📋 Quick Deployment Checklist

Print this out or keep it open while you work!

## Before You Start
- [ ] I have my Claude API key from console.anthropic.com
- [ ] I have downloaded the project folder to my computer
- [ ] I have 20-30 minutes to complete this

---

## Step 1: GitHub Setup (5 minutes)
- [ ] Created GitHub account (or logged in)
- [ ] Created new repository named "amit-resume-website"
- [ ] Set repository to Public
- [ ] Uploaded all project files to GitHub
- [ ] Can see all files in my GitHub repository

---

## Step 2: Vercel Setup (3 minutes)
- [ ] Created Vercel account at vercel.com
- [ ] Connected Vercel to my GitHub account
- [ ] Authorized Vercel to access repositories

---

## Step 3: Deploy (5 minutes)
- [ ] Clicked "Add New Project" in Vercel
- [ ] Found and imported my repository
- [ ] Verified Framework Preset shows "Vite"
- [ ] Added Environment Variable: `ANTHROPIC_API_KEY`
- [ ] Pasted my Claude API key as the value
- [ ] Clicked "Deploy"

---

## Step 4: Test (2 minutes)
- [ ] Deployment completed successfully
- [ ] Clicked on the URL to visit my site
- [ ] Website loads correctly
- [ ] Tried asking the AI assistant a question
- [ ] AI responded successfully

---

## Step 5: Share (1 minute)
- [ ] Copied my website URL
- [ ] Saved URL somewhere safe
- [ ] Ready to share with others!

---

## My Website Info

**GitHub Repository:**
```
https://github.com/YOUR_USERNAME/amit-resume-website
```

**Live Website URL:**
```
https://amit-resume-website.vercel.app
(or your custom URL)
```

**API Key Location:**
- Stored in: Vercel → Project → Settings → Environment Variables
- Never commit this to GitHub!

---

## If Something Goes Wrong

**Website won't load:**
→ Check Vercel deployment logs for errors

**AI doesn't respond:**
→ Verify ANTHROPIC_API_KEY is set in Vercel environment variables

**"Rate limit exceeded":**
→ This is normal! It means the protection is working

**Build failed:**
→ Make sure all files uploaded to GitHub correctly

---

## Quick Reference

**To update website:**
1. Edit files in GitHub
2. Commit changes
3. Vercel auto-deploys in ~1 minute

**To change API key:**
1. Vercel → Settings → Environment Variables
2. Edit ANTHROPIC_API_KEY
3. Redeploy

**To check costs:**
1. Go to console.anthropic.com
2. View usage dashboard

---

## Success Criteria

✅ Website is accessible at a public URL  
✅ AI assistant responds to questions  
✅ No API key visible in browser code  
✅ Rate limiting is working  
✅ You can share the URL with anyone  

---

**You're done when all boxes are checked! 🎉**
