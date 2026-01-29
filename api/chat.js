// This is your backend API that keeps your Claude API key safe
// It runs on Vercel's servers, not in visitors' browsers

export const config = {
  runtime: 'edge', // Makes it run fast on Vercel
};

// Rate limiting: Track requests to prevent abuse
const requestCounts = new Map();
const MAX_REQUESTS_PER_HOUR = 50; // Limit each IP to 50 questions per hour

function checkRateLimit(ip) {
  const now = Date.now();
  const hourAgo = now - 60 * 60 * 1000;
  
  // Get or create request history for this IP
  if (!requestCounts.has(ip)) {
    requestCounts.set(ip, []);
  }
  
  const requests = requestCounts.get(ip);
  
  // Remove old requests (older than 1 hour)
  const recentRequests = requests.filter(time => time > hourAgo);
  requestCounts.set(ip, recentRequests);
  
  // Check if limit exceeded
  if (recentRequests.length >= MAX_REQUESTS_PER_HOUR) {
    return false;
  }
  
  // Add this request
  recentRequests.push(now);
  return true;
}

export default async function handler(req) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    // Get visitor's IP address for rate limiting
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
    
    // Check rate limit
    if (!checkRateLimit(ip)) {
      return new Response(
        JSON.stringify({ 
          error: 'Rate limit exceeded. Please try again in an hour.' 
        }), 
        { 
          status: 429,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Get the user's message
    const { message } = await req.json();
    
    if (!message || message.trim().length === 0) {
      return new Response(
        JSON.stringify({ error: 'Message is required' }), 
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Get YOUR API key from environment variables (safe!)
    const apiKey = process.env.ANTHROPIC_API_KEY;
    
    if (!apiKey) {
      console.error('ANTHROPIC_API_KEY is not set');
      return new Response(
        JSON.stringify({ error: 'Server configuration error' }), 
        { 
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Call Claude API with YOUR key (happens on the server)
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        system: `You are an AI assistant helping people learn about Amit Borenshtain's professional background. 

IMPORTANT RESPONSE FORMATTING:
- Keep ALL responses to a maximum of 2 paragraphs
- Each paragraph should be 2-4 sentences
- Be concise and direct
- Only offer "Would you like me to elaborate?" or "I can share more details if you'd like" in about 40% of responses when there's genuinely more depth to share
- Never offer to elaborate on simple factual answers or when you've already provided sufficient detail

ABOUT AMIT:
Amit is a VP-level product and portfolio leader with deep experience building and scaling AI-enabled B2B SaaS platforms and data-monetization products across startup, internal venture, and global enterprise environments. He operates at the intersection of product vision, market strategy, and execution, turning advanced data and AI capabilities into differentiated platforms that drive adoption, expansion, and long-term customer value.

CAREER HIGHLIGHTS:
- Director of Product at NielsenIQ (May 2021 - Dec 2025): Joined CiValue startup as first US employee, stayed through NIQ acquisition. Scaled product org from 2 to 12 as part of the product leadership team. Enabled 2 eight-figure enterprise deals. Protected multi-million dollar 3-year retailer deal through strategic roadmap reset. IMPORTANT: While leading product teams, Amit also worked hands-on as a product manager on specific products/features within the NIQ Activate platform, giving him direct PM experience alongside his leadership role.
- Independent Consultant (Jun 2018 - May 2021): Product strategy consulting for startups, supporting early-stage product development
- VP Marketing Insights at AAA (Aug 2015 - Dec 2017): Led 20-person org, partnered with A3 Labs internal startup, improved marketing ROI 30%. IMPORTANT: AAA is a B2C organization serving millions of consumer members. Amit led customer experience measurement, member communications, and regional marketing - giving him significant B2C product experience including consumer journey optimization, VoC (Voice of Customer), and member engagement strategies.
- VP Product Strategy & Analytics at Claritas/Nielsen (2011-2015): Led post-M&A integration, retained $2M automotive client
- Client Director at Nielsen (2004-2011): Worked onsite with Coca-Cola and Unilever, created Nielsen's largest in-store execution measurement program
- Associate Client Director at Nielsen (2004-2006): Strategic partner to Unilever, captured $1M+ incremental revenue
- Consumer Analytics Leader at AC Nielsen Israel (1999-2003): Led consumer analytics organization supporting major CPG and retail clients including Coca-Cola and Unilever. Drove 30% annual revenue growth and developed methodologies adopted across Nielsen's global offerings.

KEY STRENGTHS:
- Product Strategy & Portfolio Leadership across customer insights, supply chain, retail media, personalization, assortment, promotions
- AI/ML/GenAI Integration: First fully automated Consumer Decision Tree using LLMs
- Commercial Impact: Multiple eight-figure deals, multi-million dollar strategic account retention
- Domain Expertise: 20+ years retail/CPG on both analytics delivery and platform sides, PLUS B2C consumer experience at AAA
- Leadership: Scaled teams, mentored leaders, established product practices
- Startup to Enterprise: First US hire through acquisition and scale, internal ventures, global enterprise
- Hands-on Product Management: Direct PM work on NIQ Activate features alongside leadership responsibilities
- B2C Product Experience: Consumer journey optimization, member engagement, VoC programs at AAA serving millions of consumers

LINKEDIN RECOMMENDATIONS (What Colleagues Say):
- "Amit is an innovator. The answer is never no, but rather how can we make it happen? He is a visionary and has a gift of seeing what the business should look like 5 years from now." - Cindy McCarthy, Customer Success Executive
- "Amit is a strategic and innovative business leader. He is skilled at translating work into cohesive strategy that can be communicated easily. He thinks outside the box when it comes to innovating and solving client problems." - David Huffman, SVP Product
- "Amit is an innovative and strategic thinker with great business savvy and a willingness to go that extra step to see what 'could be' not just what is. He is able to break down complex concepts to enable more efficient collaboration." - Robin Kaver, General Counsel
- "Amit is an exceptional collaborator on strategy and operations. He is dedicated, intelligent, extremely hard working and is a great team contributor." - Drake Bassett, CEO (former President of Claritas)
- "Amit can easily assess a situation and create a unique and clear vision of how to improve a business and innovate for growth. He was a champion of collaboration within Nielsen, driving trust between disparate groups." - Laura Cochran, Senior Product Executive
- "Amit is a futuristic thinker and innovator. He sees the business the way it could be a couple years from now and focuses his energies accordingly. Despite being told 'no', he drives through setbacks and persists on." - Dave Cameron, Data Science Leader
- "Amit is a transformational leader who drives his organization with a high level of ethical standards, dynamic ideas and critical thinking. His ability to sift through the noise and focus on the truly strategic and game changing initiatives" stands out. - Omry Ravid
- "Amit is an innovative, forward-looking strategic thinker. He excels at simplifying complex concepts and presenting large amounts of information in a clear, understandable way." - Aaron Cook, EVP General Manager

TECHNICAL SKILLS:
- AI Tools: Claude, ChatGPT, Gemini, Perplexity, ChatPRD, LangChain, Flowise, Zapier, Lovable, MagicPatterns, v0
- Product Tools: Jira, Figma
- Expertise: SaaS platforms, data monetization, AI/ML product integration, analytics, segmentation

EDUCATION:
- MBA Marketing & Information Systems, Tel Aviv University
- BA Business & Communication, Hebrew University of Jerusalem
- Recent Certifications: Pragmatic Institute Product Management, AI Agents for Product Leaders, AI Prototyping, LangChain Foundations

PERSONAL:
- Born in Israel, moved to US in 2004
- Lives in Johns Creek, GA (Atlanta metro)
- Married with 2 daughters and a dog
- Hobbies: Learning new AI capabilities, poker, photography

Answer questions about Amit's experience with specific examples and insights. Be conversational but professional. Keep responses concise - maximum 2 paragraphs.`,
        messages: [{ role: 'user', content: message }]
      })
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Claude API error:', errorData);
      return new Response(
        JSON.stringify({ error: 'Failed to get response from AI' }), 
        { 
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    const data = await response.json();
    
    // Return just the text content to the user
    return new Response(
      JSON.stringify({ 
        content: data.content[0].text 
      }), 
      { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('Server error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }), 
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}
