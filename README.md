# Amit Borenshtain - AI-Powered Resume

An interactive resume website featuring an AI assistant that can answer questions about Amit's professional experience.

## 🌟 Features

- **AI Chat Assistant**: Ask questions about work experience, skills, and achievements
- **Interactive Resume**: Expandable sections with detailed career information
- **Professional Design**: Clean, modern interface with responsive layout
- **Secure API Integration**: API key protected on server-side
- **Rate Limiting**: Built-in protection against abuse (50 requests/hour per visitor)

## 🚀 Quick Start

See **DEPLOYMENT_GUIDE.md** for complete step-by-step instructions.

See **CHECKLIST.md** for a quick reference checklist.

## 🏗️ Project Structure

```
amit-resume-deploy/
├── api/
│   └── chat.js              # Secure backend API handler
├── src/
│   ├── App.jsx             # Main React component
│   └── main.jsx            # React entry point
├── index.html              # HTML template
├── package.json            # Dependencies
├── vercel.json             # Vercel configuration
├── vite.config.js          # Vite build configuration
├── .gitignore              # Git ignore rules
├── .env.example            # Environment variable template
├── DEPLOYMENT_GUIDE.md     # Full deployment instructions
├── CHECKLIST.md            # Quick deployment checklist
└── README.md               # This file
```

## 🔒 Security

- API key stored in Vercel environment variables (never in code)
- Server-side API calls only
- Rate limiting per IP address
- No sensitive data exposed to client

## 🛠️ Tech Stack

- **Frontend**: React, Vite, TailwindCSS
- **Backend**: Vercel Serverless Functions
- **AI**: Claude API (Anthropic)
- **Hosting**: Vercel
- **Version Control**: GitHub

## 📊 Cost Management

The application includes several cost-control features:

1. **Rate Limiting**: 50 requests per hour per visitor
2. **Prompt Caching**: Reduces API costs for repeated requests
3. **Concise Responses**: AI limited to 2-paragraph responses
4. **Efficient Architecture**: Edge functions minimize compute costs

**Estimated Costs**: ~$0.50-$1.00 per 100 visitor interactions

## 🔄 Making Updates

### Update Website Content:
1. Edit files in GitHub
2. Commit changes
3. Vercel automatically rebuilds (1-2 minutes)

### Update API Key:
1. Vercel Dashboard → Settings → Environment Variables
2. Edit `ANTHROPIC_API_KEY`
3. Redeploy from Deployments tab

## 📝 Environment Variables

Required environment variable:

```
ANTHROPIC_API_KEY=sk-ant-your-key-here
```

Set this in:
- **Vercel**: Project Settings → Environment Variables
- **Local Development**: Create `.env.local` file

## 🧪 Local Development

To run locally:

```bash
# Install dependencies
npm install

# Create .env.local file
cp .env.example .env.local
# Add your API key to .env.local

# Start development server
npm run dev
```

Open http://localhost:5173

## 🌐 Deployment

Deployed on Vercel with automatic deployments from GitHub.

**Live URL**: Set during deployment

## 📄 License

Personal portfolio project for Amit Borenshtain.

## 🤝 Contributing

This is a personal portfolio project, but feedback and suggestions are welcome!

## 📞 Contact

- **Email**: amit.borenshtain@gmail.com
- **LinkedIn**: [linkedin.com/in/amitborenshtain](https://linkedin.com/in/amitborenshtain)

---

Built with ❤️ using React, Claude AI, and Vercel
