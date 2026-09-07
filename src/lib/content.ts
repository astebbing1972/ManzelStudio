const IMG_BASE = "";

export const img = (path: string) => `${IMG_BASE}${path.replace("/c0173968/", "/")}`;

export const nav = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "#",
    children: [
      { label: "Residential", href: "/residential-building-design" },
      { label: "Commercial", href: "/commercial-building-design" },
      { label: "Health Spaces", href: "/health-space-design" },
      { label: "Site Assessment", href: "/site-assessment" },
    ],
  },
  { label: "Portfolio", href: "/our-projects" },
  {
    label: "Project",
    href: "#",
    children: [{ label: "The Avenue", href: "/project-coburg-the-avenue" }],
  },
  {
    label: "About",
    href: "#",
    children: [
      { label: "About Us", href: "/about-us" },
      { label: "Testimonials", href: "/testimonials" },
    ],
  },
  { label: "Blog", href: "/blog" },
];

export const heroSlides = [
  "/images/hero/hero-1.png",
  "/images/hero/hero-2.png",
  "/images/hero/hero-3.png",
  "/images/hero/hero-4.png",
  "/images/hero/hero-5.png",
];

export const aboutSlides = [
  img("/resources/c0173968/albums/album-7/about-slider-img1.png"),
  img("/resources/c0173968/albums/album-7/about-slider-img2.png"),
  img("/resources/c0173968/albums/album-7/about-slider-img3.png"),
];

export const solutions = [
  {
    title: "Building Design Drawings",
    body: "Bespoke design tailored to your site, lifestyle, and vision.",
  },
  {
    title: "Planning & Building Permits",
    body: "Council-ready submissions with proven fast-track turnaround.",
  },
  {
    title: "Feasibility Reports",
    body: "Know what's possible on your site before you commit.",
  },
  {
    title: "3D Rendering",
    body: "Visualise your project in photorealistic detail before construction.",
  },
  {
    title: "Energy & Sustainability Reports",
    body: "Compliant, efficient, future-ready design from sustainable building designers.",
  },
];

export const sectors = [
  {
    title: "Residential",
    image: img("/pub/c0173968/editor-uploaded-image/project-slider-1.png"),
    paragraphs: [
      "We specialise in designing homes that reflect your lifestyle and values. From thoughtful spatial planning and natural light optimisation to selecting finishes that bring warmth and character, our residential approach balances aesthetics with everyday functionality.",
      "Whether you're building new or undertaking a major remodel, we guide you through each design phase, ensuring the outcome is tailored to how you live, not just how it looks.",
    ],
    href: "/residential-building-design",
  },
  {
    title: "Commercial",
    image: img("/pub/c0173968/editor-uploaded-image/project-slider-2-1.png"),
    paragraphs: [
      "In the commercial sector, our focus is on creating spaces that support business goals — whether that's boosting employee productivity, elevating your brand, or adapting to evolving usage patterns. We deliver custom solutions that integrate smart spatial design, efficient flow, and future-proof flexibility.",
      "From offices and retail fit-outs to mixed-use developments, our designs aim to be both striking and sustainable, enabling your business space to adapt over time.",
    ],
    href: "/commercial-building-design",
  },
  {
    title: "Health Spaces",
    image: img("/pub/c0173968/editor-uploaded-image/project-slider-3.png"),
    paragraphs: [
      "Designing for healthcare means focusing on patient and staff experience, operational workflow, regulatory compliance, and future adaptability. We collaborate with clinicians, planners and technical specialists to craft environments that support healing, comfort, and efficiency.",
      "Whether it's a clinic, specialist facility or hospital, our health-space designs prioritise clear circulation, calming atmospheres and integrated technology — helping deliver care in spaces that feel thoughtful and functional.",
    ],
    href: "/health-space-design",
  },
];

export const projects = [
  {
    title: "Elsternwick",
    tag: "Residential",
    image: "/images/projects/elsternwick.png",
    href: null,
    body: "The existing façade was retained to honour the home's original period character, while a two-storey extension was designed to meet the family's evolving needs, including accommodation for parents and visiting friends. The design also prioritises outdoor living, creating a shared space centred around an inground swimming pool for relaxation and enjoyment.",
  },
  {
    title: "Coburg",
    tag: "Residential",
    image: "/images/projects/coburg.png",
    href: "/project-coburg-the-avenue",
    body: "Situated on a narrow 6.7m × 40.1m site with rear ROW access, this project maximises building potential while responding to the client's needs. We delivered a single-storey, three-bedroom home with open-plan living, a double garage, and a loft with additional amenities. The early 1900s façade was faithfully replicated, and upon entering, the home reveals modern design features seamlessly integrated with its period-inspired exterior.",
  },
  {
    title: "Safety Beach",
    tag: "Residential",
    image: "/images/projects/safety-beach.png",
    href: null,
    body: "This investment site is located near Hidden Harbour Marina and just 900m from the Safety Beach foreshore. The client initially requested two dwellings for rental income; we recommended three four-bedroom dwellings to maximise both rental yield and long-term investment potential. The design features contemporary, two-storey homes with warm, light external colours inspired by the coastal location, blending Hampton-style charm with modern internal features. The proposal was approved by the Council Planning Department, meeting all council requirements and guidelines.",
  },
  {
    title: "Preston",
    tag: "Residential",
    image: "/images/projects/preston.png",
    href: null,
    body: "This 478m² corner site with rear ROW presented a design challenge due to its prominent position. The client requested side-by-side development, two-storey dwellings with double garages and offices above, complete with amenities. To address the corner location, we designed the primary dwelling with curved walls to soften its visual impact, while incorporating a modern, sleek aesthetic. Carefully selected materials and finishes respect the surrounding neighbourhood character, satisfying both council requirements and the client's vision.",
  },
];

export const phases = [
  {
    num: "01",
    tag: "Phase One",
    title: "Strategic Discovery",
    body: "We explore your goals, site, budget, and opportunities to shape a clear project direction.",
  },
  {
    num: "02",
    tag: "Phase Two",
    title: "Concept Development",
    body: "We create thoughtful concepts and 3D visuals, refining the design to align with your vision and site.",
  },
  {
    num: "03",
    tag: "Phase Three",
    title: "Documentation & Permits",
    body: "We prepare detailed drawings, sustainability reports, and permit packages for a smooth approval process.",
  },
  {
    num: "04",
    tag: "Phase Four",
    title: "Project Support & Final Styling",
    body: "We support construction, coordinate key details, and help bring the final design to life.",
  },
];

export const whyChoose = [
  {
    num: "01",
    title: "Faster Permits",
    body: "Clear documentation and council experience help keep approvals moving.",
  },
  {
    num: "02",
    title: "Personal Design",
    body: "Thoughtful design shaped around your lifestyle, site, and vision.",
  },
  {
    num: "03",
    title: "End-to-End Support",
    body: "Feasibility, 3D visuals, drawings, reports, and permits managed by one team.",
  },
  {
    num: "04",
    title: "Technical Excellence",
    body: "Creative designs backed by precise, buildable documentation.",
  },
  {
    num: "05",
    title: "Sustainable Approach",
    body: "Future-focused building design for Melbourne and regional Victoria.",
  },
  {
    num: "06",
    title: "Lasting Value",
    body: "Spaces designed to add long-term function, beauty, and property value.",
  },
];

export const googleReviewsUrl = "https://share.google/afnXZiCTlMtqi7pbl";

export const testimonials = [
  {
    quote:
      "Appointing Ahmed, Ali, and Rukaya at Manzel Studio has been a great decision. They've helped us get our residential project building permit ready by handling the full set of drawings, coordinating with consultants, and designing the joinery for both wet and dry areas. What we really appreciated was their construction background. Instead of a standard architectural design that looks nice on paper but gets expensive and tricky to build, they actually designed things to fit our budget and keep construction costs manageable. They can handle complex briefs easily, and nothing feels too daunting for them. They're patient, pay attention to the details, and are a pleasure to work with. I would highly recommend them to anyone looking for reliable building designers.",
    name: "Abdul Rahim",
    role: "Google Review",
  },
  {
    quote:
      "Ali and the team at Manzel Studio were a pleasure to work with. They designed a beautiful health clinic space and were able to bring my rough vision to thoughtful fruition. They made exceptional use of the space, helping me with configuration, layout, design and were expertly able to guide me through the complicated regulatory and compliance requirements for commercial healthcare spaces.",
    name: "Sebastian Spangenberg",
    role: "Google Review",
  },
  {
    quote:
      "Ali and the team did a fabulous job of designing a beautiful clinical space for us. They met and exceeded the brief, with prompt and professional communication throughout. Ali was also able to assist with regulatory and compliance factors that affect commercial health spaces.",
    name: "Healthspan Osteopathy",
    role: "Google Review",
  },
  {
    quote: "Mazen did a great job on our build. Very professional and efficient. He was so easy to deal with.",
    name: "Libby Powell",
    role: "Google Review",
  },
  {
    quote:
      "Ali was great to work with. He's thorough, clear, has great communication and meet all our expectations. Would highly recommend him.",
    name: "Sylvia",
    role: "Google Review",
  },
  {
    quote: "In the name of God, and may God bless them... With utmost honesty and integrity, and that is enough.",
    name: "Zaid Almarabeh",
    role: "Google Review",
  },
  {
    quote: "Best experience.",
    name: "Ravneet Kaur",
    role: "Google Review",
  },
  {
    quote:
      "If there were 10 stars I will give it all to Ali Dirani. Very diligent and excellent follow-ups. He went more than the extra mile to accommodate and help me fix a problem. Most importantly, a very genuine person. It has been a journey and I will always be grateful for his dedication and assistance. Will definitely use his services again in the future. Thank you, Ali.",
    name: "Victor Bernard",
    role: "Google Review",
  },
  {
    quote:
      "Firstly, let me start by thanking the team at Manzel Studio — they have exceeded my expectations and restored my faith in the industry. They understood and listened to the brief I had set out, and really enhanced the end design. I am so happy with the results, so is my partner. Finally, we have found a non-generic architecture firm that goes beyond the norm. Great job, many thanks!",
    name: "JMS Fencing",
    role: "Google Review",
  },
  {
    quote:
      "Manzel Studio is the best architectural firm in town! Their team is professional, creative, and always delivers outstanding designs right on time. They're extremely reliable, easy to work with, and offer very affordable prices without compromising quality. If you're looking for a trustworthy and talented architectural team, I highly recommend Manzel Studio!",
    name: "Louay Masri",
    role: "Google Review",
  },
  {
    quote:
      "Working with Manzel Studio Pty Ltd to design and build my home was an incredible experience from start to finish. The team took the time to truly understand my vision, lifestyle, and budget, and transformed my ideas into a home that is both functional and beautifully designed. Their attention to detail, creativity, and professionalism were outstanding throughout the entire process. From the initial concept drawings to the final build, they communicated clearly, solved challenges with innovative solutions, and ensured every element reflected my personal style. The end result is a home that feels uniquely mine — elegant, comfortable, and thoughtfully designed in every way. I couldn't be happier with the outcome and would highly recommend Manzel Studio Pty Ltd to anyone looking for an architect who combines design excellence with genuine care for their clients. I particularly loved working with Ahmed, the lead architect.",
    name: "Wesam Al-Sudani",
    role: "Google Review",
  },
  {
    quote:
      "Great working with Ali, Ahmed and the team. Never a disappointing interaction and results-driven in all they do. Highly recommend these guys!",
    name: "Fadi Sarkis",
    role: "Google Review",
  },
  {
    quote:
      "Ali designed a few homes that we've built. He had great attention to detail and responded promptly. Highly recommend Manzel Studio!",
    name: "Yaarob Jaafar",
    role: "Google Review",
  },
  {
    quote:
      "Manzel Studio was great to work with. They really listened to my ideas and made the whole process easy and stress-free. The attention to detail was impressive, and they nailed the balance between style and function. If you want a team that cares and delivers amazing results, I highly recommend them.",
    name: "A.",
    role: "Google Review",
  },
  {
    quote:
      "I'm excited to share my experience working with Ahmed on the architectural work of my investment home in Craigieburn. From our first meeting to the final design, he demonstrated great creativity and professionalism. Ahmed took the time to understand my vision and needs, and his attention to detail and budgeting advice were invaluable. Communication was easy — he kept me updated and was always open to my feedback. The final result exceeded my expectations. I highly recommend Ahmed and his team to anyone looking for a talented architect committed to outstanding results. He's currently working on my second investment property in Glenroy, and I can't wait to collaborate with him again to bring my vision to life! Thank you, Ahmed and team!",
    name: "Fatima Al Rady",
    role: "Google Review",
  },
  {
    quote:
      "We have been working with Manzel Studio for many years — they are a hidden gem in the design industry, offering an efficient service and competitive price. The work is very high quality, and we will continue working with them for years to come.",
    name: "Ayden Frigerio",
    role: "Google Review",
  },
  {
    quote:
      "Thank you, Ahmed and Ali! Amazing design and attention to detail. Absolutely highly recommend using these guys if you want awesome, honest, and reliable work!",
    name: "Kelvin Ming",
    role: "Google Review",
  },
  {
    quote:
      "I had Manzel take care of my architectural work on two of my projects and the service was exceptional. They answered all my questions and requests, and I would definitely go back to them. Highly recommend!",
    name: "Dean Yazxhi",
    role: "Google Review",
  },
];

// ===== Testimonials page =====

export const testimonialsHero = {
  image: img("/template/c0173968/images/Banner-Img2.png"),
  title: "Testimonials",
  tagline: "What our clients say about working with us",
};

export type BlogPost = {
  title: string;
  href: string;
  image: string;
  imageLarge: string;
  date: string;
  author: string;
  excerpt: string;
  excerptLong: string;
  categories: string[];
  metaTitle?: string;
  metaDescription?: string;
  imageAlt?: string;
  keywords?: string[];
};

export const blogPosts: BlogPost[] = [
  {
    title:
      "Essential Steps to Perform an Architectural Site Analysis for a New Building Project",
    href: "/blog/essential-steps-architectural-site-analysis",
    image: img(
      "/resources/c0173968/blog-post/post-25/300-EssentialStepstoPerformanArchitecturalSiteAnalysisforaNewBuildingProject.png"
    ),
    imageLarge: img(
      "/resources/c0173968/blog-post/post-25/600-EssentialStepstoPerformanArchitecturalSiteAnalysisforaNewBuildingProject.png"
    ),
    date: "Tue, 14 Jul 2026",
    author: "Manzel Studio",
    excerpt:
      "Every successful building begins with a thorough understanding of the site. Before sketches, floor plans, or 3D mo...",
    excerptLong:
      "Every successful building begins with a thorough understanding of the site. Before sketches, floor plans, or 3D models are developed, architects and build...",
    categories: ["studio-news", "commercial-design", "sustainable-design", "residential-design"],
  },
  {
    title:
      "Building Designer vs Architect vs Draftsman: What's the Difference in Australia?",
    href: "/blog/building-designer-vs-architect-vs-draftsman-australia",
    image: img(
      "/resources/c0173968/blog-post/post-22/300-BuildingDesignervsArchitectvsDraftsman.png"
    ),
    imageLarge: img(
      "/resources/c0173968/blog-post/post-22/450-BuildingDesignervsArchitectvsDraftsman.png"
    ),
    date: "Wed, 24 Jun 2026",
    author: "Manzel Studio",
    excerpt:
      "If you're planning a new home, renovation, extension, townhouse development or commercial project, one of the first deci...",
    excerptLong:
      "If you're planning a new home, renovation, extension, townhouse development or commercial project, one of the first decisions you'll need to make is whether to ...",
    categories: [
      "industry-insights",
      "commercial-design",
      "sustainable-design",
      "planning-permits",
      "residential-design",
    ],
  },
  {
    title:
      "Commercial Building Design Melbourne: Creating Functional, Future-Ready Spaces",
    href: "/blog/commercial-building-design-insights",
    image: img(
      "/resources/c0173968/blog-post/post-19/300-commercial-building-design-trends-melbourne(1).png"
    ),
    imageLarge: img(
      "/resources/c0173968/blog-post/post-19/450-commercial-building-design-trends-melbourne(1).png"
    ),
    date: "Sun, 14 Jun 2026",
    author: "Manzel Studio",
    excerpt:
      "Commercial buildings have evolved significantly over the past decade. Today's businesses require spaces that do more tha...",
    excerptLong:
      "Commercial buildings have evolved significantly over the past decade. Today's businesses require spaces that do more than provide shelter - they need environmen...",
    categories: ["commercial-design", "sustainable-design", "planning-permits"],
  },
  {
    title: "Manzel Studio Launches Purpose Driven Building Design Services in Melbourne",
    href: "/blog/building-design-services-melbourne",
    image: img(
      "/resources/c0173968/blog-post/post-16/300-ManzelStudioLaunchesPurpose-DrivenBuildingDesignServicesinMelbourne.png"
    ),
    imageLarge: img(
      "/resources/c0173968/blog-post/post-16/450-ManzelStudioLaunchesPurpose-DrivenBuildingDesignServicesinMelbourne.png"
    ),
    date: "Wed, 13 May 2026",
    author: "Manzel Studio",
    excerpt:
      "Manzel Studio provides purpose-driven building design services in Melbourne for residential, commercial and health space...",
    excerptLong:
      "Manzel Studio provides purpose-driven building design services in Melbourne for residential, commercial and health space projects. Based in Preston, the studio ...",
    categories: ["studio-news", "commercial-design", "sustainable-design", "residential-design"],
  },
  {
    title: "Designing a Home on a Narrow Block",
    href: "/blog/designing-a-home-on-a-narrow-block",
    image: img("/resources/c0173968/blog-post/post-13/300-600-NarrowBlock(1).png"),
    imageLarge: img("/resources/c0173968/blog-post/post-13/450-600-NarrowBlock(1).png"),
    date: "Tue, 12 May 2026",
    author: "Manzel Studio",
    excerpt:
      "If you've bought, inherited, or are eyeing a long, narrow block, you've probably been told it is \"tricky.\" Maybe even th...",
    excerptLong:
      "If you've bought, inherited, or are eyeing a long, narrow block, you've probably been told it is \"tricky.\" Maybe even that you'll have to compromise. We don't a...",
    categories: ["planning-permits", "residential-design"],
  },
  {
    title: "How to Get a Planning Permit Approved Faster",
    href: "/blog/how-to-get-a-planning-permit-approved-faster",
    image: img("/resources/c0173968/blog-post/post-10/300-HowtoGetaPlanningPermitApprovedFaster.png"),
    imageLarge: img("/resources/c0173968/blog-post/post-10/450-HowtoGetaPlanningPermitApprovedFaster.png"),
    date: "Sun, 10 May 2026",
    author: "Manzel Studio",
    excerpt:
      "If you are planning a new home, an extension, a renovation, a multi-unit development, or a commercial project, the planning permit process can feel slow and unc...",
    excerptLong:
      "If you are planning a new home, an extension, a renovation, a multi-unit development, or a commercial project, the planning permit process can feel slow and unc...",
    categories: ["commercial-design", "planning-permits"],
  },
  {
    title: "Custom Home Design Checklist: What to Consider Before Building Your Dream Home",
    href: "/blog/custom-home-design-checklist",
    image: "/images/blog/custom-home-design-checklist.png",
    imageLarge: "/images/blog/custom-home-design-checklist.png",
    date: "Mon, 31 Aug 2026",
    author: "Manzel Studio",
    excerpt:
      "Designing a custom home lets you create a space around the way you actually live. But with decisions ranging from your floor plan and room siz...",
    excerptLong:
      "Planning your dream home? Use our custom home design checklist covering floor plans, kitchens, storage, finishes, lighting, technology, energy efficiency and more.",
    categories: ["residential-design", "planning-permits"],
    metaTitle: "Custom Home Design Checklist (2026 Guide) | Manzel Studio",
    metaDescription:
      "Planning a custom home? Use this design checklist covering floor plans, budget, storage, lighting and energy efficiency before you start building.",
    imageAlt:
      "Custom Home Design Checklist infographic showing a modern house render, floor plans, and a checklist notepad with budget, location, lifestyle needs, floor plan, design style, materials, timeline and future needs",
    keywords: [
      "custom home design checklist",
      "dream home design checklist",
      "new home design checklist",
      "custom home checklist",
      "designing a custom home",
      "home building checklist",
      "custom home design",
      "things to consider when designing a house",
    ],
  },
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const blogCategories = [
  {
    key: "planning-permits",
    label: "Planning & Permits",
    metaTitle: "Planning & Building Permits Tips & Guide | Manzel Studio",
    metaDescription:
      "Read practical guides on planning permits, council approvals and building design documentation for homes, renovations and commercial projects.",
  },
  {
    key: "residential-design",
    label: "Residential Design",
    metaTitle: "Residential Design Ideas | Industry Trends | Manzel Studio",
    metaDescription:
      "Explore residential design insights for new homes, renovations and extensions, with practical ideas for smarter layouts and better living spaces.",
  },
  {
    key: "commercial-design",
    label: "Commercial Design",
    metaTitle: "Commercial Design Insights | Industry Trends | Manzel Studio",
    metaDescription:
      "Discover commercial design articles covering functional layouts, project planning, approvals and practical building design considerations.",
  },
  {
    key: "sustainable-design",
    label: "Sustainable Design",
    metaTitle: "Sustainable Design Ideas | Insights & Guides | Manzel Studio",
    metaDescription:
      "Learn about sustainable design strategies for homes and buildings, including energy efficiency, comfort, materials and long-term performance.",
  },
  {
    key: "industry-insights",
    label: "Industry Insights",
    metaTitle: "Building Design Industry Insights | Manzel Studio",
    metaDescription:
      "Stay informed with building design industry insights, trends, approval updates and practical advice for residential and commercial projects.",
  },
  {
    key: "studio-news",
    label: "Studio News",
    metaTitle: "Find All Studio News and Updates | Manzel Studio",
    metaDescription:
      "Read the latest Manzel Studio news, project updates, service announcements and stories from our building design team in Melbourne.",
  },
];

export const faqs = [
  {
    q: "What is a Building Designer?",
    a: "A building designer is a qualified professional who creates plans, drawings, and documentation for residential and commercial construction projects. They translate your vision and budget into council-ready designs, manage building code compliance, and coordinate with engineers and surveyors from initial concept through to permit approval.",
  },
  {
    q: "What does a building designer do?",
    a: "A building designer manages your project across three key stages: Conceptual Design — they listen to your needs, analyse your site's orientation, topography, and constraints, and create initial concepts and 3D visuals so you can see your space before construction begins. Documentation & Compliance — they produce detailed floor plans, elevations, and shadow diagrams, ensuring your design meets local building codes and preparing everything needed for council planning permits and building approvals. Project Coordination — they work alongside structural engineers, surveyors, and other consultants to ensure the design is buildable, and provide documentation for builders to accurately quote the project.",
  },
  {
    q: "Do you only work in Melbourne?",
    a: "No. While we're based in Preston and work extensively across metropolitan Melbourne, we've delivered projects in regional and coastal Victoria including Safety Beach and Wesburn.",
  },
  {
    q: "Can you work with my existing builder?",
    a: "Yes. We regularly collaborate with client-nominated builders and provide the documentation needed for accurate quoting and a quality build. If you don't have a builder yet, we can recommend trusted partners.",
  },
  {
    q: "What does a free consultation include?",
    a: "A 30 to 45 minute conversation about your site, goals, and budget. We'll review what's possible, outline likely planning considerations, and explain how we'd approach the project. No obligation, no pressure.",
  },
  {
    q: "Do you handle the planning permit process?",
    a: "Yes. We manage the full town planning submission and represent you in council communications, RFIs, and (where required) VCAT support. Our designs are prepared with council requirements in mind from day one to maximise approval success.",
  },
  {
    q: "Can you design for heritage or character overlay properties?",
    a: "Absolutely. Period and heritage homes are a Manzel speciality. We've delivered sympathetic extensions and renovations across Melbourne's inner suburbs, working closely with council heritage advisors to secure approval the first time.",
  },
  {
    q: "How much does a building designer or drafting service cost?",
    a: "Costs vary depending on the size, complexity, and scope of your project. Rather than offering a one-size-fits-all fee, at Manzel Studio, we assess each project individually and provide a detailed, fixed-fee proposal after your free initial consultation. That way, you know exactly what is included from day one with no surprises along the way.",
  },
  {
    q: "What is the difference between an architect and a building designer?",
    a: "Architects and building designers both work in architectural design, creating plans for buildings and spaces. The main difference is that architects usually follow a formal registration pathway and may work on a wider range of complex projects, while building designers often focus on practical design, documentation and approval support for homes, renovations, extensions and smaller building projects.",
  },
];

export const teamMembers = [
  {
    name: "Ahmed Dirani",
    phone: "0411 847852",
    phoneHref: "tel:0411847852",
    image: img("/template/c0173968/images/team-1.png"),
  },
  {
    name: "Ali Dirani",
    phone: "0478 162 166",
    phoneHref: "tel:0478162166",
    image: img("/template/c0173968/images/team-2.png"),
  },
];

export const memberBadges = [
  { alt: "Design Matters National", image: img("/template/c0173968/images/proud-member-img1.png") },
  { alt: "Building & Plumbing Commission", image: img("/template/c0173968/images/proud-member-img2.png") },
  { alt: "Registered Building Practitioner", image: img("/template/c0173968/images/proud-member-img3.png") },
  { alt: "HIA", image: img("/template/c0173968/images/proud-member-img4.png") },
];

export const footerNav = [
  { label: "Residential", href: "/residential-building-design" },
  { label: "Commercial", href: "/commercial-building-design" },
  { label: "Health Spaces", href: "/health-space-design" },
  { label: "Assessment", href: "/site-assessment" },
  { label: "Contact Us", href: "/contact-us" },
];

export const socials = [
  { label: "Instagram", href: "https://www.instagram.com/manzel_studio/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/manzel-studio/" },
  { label: "X", href: "https://x.com/manzel_studio" },
  { label: "Pinterest", href: "https://www.pinterest.com/manzel_studio/" },
];

// ===== Residential Building Design page =====

export const residentialHero = {
  image: img("/template/c0173968/images/Banner-Img2.png"),
  eyebrow: "— Residential Service",
  titlePre: "Residential Building Designers in ",
  titleEm: "Melbourne",
  lead: "Bespoke homes, extensions, and renovations designed around the way you live.",
  sub: "Building Dreams, Designing Excellence",
  primaryCta: { label: "Book a Free Consultation", href: "/contact-us" },
  secondaryCta: { label: "View Residential Projects", href: "/our-projects" },
};

export const trustBar = [
  { label: "Council Approval Support" },
  { label: "Building Permit Guidance" },
  { label: "All Victorian Regions" },
  { label: "Registered Building Practitioners" },
];

export const residentialIntro = {
  eyebrow: "— About Us",
  titlePre: "Experienced residential designers creating personalised, practical homes.",
  paragraphs: [
    "At Manzel Studio, our residential building designers create homes, extensions, and renovations with clarity, care, and technical precision.",
    "Each design is shaped around your goals, site, budget, and day-to-day needs, ensuring the final outcome feels personal, practical, and built to last.",
    "Designed to suit your lifestyle, budget, and long-term needs.",
    "From early feasibility through to permits and documentation, our team guides you through each stage with honest advice and a clear process, helping you move forward with confidence.",
  ],
  cta: { label: "More About Us", href: "/about-us" },
};

export const whatWeDesign = {
  eyebrow: "— What We Design",
  titlePre: "Helping you create the home ",
  titleEm: "you dream of.",
  lead: "From new builds to extensions and renovations, Manzel Studio helps shape practical, thoughtful spaces around your site, lifestyle, and future plans.",
  cards: [
    {
      image: img("/template/c0173968/images/project-1.png"),
      num: "01 / New Builds",
      title: "Custom homes from the ground up.",
      body: "Helping you create a custom home shaped around your area, lifestyle, and goals.",
    },
    {
      image: img("/template/c0173968/images/project-3.png"),
      num: "02 / Home Extensions",
      title: "More space without losing character.",
      body: "Helping you add more space while keeping the original character of your home.",
    },
    {
      image: img("/template/c0173968/images/project-4.png"),
      num: "03 / Home Renovations",
      title: "Better comfort, flow, and function.",
      body: "Helping you improve comfort, flow, and everyday function.",
    },
  ],
};

export const multiResidential = {
  eyebrow: "— Multi-Residential Capability",
  titlePre: "Multi-residential ",
  titleEm: "building designer.",
  lead: "Manzel Studio specialises in feasibility and design for dual occupancy, townhouses, and multi-dwelling projects. We help you understand your site's potential, maximise value, and navigate the planning process with confidence. As experienced multi-residential building designers in Melbourne, we work across:",
  items: [
    {
      num: "01 /",
      label: "Dual Occupancy",
      body: "Maximise your block by building two separate dwellings on a single title. Ideal for homeowners looking to generate rental income or sell one residence.",
    },
    {
      num: "02 /",
      label: "Townhouses",
      body: "Design multi-level attached or semi-detached homes that deliver modern living across compact footprints. Perfect for urban infill and high-density sites.",
    },
    {
      num: "03 /",
      label: "Side-by-Side Dwellings",
      body: "Create two independently accessed homes built side by side on a subdivided lot. A cost-effective way to unlock the full development potential of your land.",
    },
  ],
};

export const whatsIncluded = {
  eyebrow: "— What's Included",
  titlePre: "What every ",
  titleEm: "home project",
  titlePost: " includes.",
  lead: "Every Manzel Studio engagement covers the full spectrum of services you need to bring a residential project to life — from idea to approval to construction.",
  items: [
    { title: "Design & Construction Drawings", body: "Bespoke plans shaped around your site and vision." },
    { title: "Feasibility Reports", body: "Clear advice before you commit." },
    { title: "3D Rendering", body: "Realistic visuals of your future space." },
    { title: "Planning Permit Support", body: "Council-ready documentation." },
    { title: "Building Permit Documentation", body: "Detailed drawings for approvals and builder clarity." },
    { title: "Energy & Sustainability Reports", body: "Designed for long-term performance." },
    { title: "Council Liaison", body: "Support with RFIs and council communication." },
    { title: "Construction Support", body: "Guidance to help protect the design intent." },
  ],
};

export const residentialProcess = {
  eyebrow: "— How We Work",
  titlePre: "Our ",
  titleEm: "four-phase",
  titlePost: " process.",
  lead: "Every Manzel Studio project follows the same trusted four-phase process. You'll always know what stage we're at and what's next.",
  phases: [
    {
      num: "01",
      tag: "Phase 01",
      title: "Strategic Discovery",
      body: "Goals, site, budget, and opportunities are explored to shape the right direction.",
    },
    {
      num: "02",
      tag: "Phase 02",
      title: "Concept Development",
      body: "Thoughtful concepts and 3D visuals bring the design vision to life.",
    },
    {
      num: "03",
      tag: "Phase 03",
      title: "Documentation & Permits",
      body: "Detailed drawings, reports, and permit-ready documentation are prepared for approval.",
    },
    {
      num: "04",
      tag: "Phase 04",
      title: "Project Support & Final Styling",
      body: "Construction support and final details help bring the project together with care.",
    },
  ],
  cta: { label: "Start Your Project", href: "/contact-us" },
};

export const whyManzel = {
  eyebrow: "— Why Manzel",
  titlePre: "Why homeowners choose ",
  titleEm: "Manzel Studio.",
  lead: "Expert guidance, thoughtful design, and clear support from first ideas through to final approval.",
  items: [
    { title: "Fast Permit Support", body: "Clear documents and council insight to keep things moving." },
    { title: "Story-Led Design", body: "Homes shaped around your lifestyle, site, and vision." },
    { title: "End-to-End Expertise", body: "Drawings, permits, 3D visuals, and reports in one place." },
    { title: "Sustainable Thinking", body: "Smarter design for comfort, efficiency, and longevity." },
    { title: "Statewide Capability", body: "Support across Melbourne and regional Victoria." },
    { title: "Transparent Process", body: "Clear steps, honest advice, and direct communication." },
  ],
};

export const residentialProjects = [
  {
    image: img("/resources/c0173968/snippet/snippet-4960/images/the%20avenue.png"),
    alt: "The Avenue, Coburg",
    loc: "Merri-bek",
    type: "Single Storey Dwelling",
    title: "The Avenue, Coburg",
  },
  {
    image: img("/resources/c0173968/snippet/snippet-4960/images/Two%20Storey%20Dwelling.png"),
    alt: "Carre Street, Elsternwick",
    loc: "Glen Eira",
    type: "Two Storey Dwelling",
    title: "Carre Street, Elsternwick",
  },
  {
    image: img("/resources/c0173968/snippet/snippet-4960/images/Banff%20Street-%20Reservoir.png"),
    alt: "Banff Street, Reservoir",
    loc: "Darebin",
    type: "Interior",
    title: "Banff Street, Reservoir",
  },
  {
    image: img("/resources/c0173968/snippet/snippet-4960/images/Preston.png"),
    alt: "Dundas Street, Preston",
    loc: "Darebin",
    type: "Interior",
    title: "Dundas Street, Preston",
  },
];

export const suburbs = {
  eyebrow: "— Where We Work",
  titlePre: "Residential building designers across ",
  titleEm: "Melbourne & Victoria.",
  body: "Our team has delivered residential projects across Melbourne's inner north, eastern suburbs, bayside, and beyond. Wherever your site is in Victoria, we know how to navigate the local planning landscape.",
  chips: [
    "Preston",
    "Coburg",
    "Reservoir",
    "Brunswick",
    "Elsternwick",
    "Templestowe",
    "Ivanhoe",
    "Spotswood",
    "Doncaster",
    "Fawkner",
    "Lalor",
    "Craigieburn",
    "Safety Beach",
  ],
};

export const residentialFaqs = [
  {
    q: "What's the difference between an architect and a building designer?",
    a: "Both can design beautiful homes. Architects are university-trained and registered with the ARBV, while building designers are also formally qualified, registered, and insured. Manzel Studio is registered with the Building Practitioners Board as a Draftsperson — Building Design (Architectural), delivering design quality with practical, cost-effective execution.",
  },
  {
    q: "How long does a residential project take?",
    a: "Most home projects take around 12 to 18 months from the first consultation through to completion, depending on the project size, council requirements, and builder timelines. At Manzel Studio, the design and documentation process is kept clear and efficient to help your project move forward with confidence.",
  },
  {
    q: "Do you handle the planning permit process?",
    a: "Yes. We manage the full town planning submission and represent you in council communications, RFIs, and (where required) VCAT support. Our designs are prepared with council requirements in mind from day one to maximise approval success.",
  },
  {
    q: "Can you design for heritage or character overlay properties?",
    a: "Absolutely. Period and heritage homes are a Manzel speciality. We've delivered sympathetic extensions and renovations across Melbourne's inner suburbs, working closely with council heritage advisors to secure approval the first time.",
  },
  {
    q: "Do you only work in Melbourne?",
    a: "No. While we're based in Preston and work extensively across metropolitan Melbourne, we've delivered projects in regional and coastal Victoria including Safety Beach and Wesburn.",
  },
  {
    q: "Can you work with my existing builder?",
    a: "Yes. We regularly collaborate with client-nominated builders and provide the documentation needed for accurate quoting and a quality build. If you don't have a builder yet, we can recommend trusted partners.",
  },
  {
    q: "What does a free consultation include?",
    a: "A 30 to 45 minute conversation about your site, goals, and budget. We'll review what's possible, outline likely planning considerations, and explain how we'd approach the project. No obligation, no pressure.",
  },
  {
    q: "How much does a residential building designer cost?",
    a: "Fees depend on the scope and complexity of your project. After our free initial consultation, we provide a detailed, fixed-fee proposal so you know exactly what's included from day one.",
  },
];

export const residentialCta = {
  eyebrow: "— Start Your Project",
  titlePre: "Let's bring your ",
  titleEm: "next home",
  titlePost: " to life.",
  body: "Your next home starts with a simple conversation. Share your ideas, explore what's possible, and get clear guidance on the best way forward.",
  primaryCta: { label: "Book a Free Consultation", href: "/contact-us" },
  secondaryCta: { label: "Call 0411 847 852", href: "tel:0411847852" },
};

// ===== Commercial Building Design page =====

export const commercialHero = {
  image: img("/resources/c0173968/snippet/snippet-8848/images/commercial-banner-image-3.png"),
  eyebrow: "— Commercial Service",
  titlePre: "Commercial Building Designer Melbourne",
  titleEm: "",
  lead: "Registered building designers for offices, retail and industrial spaces across Melbourne and Victoria.",
  sub: "Building Dreams, Designing Excellence",
  primaryCta: { label: "Book a Free Consultation", href: "/contact-us" },
  secondaryCta: { label: "View Commercial Projects", href: "/our-projects" },
};

export const commercialIntro = {
  eyebrow: "— About Us",
  titlePre: "Experienced Commercial Building Designers for Productive, Future Ready Spaces",
  paragraphs: [
    "At Manzel Studio, our commercial building designers create spaces that support business goals, whether that's boosting employee productivity, elevating your brand, or adapting to evolving usage patterns.",
    "Each project is shaped around your operations, customers, and long-term plans, ensuring the finished space works as hard as your team does.",
    "Designed to support the way your business works today and into the future.",
    "From early feasibility through to permits and documentation, our team guides you through each stage with honest advice and a clear process, helping you move forward with confidence.",
  ],
  cta: { label: "More About Us", href: "/about-us" },
};

export const commercialWhatWeDesign = {
  eyebrow: "— What We Design",
  titlePre: "Helping You Create Spaces That Work for Your Business",
  titleEm: "",
  lead: "From offices and retail fit outs to mixed use developments, Manzel Studio helps shape striking, sustainable spaces designed to adapt over time.",
  cards: [
    {
      image: img("/resources/c0173968/snippet/snippet-8857/images/commercial-img1.png"),
      num: "01 / New Building Design",
      title: "Offices & Workplaces",
      body: "Helping you design productive workplaces that reflect your brand and support your team.",
    },
    {
      image: img("/resources/c0173968/snippet/snippet-8857/images/smiley-caf%C3%A9.png"),
      num: "02 / Fitouts & Renovations",
      title: "Retail Fit Outs",
      body: "Helping you create engaging retail spaces that draw customers in and tell your story.",
    },
    {
      image: img("/resources/c0173968/snippet/snippet-8857/images/commercial-img2.png"),
      num: "03 / Development Projects",
      title: "Mixed Use Developments",
      body: "Helping you balance commercial, residential, and community uses on a single site.",
    },
  ],
};

export const commercialSpecialist = {
  eyebrow: "— Hospitality & Specialist Spaces",
  titlePre: "Hospitality and Specialist Commercial Spaces",
  titleEm: "",
  lead: "Manzel Studio also delivers commercial design for hospitality venues, fitness studios, and specialist business spaces. We help you understand site potential, navigate council requirements, and shape spaces that support your operations from day one.",
  items: [
    {
      num: "01 /",
      label: "Hospitality (cafes, restaurants, bars)",
      body: "Building design for cafes, restaurants, and bars across Melbourne, with functional layouts that meet council requirements, liquor licensing constraints, and the operational needs of a busy venue.",
    },
    {
      num: "02 /",
      label: "Fitness, wellness, and beauty studios",
      body: "Purpose-built building design for gyms, salons, yoga studios, and beauty spaces designed around equipment layout, acoustic needs, accessibility, and compliance.",
    },
    {
      num: "03 /",
      label: "Showrooms and specialist trade spaces",
      body: "Building design for showrooms, trade counters, and specialist retail environment spaces that showcase your product, support your team's workflow, and meet planning and building requirements.",
    },
  ],
};

export const commercialWhatsIncluded = {
  eyebrow: "— What's Included",
  titlePre: "What Every Commercial Project Includes",
  titleEm: "",
  titlePost: "",
  lead: "Every Manzel Studio engagement covers the full spectrum of services you need to bring a commercial project to life, from idea to approval to construction.",
  items: [
    { title: "Building Design", body: "Bespoke plans shaped around your business and brand." },
    { title: "Feasibility Reports", body: "Clear advice on site potential before you commit." },
    { title: "3D Rendering", body: "Realistic visuals of your future commercial space." },
    { title: "Planning Permit Support", body: "Council ready documentation." },
    { title: "Building Permit Documentation", body: "Detailed drawings for approvals and builder clarity." },
    { title: "Energy & Sustainability Reports", body: "Designed for long term performance and lower running costs." },
    { title: "Council Liaison", body: "Support with RFIs and council communication." },
    { title: "Construction Support", body: "Guidance to help protect the design intent." },
  ],
};

export const commercialProcess = {
  eyebrow: "— How We Work",
  titlePre: "Our Four Phase Process",
  titleEm: "",
  titlePost: "",
  lead: "Every Manzel Studio project follows the same trusted four-phase process. You'll always know what stage we're at and what's next.",
  phases: residentialProcess.phases,
  cta: { label: "Start Your Project", href: "/contact-us" },
};

export const commercialWhyManzel = {
  eyebrow: "— Why Choose Manzel",
  titlePre: "Why Businesses Choose Manzel Studio",
  titleEm: "",
  lead: "Expert guidance, thoughtful design, and clear support from first ideas through to final approval.",
  items: [
    { title: "Fast Permit Support", body: "Clear documents and council insight to keep things moving." },
    { title: "Brand Led Design", body: "Spaces shaped around your business identity, customers, and operations." },
    { title: "End to End Expertise", body: "Drawings, permits, 3D visuals, and reports in one place." },
    { title: "Sustainable Thinking", body: "Smarter design for comfort, efficiency, and lower running costs." },
    { title: "Statewide Capability", body: "Support across Melbourne and regional Victoria." },
    { title: "Transparent Process", body: "Clear steps, honest advice, and direct communication." },
  ],
};

export const commercialProjects = [
  {
    image: img("/resources/c0173968/snippet/snippet-8893/images/commercial-img1.png"),
    alt: "Atkinson Street, Templestowe",
    loc: "Melton",
    type: "Commercial",
    title: "Ravenhall /Warehouses",
  },
  {
    image: img("/resources/c0173968/snippet/snippet-8893/images/commercial-img2.png"),
    alt: "Rymer Avenue, Safety Beach",
    loc: "Whittlesea",
    type: "Commercial - Retail",
    title: "Thomastown /Barber shop",
  },
];

export const commercialSuburbs = {
  eyebrow: "— Suburbs We Work In",
  titlePre: "Commercial Building Designers Across Melbourne and Victoria",
  titleEm: "",
  body: "Our team has delivered residential projects across Melbourne's inner north, eastern suburbs, bayside, and beyond. Wherever your site is in Victoria, we know how to navigate the local planning landscape.",
  chips: suburbs.chips,
};

export const commercialFaqs = [
  {
    q: "What does a commercial building designer actually do?",
    a: "A commercial designer creates spaces that support how a business runs, balancing brand identity, customer experience, staff flow and future flexibility. At Manzel Studio, we handle every stage from feasibility and concept design to council approvals and construction support.",
  },
  {
    q: "How long does a commercial project take?",
    a: "Most commercial projects take around 6 to 18 months from the first consultation through to completion, depending on the scale, planning requirements, and builder timelines. At Manzel Studio, the design and documentation process is kept clear and efficient to help your project move forward with confidence.",
  },
  {
    q: "Do you handle the planning permit process?",
    a: "Yes. We manage the full town planning submission and represent you in council communications, RFIs, and (where required) VCAT support. Our designs are prepared with council requirements in mind from day one to maximise approval success.",
  },
  {
    q: "Can you design within heritage or character overlay properties?",
    a: "Absolutely. We've delivered commercial fit outs and developments across Melbourne's heritage suburbs, working closely with council heritage advisors to secure approval the first time.",
  },
  {
    q: "Do you only work in Melbourne?",
    a: "No. While we're based in Preston and work extensively across metropolitan Melbourne, we've delivered projects in regional and coastal Victoria including Safety Beach and Wesburn.",
  },
  {
    q: "Can you work with my existing builder or shopfitter?",
    a: "Yes. We regularly collaborate with client nominated builders and shopfitters and provide the documentation needed for accurate quoting and a quality build. If you don't have one yet, we can recommend trusted partners.",
  },
  {
    q: "What does a free consultation include?",
    a: "A 30 to 45 minute conversation about your premises, business goals, and budget. We'll review what's possible, outline likely planning considerations, and explain how we'd approach the project. No obligation, no pressure.",
  },
  {
    q: "How much does a residential building designer cost?",
    a: "Fees depend on the scope and complexity of your project. After our free initial consultation, we provide a detailed, fixed-fee proposal so you know exactly what's included from day one.",
  },
];

export const commercialCta = {
  eyebrow: "— Start Your Project",
  titlePre: "Let's Bring Your Commercial Vision to Life",
  titleEm: "",
  titlePost: "",
  body: "Your next commercial space starts with a simple conversation. Share your ideas, explore what's possible, and get clear guidance on the best way forward.",
  primaryCta: { label: "Book a Free Consultation", href: "/contact-us" },
  secondaryCta: { label: "Call 0411 847 852", href: "tel:0411847852" },
};

// ===== Health Space Design page =====

export const healthHero = {
  image: img("/resources/c0173968/snippet/snippet-10192/images/healthspaces-img1.png"),
  eyebrow: "— Health Spaces Design Service",
  titlePre: "Healthcare Building Designer in Melbourne",
  titleEm: "",
  lead: "Healthcare environments designed for healing, comfort, and efficiency.",
  sub: "Building Dreams, Designing Excellence",
  primaryCta: { label: "Book a Free Consultation", href: "/contact-us" },
  secondaryCta: { label: "View Health Space Projects", href: "/our-projects" },
};

export const healthIntro = {
  eyebrow: "— About Us",
  titlePre: "Experienced Health Space Designers for Patient Centred, Compliant Design",
  paragraphs: [
    "At Manzel Studio, building design for healthcare means focusing on patient and staff experience, operational workflow, regulatory compliance, and future adaptability.",
    "We collaborate with clinicians, planners, and technical specialists to craft spaces that support healing, comfort, and efficiency.",
    "Designed to support better experiences for patients, staff, and healthcare providers alike.",
    "From early feasibility through to permits and documentation, our team guides you through each stage with honest advice and a clear process, helping you move forward with confidence.",
  ],
  cta: { label: "More About Us", href: "/about-us" },
};

export const healthWhatWeDesign = {
  eyebrow: "— What We Design",
  titlePre: "Helping You Create Health Spaces That Work",
  titleEm: "",
  lead: "From clinics and specialist facilities to larger care spaces, Manzel Studio helps shape spaces that feel calm, functional, and welcoming for everyone who uses them.",
  cards: [
    {
      image: img("/resources/c0173968/snippet/snippet-10201/images/healthspaces-img2-1-1.png"),
      num: "01 / New Clinic Builds",
      title: "Clinics",
      body: "Efficient clinic design for patient flow and daily operations.",
    },
    {
      image: img("/resources/c0173968/snippet/snippet-10201/images/ndis-norlane-up.png"),
      num: "02 / Medical Fitouts",
      title: "Specialist Facilities",
      body: "Purpose-built specialist healthcare spaces tailored to your team.",
    },
    {
      image: img("/resources/c0173968/snippet/snippet-10201/images/healthspaces-img1-1-1.png"),
      num: "03 / Facility Expansions",
      title: "Larger Care Environments",
      body: "Flexible healthcare environments designed for comfort and long-term use.",
    },
  ],
};

export const healthInclusive = {
  eyebrow: "— Inclusive & Community Spaces",
  titlePre: "Inclusive and Community Health Building Design",
  titleEm: "",
  lead: "Manzel Studio delivers accessible, welcoming and compliant building design for inclusive accommodation, aged care and community health projects across Melbourne.",
  items: [
    {
      num: "01 /",
      label: "Inclusive and accessible accommodation",
      body: "DDA-compliant building design for SDA housing and accessible accommodation across Melbourne and Victoria.",
    },
    {
      num: "02 /",
      label: "Aged care and assisted living",
      body: "Purpose-built building design for aged care and assisted living facilities that balance clinical function with comfort and compliance.",
    },
    {
      num: "03 /",
      label: "Allied health and community wellness",
      body: "Building design for allied health clinics, community health centres, and wellness facilities — designed around workflow, privacy, and NCC compliance.",
    },
  ],
};

export const healthWhatsIncluded = {
  eyebrow: "— What's Included",
  titlePre: "What Every Health Space Project Includes",
  titleEm: "",
  titlePost: "",
  lead: "Every Manzel Studio engagement covers the full spectrum of services you need to bring a health space project to life, from idea to approval to construction.",
  items: [
    { title: "Building Design", body: "Bespoke plans shaped around clinical workflow and patient experience." },
    { title: "Feasibility Reports", body: "Clear advice on site potential, yield, and compliance before you commit." },
    { title: "3D Rendering", body: "Realistic visuals of your future facility." },
    { title: "Planning Permit Support", body: "Council ready documentation." },
    { title: "Building Permit Documentation", body: "Detailed drawings for approvals and builder clarity." },
    { title: "Energy & Sustainability Reports", body: "Designed for long term performance and reduced operating costs." },
    { title: "Council Liaison", body: "Support with RFIs and council communication." },
    { title: "Construction Support", body: "Guidance to help protect the design intent through to handover." },
  ],
};

export const healthProcess = {
  eyebrow: "— How We Work",
  titlePre: "Our Four Phase Process",
  titleEm: "",
  titlePost: "",
  lead: "Every Manzel Studio project follows the same trusted four-phase process. You'll always know what stage we're at and what's next.",
  phases: residentialProcess.phases,
  cta: { label: "Start Your Project", href: "/contact-us" },
};

export const healthWhyManzel = {
  eyebrow: "— Why Choose Manzel",
  titlePre: "Why Healthcare Providers Choose Manzel Studio",
  titleEm: "",
  lead: "Expert guidance, thoughtful design, and clear support from first ideas through to final approval.",
  items: [
    { title: "Compliance Confidence", body: "Designs prepared with healthcare regulations and council requirements in mind from day one." },
    { title: "Patient Centred Design", body: "Spaces shaped around patient experience, dignity, and clinical workflow." },
    { title: "End to End Expertise", body: "Drawings, permits, 3D visuals, and reports in one place." },
    { title: "Sustainable Thinking", body: "Smarter design for comfort, efficiency, and lower operating costs." },
    { title: "Statewide Capability", body: "Support across Melbourne and regional Victoria." },
    { title: "Transparent Process", body: "Clear steps, honest advice, and direct communication." },
  ],
};

export const healthProjects = [
  {
    image: img("/resources/c0173968/snippet/snippet-10237/images/healthspaces-img1.png"),
    alt: "Atkinson Street, Templestowe",
    loc: "Greater Dandenong",
    type: "HEALTH SPACE",
    title: "Noble Park /Medical Clinic",
  },
  {
    image: img("/pub/c0173968/editor-uploaded-image/project-slider-3.png"),
    alt: "Rymer Avenue, Safety Beach",
    loc: "Merri-bek",
    type: "HEALTH SPACE",
    title: "Coburg /Medical Clinic",
  },
  {
    image: img("/resources/c0173968/snippet/snippet-10237/images/ndis-norlane-up%20(1).png"),
    alt: "Dundas Street, Preston",
    loc: "Geelong",
    type: "HEALTH SPACE",
    title: "Norlane /NDIS",
  },
];

export const healthSuburbs = {
  eyebrow: "— Suburbs We Work In",
  titlePre: "Health Space Building Design Across Melbourne and Victoria",
  titleEm: "",
  body: "Our team has delivered health space projects across Melbourne's inner north, eastern suburbs, growth corridors, and regional Victoria.",
  chips: ["Preston", "Coburg", "Reservoir", "Brunswick", "Elsternwick", "Templestowe", "Ivanhoe", "Spottswood", "Doncaster", "Fawkner", "Lalor", "Craigieburn", "Norlane"],
};

export const healthFaqs = [
  {
    q: "What does a health space building designer actually do?",
    a: "A health space designer's facilities are tailored to clinical workflow, patient experience, and regulatory compliance - balancing functionality, accessibility, and comfort. At Manzel Studio, we manage every stage from feasibility and concept to council approvals and construction support.",
  },
  {
    q: "How long does a health space project take?",
    a: "Most health space projects take around 9 to 24 months from the first consultation through to completion, depending on the scale, regulatory requirements, fit out complexity, and builder timelines. At Manzel Studio, the design and documentation process is kept clear and efficient to help your project move forward with confidence.",
  },
  {
    q: "Do you handle the planning permit process?",
    a: "Yes. We manage the full town planning submission and represent you in council communications, RFIs, and (where required) VCAT support. Our designs are prepared with council requirements in mind from day one to maximise approval success.",
  },
  {
    q: "Are your designs compliant with healthcare regulations?",
    a: "Absolutely. We design with NCC, BCA, disability access (DDA), infection control, and relevant healthcare standards in mind. For specialist facilities, we collaborate with clinicians and technical consultants to ensure every requirement is addressed.",
  },
  {
    q: "Do you design NDIS and SDA accommodation?",
    a: "Yes. We design Specialist Disability Accommodation (SDA) compliant homes and facilities, working to the SDA Design Standard and ensuring every space supports residents with dignity, accessibility, and independence.",
  },
  {
    q: "Do you only work in Melbourne?",
    a: "No. While we're based in Preston and work extensively across metropolitan Melbourne, we've delivered projects in regional and coastal Victoria including Norlane, Safety Beach, and Wesburn.",
  },
  {
    q: "Can you work with my existing builder or fit out contractor?",
    a: "Yes. We regularly collaborate with client-nominated builders and fit-out contractors and provide the documentation needed for accurate quoting and a quality build. If you don't have one yet, we can recommend trusted partners.",
  },
  {
    q: "What does a free consultation include?",
    a: "A 30 to 45 minute conversation about your facility, clinical needs, and budget. We'll review what's possible, outline likely planning and compliance considerations, and explain how we'd approach the project. No obligation, no pressure.",
  },
  {
    q: "How much does a health building designer cost?",
    a: "Fees depend on the scope and complexity of your project. After our free initial consultation, we provide a detailed, fixed fee proposal so you know exactly what's included from day one.",
  },
];

export const healthCta = {
  eyebrow: "— Start Your Project",
  titlePre: "Let's Design a Health Space That Supports Care",
  titleEm: "",
  titlePost: "",
  body: "Your next health space starts with a simple conversation. Share your goals, explore what's possible, and get clear guidance on the best way forward.",
  primaryCta: { label: "Book a Free Consultation", href: "/contact-us" },
  secondaryCta: { label: "Call 0411 847 852", href: "tel:0411847852" },
};

// ===== Site Assessment page =====

export const siteAssessmentHero = {
  image: img("/resources/c0173968/snippet/snippet-20125/images/site-assessment-aerial.jpg"),
  eyebrow: "—  Site Assessment",
  titlePre: "Get your site assessed in up to 5 ",
  titleEm: "working days.",
  lead: "We identify the key restrictions, opportunities — such as how many dwellings your block can fit — and outline estimated costs for a Town Planning and Subdivision permit. Available for residential sites across Victoria.",
  primaryCta: { label: "Explore Our Packages", href: "#options" },
};

export const siteAssessmentTrustBar = [
  { label: "Registered Building Practitioners" },
  { label: "Fixed-Price Development Strategy" },
  { label: "Projects Across All Victoria" },
  { label: "Genuine 5-Star Client Reviews" },
];

export const siteAssessmentClarify = {
  eyebrow: "— Before You Commit",
  titlePre: "Know the rules ",
  titleEm: "before",
  titlePost: " you spend the cash.",
  body: "Before you buy a site or invest in subdivision plans, make sure your block is suitable. A Manzel Studio Site Assessment gives you an early, honest read on your land — before you spend thousands.",
  items: [
    { glyph: "⌂", title: "Development potential", body: "What can realistically be built on your site." },
    { glyph: "⌖", title: "Zoning, overlays & restrictions", body: "The council controls affecting your land." },
    { glyph: "✓", title: "Possible dwelling numbers & sizes", body: "How many homes may fit, and how big." },
    { glyph: "$", title: "Next-stage permit & consultant costs", body: "A clear view of what the next step costs." },
  ],
};

export const siteAssessmentPlans = {
  eyebrow: "— Which Option Fits Your Needs?",
  titlePre: "Two ways to ",
  titleEm: "get started.",
  lead: "Start with a Site Assessment to confirm what's physically and legally possible under Victoria's planning framework — zoning, planning controls, subdivision potential and dwelling yield. Ready to know if the numbers stack up? Our Feasibility Assessment adds detailed costings, revenue and profit forecasts, plus the likely town planning and planning permit costs, so you can make a confident go / no-go decision.",
  note: "We typically complete Site Assessments within 5 working days for residential sites across Victoria. Online assessments are available for sites up to 1000 m². For larger properties, please call 0411 847 852 for a tailored quote.",
  basic: {
    name: "Site Assessment",
    price: "$198",
    unit: "one-off",
    blurb: "Prevent expensive mistakes with an early site review.",
    cta: { label: "Order Assessment", href: "/contact-us" },
    features: [
      "Analysis of restrictions, including zoning and covenants",
      "How many dwellings can fit",
      "Dwelling sizes, bedrooms and bathrooms per dwelling",
      "Copy of basic property reports",
      "Quote for Subdivision & Town Planning permits",
      "List of approximate third-party fees",
      "15-minute phone consultation",
    ],
  },
  feature: {
    flag: "Most Popular",
    name: "Feasibility Assessment",
    price: "$695",
    unit: "one-off",
    blurb:
      "Best for new developers needing extra guidance with their site review. It goes beyond the basics to test whether the numbers truly stack up. You'll get a clear, evidence-based go / no-go verdict before you commit.",
    cta: { label: "Order Feasibility Assessment", href: "/contact-us" },
    groups: [
      {
        cat: "Site & Planning",
        items: [
          { label: "Property DNA:", body: "Zoning rules, overlays and title boundaries." },
          { label: "Red Flags:", body: "Slopes, easements, and heritage protections." },
          { label: "Services:", body: "Access to water, power, sewerage, and drainage." },
          { label: "Council Limits:", body: "Rules on building heights, setbacks, and parking." },
        ],
      },
      {
        cat: "Market & Design",
        items: [
          { label: "Site Yield:", body: "Exactly how many dwellings / lots can fit on the block." },
          { label: "Concept Layout:", body: "Basic design options showing the best use of space." },
          { label: "The Competition:", body: "Local demand, vacancy rates, and recent local sales." },
          { label: "Gross Realisable Value (GRV):", body: "Total estimated payout if you sell everything." },
        ],
      },
      {
        cat: "The Financials",
        items: [
          { label: "Buying Costs:", body: "Purchase price, stamp duty, and legal fees." },
          { label: "Hard Costs:", body: "Demolition, civil works, and actual construction." },
          { label: "Soft Costs:", body: "Architect, planner, engineer, and council application fees." },
          { label: "Holding Costs:", body: "Interest rates, loan fees, and land tax." },
          { label: "The Buffer:", body: "A 5–10% contingency fund for unexpected surprises." },
        ],
      },
      {
        cat: "Risk & Verdict",
        items: [
          { label: "Profit Margins:", body: "Clear ROI and net profit forecasts to secure bank funding." },
          { label: "'What If' Testing:", body: "How a 10% cost jump or market dip changes the profit." },
          { label: "Timeline:", body: "Project schedule from council approval to handover." },
          { label: "The Verdict:", body: "A definitive 'Go / No-Go' recommendation." },
        ],
      },
    ],
  },
};

export const siteAssessmentRisk = {
  eyebrow: "— Why Start Here",
  titlePre: "Why a Site Assessment is the ",
  titleEm: "first step",
  titlePost: " before any planning permit.",
  cards: [
    {
      title: "Early risk mitigation",
      items: [
        "Identify local council constraints and planning controls.",
        "Detect hidden liabilities, regulatory limitations, and project risks.",
        "Avoid major upfront costs until the site's full potential is confirmed.",
      ],
    },
    {
      title: "Determine the next steps",
      items: [
        "Assess which development models offer the greatest viability.",
        "Get a realistic breakdown of application fees and consultant costs.",
        "Move ahead confidently with all the facts in hand.",
      ],
    },
  ],
};

export const siteAssessmentDiscover = {
  eyebrow: "— What You'll Discover",
  titlePre: "What every ",
  titleEm: "Site Assessment",
  titlePost: " reveals.",
  lead: "Our Site Assessment de-risks your project by clarifying zoning and planning limits, mapping the town planning and planning permit pathway, and validating the feasibility of a subdivision.",
  cards: [
    {
      num: "01",
      title: "Exploring Your Site's Potential",
      body: "We assess your site's true capacity — calculating realistic dwelling yields by cross-referencing local planning controls with the physical characteristics of your land.",
    },
    {
      num: "02",
      title: "Uncovering Site Constraints & Overlays",
      body: "We identify the planning controls, overlays, easements, and covenants affecting your site, mapping out clear boundaries for what is legally and physically possible.",
    },
    {
      num: "03",
      title: "Ideal Layouts and Configurations",
      body: "Based on site constraints and zoning rules, we map out the most viable dwelling sizes, layouts, and bedroom mixes for your project.",
    },
    {
      num: "04",
      title: "Title & Planning Due Diligence",
      body: "We source and analyse your land title alongside relevant planning controls to evaluate the full legal and practical potential of your site.",
    },
    {
      num: "05",
      title: "Essential Property Reports & Data",
      body: "You'll receive key planning metrics and essential property reports mapping out your site's core development opportunities and constraints.",
    },
    {
      num: "06",
      title: "Strategy & Cost Overview",
      body: "We provide a formal Service Offer Agreement, delivering a clear quote for your Town Planning and Subdivision Permits alongside an estimate of expected third-party project costs.",
    },
  ],
};

export const siteAssessmentProcess = {
  eyebrow: "— How We Work",
  title: "The Manzel Studio process.",
  lead: "A simple, four-step path from your first enquiry to understanding exactly what's possible on your site — and the planning and subdivision route to get there.",
  phases: [
    { num: "01", title: "Choose your assessment", body: "Goals, site, budget, and opportunities are explored to shape the right direction." },
    { num: "02", title: "Submit your property details", body: "Send us your address and key details so we can review your site." },
    { num: "03", title: "We assess your property", body: "We review opportunities, constraints, risks and likely planning considerations." },
    { num: "04", title: "Receive clarity", body: "You'll understand what's possible and which next step is worth exploring." },
  ],
};

export const siteAssessmentBeforeOrder = {
  eyebrow: "— Important Note",
  titlePre: "Before you ",
  titleEm: "order.",
  items: [
    { n: "01", body: "Your Site Assessment will take up to 5 working days to complete.", bold: "5 working days" },
    {
      n: "02",
      body: "This is an initial assessment and should be used as a guide to flag development issues. Further concerns may still arise during the Town Planning process.",
      bold: "",
    },
    { n: "03", body: "We assess residential sites across Victoria.", bold: "residential sites across Victoria" },
  ],
};

export const siteAssessmentFaqs = [
  {
    q: "What is a Site Assessment?",
    a: "A Site Assessment is a preliminary evaluation of a piece of land to determine its suitability for a specific project, such as a renovation, build, or subdivision.",
  },
  {
    q: "Are your assessments available across Victoria?",
    a: "Yes. We assess residential sites throughout Melbourne and regional Victoria. Because planning rules vary by location, we handle all local council and regional planning requirements directly on your behalf.",
  },
  {
    q: "Do you need to visit my site?",
    a: "No. We complete our site assessments entirely online using your property details and official municipal planning data.",
  },
  {
    q: "How long will it take to get my report?",
    a: "You will receive your completed Site Assessment within 5 working days of submitting your details.",
  },
  {
    q: "Why start with just an assessment instead of the full project?",
    a: "Starting here saves you time and money. It gives you the necessary strategic overview to ensure you are making informed decisions before committing to expensive detailed planning, permit applications, or construction contracts.",
  },
  {
    q: "What happens if my site has good development potential?",
    a: "We make the transition to the next phase seamless. Manzel Studio provides end-to-end project delivery, meaning we can immediately step in to manage your town planning applications, secure council permits, finalise designs, and support you all the way through construction.",
  },
  {
    q: "What is the difference between a Site Assessment and a Feasibility Report?",
    a: "A Site Assessment focuses on what is physically and legally possible on the land (zoning, rules, restrictions, and maximum dwelling yield). A Feasibility Report takes it a step further to determine if the project is financially worth doing (detailed costs, projected revenue, profit margins, and return on investment).",
  },
];

export const siteAssessmentCta = {
  eyebrow: "— Ready When You Are",
  titlePre: "Ready to uncover your property's potential?",
  titleEm: "",
  titlePost: "",
  body: "Secure your Site Assessment today. Get the clear, reliable insights you need to map out your development options — long before you commit to expensive design fees.",
  primaryCta: { label: "Explore Our Packages", href: "#options" },
};

// ===== Our Projects page =====

export const ourProjectsHero = {
  image: img("/resources/c0173968/snippet/snippet-82/images/our-projects-page-banner.png"),
  title: "Our Projects",
  tagline: "Crafted with passion and purpose",
};

export const ourProjectsIntro = "Take a look at our recent creative projects.";

export const projectCategories = [
  { key: "All", label: "All" },
  { key: "Homes", label: "Homes" },
  { key: "Multi-Residential", label: "Multi - Residential" },
  { key: "Commercial", label: "Commercial" },
  { key: "Health Spaces", label: "Health Spaces" },
];

export const allProjects = [
  // Homes
  {
    title: "The Avenue, Coburg",
    category: "Homes",
    type: "Single Storey Dwelling",
    image: img("/resources/c0173968/snippet/snippet-106/images/homes-img1.png"),
    href: "/project-coburg-the-avenue",
  },
  {
    title: "Carre Street, Elsternwick",
    category: "Homes",
    type: "Two Storey Dwelling",
    image: img("/resources/c0173968/snippet/snippet-106/images/homes-img2.png"),
    href: null,
  },
  {
    title: "Banff Street, Reservoir",
    category: "Homes",
    type: "Interior",
    image: img("/resources/c0173968/snippet/snippet-106/images/homes-img3.png"),
    href: null,
  },
  {
    title: "Dundas Street, Preston",
    category: "Homes",
    type: "Interior",
    image: img("/resources/c0173968/snippet/snippet-106/images/homes-img4.png"),
    href: null,
  },
  {
    title: "Atkinson Street, Templestowe",
    category: "Homes",
    type: "Single Storey Dwelling",
    image: img("/resources/c0173968/snippet/snippet-106/images/homes-img5-1.png"),
    href: null,
  },
  {
    title: "Warburton Highway, Wesburn",
    category: "Homes",
    type: "Single Storey Dwelling",
    image: img("/resources/c0173968/snippet/snippet-106/images/homes-img7.png"),
    href: null,
  },
  // Multi-Residential
  {
    title: "Messmate Street, Lalor",
    category: "Multi-Residential",
    type: "5 Dwellings",
    image: img("/resources/c0173968/snippet/snippet-106/images/multi-residential1.png"),
    href: null,
  },
  {
    title: "Queens Parade, Fawkner",
    category: "Multi-Residential",
    type: "2 Dwellings",
    image: img("/resources/c0173968/snippet/snippet-106/images/multi-residential2.png"),
    href: null,
  },
  {
    title: "Robeson Street, Preston",
    category: "Multi-Residential",
    type: "2 Dwellings",
    image: img("/resources/c0173968/snippet/snippet-106/images/multi-residential4.png"),
    href: null,
  },
  {
    title: "Dundas Street, Preston",
    category: "Multi-Residential",
    type: "3 Dwellings",
    image: img("/resources/c0173968/snippet/snippet-106/images/multi-residential5.png"),
    href: null,
  },
  {
    title: "Dumbarton Street, Reservoir",
    category: "Multi-Residential",
    type: "4 Dwellings",
    image: img("/resources/c0173968/snippet/snippet-106/images/multi-residential6.png"),
    href: null,
  },
  {
    title: "Army Avenue, Reservoir",
    category: "Multi-Residential",
    type: "2 Dwellings",
    image: img("/resources/c0173968/snippet/snippet-106/images/multi-residential8.png"),
    href: null,
  },
  {
    title: "Rymer Avenue, Safety Beach",
    category: "Multi-Residential",
    type: "3 Dwellings",
    image: img("/resources/c0173968/snippet/snippet-106/images/multi-residential9.png"),
    href: null,
  },
  {
    title: "Hick Street, Spotswood",
    category: "Multi-Residential",
    type: "2 Dwellings",
    image: img("/resources/c0173968/snippet/snippet-106/images/multi-residential10.png"),
    href: null,
  },
  {
    title: "Pickett Street, Reservoir",
    category: "Multi-Residential",
    type: "4 Dwellings",
    image: img("/resources/c0173968/snippet/snippet-106/images/multi-residential13.png"),
    href: null,
  },
  // Commercial
  {
    title: "Ravenhall",
    category: "Commercial",
    type: "Warehouses",
    image: img("/resources/c0173968/snippet/snippet-244/images/commercial-img1-1.png"),
    href: null,
  },
  {
    title: "Thomastown",
    category: "Commercial",
    type: "Retail / Barber Shop",
    image: img("/resources/c0173968/snippet/snippet-244/images/commercial-img2.png"),
    href: null,
  },
  {
    title: "Fawkner",
    category: "Commercial",
    type: "Community Centre",
    image: img("/resources/c0173968/snippet/snippet-244/images/community-center.png"),
    href: null,
  },
  {
    title: "Warehouse",
    category: "Commercial",
    type: "Epping",
    image: img("/resources/c0173968/snippet/snippet-244/images/ware-house-up.png"),
    href: null,
  },
  {
    title: "Retail",
    category: "Commercial",
    type: "Craigieburn Smiley Café",
    image: img("/resources/c0173968/snippet/snippet-244/images/smiley-caf%C3%A9.png"),
    href: null,
  },
  {
    title: "Retail",
    category: "Commercial",
    type: "Strathmore Al Barakah Butcher",
    image: img("/resources/c0173968/snippet/snippet-244/images/butcher-strahmore.png"),
    href: null,
  },
  // Health Spaces
  {
    title: "Noble Park",
    category: "Health Spaces",
    type: "Medical Clinic",
    image: img("/resources/c0173968/snippet/snippet-106/images/healthspaces-img1.png"),
    href: null,
  },
  {
    title: "Coburg",
    category: "Health Spaces",
    type: "Medical Clinic",
    image: img("/resources/c0173968/snippet/snippet-106/images/healthspaces-img2.png"),
    href: "/project-coburg-the-avenue",
  },
  {
    title: "Norlane",
    category: "Health Spaces",
    type: "NDIS",
    image: img("/resources/c0173968/snippet/snippet-106/images/ndis-norlane-up.png"),
    href: null,
  },
];

// ===== Project: The Avenue, Coburg =====

export const projectHero = {
  image: img("/template/c0173968/images/inner-project-2.jpg"),
  eyebrow: "— The Avenue · Single Storey Home",
  title: "Single Storey Residential Building Design",
  sub: "A faithfully replicated early 1900s facade with a modern home behind it.",
};

export const projectSnapshot = [
  { lbl: "Location", val: "Coburg" },
  { lbl: "Council", val: "Merri-bek" },
  { lbl: "Built", val: "Single Storey" },
  { lbl: "Site", val: "6.7m × 40.1m" },
  { lbl: "Bedrooms", val: "3", valEm: "+ Loft" },
];

export const projectOverview = {
  eyebrow: "— At a Glance",
  titlePre: "Project ",
  titleEm: "Overview",
  paragraphs: [
    "Situated on a narrow 6.7m × 40.1m site with rear ROW access, this project maximises building potential while responding to the client's needs.",
    "We delivered a single-storey, three-bedroom home with open-plan living, a double garage, and a loft with additional amenities. The early 1900s facade was faithfully replicated, and upon entering, the home reveals modern design features seamlessly integrated with its period-inspired exterior.",
  ],
};

export const projectBrief = {
  eyebrow: "— The Client Brief",
  titlePre: "A home that combined neighbourhood charm with a ",
  titleEm: "modern family lifestyle.",
  lead: "The client set three inspiring goals to guide our creative journey together — each one shaping the way the home meets the street, the site, and daily life inside.",
  goals: [
    {
      num: "01",
      tag: "Honour the Streetscape",
      title: "A faithfully replicated early-1900s facade.",
      body: "Respecting the heritage character of Coburg, the front elevation reads as if it has always belonged on the street.",
    },
    {
      num: "02",
      tag: "Maximise the Site",
      title: "Three comfortable bedrooms and a flexible loft.",
      body: "Open-plan living, a double garage, and a loft with additional amenities — every metre of the narrow block is put to work.",
    },
    {
      num: "03",
      tag: "Modern Inside, Traditional Outside",
      title: "Period appropriate from the footpath, modern through the door.",
      body: "A seamless transition from heritage facade to contemporary interior — no compromise to either character.",
    },
  ],
};

export const projectGallery = {
  eyebrow: "— Photo Gallery",
  titlePre: "Inside ",
  titleEm: "The Avenue.",
  lead: "A walkthrough of the spaces — from the replicated facade to the open-plan living, garage, and loft above.",
  tiles: [
    { tile: "t1", image: img("/template/c0173968/images/inner-project-1.jpg"), alt: "Front facade" },
    { tile: "t2", image: img("/template/c0173968/images/inner-project-2.jpg"), alt: "Living area" },
    { tile: "t3", image: img("/template/c0173968/images/inner-project-3.jpg"), alt: "Streetscape" },
    { tile: "t4", image: img("/template/c0173968/images/inner-project-4.jpg"), alt: "Open-plan living" },
    { tile: "t5", image: img("/template/c0173968/images/inner-project-6.jpg"), alt: "Loft amenity" },
    { tile: "t6", image: img("/template/c0173968/images/inner-project-5.jpg"), alt: "Rear elevation" },
  ],
};

export const projectOutcome = [
  {
    num: "01",
    eyebrow: "— The Site Challenge",
    titlePre: "A narrow inner Melbourne block, with constraints to ",
    titleEm: "design around.",
    lead: "Every decision had to balance heritage character with modern liveability. Here's what shaped the approach:",
    items: [
      { icon: "frontage", title: "Frontage", body: "A 6.7 metre frontage limiting the front building envelope." },
      { icon: "depth", title: "Depth", body: "40.1 metres of depth requiring careful spatial sequencing." },
      {
        icon: "heritage",
        title: "Heritage Context",
        body: "Streetscape requirements and Merri-bek Council's neighbourhood character expectations.",
      },
      { icon: "rowAccess", title: "Rear Access", body: "ROW access at the rear — a quiet opportunity, not a constraint." },
    ],
  },
  {
    num: "02",
    eyebrow: "— Outcome & Results",
    titlePre: "A site fully realised — and a family ",
    titleEm: "now in residence.",
    lead: "The replicated facade, planning approval, and yield on a 268m² block all came together to deliver the brief in full.",
    items: [
      {
        icon: "approval",
        title: "Council Approval",
        body: "Secured through Merri-bek City Council with full compliance with neighbourhood character requirements.",
      },
      {
        icon: "streetscape",
        title: "Streetscape Contribution",
        body: "The replicated period facade was praised for its sensitivity to the existing Coburg streetscape.",
      },
      {
        icon: "yield",
        title: "Site Yield",
        body: "Maximised the building potential of a narrow 268m² site — 3 bedrooms, double garage, and loft amenity.",
      },
      { icon: "outcome", title: "Client Outcome", body: "Project completed and the family is now in residence." },
    ],
  },
];

export const projectJourney = {
  eyebrow: "— The Journey",
  titlePre: "Our four-phase ",
  titleEm: "process,",
  titlePost: " applied to The Avenue.",
  lead: "Every Manzel Studio project follows the same trusted four-phase process. Here's what that looked like for this home.",
  phases: [
    {
      icon: "discovery",
      num: "01",
      tag: "Phase One",
      title: "Strategic Discovery",
      body: "We explored the client's goals, site, budget, and opportunities to shape a clear project direction.",
      forNote: "Identified rear ROW access as a hidden opportunity on the narrow block.",
    },
    {
      icon: "concept",
      num: "02",
      tag: "Phase Two",
      title: "Concept Development",
      body: "Thoughtful concepts and 3D visuals refined the design to align with vision and site.",
      forNote: "Resolved the heritage facade with a modern open-plan interior behind it.",
    },
    {
      icon: "docs",
      num: "03",
      tag: "Phase Three",
      title: "Documentation & Permits",
      body: "Detailed drawings, sustainability reports, and permit packages for a smooth approval process.",
      forNote: "Approval secured through Merri-bek City Council with full compliance.",
    },
    {
      icon: "support",
      num: "04",
      tag: "Phase Four",
      title: "Support & Final Styling",
      body: "We support construction, coordinate key details, and help bring the final design to life.",
      forNote: "Project completed and the family is now in residence.",
    },
  ],
};

export const projectRelated = [
  {
    image: img("/resources/c0173968/snippet/snippet-5914/images/Elsternwick.png"),
    alt: "Elsternwick",
    loc: "Elsternwick",
    category: "Residential",
    title: "Two Storey Home Extension",
    body: "Heritage facade retained, modern two-storey extension designed for family living with inground pool and outdoor entertaining.",
    href: "/our-projects",
  },
  {
    image: img("/resources/c0173968/snippet/snippet-5914/images/project-3.png"),
    alt: "Safety Beach",
    loc: "Safety Beach",
    category: "Residential",
    title: "Dual Occupancy & Multi-Dwelling Design",
    body: "Three four-bedroom coastal dwellings near Hidden Harbour Marina, designed to maximise rental yield and long-term investment potential.",
    href: "/our-projects",
  },
  {
    image: img("/resources/c0173968/snippet/snippet-5914/images/project-4.png"),
    alt: "Preston",
    loc: "Preston",
    category: "Residential",
    title: "Side-by-Side Dwellings",
    body: "Two double-storey homes with curved walls and double garages on a 478m² corner block, maximising yield while respecting neighbourhood character.",
    href: "/our-projects",
  },
];

export const projectCta = {
  eyebrow: "— Start Your Project",
  titlePre: "Thinking about a project of ",
  titleEm: "your own?",
  titlePost: "",
  body: "Whether you're planning a new home, renovation, extension, or commercial space, every great project starts with a conversation. Let's explore what's possible together.",
  primaryCta: { label: "Book a Free Consultation", href: "/contact-us" },
  secondaryCta: { label: "See More of Our Work", href: "/our-projects" },
};

// ===== About Us page =====

export const aboutHero = {
  image: img("/template/c0173968/images/about-page-banner.png"),
  title: "Manzel Studio",
  tagline: "All you need to know about us",
};

export const aboutStory = {
  images: [
    img("/template/c0173968/images/story-1.png"),
    img("/template/c0173968/images/story-2.png"),
  ],
  title: "Our Story",
  subtitle:
    "Manzel Studio was founded on a simple belief — that great design should be both inspiring and achievable.",
  paragraphs: [
    "Drawing on decades of experience in building design, drafting, and construction, we create spaces that reflect how people live, work, and connect.",
    "Our philosophy is rooted in a balance between creativity and practicality, form and function, ambition and budget. Every project begins with listening: understanding our clients' needs, the site's potential, and the story each space can tell.",
  ],
};

export const manzelCta = {
  title: "At Manzel Studio, we see design as a collaborative journey.",
  body: "We work closely with our clients, builders, and consultants to ensure every detail is considered and every outcome is delivered with care and precision. The result is thoughtful, enduring design — spaces that feel as good as they look.",
  cta: { label: "Contact Us", href: "/contact-us" },
};

export const ourMission = {
  image: img("/template/c0173968/images/studio-bg.png"),
  title: "Our Mission",
  body: "At Manzel Studio, our mission is to design spaces that enhance the way people live, work, and connect. We combine creativity, technical expertise, and a deep understanding of our clients' needs to deliver thoughtful, enduring design outcomes.",
};

export const ourValues = {
  title: "Our Values",
  items: [
    {
      icon: img("/template/c0173968/images/value-icon-1.svg"),
      title: "Integrity",
      body: "We build honest relationships and deliver on our promises.",
    },
    {
      icon: img("/template/c0173968/images/value-icon-2.svg"),
      title: "Design Excellence",
      body: "We strive for innovation, functionality, and timeless design.",
    },
    {
      icon: img("/template/c0173968/images/value-icon-3.svg"),
      title: "Collaboration",
      body: "We believe the best results come from open dialogue and shared vision.",
    },
    {
      icon: img("/template/c0173968/images/value-icon-4.svg"),
      title: "Quality",
      body: "Every detail matters — from concept to completion.",
    },
    {
      icon: img("/template/c0173968/images/value-icon-5.svg"),
      title: "Sustainability",
      body: "We design responsibly, considering environmental impact and long-term value.",
    },
    {
      icon: img("/template/c0173968/images/value-icon-6.svg"),
      title: "Community",
      body: "We create spaces that contribute positively to people and place.",
    },
  ],
};

export const ourApproach = {
  image: img("/template/c0173968/images/our-approch-bg.png"),
  title: "Our Approach",
  paragraphs: [
    "At Manzel Studio, we believe great design begins with understanding your lifestyle, your goals, and the unique character of your site. Our process is collaborative, transparent, and tailored to every project.",
    "We start by listening, exploring ideas, budgets, and planning opportunities. From there, we develop thoughtful concepts that balance creativity with practicality, guiding you through every stage from design to approvals and construction.",
    "Our multidisciplinary team combines architectural design, documentation, and project management expertise to deliver spaces that are functional, beautiful, and buildable. We focus on clarity, communication, and craftsmanship — ensuring every project, no matter the scale, is realised with precision and purpose.",
  ],
};

export const aboutTeam = {
  title: "The Minds Behind Our Mission",
  members: [
    { name: "Ahmed Dirani", role: "Director", image: img("/template/c0173968/images/team-1b.png") },
    { name: "Ali Dirani", role: "Director", image: img("/template/c0173968/images/team-2b.png") },
    { name: "Rukaya Dirani", role: "Building Designer", image: img("/template/c0173968/images/team-3.png") },
    {
      name: "Sarah Zhang",
      role: "Building Designer",
      image: img("/resources/c0173968/snippet/snippet-100/images/EditorImage.png"),
    },
    { name: "Mohamed Ali", role: "Professional Photographer", image: img("/template/c0173968/images/team-4.png") },
  ],
};

// ===== Contact Us page =====

export const contactHero = {
  image: img("/resources/c0173968/snippet/snippet-76/images/contact-page-banner.png"),
  title: "Contact Us",
  tagline: "Reach out and let's make it happen",
};

export const contactInfo = {
  title: "Get in Touch",
  lead: "Reach out to us with any inquiries & let's turn your vision into reality!",
  callUs: [
    { name: "Ahmed Dirani", phone: "0411 847852", href: "tel:0411847852" },
    { name: "Ali Dirani", phone: "0478 162 166", href: "tel:0478162166" },
  ],
  visitUs: {
    address: "84 Hotham St, Preston VIC 3072",
    cta: { label: "Get Direction", href: "https://maps.app.goo.gl/xDaVneHVkS1kxXwi9" },
  },
  emailUs: {
    email: "info@manzelstudio.com",
    href: "mailto:info@manzelstudio.com",
    instagramHref: "https://www.instagram.com/manzel_studio/",
  },
  social: [
    { label: "Instagram", href: "https://www.instagram.com/manzel_studio/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/manzel-studio/" },
    { label: "X", href: "https://x.com/manzel_studio" },
    { label: "Pinterest", href: "https://www.pinterest.com/manzel_studio/" },
  ],
};

export const contactMapEmbed =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3154.853074053348!2d145.007563!3d-37.746591!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6472581144e63%3A0xb88be8542ff317cc!2sManzel%20Studio%20Pty%20Ltd!5e0!3m2!1sen!2sau!4v1777867550353!5m2!1sen!2sau";

// ===== Blog page =====

export const blogHero = {
  image: img("/template/c0173968/images/about-page-banner.png"),
  title: "Studio Blog",
  tagline: "Insights, guides, and stories on designing better homes, developments, and spaces across Victoria.",
};

export const logo = img(
  "/resources/c0173968/image-widget/9C7BE7E5-E401-4782-9249-4FF1D2832147/header-logo.svg"
);
export const footerLogo = img(
  "/resources/c0173968/image-widget/95DD94A0-43A6-4BF1-BDEB-219E9DCEB6EF/footer-logo.svg"
);

// ===== FAQ page =====

export const faqPageHero = {
  image: "/images/hero/hero-3.png",
  title: "Building Design FAQs",
  tagline: "Answers on permits, planning and choosing the right designer",
};

export const faqPageIntro = [
  "Planning a new home, renovation or development often raises questions about permits, council requirements and what's possible on your site. Below, Manzel Studio answers common questions on building design in Melbourne - from permits and granny flats to narrow blocks and choosing the right designer.",
];

export const faqCategories: { id: string; title: string; lead: string; items: { q: string; a: string }[] }[] = [
  {
    id: "planning-building-permits",
    title: "Planning & Building Permits",
    lead: "Understanding which approvals apply to your project is an important part of the building design process. Planning permits and building permits serve different purposes, and the requirements can vary depending on the property and proposed work.",
    items: [
      {
        q: "What is the difference between a planning permit and a building permit?",
        a: "A planning permit relates to how land can be used or developed, while a building permit confirms that proposed construction complies with applicable building regulations. Depending on your Melbourne property and project scope, you may need a planning permit, a building permit, both, or in some cases neither.",
      },
      {
        q: "How do I know if I need a planning permit in Melbourne?",
        a: "Whether you need a planning permit depends on your property's zoning, overlays, proposed development and local planning requirements. A site assessment can identify the controls affecting your property and determine whether planning approval is required before design work progresses.",
      },
      {
        q: "How do I know if I need a building permit?",
        a: "A building permit is commonly required for new homes, extensions, structural alterations and many other building works. The requirements depend on the type and scope of the project, so they should be confirmed with the relevant building professional or building surveyor.",
      },
    ],
  },
  {
    id: "granny-flats-secondary-dwellings",
    title: "Granny Flats & Secondary Dwellings",
    lead: "Granny flats and secondary dwellings can provide additional living space for family members, guests or changing household needs. Before designing one, it is important to understand the planning controls, available space and building requirements affecting your property.",
    items: [
      {
        q: "Can I build a granny flat on my property in Melbourne?",
        a: "You may be able to build a granny flat or secondary dwelling depending on your property's size, zoning, overlays, access and site constraints. An early site assessment can determine what is feasible before you invest in detailed design and documentation.",
      },
      {
        q: "Do I need a planning permit for a granny flat in Victoria?",
        a: "A planning permit may not be required for some secondary dwellings in Victoria when the proposal meets the applicable planning requirements. However, zoning, overlays and site-specific controls can affect your project, so the property should be assessed before proceeding.",
      },
      {
        q: "Do I need a building permit for a granny flat?",
        a: "A building permit will generally be required before constructing a granny flat or secondary dwelling. This confirms that the proposed building work meets the relevant building regulations and construction requirements.",
      },
    ],
  },
  {
    id: "narrow-blocks-multi-dwelling",
    title: "Small Lots, Narrow Blocks & Multi-Dwelling Sites",
    lead: "Smaller and constrained sites do not necessarily mean limited design possibilities. Careful building design can help make better use of available space while responding to access, privacy, open space and other planning considerations.",
    items: [
      {
        q: "Can I build a house on a narrow block in Melbourne?",
        a: "Yes, narrow blocks can often accommodate well-designed homes when the site is carefully planned. The design needs to consider setbacks, private open space, vehicle access, overlooking, daylight, orientation and other applicable planning requirements.",
      },
      {
        q: "Can I build a second dwelling on my property in Melbourne?",
        a: "Potentially. Whether your property can accommodate a second dwelling depends on factors such as lot size, zoning, overlays, setbacks, access, private open space and existing site conditions. A feasibility assessment can help determine the development potential of your block.",
      },
      {
        q: "Can I build a dual occupancy on my property?",
        a: "Dual occupancy may be possible if your property can satisfy the applicable planning and design requirements. Important considerations include site dimensions, setbacks, vehicle access, private open space, overlooking, neighbourhood character and other relevant planning controls.",
      },
    ],
  },
  {
    id: "site-access-trees",
    title: "Site Access & Trees",
    lead: "Existing site conditions can influence what can be designed and approved. Vehicle access, street infrastructure, trees and planning controls should therefore be considered early rather than after the design has already been developed.",
    items: [
      {
        q: "Can I have a second driveway or crossover on my property?",
        a: "A second vehicle crossover may be possible, but council approval is generally required. Council will typically consider factors such as traffic safety, crossover width and location, street trees, existing services, footpaths and the overall impact on the streetscape.",
      },
      {
        q: "Can I remove a tree from my property in Melbourne?",
        a: "Whether you can remove a tree depends on the property's planning controls and any local tree protection requirements. Trees affected by overlays or other protection controls may require council approval before they can be removed, pruned or significantly altered.",
      },
    ],
  },
  {
    id: "change-of-use-commercial",
    title: "Change of Use & Commercial Projects",
    lead: "Commercial building projects and changes of use can involve different requirements from residential projects. The existing use of the property, proposed business activity, building classification and local planning controls can all affect the approval process.",
    items: [
      {
        q: "Can I convert my property into a rooming house?",
        a: "Potentially. Converting a property into a rooming house may involve planning, building and other regulatory requirements. The existing building, proposed occupancy and applicable planning controls should be assessed before proceeding.",
      },
      {
        q: "What is a rooming house?",
        a: "A rooming house provides accommodation where residents rent rooms and may share facilities such as kitchens, bathrooms or common areas. Specific regulatory requirements can apply depending on the property's use, occupancy and configuration.",
      },
      {
        q: "Do I need a planning permit for a rooming house in Victoria?",
        a: "Whether a planning permit is required depends on the property, proposed use and applicable Victorian planning controls. It is important to confirm the requirements for the individual site rather than assuming the use is automatically permitted.",
      },
      {
        q: "Do I need a building permit for a rooming house?",
        a: "Building approval may be required where building work, a change of building classification or other regulated changes are involved. The specific requirements should be confirmed based on the existing property and proposed rooming house use.",
      },
      {
        q: "Do I need a building permit for a shop fit-out?",
        a: "A building permit may be required depending on the scope of the shop fit-out. Structural changes, alterations to essential safety measures, accessibility requirements, changes in building classification and other building work can affect whether approval is needed.",
      },
      {
        q: "Do I need a planning permit for a shop fit-out?",
        a: "A planning permit may be required if the project involves a change of use, external alterations, signage or other works controlled by the local planning scheme. A straightforward internal fit-out may have different requirements, so the site and proposed use should be checked first.",
      },
      {
        q: "Can I convert a house into a commercial property?",
        a: "Potentially, but changing a residential property to commercial use can trigger planning and building requirements. Zoning, overlays, parking, access, amenity and the proposed business use should be assessed before preparing detailed plans.",
      },
    ],
  },
  {
    id: "choosing-a-building-designer",
    title: "Choosing a Building Designer",
    lead: "Choosing the right professional can influence the design, documentation and approval stages of your project. Experience with the type of building you are planning and an understanding of local requirements are particularly important.",
    items: [
      {
        q: "What does a building designer do?",
        a: "A building designer develops practical building designs and prepares documentation for approvals and construction. Depending on the project and scope of service, this can include concept design, planning drawings, construction documentation and coordination with consultants such as engineers and building surveyors.",
      },
      {
        q: "What is the difference between a building designer and an architect?",
        a: "Building designers and architects can both design residential and commercial buildings, but their qualifications, registration pathways and scope of services can differ. The right choice depends on your project's complexity, design requirements, budget and level of professional involvement required throughout the project.",
      },
      {
        q: "Do I need an architect or a building designer?",
        a: "It depends on your project. A building designer can be well suited to many new homes, renovations, extensions and residential developments, while some clients choose architects for projects requiring a particular architectural approach or broader professional services. Rather than choosing based on title alone, consider relevant experience, previous projects, scope of service and whether the professional's approach suits what you want to achieve.",
      },
      {
        q: "Should I hire a building designer before a builder?",
        a: "In many cases, yes. Engaging a building designer early allows you to establish the brief, assess the site and develop drawings before requesting detailed construction quotes. Providing builders with consistent documentation can also make it easier to compare quotes and understand what is included in each proposal.",
      },
    ],
  },
  {
    id: "design-approval-process",
    title: "Building Design & Approval Process",
    lead: "Every building project follows a slightly different path depending on the property, design and approvals involved. Understanding the process early can help you plan the project more effectively and identify potential constraints before they become expensive changes.",
    items: [
      {
        q: "Do I need a planning permit to renovate or build a house in Melbourne?",
        a: "Not every renovation or new home requires a planning permit. Requirements depend on the property's zoning, overlays and the type and scale of the proposed development. Checking these controls early can prevent unnecessary design changes and approval delays later.",
      },
      {
        q: "How long does the building design and approval process take in Melbourne?",
        a: "The timeframe varies depending on the project's complexity, planning requirements, consultant input and council assessment. Straightforward projects may progress relatively quickly, while developments requiring planning approval, design revisions or additional reports can take several months or longer.",
      },
      {
        q: "Can a building designer work from my existing plans or sketches?",
        a: "Yes. Existing plans, sketches and ideas can provide a useful starting point for a building designer. They will generally review and develop the information further to ensure the proposed design addresses current site conditions, planning controls and applicable building requirements.",
      },
      {
        q: "Should I renovate or knock down and rebuild?",
        a: "The right option depends on your existing home's condition, planning constraints, project goals, budget and desired outcome. A feasibility assessment can compare renovation and rebuilding options before you commit to detailed design or construction.",
      },
    ],
  },
  {
    id: "builders-difficult-sites",
    title: "Builders, Difficult Sites & Construction",
    lead: "Good building design needs to work beyond the drawing board. Site conditions, construction requirements and coordination with builders can all influence how successfully a design moves from concept to completed project.",
    items: [
      {
        q: "Can a building designer design a home for a sloping or difficult site?",
        a: "Yes. An experienced building designer can develop solutions for sloping, narrow, irregular or otherwise constrained sites. The design may consider site levels, orientation, access, overlooking, retaining requirements and strategies such as stepped floor levels to respond efficiently to the land.",
      },
      {
        q: "Does a building designer oversee construction?",
        a: "It depends on the services offered by the building designer. Some provide construction-stage assistance such as responding to builder queries, reviewing design-related issues and conducting periodic site visits, while the builder remains responsible for managing construction and trades.",
      },
      {
        q: "How do I choose the right builder for my project?",
        a: "Compare builders based on relevant project experience, registration, previous work, communication, quote detail, construction timeframe and how they manage variations. Providing each shortlisted builder with the same drawings and specifications can also make their quotes easier to compare and reduce uncertainty around what is included.",
      },
    ],
  },
  {
    id: "services-getting-started",
    title: "Building Designer Services & Getting Started",
    lead: "If you are at the beginning of your project, you do not need to have every detail worked out before speaking with a building designer. An initial discussion can help clarify your priorities, understand the site and establish the next steps for design and approvals.",
    items: [
      {
        q: "How much does a building designer cost in Melbourne?",
        a: "Building designer fees vary depending on the size and complexity of the project, the level of design required and the scope of documentation and approval assistance. Defining your project requirements first allows a building designer to provide a more accurate fee proposal.",
      },
      {
        q: "What should I look for when choosing a building designer in Melbourne?",
        a: "Look for relevant project experience, a strong portfolio, clear communication and an understanding of Melbourne's planning and building requirements. You should also check exactly what services are included, from initial concept design through to documentation and approvals.",
      },
      {
        q: "Can a building designer help with council approval in Melbourne?",
        a: "Yes, depending on their scope of services. A building designer can prepare drawings and documentation required for planning applications and coordinate with relevant consultants to help guide the project through the approval process.",
      },
      {
        q: "What information do I need before meeting a building designer?",
        a: "Start with your project goals, approximate budget, preferred spaces, design ideas and any existing property documents you have. You do not need to have everything resolved before your first meeting, as site constraints and approval requirements can be investigated during the early design stages.",
      },
    ],
  },
];

export const faqPageClosing = {
  title: "Have a Building Design Question?",
  paragraphs: [
    "Every property is different. Zoning, overlays, site dimensions, orientation, existing structures and the type of development you are considering can all influence what can be designed and what approvals may be required.",
    "Getting these details checked early can provide a clearer understanding of your options before significant time or money is committed to detailed plans.",
    "Manzel Studio works across residential and commercial building design in Melbourne, including new homes, renovations, extensions, multi-dwelling developments and commercial projects.",
    "If you are considering a building project and are unsure where to begin, speak with Manzel Studio about your property, design ideas and next steps.",
  ],
  cta: { label: "Get In Touch", href: "/contact-us" },
};
