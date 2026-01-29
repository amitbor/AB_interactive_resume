# 🚀 Quick Start - 5 Simple Steps

**Total time: 20-30 minutes**  
**Cost: $0 (Free hosting on Vercel)**

---

## What You're About to Do

You're going to put your resume website on the internet where anyone can visit it and ask AI questions about your experience - all while keeping your API key completely safe.

---

## Step 1: Download Your Files (2 minutes)

1. Find the folder called `amit-resume-deploy` on this computer
2. Right-click on it
3. Click "Download" or "Download as ZIP"
4. Save it somewhere easy to find (like your Desktop)
5. If it's a ZIP file, double-click to unzip it

**✅ You're ready for Step 2 when:** You have a folder with files like package.json, an "api" folder, and a "src" folder inside it.

---

## Step 2: Put Your Code on GitHub (7 minutes)

**What's GitHub?** Think of it as Google Drive, but for code.

### 2A: Create Account (if needed)
1. Go to https://github.com
2. Click "Sign up"
3. Pick a username and password
4. Verify your email

### 2B: Upload Your Code
1. Log into GitHub
2. Click the green "New" button (top left)
3. Name your project: `amit-resume-website`
4. Choose "Public"
5. Click "Create repository"
6. Click "uploading an existing file"
7. Drag ALL the files from your amit-resume-deploy folder into the browser
8. Click "Commit changes" at the bottom

**✅ You're ready for Step 3 when:** You can see all your files listed on GitHub.

---

## Step 3: Create Vercel Account (3 minutes)

**What's Vercel?** It's free website hosting that makes your site available to everyone.

1. Go to https://vercel.com
2. Click "Sign Up"
3. Choose "Continue with GitHub"
4. This connects your accounts (makes Step 4 easier!)
5. Click "Authorize Vercel"

**✅ You're ready for Step 4 when:** You see the Vercel dashboard.

---

## Step 4: Deploy Your Website (8 minutes)

### 4A: Import Your Project
1. In Vercel, click "Add New..." then "Project"
2. Find your repository (amit-resume-website)
3. Click "Import"

### 4B: Add Your Secret Key
This is the MOST IMPORTANT part!

1. Scroll down to "Environment Variables"
2. Click "Add" or the plus icon
3. In the "Name" field, type exactly: `ANTHROPIC_API_KEY`
4. In the "Value" field, paste your Claude API key
   - It starts with `sk-ant-`
   - Get it from console.anthropic.com
5. Click "Add"

### 4C: Launch!
1. Scroll to the bottom
2. Click the big "Deploy" button
3. Wait 1-3 minutes (watch the pretty build logs!)
4. You'll see confetti when it's done! 🎉

**✅ You're ready for Step 5 when:** You see "Congratulations" and a website preview.

---

## Step 5: Test Your Website (2 minutes)

1. Click the "Visit" button or click on your URL
2. Your website should load!
3. Scroll down to the chat section
4. Ask a question like: "What's Amit's experience with AI?"
5. The AI should respond!

**✅ Success when:** The AI answers your question correctly.

---

## 🎊 You Did It!

**Your website is now live at:**
```
https://your-project-name.vercel.app
```

**Share it with:**
- Potential employers
- Networking contacts  
- Your LinkedIn profile
- Anyone you want!

---

## 🎯 What Just Happened?

You just:
1. ✅ Created a full-stack web application
2. ✅ Set up secure API key protection
3. ✅ Deployed to production hosting
4. ✅ Made it accessible to anyone on the internet
5. ✅ Built a unique portfolio piece

**This is real software engineering!**

---

## 📚 Next Steps

**Now you can:**
- Share your URL with anyone
- Update content by editing files in GitHub
- Monitor usage at console.anthropic.com
- Check analytics in Vercel dashboard

**Want to learn more?**
- Read DEPLOYMENT_GUIDE.md for detailed explanations
- Check TROUBLESHOOTING.md if something goes wrong
- See README.md for technical details

---

## 💡 Pro Tips

**To update your website:**
1. Edit files on GitHub
2. Click "Commit changes"
3. Vercel automatically rebuilds (1 minute)

**To monitor costs:**
1. Go to console.anthropic.com
2. Click "Usage"
3. See how many API calls you're getting

**To prevent abuse:**
- The site limits each visitor to 50 questions per hour
- This is automatic protection built into the code

---

## 🆘 Quick Help

**Problem: AI doesn't respond**
→ Check that you added ANTHROPIC_API_KEY in Vercel

**Problem: Build failed**
→ Make sure all files uploaded to GitHub

**Problem: Can't find my repository**
→ Make sure repository is Public, not Private

**For more help:**
→ See TROUBLESHOOTING.md

---

## 🎓 You've Just Learned

- ✅ Git/GitHub basics
- ✅ Serverless functions
- ✅ API security
- ✅ Environment variables
- ✅ Cloud deployment
- ✅ Full-stack development

**These are valuable skills!**

---

Congratulations on deploying your AI-powered resume! 🚀

---

**Questions?** Check the other guides:
- DEPLOYMENT_GUIDE.md - Detailed instructions
- CHECKLIST.md - Quick reference
- TROUBLESHOOTING.md - Problem solving
- README.md - Technical overview
