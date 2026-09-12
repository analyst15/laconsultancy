import { PracticeArea, CaseStudy, Partner, DiagnosticQuestion } from '../types';

export const PARTNERS: Partner[] = [
  {
    id: 'linda-aredo',
    name: 'Linda Aredo',
    role: 'Founder & CEO',
    practiceArea: 'Strategy, Governance & Executive Coaching',
    bio: 'Seasoned professional with over 12 years of experience partnering with Executives and Boards to drive strategy execution, strengthen governance frameworks, and deliver sustainable business performance across Kenya and Africa.',
    credentials: ['13 Years Executive Experience', 'Standard Chartered Bank Leadership Alumna'],
    priorExperience: ['Standard Chartered Bank Leadership Roles', 'Board & Executive Governance Advisory'],
    education: 'Master’s Degree, University of Kent (UK); Bachelor’s Degree, Strathmore University (Kenya)',
    email: 'linda.aredo@laconsultancy.com'
  },
  {
    id: 'elena-rostova',
    name: 'Elena Rostova',
    role: 'Senior Managing Partner',
    practiceArea: 'Corporate Growth & M&A Strategy',
    bio: 'Over 18 years advising Fortune 500 boards and fast-growing technology enterprises on multi-billion dollar market expansions, divestitures, and strategic repositioning.',
    credentials: ['Top 50 Women in Management Consulting', 'Board Member, SoCal Tech Alliance'],
    priorExperience: ['Former Engagement Partner, McKinsey & Company', 'VP Corporate Development, Techstars Network'],
    education: 'MBA, Stanford Graduate School of Business; B.S. Economics, UC Berkeley',
    email: 'elena.rostova@laconsultancy.com'
  },
  {
    id: 'marcus-vance',
    name: 'Marcus Vance',
    role: 'Partner, Head of Operations & Performance',
    practiceArea: 'Operational Turnaround & Margin Optimization',
    bio: 'Specialist in enterprise unit economics, supply chain resilience, and operational restructuring. Has steered 45+ turnarounds across media, manufacturing, and healthcare.',
    credentials: ['Certified Turnaround Professional (CTP)', 'Lean Six Sigma Master Black Belt'],
    priorExperience: ['Senior Director, Alvarez & Marsal', 'VP Operations, SpaceX Supplier Network'],
    education: 'M.S. Industrial Engineering, MIT; B.S. Mechanical Engineering, UCLA',
    email: 'marcus.vance@laconsultancy.com'
  },
  {
    id: 'sarah-chen',
    name: 'Dr. Sarah Chen',
    role: 'Partner, Digital Transformation & AI Strategy',
    practiceArea: 'Digital Modernization & Enterprise AI',
    bio: 'Advises C-level executives on turning legacy systems into modern competitive moats, generative AI integration, enterprise cloud governance, and technical talent architecture.',
    credentials: ['Former Advisor to California Innovation Council', 'Published Author on AI Governance'],
    priorExperience: ['Principal Technology Strategist, Boston Consulting Group (BCG)', 'Head of Data Platforms, Netflix'],
    education: 'Ph.D. Computer Science & Decision Systems, Caltech; B.S., USC',
    email: 'sarah.chen@laconsultancy.com'
  },
  {
    id: 'david-sterling',
    name: 'David Sterling',
    role: 'Partner, Capital Strategy & Commercial Due Diligence',
    practiceArea: 'Private Equity & Capital Advisory',
    bio: 'Guided over $4.2B in transaction volume across commercial due diligence, debt restructuring, and growth equity advisory for leading institutional funds.',
    credentials: ['Chartered Financial Analyst (CFA)', 'Member, Association for Corporate Growth (ACG Los Angeles)'],
    priorExperience: ['Managing Director, Goldman Sachs Merchant Banking', 'Engagement Director, Bain & Company'],
    education: 'MBA, Wharton School of Business; B.A. Finance, Columbia University',
    email: 'david.sterling@laconsultancy.com'
  }
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'management-consultancy',
    title: 'Management Consultancy',
    tagline: 'Strategy, operational optimization, governance frameworks, and regional cross-border coordination.',
    summary: 'Partnering with executives and boards to formulate high-impact corporate strategies, streamline operations, manage organizational change, and build rigorous risk and governance frameworks across Kenya and Africa.',
    iconName: 'TrendingUp',
    coreDeliverables: [
      'Strategy Development',
      'Operational Improvement',
      'Organizational Change Management',
      'Financial Modeling and Evaluation',
      'Risk and Compliance Consulting',
      'Cross country & Regional Coordination'
    ],
    engagementLength: '6 – 14 Weeks',
    idealFor: 'Enterprises, financial institutions, government bodies, and growing companies seeking structural growth and operational excellence.',
    leadPartnerId: 'linda-aredo',
    keyMetric: 'Evidence-Based Strategy & Regional Execution'
  },
  {
    id: 'executive-coaching',
    title: 'Executive Coaching',
    tagline: 'Career transitions, financial wellness, and specialized banking mentorship for high-impact leaders.',
    summary: 'Tailored, confidential one-on-one coaching and cohort mentorship empowering senior executives, mid-career professionals, and banking specialists to unlock potential and achieve sustainable career success.',
    iconName: 'UserCheck',
    coreDeliverables: [
      'Career Strategy & Transition Coaching',
      'Financial Wellness Coaching',
      'Mentorship for emerging professionals in Banking',
      'Tailored Financial Literacy'
    ],
    engagementLength: '3 – 6 Months',
    idealFor: 'Executives, corporate directors, emerging banking leaders, and professionals seeking career breakthroughs.',
    leadPartnerId: 'linda-aredo',
    keyMetric: 'Transformative Leadership & Financial Empowerment'
  },
  {
    id: 'leadership-development',
    title: 'Leadership Development',
    tagline: 'Cultivating resilient, inclusive teams, future-ready succession pipelines, and managerial capacity.',
    summary: 'Structured organizational capability programs designed to equip new and mid-level leaders, build inclusive and resilient high-performing teams, and anchor leadership culture during organizational transformation.',
    iconName: 'Award',
    coreDeliverables: [
      'Executive Coaching for New and Mid-level Leaders and high potential talent',
      'Leadership development programmes to build resilient, Inclusive and high performing teams',
      'Succession Planning and mentorship frameworks to grow future leaders',
      'Training enablement programs to strengthen managerial capability',
      'Advisory on leadership culture in organizational transformation'
    ],
    engagementLength: '4 – 16 Weeks',
    idealFor: 'Organizations seeking to strengthen talent pipelines, cultivate high-performing cultures, and empower manager cohorts.',
    leadPartnerId: 'linda-aredo',
    keyMetric: 'Resilient, Inclusive & High-Performing Teams'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'pacific-entertainment',
    clientName: 'Pacific Content Group',
    industry: 'Media & Entertainment',
    location: 'Burbank & Culver City, CA',
    headline: 'Streaming & IP Monetization Restructuring for Global Production Studio',
    challenge: 'A legacy media studio was experiencing severe licensing margin contraction as traditional cable syndication declined, coupled with fragmented international digital distribution channels.',
    solution: 'LA Consultancy conducted an end-to-end audit of 2,400+ intellectual property assets, re-engineered direct-to-platform licensing agreements, and implemented an automated digital rights clearinghouse.',
    metrics: [
      { value: '+$48M', label: 'Incremental Net Licensing Cashflow' },
      { value: '29%', label: 'SG&A Overhead Reduction' },
      { value: '14 Mo', label: 'Payback Period on Advisory Investment' }
    ],
    duration: '10-Week Sprint',
    testimonial: {
      quote: 'LA Consultancy delivered an unsparing, data-backed assessment that reshaped our studio’s global distribution strategy. Their Century City partners worked side-by-side with our board.',
      author: 'Julian Sterling',
      role: 'Chief Strategy Officer, Pacific Content Group'
    }
  },
  {
    id: 'vanguard-aerospace',
    clientName: 'AeroPulse Systems',
    industry: 'Aerospace & Advanced Manufacturing',
    location: 'El Segundo, CA',
    headline: 'Supply Chain Bottleneck Resolution & Series C Valuation Optimization',
    challenge: 'Rapid defense contract awards triggered severe Tier-2 component shortages, causing a 9-month delivery backlog that threatened an upcoming $90M Series C institutional financing round.',
    solution: 'Engineered a dual-source domestic supplier network, instituted a predictive inventory buffer system, and restructured assembly floor sequencing to compress cycle times.',
    metrics: [
      { value: '-42%', label: 'Manufacturing Cycle Time Reduction' },
      { value: '99.4%', label: 'On-Time Delivery Rate' },
      { value: '$95M', label: 'Series C Closed at Upper Valuation Range' }
    ],
    duration: '12-Week Sprint',
    testimonial: {
      quote: 'Marcus Vance and his operations team did not just give us slide decks—they were on our cleanroom floors identifying structural delays that saved our contract standing.',
      author: 'Dr. Cynthia Rodriguez',
      role: 'Founder & CEO, AeroPulse Systems'
    }
  },
  {
    id: 'nexus-health',
    clientName: 'WestHealth Regional Network',
    industry: 'Healthcare & Life Sciences',
    location: 'Pasadena & Los Angeles, CA',
    headline: 'Ambulatory Care Network Restructuring & Patient Intake Digitalization',
    challenge: 'Disjointed clinics and legacy scheduling resulted in a 24% patient no-show rate, physician administrative burnout, and sluggish revenue cycle collection periods exceeding 64 days.',
    solution: 'Modernized intake workflows through centralized digital triage, renegotiated third-party payer billing schedules, and reallocated specialist provider staffing to high-demand submarkets.',
    metrics: [
      { value: '21 Days', label: 'Reduction in Billing Accounts Receivable' },
      { value: '18.5%', label: 'Operating Margin Improvement' },
      { value: '94%', label: 'Physician Retention Post-Restructure' }
    ],
    duration: '14-Week Transformation',
    testimonial: {
      quote: 'The clarity and sensitivity with which LA Consultancy navigated our clinical leadership was extraordinary. They delivered the margin expansion we promised our board.',
      author: 'Arthur Vance, MD',
      role: 'Executive Medical Director, WestHealth'
    }
  },
  {
    id: 'crestview-fintech',
    clientName: 'Solana Bay Commerce',
    industry: 'Technology & SaaS',
    location: 'Santa Monica, CA',
    headline: 'Commercial Due Diligence & Strategic Acquisition Integration',
    challenge: 'A prominent private equity firm needed urgent 21-day commercial diligence on a $140M cross-border B2B payments platform with questionable organic churn metrics.',
    solution: 'Analyzed 1.8M transaction cohorts, revealed masked customer concentration in high-risk foreign markets, and re-structured the valuation earnout structure to protect downside capital.',
    metrics: [
      { value: '$18M', label: 'Purchase Price Adjustment Captured' },
      { value: '100%', label: 'Key Executive Retention Secured' },
      { value: '21 Days', label: 'Expedited Diligence Completion' }
    ],
    duration: '3-Week Rapid Diligence',
    testimonial: {
      quote: 'Their diligence report was the most rigorous, BS-free evaluation we have received in 15 years of West Coast buyouts. They uncovered risks that others missed entirely.',
      author: 'Jonathan Haas',
      role: 'Managing Director, Pacific Ridge Capital'
    }
  }
];

export const DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = [
  {
    id: 1,
    category: 'Commercial Traction & Revenue Model',
    question: 'How predictable and diversified is your primary revenue generation?',
    context: 'Assesses market concentration vulnerability and growth stability.',
    options: [
      {
        text: 'Heavily reliant on 1-3 anchor clients or volatile ad-hoc project contracts (<$5M ARR).',
        points: 10,
        insight: 'Critical revenue concentration risk; urgent need for customer diversification and recurring contract structuring.'
      },
      {
        text: 'Consistent revenue with recurring baseline, but customer acquisition costs (CAC) are rising sharply.',
        points: 20,
        insight: 'Unit economic friction; sales channels require positioning refinement and pricing architecture revision.'
      },
      {
        text: 'Multi-channel revenue across diversified enterprise accounts with healthy expansion revenue (110%+ NRR).',
        points: 25,
        insight: 'Robust organic momentum; optimal time to consider new geographic entry or strategic M&A.'
      }
    ]
  },
  {
    id: 2,
    category: 'Operational Margins & Cost Velocity',
    question: 'How do your operating margins and gross margins compare to top-quartile industry benchmarks?',
    context: 'Reveals whether revenue growth is genuinely translating into free cash flow.',
    options: [
      {
        text: 'Margins are deteriorating as headcount grows; high operational overhead and manual friction.',
        points: 10,
        insight: 'Severe scaling bottleneck; business process automation and zero-based budgeting needed immediately.'
      },
      {
        text: 'Stable margins, but significant capital is trapped in operational delays, inventory, or contractor churn.',
        points: 18,
        insight: 'Operational drag; 15-20% margin optimization potential through workflow consolidation.'
      },
      {
        text: 'Industry-leading gross margins (>65%) and clean operational leverage with automated visibility.',
        points: 25,
        insight: 'Exceptional operational hygiene; ready to scale leverage and capital investment.'
      }
    ]
  },
  {
    id: 3,
    category: 'Technology & Enterprise Intelligence',
    question: 'To what degree are your core operations augmented by modern data systems and automated intelligence?',
    context: 'Evaluates competitive differentiation and risk of obsolescence.',
    options: [
      {
        text: 'Siloed spreadsheets, legacy software, and fragmented systems requiring manual data re-entry.',
        points: 8,
        insight: 'High technical debt; critical bottleneck for board reporting, audit compliance, and team efficiency.'
      },
      {
        text: 'Modern SaaS tools deployed, but minimal cross-system orchestration or proprietary data utilization.',
        points: 18,
        insight: 'Data exists but is underleveraged; opportunities to automate customer workflows and operational reporting.'
      },
      {
        text: 'Integrated data pipeline with real-time predictive analytics, automated workflows, and enterprise AI safeguards.',
        points: 25,
        insight: 'Strong digital moat; focus on safeguarding proprietary data and scaling institutional knowledge.'
      }
    ]
  },
  {
    id: 4,
    category: 'Governance, Capital & Strategic Trajectory',
    question: 'What is your executive leadership’s stance on upcoming capital events (M&A, Exit, Financing, or Restructuring)?',
    context: 'Determines transactional readiness and alignment of executive leadership.',
    options: [
      {
        text: 'No formal 3-year strategic roadmap; leadership operates in reactive firefighting mode.',
        points: 10,
        insight: 'Lack of strategic North Star; requires urgent executive alignment and 100-day priority framework.'
      },
      {
        text: 'Clear operational targets, but due diligence materials and valuation models are outdated or unverified.',
        points: 19,
        insight: 'Vulnerable to value-shaving during buyer diligence; pre-deal audit recommended.'
      },
      {
        text: 'Fully audited financials, documented governance structure, and institutional data room prepared.',
        points: 25,
        insight: 'Prime position for maximum valuation multiples and strategic partnership negotiations.'
      }
    ]
  }
];

export const ENGAGEMENT_MODELS = [
  {
    id: 'strategy-sprint',
    name: '8-Week Strategic Sprint',
    description: 'High-velocity diagnosis, market analysis, and actionable implementation roadmap led by a Dedicated Partner.',
    baseFee: '$45,000 – $65,000',
    duration: '8 Weeks',
    commitment: '1 Partner (25% time) + 2 Engagement Managers',
    deliverables: [
      'Comprehensive Diagnostic & Market Landscape Audit',
      'Revenue Engine & Go-To-Market Blueprint',
      'Board-Ready Executive Synthesis Presentation',
      'Detailed 180-Day Tactical Execution Playbook'
    ]
  },
  {
    id: 'transformation-roadmap',
    name: 'Comprehensive Transformation Program',
    description: 'Deep operational overhaul, margin optimization, and digital modernizing with embedded consultants.',
    baseFee: '$110,000 – $180,000',
    duration: '14 – 20 Weeks',
    commitment: 'Lead Partner (50% time) + 3 Senior Advisory Specialists',
    deliverables: [
      'Zero-Based Operational Expense Overhaul',
      'Supply Chain & Organizational Restructuring',
      'Custom Enterprise AI & Automation Rollout',
      'Weekly Governance Steering Committee & KPI Dashboards'
    ]
  },
  {
    id: 'ma-diligence',
    name: 'Rapid Commercial Due Diligence',
    description: 'Bespoke pre-acquisition or pre-sale audit for private equity funds, family offices, and boardrooms.',
    baseFee: '$55,000 – $90,000',
    duration: '3 – 5 Weeks',
    commitment: 'Senior M&A Partner + Quantitative Diligence Team',
    deliverables: [
      'Customer Cohort Quality & Churn Decomposition',
      'Defensible Quality of Earnings (QofE) Support',
      'Key Risk & Anti-Synergy Red Flag Register',
      'Post-Close 100-Day Value Creation Roadmap'
    ]
  },
  {
    id: 'executive-retainer',
    name: 'Board & Strategic Advisory Retainer',
    description: 'Ongoing strategic counsel, board participation, and quarterly strategic reviews for CEOs and founders.',
    baseFee: '$12,500 / month',
    duration: 'Annual / Minimum 6 Months',
    commitment: 'Senior Managing Partner Direct Access',
    deliverables: [
      'Bi-Weekly Executive Strategy & Sounding Sessions',
      'Quarterly Board Meeting Participation & Prep',
      'On-Demand M&A Opportunity Screening',
      'Priority Access to Global LA Consultancy Network'
    ]
  }
];

export const OFFICE_LOCATIONS = [
  {
    name: 'Century City Flagship',
    address: '1999 Avenue of the Stars, Suite 2800',
    city: 'Los Angeles, CA 90067',
    phone: '+1 (310) 844-3200',
    hours: 'Mon – Fri, 7:30 AM – 6:30 PM PST'
  },
  {
    name: 'Downtown Los Angeles (DTLA)',
    address: '777 South Figueroa Street, 41st Floor',
    city: 'Los Angeles, CA 90017',
    phone: '+1 (213) 980-5500',
    hours: 'Mon – Fri, 8:00 AM – 6:00 PM PST'
  },
  {
    name: 'Silicon Beach Hub',
    address: '13160 Mindanao Way, Suite 400',
    city: 'Marina del Rey, CA 90292',
    phone: '+1 (424) 222-7800',
    hours: 'Mon – Fri, 8:30 AM – 5:30 PM PST'
  }
];
