import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, ChevronDown, ChevronUp, Mail, MapPin, Linkedin, Download, Info, X } from 'lucide-react';

export default function AmitBioApp() {
  const [expandedSections, setExpandedSections] = useState({});
  const [chatMessages, setChatMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedBullet, setSelectedBullet] = useState(null);
  const chatEndRef = useRef(null);

  // Removed useEffect that was auto-scrolling - let users control their own scrolling

  const toggleSection = (section) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleSendMessage = async () => {
    if (!userInput.trim() || isLoading) return;

    const newMessage = { role: 'user', content: userInput };
    setChatMessages(prev => [...prev, newMessage]);
    setUserInput('');
    setIsLoading(true);

    try {
      // Call YOUR backend instead of directly calling Anthropic
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userInput
        })
      });

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }

      const assistantMessage = {
        role: 'assistant',
        content: data.content
      };
      setChatMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      setChatMessages(prev => [...prev, {
        role: 'assistant',
        content: 'I apologize, but I encountered an error. Please try again.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const skillsData = {
    professionalSkills: [
      'Product Strategy & Vision',
      'Portfolio & Roadmap Management',
      'B2B SaaS Platform Development',
      'AI/ML Product Integration',
      'Cross-Functional Team Leadership',
      'Executive Stakeholder Management',
      'Go-to-Market Strategy',
      'Team Building & Mentoring',
      'Customer Discovery & Research',
      'Product Design Principles (UX/UI)',
      'Product Methodologies: Agile, User Stories, Functional and Non-Functional Requirements',
      'Agile/Scrum Methodologies'
    ],
    technicalProficiency: [
      'AI Platforms: Claude, ChatGPT, Gemini, Perplexity',
      'AI Tools: Make, Flowise, Zapier, ChatPRD',
      'Product Prototyping: Lovable, MagicPatterns, v0',
      'Deployment & Version Control: GitHub, Vercel',
      'Product Collaboration: Jira, Figma, Confluence',
      'GenAI & LLMs',
      'Data & Analytics: BI Platforms, Analytics Tools',
      'Customer Systems: CRM, Marketing Platforms'
    ]
  };

  const bulletDetails = {
    'niq-0': {
      title: 'Enabled 2 Eight-Figure Enterprise Deals',
      situation: 'In one case, a North American retailer was considering switching from an existing supplier monetization provider but was concerned about change management, as the existing tool was fully embedded across both internal and supplier workflows with extensive customization. In another case, a deal was conditioned on completing the development of an assortment solution within Activate.',
      task: 'Convince the client that the solution would meet and exceed their needs while ensuring change management would be supported through product features. In the second case, ensure delivery readiness to close the deal.',
      action: 'Translated product strategy into executive-level positioning during pre-sales, supported by demonstrations and stakeholder engagement. Analyzed current versus existing solutions and highlighted key features that needed to be added as part of the onboarding timeline. Ensured delivery readiness by meeting roadmap milestones tied directly to deal outcomes, including high-level oversight on timeline and path to delivery.',
      result: 'Successfully enabled two eight-figure enterprise deals across North America.',
      skills: 'Executive stakeholder management, product positioning, commercial acumen, pre-sales support, roadmap commitment management'
    },
    'niq-1': {
      title: 'Protected Multi-Million Dollar Retailer Deal',
      situation: 'A three-year, eight-figure retailer partnership was at risk due to commercial commitments made during the sales process regarding solution methodology that were outside the scope of the product roadmap.',
      task: 'Reset out-of-scope commercial commitments into an executable plan while protecting the multi-million dollar deal.',
      action: 'Secured executive alignment to prioritize deal protection over the current roadmap. Aligned the team to quickly update requirements and design. Secured additional resources to mitigate risk. Negotiated a phased delivery approach to meet core timelines with client-acceptable timing on remaining features.',
      result: 'Successfully protected the three-year, eight-figure retailer deal.',
      skills: 'Crisis management, stakeholder negotiation, roadmap prioritization, resource allocation, phased delivery planning'
    },
    'niq-2': {
      title: 'Scaled Product Organization & Established Product Management Processes',
      situation: 'At the time of acquisition, the NIQ Activate product organization consisted of only two people managing a complex multi-domain platform. The organization lacked formal product management processes and operating practices and was not aligned with NIQ ways of working.',
      task: 'As part of the product leadership team, scale the product organization sixfold (from two to twelve people) while establishing foundational product management practices.',
      action: 'Mentored emerging leaders within the team. Hired and developed teams across product domains. Helped establish product management processes and operating practices such as review gates to ensure product quality and consistency. Operated as part of the product leadership team. Managed a globally distributed team with direct oversight of product managers. Partnered closely with engineering, data science, UX, product marketing, and commercial teams.',
      result: 'Successfully scaled the team sixfold while establishing formal product management practices supporting enterprise operations.',
      skills: 'Organizational scaling, talent development, process establishment, people leadership, cross-functional partnership'
    },
    'niq-3': {
      title: 'Integrated AI/ML/GenAI Including First Automated Consumer Decision Tree',
      situation: 'Product Decision Trees were offered only as a service requiring both high maintenance in setup and significant effort in delivery. There was a strategic desire to integrate this capability into the platform to allow users to manage the full flow of assortment analytics autonomously.',
      task: 'Integrate AI/ML/GenAI capabilities into customer-facing solutions to accelerate insight generation and time-to-value.',
      action: 'Experimented with LLM as a solution to address different aspects of Consumer Decision Tree creation, including naming of nodes and semantic grouping of attribute values. Developed the first automated in-platform Consumer Decision Tree solution. Integrated AI/ML/GenAI into core product workflows. Enhanced analytic depth and accelerated time-to-insight.',
      result: 'The automated CDT beta version was delivered to a strategic client.',
      skills: 'AI/ML product integration, technical innovation, LLM application, product differentiation'
    },
    'consultant-0': {
      title: 'Supported Early-Stage Platform Development',
      situation: 'A Series A startup was developing a decision support SaaS solution and sought assistance in building a pitch to companies in various verticals, primarily in CPG and Retail.',
      task: 'Help the startup build a client pitch with a focus on Retail/CPG verticals. Ensure the product vision, requirements, and user workflows were relevant to the unique needs of this vertical.',
      action: 'Created client-facing materials. Helped define product vision for the insights-driven decision-support platform. Defined requirements and user workflows. Converted some of the client materials into investor-facing materials.',
      result: 'The work led to successful pilots with multiple clients. The startup later merged with Cloverpop, where the founder serves as the current CEO.',
      skills: 'Product vision definition, requirements gathering, startup advising, stakeholder materials creation'
    },
    'consultant-1': {
      title: 'Led Customer Discovery Improving Product-Market Fit',
      situation: 'A technical founder with a concept for a smart cart product was seeking market inputs to solidify the product value proposition, identify the right niche target for the product, and inform the product development plan.',
      task: 'Conduct customer discovery, competitive assessment, and value proposition work to improve product-market fit (with no budget).',
      action: 'Led the customer discovery process with one-to-one interviews and concept testing among a sample of potential users. Conducted competitive assessments. Refined the value proposition. Guided roadmap prioritization based on findings.',
      result: 'The research indicated that the differentiated solution was not compelling enough for the market as positioned. Findings identified where the bigger pain points existed for both retailers and customers.',
      skills: 'Customer discovery, product-market fit, competitive analysis, roadmap prioritization'
    },
    'aaa-0': {
      title: 'Partnered with A3 Labs and Gig Car Share Internal Startups',
      situation: 'AAA was launching internal innovation ventures through A3 Labs innovation hub with the goal of creating solutions to improve members\' lives. These ventures needed insights support.',
      task: 'Provide insights, research, and analytics support to help innovation teams understand where to play, validate concepts, and make data-driven launch decisions.',
      action: 'Partnered with A3 Labs internal startup innovation hub. Provided qualitative, quantitative, and research support. Conducted market-fit analysis. Executed concept testing. Conducted adoption testing. Performed marketing testing. Delivered customer satisfaction analytics. Contributed insights and frameworks supporting concept validation. Supported successful launch decisions.',
      result: 'Supported multiple successful launch decisions, including the launch of Gig Car Share in multiple cities, with decisions related to pricing model, branding, lead generation, and customer retention.',
      skills: 'Innovation support, concept validation, market research, cross-functional partnership, B2C product insights'
    },
    'aaa-1': {
      title: 'Modernized Customer Experience Measurement',
      situation: 'AAA\'s customer experience measurement relied on static survey-based approaches that lacked real-time insight. Since these measurements impacted performance ratings for providers, they required large samples and fast response times that were both expensive and inconvenient for members.',
      task: 'Modernize customer experience measurement to enable real-time insight, clear ownership, and continuous improvement.',
      action: 'Led the modernization of the customer experience measurement approach. Created an RFI/RFP process to select the best provider. Moved from static survey-based approaches to a scalable, action-oriented feedback platform with closed loops. Enabled near real-time insight capability. Created foundation for continuous service improvement as well as inputs for product enhancement, in addition to raw scores.',
      result: 'Successfully deployed a scalable, action-oriented feedback platform with real-time insights that enabled dozens of faster touch points with unsatisfied members while maintaining the same budget.',
      skills: 'CX transformation, platform selection, organizational change, continuous improvement enablement'
    },
    'aaa-2': {
      title: 'Enhanced Insurance Targeting Delivering ~30% ROI Improvement',
      situation: 'AAA insurance direct marketing had an opportunity to improve efficiency and ROI. The existing approach targeted all eligible members since the cost of conversion was high enough to make it viable, but this approach did not account for member experience and was inefficient.',
      task: 'Improve direct marketing ROI for the insurance business by 20% and avoid over-selling that might negatively impact customer satisfaction and desensitize customers to marketing efforts.',
      action: 'Engaged a third-party data enrichment provider. Collaborated with the data science team to enhance insurance targeting. Developed a segmented propensity-based approach. Augmented it with signals-based targeting. Drove data-informed acquisition and engagement strategies that enabled precise targeting and optimal timing (month of year) when prospects were most likely to respond.',
      result: 'Delivered approximately 30% improvement in direct marketing ROI for the insurance business.',
      skills: 'Marketing analytics, data enrichment, propensity modeling, ROI optimization, cross-functional collaboration'
    },
    'claritas-0': {
      title: 'Owned Innovation Strategy Introducing Rapid Prototyping',
      situation: 'Following the acquisition of Claritas by Nielsen, there were many new opportunities for data product innovation, but there was no process for intaking, evaluating, brainstorming, and selecting product concepts to work on. This sometimes resulted in working on the wrong solutions, and development would often be slow (taking months), leading to waste.',
      task: 'Build an innovation practice to reduce time-to-market through rapid prototyping and customer-driven development.',
      action: 'Owned innovation strategy and portfolio prioritization. Introduced rapid prototyping. Implemented a fast-to-fail experimentation approach. Established customer-driven development practices. Accelerated learning cycles. Embedded this in the product funnel processes. Improved solution quality.',
      result: 'Ensured only the best solutions moved forward with rapid prototyping within 2-3 weeks instead of months.',
      skills: 'Innovation management, rapid prototyping, portfolio prioritization, process improvement'
    },
    'claritas-1': {
      title: 'Retained $2M Automotive Client Through Integrated Solution',
      situation: 'A two-million-dollar annual automotive analytics client was at risk of switching their Nielsen brand analytics to a boutique firm, as the boutique firm\'s solution was more robust. The client was also a Claritas client and used Claritas segmentation heavily in their business.',
      task: 'Retain the two-million-dollar automotive client by demonstrating differentiated value and addressing their specific needs.',
      action: 'Integrated custom brand insights with segmentation insights. Delivered more actionable competitive set analysis to the clientâ€”brand insights among specific customer segments that were much more relevant to them. Enhanced the measurement solution. Demonstrated differentiated value versus alternatives.',
      result: 'Successfully retained the two-million-dollar automotive analytics client and prevented the switch to a competitor.',
      skills: 'Customer retention, solution design, competitive differentiation, stakeholder management'
    },
    'claritas-2': {
      title: 'Rolled Out Joint Offering Enabling Retailers to Understand Customer Spending',
      situation: 'Retailers using Claritas segmentation lacked visibility into customer spending outside their own stores, which limited their ability to understand where to invest resources.',
      task: 'Create and launch an integrated product combining segmentation with transaction data to show complete customer shopping behavior.',
      action: 'Rolled out a joint offering integrating Claritas segmentation with third-party credit card transaction data. This included building data integration and methodology for combined analytic output. This enabled clients to understand, for their shoppers (aggregated to specific segments), where else they buy in their category outside their "four walls." Provided competitive shopping pattern insights.',
      result: 'Delivered the solution to several clients across various industries (for example, a hotel chain that wanted to understand what their customers were spending on while staying at their hotels, to create new experience opportunities within their properties).',
      skills: 'Strategic partnerships, product innovation, data integration, go-to-market strategy'
    },
    'nielsen-coke-0': {
      title: 'Created Nielsen\'s Largest In-Store Execution Measurement Program',
      situation: 'Coca-Cola\'s performance was highly tied to the presence of their products in stores, across different displays and zones. They had developed a "Look of Success" for what stores should look like but needed help confirming compliance from their field teams and stores.',
      task: 'Create and launch Nielsen\'s largest in-store execution measurement program.',
      action: 'Created a measurement program for in-store execution. Launched Nielsen\'s largest such program. Established a new standard for operational performance analytics across markets. Reused the insights to provide the client better analytics on the connection between displays and performance.',
      result: 'Not only did this research provide Coke with insights on where they had tactical gaps, it provided insights and analytics that challenged their assumptions and helped them improve their own playbook. As a result, this short-term ask became a long-standing program.',
      skills: 'Program design, operational measurement, large-scale deployment, client partnership'
    },
    'nielsen-coke-1': {
      title: 'Designed Methodologies Adopted into Nielsen\'s Scalable Solutions',
      situation: 'As a leading global client, Coca-Cola often challenged the team to push the edge of solutions. This created opportunities to learn from custom applications and (assuming there was no proprietary client input) leverage the solutions as part of the broader company solution set.',
      task: 'Leverage analytic methodologies developed for Coca-Cola and commercialize them into Nielsen\'s scalable solutions portfolio.',
      action: 'Presented Coca-Cola solutions to other client teams as part of learning sessions. Worked with the product team to articulate the generic use case. Enabled adoption into Nielsen\'s scalable solutions portfolio. For example, developed a framework for building store clusters by ethnic propensity to be used to adjust store assortment that was repeated by several other teams.',
      result: 'New methodologies were adopted into Nielsen\'s scalable solutions portfolio, driving higher client satisfaction.',
      skills: 'Methodology development, commercialization, product innovation, scalable solution design'
    },
    'nielsen-coke-2': {
      title: 'Developed Global Measurement Protocol for 2010 FIFA World Cup',
      situation: 'Coca-Cola was the official sponsor of the 2010 FIFA World Cup with global marketing investment requiring consistent cross-market measurement across more than 30 countries. Each country had different channels, varying levels of measurement maturity, and different metrics.',
      task: 'Develop a standardized global measurement protocol for World Cup sponsorship across multiple markets.',
      action: 'Developed a global digital performance measurement protocol by creating standardized rules for data calculation by channel. Enabled protocol adoption for the 2010 FIFA World Cup and supported implementation with commercialization efforts and training. Enabled consistent cross-market evaluation and insight generation.',
      result: 'Successfully deployed a global measurement protocol for FIFA World Cup sponsorship, allowing global brands to understand both total effect and comparative effect across countries.',
      skills: 'Global program management, standardization, measurement design, cross-market coordination'
    },
    'nielsen-unilever-0': {
      title: 'Developed Analytic Frameworks for Loyalty Programs',
      situation: 'Unilever needed analytic frameworks to support CRM, loyalty programs, and marketing targeting. Their current system was using low-quality and out-of-date data, so many of their marketing efforts were missing the mark.',
      task: 'Develop analytic frameworks and reusable methodologies for loyalty program optimization and marketing targeting.',
      action: 'Developed analytic frameworks for loyalty programs. Created methodologies supporting targeting strategies. Built a data cleansing process to ensure the segmentation was backed by proof in the data. Built frameworks for cross-channel marketing decision-making. Made it a reusable process across brands.',
      result: 'Successfully deployed frameworks across Unilever brands, improving responses by 15%.',
      skills: 'Framework development, loyalty program analytics, targeting optimization, reusable methodology design'
    },
    'nielsen-unilever-1': {
      title: 'Captured $1M+ Incremental Revenue',
      situation: 'Nielsen\'s relationship with Unilever was primarily based on syndicated data and contracted services. An opportunity existed to expand into custom analytics and strategic consulting engagements.',
      task: 'Identify and sell incremental services beyond the base contract to grow Nielsen revenue with Unilever by $500,000.',
      action: 'Identified opportunities, successfully sold, and delivered multiple custom engagements primarily utilizing Homescan data.',
      result: 'Captured more than one million dollars in incremental revenue from Unilever through expanded services. Following this success, Unilever increased the scope of their contract to include comprehensive Homescan analytics.',
      skills: 'Business development, consultative selling, stakeholder management, revenue generation'
    }
  };

  const resumeData = {
    experience: [
      {
        title: 'Director of Product',
        company: 'NielsenIQ (NIQ Activate)',
        period: 'May 2021 - Dec 2025',
        location: 'Atlanta, GA (Remote)',
        summary: 'Joined CiValue startup as first US employee and sole US leader, reporting to CEO/founder. Operated across Product, Business Development, and Customer Success through acquisition by NIQ. Post-acquisition, led global product strategy and portfolio prioritization across Customer Insights, Supply Chain, Retail Media, Personalization, Assortment, and Promotions domains.',
        bullets: [
          { text: 'Enabled **2 eight-figure enterprise deals** through executive product positioning', detailKey: 'niq-0' },
          { text: 'Protected **multi-million dollar retailer deal** by resetting roadmap and negotiating phased delivery', detailKey: 'niq-1' },
          { text: 'Scaled product organization from 2 to 12 as part of the product leadership team, **establishing product management processes**', detailKey: 'niq-2' },
          { text: 'Integrated AI/ML/GenAI including **first automated Consumer Decision Tree using LLMs**', detailKey: 'niq-3' }
        ]
      },
      {
        title: 'Independent Consultant',
        company: 'Product Strategy & Analytics',
        period: 'Jun 2018 - May 2021',
        location: 'Walnut Creek, CA (Remote)',
        summary: 'Provided product strategy, analytics, and market research consulting to startups and established companies, advising founders and leadership teams on solution design, positioning, and commercialization.',
        bullets: [
          { text: 'Supported early-stage platform development defining **product vision and requirements**', detailKey: 'consultant-0' },
          { text: 'Led customer discovery improving **product-market fit** and roadmap prioritization', detailKey: 'consultant-1' }
        ]
      },
      {
        title: 'VP, Marketing Insights',
        company: 'AAA',
        period: 'Aug 2015 - Dec 2017',
        location: 'Walnut Creek, CA',
        summary: 'Served on senior leadership team, leading 20-person organization spanning analytics, research, CX/VoC, member communications, and regional marketing with $5M annual budget.',
        bullets: [
          { text: 'Partnered with A3 Labs and Gig Car Share internal startups on new product development', detailKey: 'aaa-0' },
          { text: 'Modernized customer experience measurement to **real-time feedback platform**', detailKey: 'aaa-1' },
          { text: 'Enhanced insurance targeting delivering **~30% ROI improvement**', detailKey: 'aaa-2' }
        ]
      },
      {
        title: 'VP, Product Strategy & Analytics',
        company: 'Claritas (Nielsen subsidiary)',
        period: '2011 - 2015',
        location: 'Atlanta, GA',
        summary: 'Brought in by Nielsen\'s Chief Product Officer to lead post-M&A product integration. Led 10 product managers and 15 analytics specialists, served on executive leadership team reporting to Claritas President.',
        bullets: [
          { text: 'Owned innovation strategy introducing rapid prototyping and **reducing time-to-market**', detailKey: 'claritas-0' },
          { text: 'Retained **$2M automotive client** through integrated solution design', detailKey: 'claritas-1' },
          { text: 'Rolled out joint offering enabling **retailers to understand customer spending patterns**', detailKey: 'claritas-2' }
        ]
      },
      {
        title: 'Client Director / Business Partner',
        company: 'Nielsen (Coca-Cola team)',
        period: '2006 - 2011',
        location: 'Atlanta, GA',
        summary: 'Led on-site Nielsen teams supporting Coca-Cola\'s North America portfolio. Worked directly with senior leaders across brand, retail, food service, strategy, and media teams supporting major brands including Minute Maid, Vitaminwater, Dasani, Fuze Tea, and Coke Zero.',
        bullets: [
          { text: 'Created **Nielsen\'s largest in-store execution measurement program**', detailKey: 'nielsen-coke-0' },
          { text: 'Designed methodologies **adopted into Nielsen\'s scalable solutions**', detailKey: 'nielsen-coke-1' },
          { text: 'Developed global measurement protocol for **2010 FIFA World Cup**', detailKey: 'nielsen-coke-2' }
        ]
      },
      {
        title: 'Associate Client Director',
        company: 'Nielsen (Unilever team)',
        period: '2004 - 2006',
        location: 'Wilton, CT',
        summary: 'Served as strategic partner to Unilever brand and category teams (Dove, skin care portfolio) delivering data-driven insights for CRM strategy, brand positioning, pricing architecture, and marketing ROI.',
        bullets: [
          { text: 'Developed analytic frameworks for loyalty programs and targeting', detailKey: 'nielsen-unilever-0' },
          { text: 'Captured **$1M+ incremental revenue**', detailKey: 'nielsen-unilever-1' }
        ]
      }
    ],
    education: [
      { degree: 'MBA', field: 'Marketing & Information Systems', school: 'Tel Aviv University' },
      { degree: 'BA', field: 'Business & Communication', school: 'Hebrew University of Jerusalem' }
    ],
    certifications: [
      'Pragmatic Institute - Product Management Certification',
      'LinkedIn - AI Agents for Product Leaders',
      'Udemy - AI Prototyping for Product Managers',
      'LangChain - Foundations: Introduction to LangChain'
    ]
  };

  const sampleQuestions = [
    "Tell me about Amit's impact in his latest role",
    "Give me an example of a time Amit faced challenges delivering a committed product",
    "How would Amit's colleagues describe him?",
    "What experience does Amit have with AI/ML integration in products?",
    "Tell me about Amit's experience scaling products from startup to enterprise"
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
      {/* Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          {/* Name and Title - Left aligned */}
          <div className="mb-3">
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Amit Borenshtain</h1>
            <p className="text-base text-slate-600 mt-1 leading-relaxed">
              Product & Portfolio Leader | Data & AI-Driven SaaS Platforms | Startup, Internal Venture & Enterprise Scale (ciValue, AAA A3 Labs, NIQ) | Executive Customer Engagement | Retail & CPG
            </p>
          </div>
          
          {/* Contact Info - Centralized */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-base">
            <a href="mailto:amit.borenshtain@gmail.com" className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors whitespace-nowrap">
              <Mail size={16} className="text-slate-700 flex-shrink-0" />
              <span>amit.borenshtain@gmail.com</span>
            </a>
            <div className="flex items-center gap-2 text-slate-700 whitespace-nowrap">
              <MapPin size={16} className="text-slate-700 flex-shrink-0" />
              <span>Atlanta, GA</span>
            </div>
            <a 
              href="https://linkedin.com/in/amitborenshtain" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors whitespace-nowrap"
            >
              <Linkedin size={16} className="text-slate-700 flex-shrink-0" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="animate-fadeIn space-y-8">
          {/* About Me */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">About Me</h2>
              <div className="text-lg text-slate-700 leading-relaxed space-y-2">
                <p>I lead product strategy for enterprise data and AI platforms in retail and CPG - a domain where I've spent 20+ years on both sides of the table.</p>
                <p>From delivering analytics for Coca-Cola and Unilever at Nielsen to building the platforms that now power retail insights, collaboration, and merchandising decisions at scale, I bring hard-won customer empathy to every product decision.</p>
                <p>Whether joining a startup as first US hire or leading product portfolios at enterprise scale, I've consistently translated domain complexity into platforms that drive adoption and revenue - contributing to multiple eight-figure deals and multi-million dollar strategic account retention through differentiated product strategy.</p>
              </div>
            </div>

            {/* About this Interactive Tool */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">About this Interactive Tool</h2>
              <div className="text-base text-slate-700 leading-relaxed space-y-4">
                <p>This interactive resume leverages AI technology to provide multiple ways to explore my professional background:</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <h3 className="font-bold text-slate-900 mb-2">📊 Browse the Overview</h3>
                    <p className="text-sm">Review the structured sections below for a traditional resume experience with executive highlights, detailed experience, and skills.</p>
                  </div>
                  
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <h3 className="font-bold text-slate-900 mb-2">💬 Ask the AI Assistant</h3>
                    <p className="text-sm">Use the chat interface to ask specific questions about my experience, achievements, or approach to product leadership.</p>
                  </div>
                  
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <h3 className="font-bold text-slate-900 mb-2">🔍 Deep Dive with "Tell me more"</h3>
                    <p className="text-sm">Click "Tell me more" next to any experience bullet point to see detailed STAR-format analysis of that achievement.</p>
                  </div>
                  
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <h3 className="font-bold text-slate-900 mb-2">📱 Navigate Intuitively</h3>
                    <p className="text-sm">Use expand/collapse controls to focus on the areas most relevant to you, creating your own customized view.</p>
                  </div>
                </div>

                <p className="text-sm italic text-slate-600 pt-2">
                  I built this tool using Claude (Anthropic's AI assistant) as part of my commitment to hands-on exploration of AI capabilities. As an enthusiastic adopter of AI tools in product development, I believe in learning through direct application - this interactive resume serves both as a demonstration of AI's potential and as a practical tool for sharing my professional story in an engaging, accessible format.
                </p>
              </div>
            </div>

            {/* AI Chat Section - Embedded in Overview */}
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
              <div className="bg-gradient-to-r from-slate-700 to-slate-800 p-6">
                <div className="flex items-center gap-3">
                  <MessageCircle className="text-white" size={28} />
                  <div>
                    <h2 className="text-2xl font-bold text-white">AI Assistant</h2>
                    <p className="text-slate-100 text-base">Ask questions about my career and experience</p>
                  </div>
                </div>
              </div>

              {/* Sample Questions */}
              <div className="p-4 bg-slate-50 border-b border-slate-200">
                <p className="text-sm font-semibold text-slate-600 mb-2">TRY ASKING:</p>
                <div className="flex flex-wrap gap-2">
                  {sampleQuestions.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => setUserInput(q)}
                      className="text-sm px-3 py-1.5 bg-white rounded-full text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-300 transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>

              {/* Chat Messages */}
              <div className="h-80 overflow-y-auto p-6 space-y-4">
                {chatMessages.length === 0 ? (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center text-slate-500 max-w-md">
                      <MessageCircle className="mx-auto mb-4 text-slate-400" size={48} />
                      <p className="text-lg font-medium text-slate-700 mb-2">Ask me anything!</p>
                      <p className="text-sm">Try asking about specific achievements, leadership approach, or technical expertise. Use the sample questions below to get started.</p>
                    </div>
                  </div>
                ) : (
                  <>
                    {chatMessages.map((msg, idx) => (
                      <div
                        key={idx}
                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[80%] p-4 rounded-2xl ${
                            msg.role === 'user'
                              ? 'bg-blue-600 text-white'
                              : 'bg-slate-100 text-slate-800'
                          }`}
                        >
                          <p className="text-base leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                        </div>
                      </div>
                    ))}
                  </>
                )}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-slate-100 p-4 rounded-2xl">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              {/* Chat Input */}
              <div className="p-4 bg-slate-50 border-t border-slate-200">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Ask about Amit's experience..."
                    className="flex-1 px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-500 text-sm"
                    disabled={isLoading}
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={isLoading || !userInput.trim()}
                    className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed font-medium transition-colors text-sm"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>

            {/* Executive Overview */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-3xl font-bold text-slate-900">Executive Overview</h2>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      const updatedSections = { ...expandedSections };
                      ['highlight-1', 'highlight-2', 'highlight-3', 'highlight-4'].forEach(key => {
                        updatedSections[key] = true;
                      });
                      setExpandedSections(updatedSections);
                    }}
                    className="text-sm px-4 py-2 text-blue-600 hover:bg-slate-50 rounded-lg transition-colors font-medium border-2 border-slate-700"
                  >
                    Expand All
                  </button>
                  <button
                    onClick={() => {
                      const updatedSections = { ...expandedSections };
                      ['highlight-1', 'highlight-2', 'highlight-3', 'highlight-4'].forEach(key => {
                        delete updatedSections[key];
                      });
                      setExpandedSections(updatedSections);
                    }}
                    className="text-sm px-4 py-2 text-blue-600 hover:bg-slate-50 rounded-lg transition-colors font-medium border-2 border-slate-700"
                  >
                    Collapse All
                  </button>
                </div>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Executive Product Strategist and Business Leader with a unique blend of entrepreneurial drive, strategic vision, and hands-on execution across both top public corporations and startup environments. Proven record of commercializing differentiated, data-driven offerings, strengthening competitive positioning and expanding multi-million-dollar market share across B2B and B2C. Integrates AI/ML/GenAI into customer-facing products and internal workflows to accelerate insight generation, personalization, and decision support while balancing innovation with reliability and performance.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Highlight 1 */}
                <div className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                  <button
                    onClick={() => toggleSection('highlight-1')}
                    className="w-full p-4 flex justify-between items-start text-left hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-900">Product Strategy & Portfolio Leadership</h3>
                    </div>
                    {expandedSections['highlight-1'] ? (
                      <ChevronUp className="text-slate-400 flex-shrink-0 ml-4" size={24} />
                    ) : (
                      <ChevronDown className="text-slate-400 flex-shrink-0 ml-4" size={24} />
                    )}
                  </button>
                  {expandedSections['highlight-1'] && (
                    <div className="px-4 pb-4 bg-slate-50">
                      <p className="text-slate-700 text-base leading-relaxed">
                        Owned end-to-end product strategy and portfolio prioritization across multiple domains (customer insights, assortment, promotions, supply chain, retail media), making tradeoffs that protected revenue and accelerated outcomes.
                      </p>
                    </div>
                  )}
                </div>

                {/* Highlight 2 */}
                <div className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                  <button
                    onClick={() => toggleSection('highlight-2')}
                    className="w-full p-4 flex justify-between items-start text-left hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-900">AI-Enabled SaaS Platforms & Data Monetization</h3>
                    </div>
                    {expandedSections['highlight-2'] ? (
                      <ChevronUp className="text-slate-400 flex-shrink-0 ml-4" size={24} />
                    ) : (
                      <ChevronDown className="text-slate-400 flex-shrink-0 ml-4" size={24} />
                    )}
                  </button>
                  {expandedSections['highlight-2'] && (
                    <div className="px-4 pb-4 bg-slate-50">
                      <p className="text-slate-700 text-base leading-relaxed">
                        Built and evolved data/AI-driven platform products for retailers and brands (such as insights generation, marketing personalization and what-if assortment scenarios) and integrated AI/ML/GenAI capabilities to accelerate insight generation and time-to-value.
                      </p>
                    </div>
                  )}
                </div>

                {/* Highlight 3 */}
                <div className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                  <button
                    onClick={() => toggleSection('highlight-3')}
                    className="w-full p-4 flex justify-between items-start text-left hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-900">Growth-Stage and Enterprise Product Leadership</h3>
                    </div>
                    {expandedSections['highlight-3'] ? (
                      <ChevronUp className="text-slate-400 flex-shrink-0 ml-4" size={24} />
                    ) : (
                      <ChevronDown className="text-slate-400 flex-shrink-0 ml-4" size={24} />
                    )}
                  </button>
                  {expandedSections['highlight-3'] && (
                    <div className="px-4 pb-4 bg-slate-50">
                      <p className="text-slate-700 text-base leading-relaxed">
                        Operated as first U.S. leader at a startup (ciValue) through acquisition and scale-up into NIQ Activate; partnered with AAA's internal innovation teams (A3 Labs and Gig Car Share) to support new product/service development and launch; advised startups as an independent product strategy consultant.
                      </p>
                    </div>
                  )}
                </div>

                {/* Highlight 4 */}
                <div className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                  <button
                    onClick={() => toggleSection('highlight-4')}
                    className="w-full p-4 flex justify-between items-start text-left hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-900">Executive Stakeholder Influence & Commercial Impact</h3>
                    </div>
                    {expandedSections['highlight-4'] ? (
                      <ChevronUp className="text-slate-400 flex-shrink-0 ml-4" size={24} />
                    ) : (
                      <ChevronDown className="text-slate-400 flex-shrink-0 ml-4" size={24} />
                    )}
                  </button>
                  {expandedSections['highlight-4'] && (
                    <div className="px-4 pb-4 bg-slate-50">
                      <p className="text-slate-700 text-base leading-relaxed">
                        Drove executive-level customer engagement and product positioning tied to eight-figure deals; retained/grew strategic accounts through differentiated value, integration, and roadmap alignment.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-slate-900">Experience</h2>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      const updatedSections = { ...expandedSections };
                      resumeData.experience.forEach((_, idx) => {
                        updatedSections[`exp-${idx}`] = true;
                      });
                      setExpandedSections(updatedSections);
                    }}
                    className="text-sm px-4 py-2 text-blue-600 hover:bg-slate-50 rounded-lg transition-colors font-medium border-2 border-slate-700"
                  >
                    Expand All
                  </button>
                  <button
                    onClick={() => {
                      const updatedSections = { ...expandedSections };
                      resumeData.experience.forEach((_, idx) => {
                        delete updatedSections[`exp-${idx}`];
                      });
                      setExpandedSections(updatedSections);
                    }}
                    className="text-sm px-4 py-2 text-blue-600 hover:bg-slate-50 rounded-lg transition-colors font-medium border-2 border-slate-700"
                  >
                    Collapse All
                  </button>
                </div>
              </div>
              
              <div className="space-y-4">
                {resumeData.experience.map((job, idx) => (
                  <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                    <button
                      onClick={() => toggleSection(`exp-${idx}`)}
                      className="w-full p-4 flex justify-between items-start text-left hover:bg-slate-50 transition-colors"
                    >
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-slate-900">{job.title}</h3>
                        <p className="text-slate-700 font-medium">{job.company}</p>
                        <div className="flex flex-wrap gap-3 mt-1 text-base text-slate-600">
                          <span>{job.period}</span>
                          <span>•</span>
                          <span>{job.location}</span>
                        </div>
                      </div>
                      {expandedSections[`exp-${idx}`] ? (
                        <ChevronUp className="text-slate-400 flex-shrink-0 ml-4" size={24} />
                      ) : (
                        <ChevronDown className="text-slate-400 flex-shrink-0 ml-4" size={24} />
                      )}
                    </button>
                    {expandedSections[`exp-${idx}`] && (
                      <div className="px-4 pb-4 bg-slate-50 space-y-3">
                        <p className="text-slate-700 text-base leading-relaxed">{job.summary}</p>
                        
                        <ul className="space-y-2">
                          {job.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex gap-2 text-base text-slate-700 items-start">
                              <span className="text-slate-700 font-bold mt-0.5 flex-shrink-0">•</span>
                              <span 
                                className="flex-1"
                                dangerouslySetInnerHTML={{ 
                                  __html: (bullet.text || bullet).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
                                }} 
                              />
                              {bullet.detailKey && (
                                <button
                                  onClick={() => setSelectedBullet(bullet.detailKey)}
                                  className="ml-2 text-blue-600 hover:text-blue-800 transition-colors flex-shrink-0 mt-0.5 whitespace-nowrap"
                                  title="Learn more"
                                >
                                  <span className="text-sm font-medium">Tell me more</span>
                                </button>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Skills & Expertise</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Professional Skills Box */}
                <div className="border-2 border-slate-300 rounded-xl p-6 bg-gradient-to-br from-slate-50 to-white">
                  <h3 className="text-lg font-bold text-slate-900 mb-4 pb-3 border-b-2 border-slate-700">Professional Skills</h3>
                  <ul className="space-y-2">
                    {skillsData.professionalSkills.map((skill, idx) => (
                      <li key={idx} className="text-base text-slate-700 flex items-start gap-2">
                        <span className="text-slate-700 font-bold mt-0.5 flex-shrink-0">•</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Proficiency and Tools Box */}
                <div className="border-2 border-slate-300 rounded-xl p-6 bg-gradient-to-br from-slate-50 to-white">
                  <h3 className="text-lg font-bold text-slate-900 mb-4 pb-3 border-b-2 border-slate-700">Technical Proficiency & Tools</h3>
                  <ul className="space-y-2">
                    {skillsData.technicalProficiency.map((skill, idx) => (
                      <li key={idx} className="text-base text-slate-700 flex items-start gap-2">
                        <span className="text-slate-700 font-bold mt-0.5 flex-shrink-0">•</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Education & Certifications */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Education</h3>
                <div className="space-y-3">
                  {resumeData.education.map((edu, idx) => (
                    <div key={idx} className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                      <p className="font-semibold text-slate-900 text-base">{edu.degree} - {edu.field}</p>
                      <p className="text-slate-600 text-base">{edu.school}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Certifications</h3>
                <div className="space-y-2">
                  {resumeData.certifications.map((cert, idx) => (
                    <div key={idx} className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-base text-slate-700">
                      {cert}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
      </main>

      {/* Detail Modal */}
      {selectedBullet && bulletDetails[selectedBullet] && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedBullet(null)}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-gradient-to-r from-slate-700 to-slate-800 p-4 rounded-t-2xl flex justify-between items-start">
              <h3 className="text-xl font-bold text-white pr-8">
                {bulletDetails[selectedBullet].title}
              </h3>
              <button
                onClick={() => setSelectedBullet(null)}
                className="text-white hover:text-slate-300 transition-colors flex-shrink-0"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-5 space-y-4">
              <div>
                <h4 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Situation
                </h4>
                <p className="text-slate-700 leading-relaxed pl-4 text-sm">
                  {bulletDetails[selectedBullet].situation}
                </p>
              </div>

              <div>
                <h4 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Task
                </h4>
                <p className="text-slate-700 leading-relaxed pl-4 text-sm">
                  {bulletDetails[selectedBullet].task}
                </p>
              </div>

              <div>
                <h4 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Action
                </h4>
                <p className="text-slate-700 leading-relaxed pl-4 text-sm">
                  {bulletDetails[selectedBullet].action}
                </p>
              </div>

              <div>
                <h4 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Result
                </h4>
                <p className="text-slate-700 leading-relaxed pl-4 text-sm">
                  {bulletDetails[selectedBullet].result}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200">
                <h4 className="text-sm font-bold text-slate-600 mb-1">KEY SKILLS DEMONSTRATED</h4>
                <p className="text-sm text-slate-600 italic">
                  {bulletDetails[selectedBullet].skills}
                </p>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={() => setSelectedBullet(null)}
                  className="px-5 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-md border-t border-slate-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-600 text-base">© 2026 Amit Borenshtain. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="mailto:amit.borenshtain@gmail.com" className="text-slate-600 hover:text-blue-600 transition-colors">
                <Mail size={20} />
              </a>
              <a href="https://linkedin.com/in/amitborenshtain" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-600 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}
