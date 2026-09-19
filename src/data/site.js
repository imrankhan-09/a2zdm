import {
  Sparkles,
  Search,
  BarChart3,
  TrendingUp,
  Database,
  MousePointerClick,
  Target,
  Users,
  Lightbulb,
  Award,
  Gauge,
  Link2,
  Globe,
  ShoppingCart,
  MapPin,
  Wrench,
  Scale,
  UtensilsCrossed,
  Store,
  Coffee,
  Gem,
  Baby,
  LineChart,
  Tags,
  Cookie,
  ShieldCheck,
  BrainCircuit,
  Presentation,
  Code2,
  Wallet,
  Megaphone,
} from "lucide-react";

/**
 * Single source of truth for site-wide content.
 * Services, blog posts, case studies, team and values are defined once
 * and reused by the header dropdown, pages and cards.
 */

// Core Service Pillars (used in Header navigation, Footer, and Quick Selectors)
export const SERVICES = [
  {
    slug: "answer-engine-optimization",
    aliases: ["aeo"],
    name: "Answer Engine Optimization",
    short: "Get cited by AI answers and voice assistants.",
    description:
      "Structure your content so AI overviews, chatbots and voice assistants pick your brand as the trusted answer.",
    Icon: Sparkles,
  },
  {
    slug: "search-engine-optimization",
    aliases: ["seo"],
    name: "Search Engine Optimization",
    short: "Rank higher and earn qualified organic traffic.",
    description:
      "Technical fixes, content and authority building that move your most valuable keywords up the rankings.",
    Icon: Search,
  },
  {
    slug: "digital-analytics",
    aliases: ["analytics"],
    name: "Digital Analytics",
    short: "Know exactly what is working and why.",
    description:
      "GA4, Tag Manager and dashboard setups that turn raw clicks into clear, decision-ready insight.",
    Icon: BarChart3,
  },
  {
    slug: "predictive-analytics",
    aliases: ["predictive"],
    name: "Predictive Analytics",
    short: "Forecast demand and act before competitors.",
    description:
      "Trend modelling and lead scoring that help you invest where future returns are highest.",
    Icon: TrendingUp,
  },
  {
    slug: "business-intelligence",
    aliases: ["bi"],
    name: "Business Intelligence",
    short: "One view of marketing, sales and revenue.",
    description:
      "Warehouse and BI reporting that connects marketing activity to pipeline and revenue.",
    Icon: Database,
  },
  {
    slug: "pay-per-click-management",
    aliases: ["ppc", "pay-per-click"],
    name: "Pay Per Click Management",
    short: "Paid campaigns managed for measurable ROAS.",
    description:
      "Google and social ad campaigns built around tight targeting, testing and transparent reporting.",
    Icon: MousePointerClick,
  },
];

/**
 * Complete registry of ALL 31 authentic services offered by A2ZDM.
 * Every service detail page at /services/:slug resolves against this collection.
 */
export const ALL_SERVICES = [
  // ----------------------- ANSWER ENGINE OPTIMIZATION -----------------------
  {
    slug: "answer-engine-optimization",
    aliases: ["aeo"],
    name: "Answer Engine Optimization",
    category: "Answer Engine Optimization",
    short: "Get cited by AI answers and voice assistants.",
    description:
      "Go beyond just ranking—get directly cited inside AI chats, conversational models, and modern AI Overviews.",
    Icon: Sparkles,
    visualType: "aeo",
    image: "https://a2zdm.com/search.jpg",
    challenge:
      "Traditional search is undergoing a historic shift toward conversational AI engines like ChatGPT, Perplexity, and Google AI Overviews. If your brand facts and entity relationships are not structured for AI retrieval, your business risks losing conversational market share and authority.",
    includes: [
      "Get cited directly in AI chat answers",
      "Protect your website from AI-driven traffic loss",
      "Build brand authority for the AI era",
      "Capture high-intent conversational search traffic",
    ],
    methodology: [
      { step: "01", title: "Entity & Knowledge Graph Audit", desc: "Map your digital entity footprint across knowledge graphs, Wikidata, and authority databases." },
      { step: "02", title: "Content Restructuring", desc: "Format questions, definitions, and data tables to match LLM citation ingestion patterns." },
      { step: "03", title: "Citation Engineering", desc: "Deploy deep JSON-LD schema, semantic entities, and authoritative co-occurrence signals." },
      { step: "04", title: "Multi-Engine Monitoring", desc: "Track share-of-voice and citation frequency across Perplexity, ChatGPT, and Google Overviews." },
    ],
    deliverables: [
      "Brand Entity Schema Architecture",
      "Conversational Q&A Content Corpus",
      "AI Knowledge Graph Sync Report",
      "Monthly LLM Share-of-Voice Audit",
    ],
  },

  // ----------------------- SEARCH ENGINE OPTIMIZATION -----------------------
  {
    slug: "search-engine-optimization",
    aliases: ["seo"],
    name: "Search Engine Optimization",
    category: "Search Engine Optimization",
    short: "Rank higher and earn qualified organic traffic.",
    description:
      "Comprehensive search engine optimization strategies that combine technical hygiene, search intent alignment, and high-impact authority building.",
    Icon: Search,
    visualType: "seo",
    image: "https://a2zdm.com/techseo.jpg",
    challenge:
      "Algorithmic updates, rising search competition, and fragmented keyword intent make it difficult for businesses to build predictable organic pipelines without a disciplined, data-first SEO framework.",
    includes: [
      "Increase qualified organic website traffic",
      "Improve keyword visibility across target markets",
      "Build sustainable long-term domain authority",
      "Maximize conversion rates from organic searchers",
    ],
    methodology: [
      { step: "01", title: "Comprehensive SEO Audit", desc: "Examine technical architecture, indexation health, and content relevancy." },
      { step: "02", title: "High-Intent Keyword Mapping", desc: "Identify commercial queries that directly drive buyer inquiries and revenue." },
      { step: "03", title: "On-Page & Entity Optimization", desc: "Fine-tune internal architecture, metadata, schema markup, and content depth." },
      { step: "04", title: "Authority Building & Analysis", desc: "Earn contextual backlinks and track keyword velocity with transparent reporting." },
    ],
    deliverables: [
      "Comprehensive Technical & Content Audit",
      "Strategic Keyword Matrix & Content Calendar",
      "On-Page Optimization Blueprint",
      "Monthly Organic Ranking & ROI Reports",
    ],
  },
  {
    slug: "technical-seo",
    aliases: ["tech-seo"],
    name: "Technical SEO",
    category: "Search Engine Optimization",
    short: "Optimize your website foundation for crawlability and speed.",
    description:
      "Optimize your website's technical foundation to ensure seamless crawling, rapid indexing, and exceptional Core Web Vitals.",
    Icon: Gauge,
    visualType: "seo",
    image: "https://a2zdm.com/techseo.jpg",
    challenge:
      "Javascript rendering delays, complex redirection chains, slow server response times, and poor mobile performance silently destroy search rankings before your content even gets evaluated.",
    includes: [
      "Improved search engine rankings through clean indexation",
      "Better user experience and lower bounce rates",
      "Faster page load times passing Core Web Vitals",
      "Enhanced mobile crawling and responsive rendering",
    ],
    methodology: [
      { step: "01", title: "Server Log & Crawl Diagnostic", desc: "Identify crawl budget waste, 4xx/5xx errors, and redirect loops." },
      { step: "02", title: "Core Web Vitals Remediation", desc: "Optimize LCP, INP, and CLS metrics across desktop and mobile devices." },
      { step: "03", title: "Architecture & Hierarchy", desc: "Flatten click depth, streamline XML sitemaps, and optimize robots directives." },
      { step: "04", title: "Structured Data Implementation", desc: "Deploy semantic schema to unlock rich snippets and search features." },
    ],
    deliverables: [
      "Full Technical Health Scorecard",
      "Core Web Vitals Optimization Plan",
      "XML Sitemap & Robots.txt Architecture",
      "Schema.org Validation & Markup",
    ],
  },
  {
    slug: "link-earning",
    aliases: ["link-building"],
    name: "Link-Earning",
    category: "Search Engine Optimization",
    short: "Boost authority with high-quality, ethical backlinks.",
    description:
      "Boost your domain authority with high-quality backlinks earned through ethical, data-backed research and strategic industry outreach.",
    Icon: Link2,
    visualType: "seo",
    challenge:
      "Low-quality automated link schemes incur severe Google penalties, while acquiring legitimate, authoritative editorial links requires valuable content assets and dedicated outreach.",
    includes: [
      "Increased domain authority and trust signals",
      "Higher rankings for competitive commercial keywords",
      "Sustainable referral traffic from relevant publications",
      "Enhanced industry credibility and brand visibility",
    ],
    methodology: [
      { step: "01", title: "Competitor Backlink Analysis", desc: "Uncover backlink gaps and high-authority referring domain opportunities." },
      { step: "02", title: "Linkable Asset Development", desc: "Produce proprietary data studies, guides, and visual infographics journalists cite." },
      { step: "03", title: "Personalized Outreach", desc: "Connect with relevant editors, industry reporters, and authoritative niche publications." },
      { step: "04", title: "Profile Quality Monitoring", desc: "Regularly audit link velocity, toxicity scores, and anchor text distribution." },
    ],
    deliverables: [
      "Backlink Gap Analysis Report",
      "Quarterly Linkable Content Assets",
      "Monthly Editorial Placement Reports",
      "Disavow & Toxic Link Health Reviews",
    ],
  },
  {
    slug: "pr-industry-seo",
    aliases: ["public-relations", "pr-seo"],
    name: "Public Relations",
    category: "Search Engine Optimization",
    short: "Strategically influence your brand perception through PR.",
    description:
      "Strategically influence your brand perception, gain editorial media mentions, and build organic authority through targeted digital public relations.",
    Icon: Globe,
    visualType: "seo",
    image: "https://a2zdm.com/pr.jpg",
    challenge:
      "Securing genuine media coverage requires newsworthy narratives, strong press relationships, and a coherent distribution strategy aligned with brand positioning.",
    includes: [
      "Authentic editorial backlinks from news outlets",
      "Enhanced brand credibility and third-party validation",
      "Stronger organic search rankings through brand mentions",
      "Enriched industry visibility and stakeholder trust",
    ],
    methodology: [
      { step: "01", title: "Story Ideation & Angle Mining", desc: "Extract unique industry insights and corporate milestones for press pitches." },
      { step: "02", title: "Media Roster Curation", desc: "Build targeted media lists of trade publications, journalists, and podcasts." },
      { step: "03", title: "Press Release & Pitch Distribution", desc: "Execute targeted media outreach with compelling news hooks and embargoes." },
      { step: "04", title: "Entity & Coverage Tracking", desc: "Monitor brand mentions, referral traffic, and search authority lift." },
    ],
    deliverables: [
      "Press Kit & Media Pitch Decks",
      "Targeted Media Distribution Campaigns",
      "Published Press Clippings & Coverage Reports",
      "Digital PR Impact & Authority Metrics",
    ],
  },
  {
    slug: "ecommerce-seo",
    aliases: ["e-commerce-seo"],
    name: "Ecommerce SEO",
    category: "Search Engine Optimization",
    short: "Drive organic shoppers to product and category pages.",
    description:
      "Enhance product discoverability and drive revenue across your category and product pages with tailored e-commerce search strategies.",
    Icon: ShoppingCart,
    visualType: "seo",
    challenge:
      "Large product catalogs frequently suffer from duplicate descriptions, thin category pages, faceted navigation indexing traps, and high cart abandonment.",
    includes: [
      "Higher rankings for high-intent product and category queries",
      "Substantial increase in qualified shopping traffic",
      "Improved conversion rates through optimized on-page experience",
      "Enhanced Google Merchant Center and shopping feed visibility",
    ],
    methodology: [
      { step: "01", title: "Catalog & Facet Audit", desc: "Resolve canonicalization issues, filter parameter crawl bloat, and broken SKUs." },
      { step: "02", title: "Category Silo Optimization", desc: "Structure parent-child category hierarchies with optimized copy and internal links." },
      { step: "03", title: "Product Schema & Rich Snippets", desc: "Deploy Product, Review, and In-Stock JSON-LD to win search result features." },
      { step: "04", title: "Shopping Feed Alignment", desc: "Sync Google Merchant Center product attributes with organic landing pages." },
    ],
    deliverables: [
      "Catalog Structure & Facet Strategy",
      "Product Schema Markup Implementation",
      "Category Page Content Templates",
      "E-Commerce Organic Revenue Dashboard",
    ],
  },
  {
    slug: "local-seo",
    aliases: ["local-search"],
    name: "Local SEO",
    category: "Search Engine Optimization",
    short: "Capture local foot traffic and customer phone calls.",
    description:
      "Capture more high-intent local buyers, foot traffic, and phone inquiries with precision Google Business Profile and local citation optimization.",
    Icon: MapPin,
    visualType: "seo",
    challenge:
      "Local buyers search with high urgency. Businesses with inconsistent address citations, unoptimized Google Business Profiles, or sparse reviews miss out on local 3-pack visibility.",
    includes: [
      "Higher Google Local 3-Pack and Maps rankings",
      "More driving directions, website clicks, and phone calls",
      "Clean and consistent NAP (Name, Address, Phone) citations",
      "Enhanced online reputation through proactive review strategy",
    ],
    methodology: [
      { step: "01", title: "Google Business Profile Audit", desc: "Complete every profile attribute, category, service area, and visual asset." },
      { step: "02", title: "Citation Cleanup & Synchronization", desc: "Audit and correct local directories (Yelp, Apple Maps, YellowPages, etc.)." },
      { step: "03", title: "Localized Landing Pages", desc: "Build geo-targeted landing pages with localized content, maps, and reviews." },
      { step: "04", title: "Local Authority & Reviews", desc: "Earn local sponsorships, chamber backlinks, and automated review acquisition." },
    ],
    deliverables: [
      "Optimized Google Business Profile",
      "Local Citation Audit & Fix Report",
      "Geo-Targeted Service Page Templates",
      "Local Rank Grid & Geo-Tracking Reports",
    ],
  },
  {
    slug: "home-services-seo",
    aliases: ["home-service-seo"],
    name: "Home Service SEO",
    category: "Search Engine Optimization",
    short: "Beat market competition with proven home service strategies.",
    description:
      "Specialized SEO solutions designed for contractors, plumbers, HVAC, and electricians to generate consistent, qualified local service calls.",
    Icon: Wrench,
    visualType: "seo",
    challenge:
      "High cost-per-click advertising makes paid ads expensive for home contractors, making dominant local organic rankings critical for high margins.",
    includes: [
      "Genuine residential and commercial project leads",
      "Prominent local brand visibility in key service territories",
      "Long-term sustainable online customer acquisition",
      "High return on marketing investment",
    ],
    methodology: [
      { step: "01", title: "Service Territory Mapping", desc: "Define priority zip codes and high-margin services to target." },
      { step: "02", title: "Emergency & Commercial Landing Pages", desc: "Design mobile-first pages with click-to-call buttons and trust badges." },
      { step: "03", title: "Review Velocity Acceleration", desc: "Automate SMS review requests following completed service jobs." },
      { step: "04", title: "Call Tracking & Attribution", desc: "Track every phone call and form fill back to specific organic keywords." },
    ],
    deliverables: [
      "Local Service Area Architecture",
      "Click-to-Call Conversion Optimization",
      "Google Local Services & Map Optimization",
      "Monthly Lead & Call Volume Analytics",
    ],
  },
  {
    slug: "cosmetics-seo",
    aliases: ["beauty-seo"],
    name: "Cosmetics",
    category: "Search Engine Optimization",
    short: "Optimize your cosmetic website and expand your digital presence.",
    description:
      "Tailored search engine optimization for cosmetics and beauty brands seeking higher visibility, ingredient search dominance, and e-commerce conversions.",
    Icon: Sparkles,
    visualType: "seo",
    challenge:
      "Beauty consumers research ingredients, skin concerns, and application techniques before purchasing, requiring rich informational content and visual search optimization.",
    includes: [
      "Improved online visibility across beauty and skincare queries",
      "Higher conversion rates through ingredient transparency",
      "Sustained organic traffic growth across product lines",
      "Enhanced brand trust and customer loyalty",
    ],
    methodology: [
      { step: "01", title: "Ingredient & Routine Keyword Research", desc: "Map search queries around active ingredients, routines, and skin types." },
      { step: "02", title: "Visual & Video SEO", desc: "Optimize swatch photos, tutorial videos, and before/after imagery for Google Images." },
      { step: "03", title: "Dermatological Authority Building", desc: "Incorporate expert reviews and scientific citations to satisfy E-E-A-T standards." },
      { step: "04", title: "E-Commerce Funnel Tuning", desc: "Optimize subscription options, bundle recommendations, and checkout speed." },
    ],
    deliverables: [
      "Cosmetics Keyword Matrix & Taxonomy",
      "Ingredient Glossary & Skincare Guide Framework",
      "Visual Search Schema Implementation",
      "Monthly Beauty E-Commerce Revenue Reports",
    ],
  },
  {
    slug: "lawyers-seo",
    aliases: ["legal-seo", "lawyer-seo"],
    name: "Lawyer SEO",
    category: "Search Engine Optimization",
    short: "Gain prospective clients by investing in Lawyer SEO.",
    description:
      "High-authority search engine optimization for law firms, personal injury attorneys, and legal practices seeking high-value case inquiries.",
    Icon: Scale,
    visualType: "seo",
    challenge:
      "Legal queries are among the most competitive in search and are strictly judged under Google's YMYL (Your Money or Your Life) quality guidelines.",
    includes: [
      "Generate qualified organic case inquiries",
      "Build undisputed local and practice-area legal authority",
      "Gain a competitive edge over regional law firms",
      "Deliver higher long-term ROI than high-CPC legal ad auctions",
    ],
    methodology: [
      { step: "01", title: "Practice Area Silo Architecture", desc: "Build dedicated, deep landing pages for every legal specialty." },
      { step: "02", title: "YMYL & E-E-A-T Compliance", desc: "Highlight attorney credentials, bar admissions, published articles, and case verdicts." },
      { step: "03", title: "Local Legal Pack Domination", desc: "Optimize Google Business Profiles across multiple office locations." },
      { step: "04", title: "High-Intent Case Lead Capture", desc: "Optimize contact forms, confidential chat widgets, and 24/7 call intake." },
    ],
    deliverables: [
      "Legal Practice Area Architecture Plan",
      "Attorney Bio & E-E-A-T Enhancement Guidelines",
      "Legal Directory & Bar Citation Synchronization",
      "Case Lead Attribution & Intake Reporting",
    ],
  },
  {
    slug: "restaurants-seo",
    aliases: ["restaurant-seo"],
    name: "Restaurants SEO",
    category: "Search Engine Optimization",
    short: "Make your eatery the go-to choice with local and visual SEO.",
    description:
      "Make your restaurant or cafe the top choice for hungry local patrons with menu schema, Google Maps elevation, and visual optimization.",
    Icon: UtensilsCrossed,
    visualType: "seo",
    challenge:
      "Diners make split-second dining decisions on mobile maps. Restaurants without structured digital menus, fresh photos, and review prominence lose out to delivery aggregators.",
    includes: [
      "More direct online orders with zero aggregator commissions",
      "Higher visibility in Google Local 3-Pack and Maps searches",
      "Increased table reservations and foot traffic",
      "Better online reputation and review ratings",
    ],
    methodology: [
      { step: "01", title: "Menu Schema Integration", desc: "Implement JSON-LD Menu schema with prices, dietary tags, and photos." },
      { step: "02", title: "Google Maps & Local Profile Polish", desc: "Keep business hours, holiday schedules, reservation links, and menus up to date." },
      { step: "03", title: "Foodie & Local Citation Sync", desc: "Ensure consistent listing across Yelp, TripAdvisor, OpenTable, and local food blogs." },
      { step: "04", title: "Review Generation & Response", desc: "Establish workflows for gathering glowing 5-star reviews on Google." },
    ],
    deliverables: [
      "Structured Digital Menu Schema",
      "Google Business Profile Dine-In & Takeout Setup",
      "Reservation & Order Action Integration",
      "Local Dining Visibility & Footfall Analytics",
    ],
  },
  {
    slug: "retail-seo",
    name: "Retail SEO",
    category: "Search Engine Optimization",
    short: "Level up your online retail store's presence with proven SEO.",
    description:
      "Drive sustainable sales growth and brand visibility for retail stores competing in dynamic omnichannel markets.",
    Icon: Store,
    visualType: "seo",
    challenge:
      "Retailers must navigate fast-changing inventory cycles, seasonal demand swings, and fierce competition from giant retail marketplaces.",
    includes: [
      "Maximum sales volume and profitability across product lines",
      "Enhanced brand awareness in key regional consumer markets",
      "Sustainable competitive advantage over rival retailers",
      "Long-term customer retention and organic growth",
    ],
    methodology: [
      { step: "01", title: "Seasonal Demand Planning", desc: "Anticipate seasonal shopping surges months ahead with early indexation." },
      { step: "02", title: "Department & Brand Architecture", desc: "Optimize multi-brand taxonomy and clean URL routing." },
      { step: "03", title: "Omnichannel Store Locator", desc: "Connect online searchers to physical store inventories and nearby branches." },
      { step: "04", title: "Conversion Rate Optimization", desc: "Streamline product detail pages with customer reviews and clear checkout flows." },
    ],
    deliverables: [
      "Seasonal Retail Campaign Framework",
      "Brand & Department SEO Strategy",
      "Store Locator & Inventory Schema",
      "Omnichannel Revenue Attribution Reports",
    ],
  },
  {
    slug: "food-beverages-seo",
    aliases: ["food-beverage-seo"],
    name: "Food & Beverages SEO",
    category: "Search Engine Optimization",
    short: "Transform your food business with effective SEO strategies.",
    description:
      "Strategic SEO solutions tailored to specialty food brands, beverage makers, and packaged goods navigating D2C and wholesale distribution.",
    Icon: Coffee,
    visualType: "seo",
    challenge:
      "CPG food and beverage brands must simultaneously capture consumer craving queries while demonstrating wholesale capability to grocery buyers.",
    includes: [
      "Broadened brand awareness across consumer and wholesale segments",
      "Competitive edge over legacy packaged food brands",
      "Enhanced visibility across recipe, nutritional, and lifestyle searches",
      "Deep brand trust and authenticity through structured certifications",
    ],
    methodology: [
      { step: "01", title: "Consumer & Wholesale Segmentation", desc: "Structure content to serve both direct buyers and distribution inquiries." },
      { step: "02", title: "Recipe & Nutrition Schema", desc: "Incorporate rich recipe markup with prep times, calorie counts, and dietary tags." },
      { step: "03", title: "Retail Locator Integration", desc: "Help customers find where your products are stocked on physical store shelves." },
      { step: "04", title: "Lifestyle PR & Influencer Coverage", desc: "Earn editorial features on food blogs, culinary podcasts, and lifestyle media." },
    ],
    deliverables: [
      "B2C & B2B Search Strategy Blueprint",
      "Recipe & Nutritional Schema Markup",
      "Where-to-Buy Store Locator Setup",
      "Brand Authority & Organic Traffic Metrics",
    ],
  },
  {
    slug: "jewelry-seo",
    name: "Jewelry SEO",
    category: "Search Engine Optimization",
    short: "Optimize your online jewelry store with end-to-end SEO.",
    description:
      "End-to-end search engine optimization for fine jewelry brands, custom jewelers, and gem retailers seeking high-ticket buyers.",
    Icon: Gem,
    visualType: "seo",
    challenge:
      "High-ticket jewelry purchases require exceptional trust, certification clarity, high-resolution imagery, and bespoke consultation booking flows.",
    includes: [
      "Attract genuine high-net-worth jewelry buyers",
      "Enhanced online visibility for high-ticket gem and ring searches",
      "Higher conversion rates through certified trust signals",
      "Increased organic revenue from bespoke and bridal orders",
    ],
    methodology: [
      { step: "01", title: "Luxury Keyword Mapping", desc: "Target high-intent queries around diamond cuts, custom designs, and bridal jewelry." },
      { step: "02", title: "Certification & Trust Signal Schema", desc: "Integrate GIA/IGI certification details and warranty information." },
      { step: "03", title: "Visual & 360-View Search Optimization", desc: "Optimize high-definition imagery and video for Google Image search." },
      { step: "04", title: "VIP Consultation Funnel", desc: "Design seamless private appointment booking flows for custom designs." },
    ],
    deliverables: [
      "Luxury Jewelry SEO Taxonomy",
      "Gemstone & Certification Schema Markup",
      "Visual Image Search Optimization Plan",
      "High-Ticket Conversion & Lead Reports",
    ],
  },
  {
    slug: "childcare-seo",
    aliases: ["child-care-seo"],
    name: "Child Care SEO",
    category: "Search Engine Optimization",
    short: "Seek expert SEO solutions for childcare and early learning centers.",
    description:
      "Specialized search engine optimization for daycare centers, preschools, and early learning providers to drive enrollment inquiries.",
    Icon: Baby,
    visualType: "seo",
    challenge:
      "Parents research childcare with extreme care regarding safety, staff credentials, curriculum, and proximity. Establishing genuine local trust is paramount.",
    includes: [
      "Sustained organic traffic from local parents seeking childcare",
      "Enhanced online visibility in neighborhood search results",
      "Brand trust and authenticity through parent review management",
      "Competitive edge over regional daycare chains",
    ],
    methodology: [
      { step: "01", title: "Proximity & Neighborhood Targeting", desc: "Target radius searches around residential areas, corporate parks, and schools." },
      { step: "02", title: "Curriculum & Safety Showcase", desc: "Structure program descriptions, safety accreditations, and educator bios." },
      { step: "03", title: "Tour Booking Optimization", desc: "Make scheduling in-person or virtual campus tours effortless on mobile." },
      { step: "04", title: "Parent Testimonial Architecture", desc: "Highlight authentic parent testimonials with verified review schema." },
    ],
    deliverables: [
      "Neighborhood Childcare SEO Plan",
      "Campus Tour Lead Funnel Setup",
      "Accreditation & Staff Schema Markup",
      "Monthly Enrollment Lead Tracking",
    ],
  },

  // ------------------------- DIGITAL ANALYTICS -------------------------
  {
    slug: "digital-analytics",
    aliases: ["analytics"],
    name: "Digital Analytics",
    category: "Digital Analytics",
    short: "Know exactly what is working and why.",
    description:
      "Turn raw clicks into clear, decision-ready intelligence with complete end-to-end tracking setups and executive reporting dashboards.",
    Icon: BarChart3,
    visualType: "analytics",
    image: "https://a2zdm.com/ga4.jpg",
    challenge:
      "Fragmented user journeys across ads, websites, and apps—coupled with cookie deprecation—leave leadership guessing which marketing channels actually drive revenue.",
    includes: [
      "Track user behavior accurately across all customer touchpoints",
      "Understand true traffic sources and multichannel attribution",
      "Improve customer journeys and identify conversion drop-offs",
      "Enable data-backed investment decisions with confidence",
    ],
    methodology: [
      { step: "01", title: "Measurement Strategy & KPIs", desc: "Define business objectives, micro/macro conversions, and required data points." },
      { step: "02", title: "Tracking Architecture & DataLayer", desc: "Design a clean, standardized data layer and event schema." },
      { step: "03", title: "Implementation & QA Testing", desc: "Deploy tags and audit data collection across all devices and browsers." },
      { step: "04", title: "Executive Dashboard Delivery", desc: "Build automated reports that give stakeholders real-time visibility." },
    ],
    deliverables: [
      "Measurement Plan & Event Dictionary",
      "DataLayer Specification Document",
      "Full Tracking Validation & QA Report",
      "Interactive Executive Performance Dashboard",
    ],
  },
  {
    slug: "ga4-analytics",
    aliases: ["ga4", "google-analytics-4"],
    name: "GA4 Analytics",
    category: "Digital Analytics",
    short: "Master the new analytics standard with GA4 implementation.",
    description:
      "Comprehensive Google Analytics 4 implementation, migration, custom event tracking, and advanced attribution modeling.",
    Icon: LineChart,
    visualType: "analytics",
    image: "https://a2zdm.com/ga4.jpg",
    challenge:
      "The shift from Universal Analytics session tracking to GA4 event-based data has left many organizations with broken reporting, missing conversion goals, and unexplained data discrepancies.",
    includes: [
      "Future-proof analytics setup built on event-driven architecture",
      "Deeper customer journey insights across web and mobile apps",
      "Improved attribution modeling connecting clicks to closed deals",
      "Better cross-platform visibility and BigQuery export readiness",
    ],
    methodology: [
      { step: "01", title: "GA4 Configuration Audit", desc: "Audit data streams, retention settings, and referral exclusions." },
      { step: "02", title: "Custom Event Architecture", desc: "Build custom event definitions, user properties, and calculated metrics." },
      { step: "03", title: "Attribution & Conversion Setup", desc: "Configure key events, conversion windows, and attribution models." },
      { step: "04", title: "Exploration Reports & BigQuery Link", desc: "Build custom exploration funnels and connect BigQuery for raw data access." },
    ],
    deliverables: [
      "Complete GA4 Configuration & Event Spec",
      "Custom Funnel & Path Exploration Reports",
      "BigQuery Export & Data Streaming Setup",
      "Team Training & Custom Reporting Walkthrough",
    ],
  },
  {
    slug: "google-tag-manager",
    aliases: ["gtm"],
    name: "Google Tag Manager",
    category: "Digital Analytics",
    short: "Improve your business analytics with Google Tag Manager.",
    description:
      "Enterprise Tag Manager architecture, client-side container hygiene, and server-side GTM deployment for faster site speeds and reliable data capture.",
    Icon: Tags,
    visualType: "analytics",
    challenge:
      "Cluttered, disorganized tag containers slow down page speed, introduce security vulnerabilities, and frequently cause duplicate or missing conversion signals.",
    includes: [
      "Enhanced website speed through streamlined container execution",
      "Improved user experience with asynchronous tag firing",
      "Modern server-side tagging for privacy and ad blocker resilience",
      "Professional tag governance and version management",
    ],
    methodology: [
      { step: "01", title: "Container Audit & Pruning", desc: "Remove dead tags, duplicate triggers, and legacy code." },
      { step: "02", title: "DataLayer Standardization", desc: "Implement a robust data layer for consistent variable passing." },
      { step: "03", title: "Server-Side GTM Architecture", desc: "Deploy Cloud Run / GCP server containers to bypass browser blockers." },
      { step: "04", title: "Automated QA & Governance", desc: "Establish preview environments, approval workflows, and versioning protocols." },
    ],
    deliverables: [
      "Modular GTM Container Architecture",
      "Server-Side Tagging Infrastructure",
      "DataLayer Developer Documentation",
      "Container Governance & Release Playbook",
    ],
  },
  {
    slug: "piwikpro-analytics",
    aliases: ["piwik-pro"],
    name: "Piwik PRO",
    category: "Digital Analytics",
    short: "Analyze your website with privacy-first Piwik PRO.",
    description:
      "Deploy privacy-first web and product analytics with Piwik PRO, ensuring full GDPR and healthcare compliance without sacrificing tracking depth.",
    Icon: Gauge,
    visualType: "analytics",
    challenge:
      "Strict data sovereignty laws (GDPR, CCPA, HIPAA) prevent standard US-hosted cloud tracking for healthcare, financial, and European organizations.",
    includes: [
      "Data-driven business decisions backed by 100% compliant data",
      "Comprehensive overview of the complete customer journey",
      "Personalized experiences while honoring strict user consent",
      "Real-time data insights hosted in compliant EU/private cloud servers",
    ],
    methodology: [
      { step: "01", title: "Compliance Scoping", desc: "Determine data privacy requirements and cloud residency parameters." },
      { step: "02", title: "Piwik PRO Suite Deployment", desc: "Install Piwik PRO Analytics, Tag Manager, and Consent Manager." },
      { step: "03", title: "Customer Data Platform (CDP) Setup", desc: "Build unified user profiles with integrated behavioral history." },
      { step: "04", title: "Custom Dashboard Creation", desc: "Design executive dashboards tailored to compliance and marketing KPIs." },
    ],
    deliverables: [
      "Compliant Piwik PRO Workspace Setup",
      "Integrated Consent Management Workflow",
      "CDP Single-Customer View Configuration",
      "Compliance Verification Certificate",
    ],
  },
  {
    slug: "cookie-consent-management",
    aliases: ["cookie-consent", "consent-mode"],
    name: "Cookie Consent Management",
    category: "Digital Analytics",
    short: "Achieve GDPR and global privacy compliance.",
    description:
      "Implement enterprise-grade cookie consent solutions and Google Consent Mode v2 to protect against fines while maximizing conversion attribution.",
    Icon: Cookie,
    visualType: "analytics",
    challenge:
      "Failing to comply with global privacy directives risks crippling fines, while naive blocking destroys marketing analytics and conversion tracking for ad platforms.",
    includes: [
      "Strict regulatory compliance with GDPR, CCPA, and global privacy laws",
      "Reduced legal exposure and regulatory risk for your business",
      "Maintained marketing capabilities through Consent Mode v2 modeling",
      "Earned user trust through radical transparency and control",
    ],
    methodology: [
      { step: "01", title: "Cookie & Tracker Audit", desc: "Catalog every cookie, local storage key, and pixel on your domain." },
      { step: "02", title: "CMP Platform Deployment", desc: "Configure Cookiebot, OneTrust, or Usercentrics with geo-targeted banners." },
      { step: "03", title: "Google Consent Mode v2 Integration", desc: "Deploy advanced consent mode to recover modeled conversions in Google Ads." },
      { step: "04", title: "Continuous Monitoring", desc: "Automate monthly scans to catch newly added unauthorized third-party scripts." },
    ],
    deliverables: [
      "Consent Management Platform Configuration",
      "Google Consent Mode v2 Implementation",
      "Cookie Policy & Geo-Targeted Banner Setup",
      "Monthly Automated Script Compliance Scans",
    ],
  },
  {
    slug: "tag-monitoring",
    aliases: ["tag-audit"],
    name: "Tag Monitoring",
    category: "Digital Analytics",
    short: "Continuous monitoring of tracking technologies.",
    description:
      "Continuous automated synthetic monitoring of your website's tracking scripts to catch data loss, tag failures, and broken analytics before they affect decisions.",
    Icon: ShieldCheck,
    visualType: "analytics",
    challenge:
      "Website deployments, redesigns, and third-party script changes silently break conversion tags without anyone noticing for weeks, losing thousands in marketing attribution.",
    includes: [
      "Prevent catastrophic marketing and e-commerce data loss",
      "Maintain accurate analytics data pipelines around the clock",
      "Improve page performance by identifying slow third-party scripts",
      "Eliminate marketing spend wasted on unmeasured ad channels",
    ],
    methodology: [
      { step: "01", title: "Critical Funnel Mapping", desc: "Identify vital transaction flows, lead forms, and pixel firings." },
      { step: "02", title: "Synthetic Journey Testing", desc: "Schedule automated headless browser runs that simulate real user conversions." },
      { step: "03", title: "Real-Time Anomaly Alerting", desc: "Receive immediate Slack/email alerts the moment a tag stops firing." },
      { step: "04", title: "Weekly Health Reports", desc: "Review uptime scores, tag latency benchmarks, and data health trends." },
    ],
    deliverables: [
      "Automated Synthetic Monitoring Suite",
      "Instant Webhook Alert Configuration",
      "Tag Health & Latency Scorecard",
      "Data Integrity Incident Response Plan",
    ],
  },

  // ----------------------- PREDICTIVE ANALYTICS -----------------------
  {
    slug: "predictive-analytics",
    aliases: ["predictive"],
    name: "Predictive Analytics",
    category: "Predictive Analytics",
    short: "Forecast demand and act before competitors.",
    description:
      "Leverage machine learning algorithms and statistical models on your historical data to anticipate market trends, customer behavior, and future revenue.",
    Icon: TrendingUp,
    visualType: "predictive",
    challenge:
      "Descriptive analytics only tell you what already happened. Without predictive modeling, companies operate reactively—failing to anticipate churn, demand swings, and high-value prospects.",
    includes: [
      "Identify future market trends and buying cycles ahead of competitors",
      "Optimize marketing strategies based on expected customer lifetime value",
      "Increase customer retention and LTV through early churn detection",
      "Deploy capital and ad spend where predictive ROI is highest",
    ],
    methodology: [
      { step: "01", title: "Data Ingestion & Feature Engineering", desc: "Clean and structure historical customer and transaction data." },
      { step: "02", title: "Predictive Model Training", desc: "Train regression, classification, and time-series machine learning models." },
      { step: "03", title: "Model Validation & Scoring", desc: "Validate model precision, recall, and accuracy against holdout data." },
      { step: "04", title: "Operational Integration", desc: "Integrate predictive scores into CRM and marketing automation platforms." },
    ],
    deliverables: [
      "Predictive Modeling Architecture",
      "Customer Scoring & Churn Risk Engine",
      "LTV Forecast Model Documentation",
      "Automated Prediction Pipeline in Cloud/CRM",
    ],
  },
  {
    slug: "customer-segmentation",
    aliases: ["segmentation"],
    name: "Customer Segmentation",
    category: "Predictive Analytics",
    short: "Divide customers into strategic groups for targeted marketing.",
    description:
      "Segment your audience by behavioral patterns, purchasing history, and lifetime value to drive personalized campaigns with higher conversion rates.",
    Icon: Target,
    visualType: "predictive",
    challenge:
      "Broad blast marketing wastes budget on unresponsive leads while failing to engage your most profitable loyal customers with relevant messaging.",
    includes: [
      "20-40% higher campaign response rates through targeted messaging",
      "Reduced marketing waste by excluding low-propensity prospects",
      "Improved customer retention through proactive lifecycle triggers",
      "Personalized experiences and tailored product recommendations at scale",
    ],
    methodology: [
      { step: "01", title: "RFM & Behavioral Analysis", desc: "Analyze recency, frequency, monetary value, and engagement history." },
      { step: "02", title: "Clustering Algorithms", desc: "Apply k-means and hierarchical clustering to uncover natural buyer personas." },
      { step: "03", title: "Persona Profiling", desc: "Define actionable segment profiles with distinct pain points and motivations." },
      { step: "04", title: "Marketing Automation Sync", desc: "Sync dynamic segments into email, ad audiences, and CRM flows." },
    ],
    deliverables: [
      "Customer RFM & Value Matrix",
      "Behavioral Persona Profiles",
      "Automated Audience Sync Workflows",
      "Segment Performance & Revenue Dashboards",
    ],
  },
  {
    slug: "sales-forecasting",
    aliases: ["forecasting"],
    name: "Sales Forecasting",
    category: "Predictive Analytics",
    short: "Predict future revenue with 90%+ accuracy using AI models.",
    description:
      "Predict future revenue, demand spikes, and pipeline velocity using machine learning models factoring in seasonality, economic indicators, and past performance.",
    Icon: BrainCircuit,
    visualType: "predictive",
    challenge:
      "Guesswork and static linear projections cause costly inventory stockouts, overstocking, misallocated marketing capital, and missed quarterly revenue targets.",
    includes: [
      "85-95% forecast accuracy on rolling 30/60/90-day horizons",
      "Reduced stockouts and overstocks through demand alignment",
      "Optimized staffing, inventory, and operational resources",
      "Improved cash flow planning and confident executive decision-making",
    ],
    methodology: [
      { step: "01", title: "Historical Time-Series Modeling", desc: "Analyze multi-year sales trends, seasonality, and pipeline data." },
      { step: "02", title: "External Variable Integration", desc: "Incorporate lead indicators, marketing spend, and seasonal events." },
      { step: "03", title: "Machine Learning Regression", desc: "Run ensemble models to calculate high-confidence forecast intervals." },
      { step: "04", title: "Rolling Forecast Dashboard", desc: "Deploy an interactive scenario planning dashboard for leadership." },
    ],
    deliverables: [
      "AI Sales Forecasting Engine",
      "Multi-Scenario Demand Model (Base/Bull/Bear)",
      "Inventory & Resource Planning Matrix",
      "Monthly Forecast vs. Actual Calibration Reports",
    ],
  },

  // ----------------------- BUSINESS INTELLIGENCE -----------------------
  {
    slug: "business-intelligence",
    aliases: ["bi"],
    name: "Business Intelligence",
    category: "Business Intelligence",
    short: "One view of marketing, sales and revenue.",
    description:
      "Centralize your scattered data silos into modern warehouses and intuitive BI dashboards that connect marketing clicks directly to company revenue.",
    Icon: Database,
    visualType: "bi",
    challenge:
      "Marketing data lives in ad platforms, sales data lives in CRMs, and financial data lives in ERPs. Without centralized BI, leaders cannot see true customer acquisition costs and ROI.",
    includes: [
      "Centralize disparate data sources into a single source of truth",
      "Create actionable, interactive reports that update automatically",
      "Enable confident, data-driven decisions across executive teams",
      "Visualize key business metrics clearly in real time",
    ],
    methodology: [
      { step: "01", title: "Data Architecture Scoping", desc: "Map all source platforms, schemas, and core executive metrics." },
      { step: "02", title: "ETL & Pipeline Automation", desc: "Build automated pipelines to extract and transform data into warehouses." },
      { step: "03", title: "Relational Modeling", desc: "Establish star-schema data models linking leads, spend, and closed revenue." },
      { step: "04", title: "Visual Dashboard Delivery", desc: "Design role-based dashboards for marketing, sales, and executive leaders." },
    ],
    deliverables: [
      "Unified Enterprise Data Model",
      "Automated Data Ingestion Pipelines",
      "Cross-Departmental BI Reports",
      "Self-Service Exploration Dashboards",
    ],
  },
  {
    slug: "bigquery",
    aliases: ["big-query", "google-bigquery"],
    name: "Big Query",
    category: "Business Intelligence",
    short: "Analyze large volumes of data in real time with BigQuery.",
    description:
      "Deploy Google Cloud BigQuery for serverless, cost-effective data warehousing and real-time SQL analytics on massive marketing and behavioral datasets.",
    Icon: Database,
    visualType: "bi",
    challenge:
      "Standard databases crash when running complex analytical queries across millions of GA4 events, ad impressions, and customer interactions.",
    includes: [
      "Real-time analytics across petabytes of business data in seconds",
      "Seamless data transfer and streaming from Google Marketing Platform",
      "Enterprise-grade data security, encryption, and access control",
      "Improved business performance through low-cost serverless querying",
    ],
    methodology: [
      { step: "01", title: "Dataset & Schema Architecture", desc: "Design optimized tables with date partitioning and clustering keys." },
      { step: "02", title: "Automated Data Ingestion", desc: "Configure real-time streaming from GA4, Google Ads, and CRM APIs." },
      { step: "03", title: "SQL Transformation & Modeling", desc: "Build scheduled SQL views to prepare clean reporting tables." },
      { step: "04", title: "Cost & Performance Governance", desc: "Implement query cost caps, slot management, and caching strategies." },
    ],
    deliverables: [
      "Optimized BigQuery Warehouse Architecture",
      "Automated GA4 & Marketing Data Connectors",
      "Scheduled Data Modeling Views & Tables",
      "Query Cost Optimization & Governance Guide",
    ],
  },
  {
    slug: "looker-studio",
    aliases: ["looker", "google-data-studio"],
    name: "Looker Studio",
    category: "Business Intelligence",
    short: "Transform your data into insightful, interactive dashboards.",
    description:
      "Design intuitive, beautifully branded Looker Studio reports that automate weekly client reporting and give leadership instant performance visibility.",
    Icon: Presentation,
    visualType: "bi",
    challenge:
      "Teams waste dozens of hours every month manually copying and pasting screenshots into static presentation decks that are obsolete the moment they are sent.",
    includes: [
      "Centralized data visualization pulling live numbers automatically",
      "Real-time reporting accessible to all authorized team members",
      "Reduced manual reporting work saving hundreds of operational hours",
      "Improved data accessibility and transparency across the organization",
    ],
    methodology: [
      { step: "01", title: "Stakeholder Metric Discovery", desc: "Identify the critical daily, weekly, and monthly numbers executives need." },
      { step: "02", title: "Connector Configuration", desc: "Link live sources (GA4, Google Ads, Meta, Search Console, BigQuery)." },
      { step: "03", title: "UX & Visual Hierarchy Design", desc: "Build clean, branded multi-page dashboards with interactive date filters." },
      { step: "04", title: "Automated Distribution", desc: "Schedule automated PDF email digests to key executives." },
    ],
    deliverables: [
      "Interactive Multi-Page Looker Studio Dashboard",
      "Custom Calculated Metrics & Blended Data Sources",
      "Mobile-Optimized Executive View",
      "Scheduled Automated Email Reporting System",
    ],
  },
  {
    slug: "power-bi",
    aliases: ["microsoft-power-bi"],
    name: "Power BI",
    category: "Business Intelligence",
    short: "Enterprise-grade data modeling and visual analytics.",
    description:
      "Enterprise Microsoft Power BI architecture, DAX data modeling, and embedded analytics deeply integrated with Azure and Microsoft 365 ecosystems.",
    Icon: BarChart3,
    visualType: "bi",
    challenge:
      "Large organizations require strict enterprise governance, row-level security, and complex data relationships that simple dashboard tools cannot support.",
    includes: [
      "Enterprise-grade BI solution scaling across thousands of users",
      "Deep Microsoft ecosystem integration with Teams, Excel, and Azure",
      "Self-service analytics empowering departments to explore safely",
      "AI-powered insights including key influencers and smart narratives",
    ],
    methodology: [
      { step: "01", title: "Data Source Ingestion & Azure Setup", desc: "Connect ERPs, SQL databases, and cloud data lakes." },
      { step: "02", title: "Star-Schema DAX Modeling", desc: "Build robust relationship models with optimized DAX measure formulas." },
      { step: "03", title: "Report & App Publishing", desc: "Develop interactive reports and package them into Power BI Apps." },
      { step: "04", title: "Row-Level Security & Governance", desc: "Configure role-based access so managers only see their assigned territory." },
    ],
    deliverables: [
      "Enterprise Power BI Data Model (.pbix)",
      "Optimized DAX Measures Dictionary",
      "Row-Level Security Configuration",
      "Executive Power BI App Deployment",
    ],
  },
  {
    slug: "python-for-bi",
    aliases: ["python-bi", "python-analytics"],
    name: "Python for BI",
    category: "Business Intelligence",
    short: "Leverage Python's data ecosystem for custom analytics.",
    description:
      "Use Python's powerful data science libraries (Pandas, NumPy, Scikit-learn) to automate complex data workflows, web scraping, and custom BI pipelines.",
    Icon: Code2,
    visualType: "bi",
    challenge:
      "Standard BI tools cannot handle proprietary calculations, scraping unstructured web data, connecting to custom APIs, or running statistical clustering.",
    includes: [
      "Handle massive datasets beyond traditional spreadsheet limits",
      "Custom analytics and statistical calculations tailored to your exact business",
      "Reduced manual reporting work through fully automated Python scripts",
      "Future-proof analytics infrastructure integrated with modern cloud APIs",
    ],
    methodology: [
      { step: "01", title: "Custom API & Scraper Development", desc: "Extract unstructured data from proprietary APIs and public endpoints." },
      { step: "02", title: "Automated Data Cleaning & Transformation", desc: "Process datasets using Pandas/Polars for speed and reproducibility." },
      { step: "03", title: "Statistical & ML Computation", desc: "Execute custom attribution models, statistical tests, and regressions." },
      { step: "04", title: "Scheduled Cloud Function Execution", desc: "Deploy scripts to run automatically on cloud schedules (GCP/AWS)." },
    ],
    deliverables: [
      "Clean, Documented Python ETL Repository",
      "Custom API Connector Modules",
      "Automated Cloud Scheduled Data Jobs",
      "Output Data Feeds Connected to BI Dashboards",
    ],
  },

  // -------------------- PAY PER CLICK MANAGEMENT --------------------
  {
    slug: "pay-per-click-management",
    aliases: ["ppc", "pay-per-click"],
    name: "Pay Per Click Management",
    category: "Pay Per Click Management",
    short: "Paid campaigns managed for measurable ROAS.",
    description:
      "Data-driven paid search and social advertising campaigns built around rigorous audience targeting, continuous creative testing, and transparent ROAS.",
    Icon: MousePointerClick,
    visualType: "ppc",
    challenge:
      "Rising cost-per-click, automated black-box bidding algorithms, and query leakage waste ad spend on unqualified clicks with negative return.",
    includes: [
      "Increase qualified traffic from ready-to-buy prospects",
      "Improve conversion rates through targeted landing pages",
      "Lower customer acquisition costs through continuous optimization",
      "Maximize advertising return on ad spend (ROAS)",
    ],
    methodology: [
      { step: "01", title: "Account & Negative Keyword Audit", desc: "Eliminate budget bleed from wasteful search terms and bad placements." },
      { step: "02", title: "High-Intent Campaign Restructuring", desc: "Build single-theme ad groups with exact/phrase match discipline." },
      { step: "03", title: "A/B Ad Creative & Landing Page Testing", desc: "Continuously test headlines, value props, and conversion forms." },
      { step: "04", title: "Smart Bidding & Conversion Value", desc: "Train Google AI algorithms with first-party conversion value data." },
    ],
    deliverables: [
      "Restructured Paid Search & Social Accounts",
      "Negative Keyword & Placement Blocklist",
      "A/B Creative Testing Matrix",
      "Weekly ROAS & Customer Acquisition Cost Reports",
    ],
  },
  {
    slug: "performance-measurement",
    aliases: ["marketing-attribution", "ad-performance"],
    name: "Performance Measurement",
    category: "Pay Per Click Management",
    short: "Advanced frameworks to quantify and optimize marketing ROI.",
    description:
      "Advanced marketing attribution and incrementality measurement frameworks to accurately quantify marketing ROI across all paid channels.",
    Icon: Wallet,
    visualType: "ppc",
    challenge:
      "Last-click attribution models credit whichever ad was clicked last, giving false credit to retargeting and starving critical top-of-funnel channels of budget.",
    includes: [
      "Accurate marketing ROI measurement across all channels",
      "Optimal budget allocation based on true incremental lift",
      "Clear channel performance visibility free of self-attribution bias",
      "Confident data-driven decisions that grow bottom-line profit",
    ],
    methodology: [
      { step: "01", title: "Attribution Model Review", desc: "Compare first-click, last-click, linear, and data-driven attribution outputs." },
      { step: "02", title: "Incrementality Testing", desc: "Run geo-holdout tests to verify whether paid campaigns generate true incremental sales." },
      { step: "03", title: "Media Mix Modeling (MMM) Signals", desc: "Calculate diminishing returns curves for every paid acquisition channel." },
      { step: "04", title: "Budget Reallocation Blueprint", desc: "Shift ad spend from saturated channels to high-marginal-return tactics." },
    ],
    deliverables: [
      "Multi-Touch Attribution Model Architecture",
      "Incrementality & Holdout Lift Results",
      "Marginal ROAS Budget Optimization Calculator",
      "Executive Marketing Efficiency Ratio (MER) Dashboard",
    ],
  },
];

/**
 * Finds a service by its primary slug or any of its registered aliases.
 * Returns null if not found.
 */
export function getServiceBySlug(slug = "") {
  if (!slug) return null;
  const clean = slug.toLowerCase().trim();
  return (
    ALL_SERVICES.find(
      (s) => s.slug === clean || (s.aliases && s.aliases.includes(clean))
    ) ||
    SERVICES.find(
      (s) => s.slug === clean || (s.aliases && s.aliases.includes(clean))
    ) ||
    null
  );
}

export const BLOG_FILTERS = [
  "All",
  "Search Engine Optimization",
  "Analytics",
  "Google Tag Manager",
];

/** Maps a post's raw category onto one of the visible filter buckets. */
export function blogBucket(category = "") {
  const c = category.toLowerCase();
  if (c.includes("search engine optimization") || c === "seo") {
    return "Search Engine Optimization";
  }
  if (c.includes("analytic")) return "Analytics";
  if (c.includes("tag manager") || c === "gtm") return "Google Tag Manager";
  return "Search Engine Optimization";
}

export const BLOG_POSTS = [
  {
    id: "future-of-online-visibility",
    slug: "the-future-of-online-visibility-explained-in-simple-terms",
    title:
      "SEO, AEO, and AAO: The Future of Online Visibility Explained in Simple Terms",
    category: "Search Engine Optimization",
    date: "27/9/2025",
    author: "Iliyas Patel",
    readingTime: "4 min read",
    image: "https://a2zdm.com/search.jpg",
    link: "https://a2zdm.com/blog/the-future-of-online-visibility-explained-in-simple-terms",
    featured: true,
    excerpt:
      "Search is evolving with AI search models and conversational answer engines. Discover how SEO, AEO, and AAO impact your brand's digital visibility.",
    overview:
      "The search landscape is experiencing a fundamental transition. While traditional SEO focused on blue links on result pages, modern users are increasingly getting answers through conversational answer engines and AI overviews. Understanding the distinction between SEO (Search Engine Optimization), AEO (Answer Engine Optimization), and AAO (Automated Agent Optimization) is essential for any brand seeking long-term discoverability.",
    keyPoints: [
      "Traditional SEO builds technical site hygiene, keyword relevance, and domain authority.",
      "Answer Engine Optimization (AEO) ensures brand facts, structured data, and authoritative answers get surfaced in AI answer engines.",
      "Automated Agent Optimization (AAO) structures web entities and APIs so automated digital agents can find and process brand information.",
    ],
  },
  {
    id: "7-hacks-google-ranking",
    slug: "7-hacks-to-increase-your-google-ranking",
    title: "7 hacks to increase your Google ranking",
    category: "Search Engine Optimization",
    date: "4/5/2020",
    author: "Iliyas Patel",
    readingTime: "15 min read",
    image:
      "https://blogs.a2zdm.com/wp-content/uploads/2020/05/243477-P3SPDM-688.jpg",
    link: "https://a2zdm.com/blog/7-hacks-to-increase-your-google-ranking",
    excerpt:
      "Practical on-page and technical optimization recommendations to help improve search rankings, crawl efficiency, and content relevance.",
    overview:
      "Improving Google rankings requires focused attention on high-impact on-page and technical variables. From internal linking structures to page speed and search intent alignment, this guide breaks down 7 actionable tactics you can apply to boost organic visibility across competitive search queries.",
    keyPoints: [
      "Audit and optimize internal anchor text to distribute page authority effectively.",
      "Identify underperforming content and refresh it with updated data and search intent alignment.",
      "Eliminate crawl depth issues by organizing pages into logical topic hierarchies.",
      "Improve page load performance and Core Web Vitals across mobile devices.",
    ],
  },
  {
    id: "core-web-vitals-ranking",
    slug: "core-web-vitals-and-google-ranking",
    title: "Core Web Vitals & Google Ranking: What You Need to Know in 2025",
    category: "Search Engine Optimization",
    date: "12/3/2025",
    author: "Ateeq Patel",
    readingTime: "6 min read",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&q=80",
    excerpt:
      "Google's Core Web Vitals are now confirmed ranking signals. Learn how LCP, FID, and CLS scores directly impact your organic search visibility.",
    overview:
      "Core Web Vitals measure real-world user experience metrics that Google uses as ranking factors. A strong CWV score signals to Google that your page delivers a fast, stable, interactive experience — rewarding you with better organic placement.",
    keyPoints: [
      "Largest Contentful Paint (LCP) measures how fast the main content loads — aim for under 2.5 seconds.",
      "Cumulative Layout Shift (CLS) penalises pages that visually jump while loading — keep it below 0.1.",
      "Use Google Search Console's Core Web Vitals report to identify pages needing urgent improvements.",
      "Compress images, defer non-critical JS, and use a CDN to dramatically improve all three metrics.",
    ],
  },
  {
    id: "local-seo-strategies",
    slug: "local-seo-strategies-for-small-business",
    title: "Local SEO Strategies That Actually Drive Foot Traffic in 2025",
    category: "Search Engine Optimization",
    date: "5/6/2025",
    author: "Ateeq Patel",
    readingTime: "7 min read",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    excerpt:
      "Ranking in the Google Local Pack is the #1 driver of walk-in customers. Discover the strategies that move you from invisible to top-3 in local search.",
    overview:
      "Local SEO connects your physical business to nearby searchers at the exact moment they need your service. From Google Business Profile optimisation to localised landing pages, the right tactics make you the obvious choice in your area.",
    keyPoints: [
      "Fully optimise your Google Business Profile with updated hours, photos, and service descriptions.",
      "Build consistent NAP (Name, Address, Phone) citations across all local directories.",
      "Earn geo-specific backlinks from local newspapers, chambers of commerce, and community blogs.",
      "Create dedicated city/neighbourhood landing pages to capture hyper-local search intent.",
    ],
  },
  {
    id: "ga4-ecommerce-tracking",
    slug: "ga4-ecommerce-tracking-complete-guide",
    title: "GA4 E-commerce Tracking: The Complete Setup Guide",
    category: "Analytics",
    date: "18/4/2025",
    author: "Zeeshan Ahmed",
    readingTime: "8 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    excerpt:
      "Setting up GA4 e-commerce tracking correctly ensures every purchase, add-to-cart, and checkout step is captured — giving you the data to optimise revenue.",
    overview:
      "GA4's event-based model requires a deliberate e-commerce implementation strategy. When done right, you gain full-funnel visibility from first page view to completed purchase, enabling data-driven decisions that directly grow revenue.",
    keyPoints: [
      "Enable enhanced measurement and configure purchase, add_to_cart, and begin_checkout events via GTM.",
      "Use the GA4 DebugView to validate every event fires correctly before going live.",
      "Build custom funnels in GA4 Explorations to identify where users abandon the checkout flow.",
      "Connect GA4 to BigQuery for advanced cohort analysis and LTV modelling at scale.",
    ],
  },
  {
    id: "bigquery-marketing-analytics",
    slug: "bigquery-for-marketing-analytics",
    title: "Using BigQuery for Marketing Analytics: A Practical Introduction",
    category: "Analytics",
    date: "2/7/2025",
    author: "Zeeshan Ahmed",
    readingTime: "9 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    excerpt:
      "BigQuery unlocks marketing analytics at a scale that GA4's UI alone cannot match. Learn how to query your raw GA4 data and surface insights that drive growth.",
    overview:
      "Exporting GA4 data to BigQuery gives analysts direct SQL access to raw, unsampled event data. This enables unlimited custom reporting, predictive modelling, and cross-platform data joins that the GA4 interface alone cannot provide.",
    keyPoints: [
      "Enable the free GA4 → BigQuery link in your GA4 property settings to start streaming event data.",
      "Use SQL to build custom attribution models that go beyond GA4's default last-click reporting.",
      "Join GA4 data with CRM exports in BigQuery to create true customer lifetime value (LTV) models.",
      "Schedule Looker Studio reports on BigQuery data to automate weekly executive dashboards.",
    ],
  },
  {
    id: "gtm-server-side-tracking",
    slug: "gtm-server-side-tracking-guide",
    title: "GTM Server-Side Tracking: Improve Data Accuracy in a Cookie-Less World",
    category: "Google Tag Manager",
    date: "10/5/2025",
    author: "Zeeshan Ahmed",
    readingTime: "7 min read",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    excerpt:
      "Browser-based tracking is losing accuracy to ad blockers and cookie restrictions. Server-side GTM restores data fidelity and extends cookie lifetimes.",
    overview:
      "Server-side tagging moves tag execution from the user's browser to a cloud server you control. This bypasses ad-blockers, ITP restrictions, and third-party cookie limitations — recovering lost conversion data and improving measurement accuracy.",
    keyPoints: [
      "Deploy a server-side GTM container on Google Cloud Run or App Engine in under an hour.",
      "Route GA4, Meta CAPI, and Google Ads Conversion events through your server container.",
      "First-party cookies set server-side can have a 400-day lifetime vs. 7-day browser limits.",
      "Server-side tagging reduces client-side JavaScript load, measurably improving page performance.",
    ],
  },
  {
    id: "gtm-custom-events-spa",
    slug: "gtm-custom-events-single-page-apps",
    title: "Tracking Custom Events in Single-Page Apps with Google Tag Manager",
    category: "Google Tag Manager",
    date: "22/8/2025",
    author: "Ateeq Patel",
    readingTime: "5 min read",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
    excerpt:
      "React, Vue, and Angular apps require a different GTM approach. Learn how to push custom dataLayer events and track user actions without page reloads.",
    overview:
      "Single-page applications (SPAs) don't trigger traditional page views on navigation, breaking standard GTM triggers. A properly architected dataLayer push strategy ensures every meaningful user interaction is captured — from button clicks to form submissions and virtual pageviews.",
    keyPoints: [
      "Push a virtual_pageview event to the dataLayer on every React Router or Vue Router navigation change.",
      "Use custom event triggers in GTM to fire GA4 events on SPA interactions like tab switches and modal opens.",
      "Implement a dataLayer helper module so every team member follows a consistent event schema.",
      "Test SPA tracking thoroughly in GTM Preview mode before publishing to production.",
    ],
  },
];

export const ALL_BLOG_POSTS = [
  ...BLOG_POSTS,
  {
    id: "ways-to-increase-rankings",
    slug: "ways-to-increase-your-google-rankings",
    title: "Ways to Increase Your Google Rankings",
    category: "Search Engine Optimization",
    date: "4/5/2020",
    author: "Iliyas Patel",
    readingTime: "14 min read",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80",
    link: "https://a2zdm.com/blog/ways-to-increase-your-google-rankings",
    excerpt:
      "Actionable ways to identify quick ranking wins and build sustainable domain authority across your target search queries.",
    overview:
      "Sustainable organic growth is not about quick tricks or black-hat shortcuts. This guide outlines reliable, test-driven methodologies to earn top rankings: analyzing query intent, filling content gaps against ranking competitors, and earning authoritative editorial backlinks.",
    keyPoints: [
      "Analyze current SERP features (featured snippets, local packs) to tailor page formatting.",
      "Consolidate thin or duplicate pages with 301 redirects into comprehensive pillar resources.",
      "Leverage structured data schema to secure rich visual search result features.",
      "Continuously monitor crawl errors in Google Search Console to protect indexation.",
    ],
  },
  {
    id: "benefits-google-tag-manager",
    slug: "benefits-of-using-google-tag-manager",
    title: "Benefits of using Google Tag Manager",
    category: "Google Tag Manager",
    date: "25/9/2019",
    author: "Iliyas Patel",
    readingTime: "3 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    link: "https://a2zdm.com/blog/benefits-of-using-google-tag-manager",
    excerpt:
      "Discover how Google Tag Manager simplifies tag deployment, reduces developer dependency, and improves measurement agility.",
    overview:
      "Google Tag Manager (GTM) revolutionized how marketing and analytics teams deploy tracking scripts. Rather than waiting on developer deployment cycles, marketers can safely configure, test, and release tags within a centralized, version-controlled web interface.",
    keyPoints: [
      "Deploy and update tracking scripts without touching website source code.",
      "Built-in debugging and preview mode ensures tracking accuracy before publication.",
      "Asynchronous tag firing prevents third-party scripts from blocking page load.",
      "Centralized event triggers ensure clean dataLayer consistency across GA4, Google Ads, and Meta.",
    ],
  },
  {
    id: "benefits-google-analytics",
    slug: "benefits-of-using-google-analytics",
    title: "Benefits of using Google Analytics for your business",
    category: "Analytics",
    date: "14/9/2019",
    author: "Iliyas Patel",
    readingTime: "4 min read",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80",
    link: "https://a2zdm.com/blog/benefits-of-using-google-analytics",
    excerpt:
      "How digital analytics provides clarity into user journeys, channel performance, and marketing return on investment.",
    overview:
      "Web analytics is the operational foundation of every high-performing digital marketing organization. Understanding which marketing channels generate genuine customer acquisition—and where users drop off in your funnel—transforms marketing from a speculative expense into a measurable revenue engine.",
    keyPoints: [
      "Track complete visitor journeys from initial acquisition to closed conversion.",
      "Identify high-performing channels to reallocate budget where ROI is proven.",
      "Uncover user experience bottlenecks on specific devices and landing pages.",
      "Set measurable conversion events to benchmark team performance and campaign outcomes.",
    ],
  },
  {
    id: "choose-reliable-seo-agency",
    slug: "how-to-choose-a-reliable-seo-agency-for-business",
    title: "HOW TO CHOOSE A RELIABLE SEO AGENCY FOR BUSINESS",
    category: "Search Engine Optimization",
    date: "16/5/2019",
    author: "Iliyas Patel",
    readingTime: "6 min read",
    image:
      "https://blogs.a2zdm.com/wp-content/uploads/2019/05/reliable-digital-marketing-agency_331.jpg",
    link: "https://a2zdm.com/blog/how-to-choose-a-reliable-seo-agency-for-business",
    excerpt:
      "Key evaluation criteria, essential questions, and transparent metrics to consider when selecting an SEO agency for your business.",
    overview:
      "Choosing an SEO agency is a critical business decision. With varying methodologies and guarantees across the market, knowing how to evaluate potential partners on transparency, reporting standards, and white-hat practices protects your brand and investment.",
    keyPoints: [
      "Be cautious of unrealistic guarantees or promises of overnight top rankings.",
      "Demand transparent monthly reporting that ties search performance to business inquiries and conversions.",
      "Ask about their technical auditing, link building, and on-page optimization methodologies.",
    ],
  },
];

export const CASE_STUDIES = [
  {
    id: "giggle-tree",
    client: "Giggle Tree",
    title: "From Invisible to AI-Cited: Google's Recommended Childcare Expert",
    description:
      "Transformed from digital obscurity to being featured in Google's AI Overview as the authoritative source for childcare business consulting in Australia.",
    image: "https://a2zdm.com/casestudy_giggletree.jpg",
    logo: "https://a2zdm.com/gigglelogo.png",
    link: "https://a2zdm.com/case-studies/giggle-tree",
  },
  {
    id: "the-uniform-edit",
    client: "The Uniform Edit",
    title:
      "How We Helped The Uniform Edit Dominate Google and Double Their Organic Leads in 6 Months",
    description:
      "Discover how The Uniform Edit boosted visibility, ranked nationally for 'corporate uniform suppliers', and doubled leads with SEO in just 6 months.",
    image: "https://a2zdm.com/tue.jpg",
    logo: null,
    link: "https://a2zdm.com/case-studies/the-uniform-edit-seo",
  },
];

export const TEAM = [
  {
    name: "Ateeq Patel",
    role: "Founder & CEO",
    experience: "8+ years",
    expertise: "Web Analytics and Digital Marketing",
    description:
      "Digital marketing veteran with extensive experience in helping businesses grow through data-driven strategies. Founded the company with a vision to bridge the gap between analytics and actionable insights.",
    education: "MBA in Digital Marketing, University of London",
    certifications: [
      "Google Analytics Certified",
      "Google Ads Certified",
      "HubSpot Content Marketing Certified",
    ],
    funFact: "Ran a successful food blog before transitioning to digital marketing",
    linkedin: "https://in.linkedin.com/company/a2zdm",
    twitter: "https://x.com/a2zdm",
  },
  {
    name: "Zeeshan Ahmed",
    role: "Head of Analytics",
    experience: "6+ years",
    expertise: "GA4, BigQuery & Data Science",
    description:
      "Passionate about transforming raw data into meaningful insights. Has worked with Fortune 500 companies to implement scalable analytics solutions and build custom dashboards.",
    education: "MS in Data Science, Stanford University",
    certifications: [
      "Google Data Analytics Professional",
      "AWS Certified Data Analytics",
      "Tableau Desktop Certified",
    ],
    funFact: "Competitive chess player in college",
    linkedin: "https://linkedin.com/in/zeeshanahmed",
    github: "https://github.com/zeeshanahmed",
  },
];

export const VALUES = [
  {
    title: "Results-Driven",
    body: "Every strategy is designed with measurable outcomes in mind. We don't just promise growth—we deliver it with data to prove it.",
    Icon: Target,
  },
  {
    title: "Client-Centric",
    body: "Your success is our success. We build long-term partnerships based on trust, transparency, and consistent results.",
    Icon: Users,
  },
  {
    title: "Innovation First",
    body: "We stay ahead of industry trends and leverage cutting-edge tools to give our clients a competitive advantage.",
    Icon: Lightbulb,
  },
  {
    title: "Excellence Always",
    body: "We maintain the highest standards in everything we do, from strategy development to execution and reporting.",
    Icon: Award,
  },
];

export const ABOUT_HIGHLIGHTS = [
  { title: "15+ Years of Excellence", Icon: Award },
  { title: "Data-Driven Strategies", Icon: BarChart3 },
  { title: "Measurable Results", Icon: TrendingUp },
  { title: "Sustainable Growth", Icon: Sparkles },
];

export const CTA_DEFAULT = {
  title: "Where strategy meets execution—and results speak for themselves.",
  button: "Talk to an expert",
  href: "/contact",
};
