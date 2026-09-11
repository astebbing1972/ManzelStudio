import { img } from "./content";

export type ArticleColumn = {
  heading?: string;
  label?: string;
  sub?: string;
  list?: string[];
  paragraphs?: string[];
  subsections?: ArticleSubsection[];
  image?: { src: string; alt: string };
};

export type ArticleTable = {
  headers: string[];
  rows: string[][];
};

export type ArticleSubsection = {
  heading: string;
  paragraph: string;
};

export type ArticleSection = {
  heading: string;
  level?: 2 | 3;
  image?: { src: string; alt: string };
  banner?: { src: string; alt: string; aspect?: string };
  leadIn?: string | string[];
  paragraphs?: string[];
  list?: string[];
  ordered?: boolean;
  groups?: { label: string; items: string[] }[];
  compact?: boolean;
  columns?: ArticleColumn[];
  wideImageColumn?: boolean;
  table?: ArticleTable;
  subsections?: ArticleSubsection[];
};

export type Article = {
  slug: string;
  intro: string[];
  sections: ArticleSection[];
  conclusion?: string[];
  faqs: { q: string; a: string }[];
};

export const blogArticles: Record<string, Article> = {
  "essential-steps-architectural-site-analysis": {
    slug: "essential-steps-architectural-site-analysis",
    intro: [
      "Every successful building begins with a thorough understanding of the site. Before sketches, floor plans, or 3D models are developed, architects and building designers must carefully evaluate the land where the project will be built. This process, known as an architectural site analysis, helps identify opportunities, constraints, environmental conditions, and regulatory requirements that influence the final design.",
      "Whether you're planning a custom [home](/residential-building-design), [commercial development](/commercial-building-design), [medical spaces](/health-space-design), or a multi-unit project, conducting a detailed site analysis can save time, reduce construction costs, and prevent costly design revisions later in the process.",
      "This guide explains the essential steps involved in performing a [professional architectural site analysis](/site-assessment) and why it is one of the most important stages of any new building project.",
    ],
    sections: [
      {
        heading: "Why Site Analysis Is Important in Building Design",
        paragraphs: [
          "A thorough site analysis lays the groundwork for a practical and well-informed building design. It enables [architects and building designers](/blog/building-designer-vs-architect-vs-draftsman-australia) to make decisions based on real site conditions rather than assumptions, helping minimise design revisions and construction challenges. By identifying opportunities and constraints early, the project can progress more efficiently while delivering a better outcome for both the client and future occupants.",
        ],
        list: [
          "Designs a building suited to the land, not a generic layout dropped onto it",
          "Improves natural light, ventilation and overall energy efficiency",
          "Reduces the risk of unexpected construction costs",
          "Identifies planning and regulatory constraints early",
          "Protects significant trees, vegetation and neighbouring amenity",
          "Strengthens the case for a smoother planning permit approval",
          "Informs smarter siting, orientation and material choices",
          "Highlights opportunities the site offers, not just its limitations",
          "Builds client confidence that the design is grounded in evidence",
        ],
      },
      {
        heading: "Essential Steps to Perform an Architectural Site Analysis",
      },
      {
        heading: "Step 1: Understand the Client's Goals",
        level: 3,
        compact: true,
        image: {
          src: img("/pub/c0173968/editor-uploaded-image/Understand the Client's Goals-2.png"),
          alt: "Step 1: Understand the Client's Goals",
        },
        leadIn: "Before visiting the site, we clarify the project's objectives. Typical questions include:",
        list: [
          "What type of building is being proposed?",
          "How many occupants will use it?",
          "What is the available budget?",
          "Are there future expansion plans?",
          "What lifestyle or business requirements exist?",
        ],
        paragraphs: [
          "Before any technical assessment begins, we clarify what the project actually needs to achieve — the intended use, expected occupancy, budget range, and whether the client wants room to expand later. This shapes how the rest of the analysis is prioritised.",
        ],
      },
      {
        heading: "Step 2: Collect Existing Site Information",
        level: 3,
        compact: true,
        image: {
          src: img("/pub/c0173968/editor-uploaded-image/Collect Existing Site Information.png"),
          alt: "Step 2: Collect Existing Site Information",
        },
        leadIn: "We gather everything already on record, including:",
        groups: [
          { label: "Property Details", items: ["Property boundaries", "Easements", "Existing structures", "Levels", "Services"] },
          { label: "Planning Information", items: ["Local planning schemes", "Zoning regulations", "Building overlays", "Heritage restrictions", "Bushfire or flood overlays", "Environmental controls"] },
          { label: "Utilities", items: ["Water", "Sewer", "Electricity", "Gas", "Stormwater", "Telecommunications"] },
        ],
        paragraphs: [
          "We gather everything already on record: property surveys, title boundaries, existing planning overlays, and utility or services information. Starting from accurate data avoids assumptions that can unravel later in the process.",
        ],
      },
      {
        heading: "Step 3: Visit the Site",
        level: 3,
        compact: true,
        image: {
          src: img("/pub/c0173968/editor-uploaded-image/Visit the Site.png"),
          alt: "Step 3: Visit the Site",
        },
        leadIn: "On site, we observe and record details such as:",
        list: [
          "Land slope",
          "Ground conditions",
          "Existing trees",
          "Drainage patterns",
          "Vehicle access",
          "Pedestrian movement",
          "Noise sources",
          "Nearby buildings",
          "Views",
          "Privacy",
          "Potential hazards",
        ],
        paragraphs: [
          "Desktop research only tells part of the story. A physical site visit lets us observe how the block actually feels — the fall of the land, existing structures, noise, outlook, and the character of the surrounding street — details that rarely come through in documents alone.",
        ],
      },
      {
        heading: "Step 4: Assess Topography and Landform",
        level: 3,
        compact: true,
        image: {
          src: img("/pub/c0173968/editor-uploaded-image/Assess Topography and Landform.png"),
          alt: "Step 4: Assess Topography and Landform",
        },
        leadIn: "Slope, elevation and ground conditions typically call for responses such as:",
        groups: [
          { label: "Slope", items: ["Retaining walls", "Split-level designs", "Additional excavation"] },
          { label: "Elevation", items: ["Better views", "Improved airflow", "Reduced flood risk"] },
          { label: "Soil Conditions", items: ["Soil type", "Bearing capacity", "Rock presence", "Ground movement potential"] },
        ],
        paragraphs: [
          "Slope, elevation changes and soil conditions all influence how a building can sit on its site. Understanding topography early helps avoid excessive cut-and-fill, retaining costs, or drainage issues further down the track.",
        ],
      },
      {
        heading: "Step 5: Study Climate and Environmental Conditions",
        level: 3,
        compact: true,
        image: {
          src: img("/pub/c0173968/editor-uploaded-image/Study Climate and Environmental Conditions.png"),
          alt: "Step 5: Study Climate and Environmental Conditions",
        },
        leadIn: "Climate factors we study include:",
        list: ["Sun Path", "Wind Direction", "Rainfall", "Temperature"],
        paragraphs: [
          "Sun path, prevailing wind, rainfall and seasonal temperature swings all inform orientation and passive design decisions — where living spaces sit, where glazing goes, and how the building manages heat and light across the year.",
        ],
      },
      {
        heading: "Step 6: Evaluate Existing Vegetation",
        level: 3,
        compact: true,
        image: {
          src: img("/pub/c0173968/editor-uploaded-image/Step 6 Evaluate Existing Vegetation.png"),
          alt: "Step 6: Evaluate Existing Vegetation",
        },
        leadIn: "We check for factors such as:",
        list: ["Significant trees", "Protected vegetation", "Root zones", "Native species", "Landscape opportunities"],
        paragraphs: [
          "Established trees, protected species and native plantings can all affect what's buildable on a site. We assess what should be retained, what's protected under local controls, and how landscaping can be worked into the design rather than removed by default.",
        ],
      },
      {
        heading: "Step 7: Analyse Access and Circulation",
        level: 3,
        compact: true,
        image: {
          src: img("/pub/c0173968/editor-uploaded-image/Analyse Access and Circulation.png"),
          alt: "Step 7: Analyse Access and Circulation",
        },
        leadIn: "We consider access across three categories:",
        paragraphs: [
          "How people, vehicles and construction traffic move around a site affects everything from driveway placement to staging a build. We map existing access points and consider how they'll function once the project is complete.",
        ],
        groups: [
          { label: "Vehicle Access", items: ["Driveway location", "Parking opportunities", "Turning circles", "Service vehicle access"] },
          { label: "Pedestrian Access", items: ["Entry paths", "Accessibility", "Safety", "Connectivity"] },
          { label: "Construction Access", items: ["Machinery access", "Material delivery", "Temporary site access"] },
        ],
      },
      {
        heading: "Step 8: Examine Surrounding Context",
        level: 3,
        compact: true,
        image: {
          src: img("/pub/c0173968/editor-uploaded-image/Examine Surrounding Context.png"),
          alt: "Examine Surrounding Context",
        },
        leadIn: "Context factors we review include:",
        list: [
          "Building heights",
          "Setbacks",
          "Streetscape character",
          "Privacy",
          "Overshadowing",
          "Views",
          "Traffic",
          "Local amenities",
        ],
        paragraphs: [
          "Neighbouring buildings, streetscape character and local landmarks all inform how a new design should sit within its setting — respecting context while still making room for a considered, contemporary response.",
        ],
      },
      {
        heading: "Step 9: Review Planning and Building Regulations",
        level: 3,
        compact: true,
        image: {
          src: img("/pub/c0173968/editor-uploaded-image/Review Planning and Building Regulations.png"),
          alt: "Step 9: Review Planning and Building Regulations",
        },
        leadIn: "Planning controls we check include:",
        list: ["Zoning", "Setbacks", "Height Restrictions", "Site Coverage", "Private Open Space", "Heritage Controls"],
        paragraphs: [
          "Zoning, setbacks, height limits and overlays set the framework the design has to work within. Reviewing these early means the concept is shaped around what's achievable, rather than redesigned after a planning knock-back.",
        ],
      },
      {
        heading: "Step 10: Identify Opportunities and Constraints",
        level: 3,
        compact: true,
        image: {
          src: img("/pub/c0173968/editor-uploaded-image/Identify Opportunities and Constraints.png"),
          alt: "Step 10: Identify Opportunities and Constraints",
        },
        leadIn: "This typically breaks down into:",
        groups: [
          { label: "Opportunities", items: ["Scenic views", "Northern solar access", "Existing landscaping", "Corner block access", "Natural ventilation"] },
          { label: "Constraints", items: ["Easements", "Flood risk", "Steep slopes", "Poor soil", "Noise", "Bushfire overlays"] },
        ],
        paragraphs: [
          "With the groundwork done, we pull everything together into a clear picture of the site's strengths and limitations — the outlook worth capturing, the boundary that limits width, the fall that could become a feature rather than a problem.",
        ],
      },
      {
        heading: "Step 11: Document Your Findings",
        level: 3,
        compact: true,
        image: {
          src: img("/pub/c0173968/editor-uploaded-image/Document Your Findings.png"),
          alt: "Document Your Findings",
        },
        leadIn: "Findings are documented and typically include:",
        list: ["Boundaries", "Levels", "Vegetation", "Services", "Access", "Sun movement", "Wind direction", "Shading", "Drainage"],
        paragraphs: [
          "The analysis is captured in site analysis plans and environmental diagrams that carry through into the design process — a practical reference the whole project team can return to as decisions are made.",
        ],
      },
      {
        heading: "Common Mistakes to Avoid During Site Analysis",
        list: [
          "Skipping a physical site visit and relying on documents alone",
          "Underestimating the impact of slope and soil conditions",
          "Ignoring solar orientation until late in the design",
          "Ignoring protected trees or vegetation controls",
          "Overlooking overlays that affect what can be built",
          "Failing to consider construction access early",
          "Treating site analysis as a formality rather than a design tool",
        ],
      },
      {
        heading: "Tools Commonly Used for Architectural Site Analysis",
        leadIn: "[Modern building designers](/) and architects use a combination of traditional and digital tools, including:",
        list: [
          "Site surveys",
          "GPS equipment",
          "Drones",
          "GIS mapping software",
          "CAD software",
          "BIM platforms",
          "Sun path analysis tools",
          "Wind simulation software",
          "Soil reports",
          "Planning maps",
          "Environmental databases",
        ],
      },
      {
        heading: "How Site Analysis Influences Building Design",
        list: [
          "Building orientation and room placement",
          "Roof form and massing decisions",
          "Window and glazing placement for light and privacy",
          "Material selection suited to climate and context",
          "Driveway, parking and access layout",
          "Outdoor living and landscape zones",
          "Stormwater and drainage strategy",
          "Energy efficiency and passive design outcomes",
          "Overall buildability and construction sequencing",
        ],
      },
    ],
    conclusion: [
      "Investing time in a detailed site analysis reduces risks, supports better design decisions, and helps avoid [costly issues during construction](https://www.ssos.net.au/blog/construction-site-safety-planning-and-practice-guide). Whether the project involves a new home, commercial development, or a mixed-use building, thoroughly understanding the site is one of the smartest investments made before the design process begins.",
    ],
    faqs: [
      {
        q: "What is the purpose of an architectural site analysis?",
        a: "It's the process of studying a site's physical, environmental, regulatory and contextual conditions before design begins, so the building responds to the land rather than being imposed on it.",
      },
      {
        q: "When should a site analysis be completed?",
        a: "As early as possible — ideally before any concept design work starts, so the findings can genuinely shape the design rather than justify decisions already made.",
      },
      {
        q: "Who performs an architectural site analysis?",
        a: "Typically the building designer or architect leading the project, often supported by surveyors and other consultants for specialist information such as contour surveys or arborist reports.",
      },
      {
        q: "What information is collected during a site analysis?",
        a: "Topography, climate and solar orientation, vegetation, access and circulation, surrounding context, and the planning and building regulations that apply to the site.",
      },
      {
        q: "Can a site analysis improve sustainability?",
        a: "Yes — by identifying orientation, shading, wind and vegetation early, it allows passive design strategies to be built into the concept from the outset rather than added on later.",
      },
    ],
  },

  "building-designer-vs-architect-vs-draftsman-australia": {
    slug: "building-designer-vs-architect-vs-draftsman-australia",
    intro: [
      "If you're planning a new home, renovation, extension, townhouse development or commercial project, one of the first decisions you'll need to make is whether to work with a building designer, architect or draftsman.",
      "While these professions all contribute to the design and documentation of buildings, they each have different qualifications, responsibilities and areas of expertise. Understanding these differences can help you choose the right professional for your project, budget and goals.",
      "In Australia, the most suitable choice often depends on the project's complexity, local regulatory requirements, and the level of design and project support you need.",
      "This guide explains the roles of each professional, compares their qualifications and services, and helps you determine which option is right for your project.",
    ],
    sections: [
      {
        heading: "What Does a Building Designer Do?",
        leadIn:
          "A [building designer](/) is a design professional who specialises in creating functional, compliant and buildable residential and commercial spaces.",
        columns: [
          {
            label: "Building designers typically work on:",
            list: [
              "[New homes](/residential-building-design)",
              "Home renovations",
              "Home extensions",
              "Dual occupancy developments",
              "Townhouse developments",
              "[Commercial fit-outs](/commercial-building-design)",
              "[Health spaces](/health-space-design)",
              "Mixed-use developments",
            ],
            paragraphs: [
              "Their role extends beyond creating floor plans. A building designer often manages the design process from concept through to planning approvals, building permits and construction documentation.",
            ],
          },
          {
            label: "A building designer may provide:",
            list: [
              "Site analysis",
              "Concept design",
              "Design development",
              "Town planning documentation",
              "Building permit documentation",
              "Construction drawings",
              "Consultant coordination",
              "Council liaison",
              "Sustainability and energy compliance coordination",
            ],
            paragraphs: [
              "Many building designers also work closely with engineers, surveyors, energy assessors and builders throughout the project lifecycle.",
            ],
          },
        ],
      },
      {
        heading: "What Does an Architect Do?",
        leadIn:
          "An architect is a registered design professional who has completed an accredited university qualification, gained industry experience and satisfied registration requirements established by the relevant architectural registration authority.",
        columns: [
          {
            label: "Architects work across a wide range of project types, including:",
            list: [
              "Residential homes",
              "Multi-residential developments",
              "Commercial buildings",
              "Educational facilities",
              "Healthcare projects",
              "Public buildings",
            ],
            paragraphs: [
              "The title \"Architect\" is protected under Australian legislation and can only be used by appropriately registered professionals.",
            ],
          },
          {
            label: "Architects often focus on:",
            list: [
              "Complex design challenges",
              "Large-scale projects",
              "Architectural innovation",
              "Detailed design development",
              "High-level project leadership",
            ],
            paragraphs: [
              "Architects are often engaged for highly complex or specialised projects where advanced design, technical coordination and project leadership are required.",
            ],
          },
        ],
      },
      {
        heading: "What Does a Draftsman Do?",
        leadIn: [
          "A draftsman, also known as a draftsperson or drafting technician, specialises in preparing technical drawings and documentation.",
          "While architects and building designers often lead the design process, draftsmen generally focus on accurately documenting the design for construction and approval.",
        ],
        columns: [
          {
            label: "Typical Draftsman Responsibilities:",
            list: [
              "Produce technical drawings",
              "Prepare construction documentation",
              "Amend existing plans",
              "Convert sketches into digital plans",
              "Assist with permit documentation",
              "Support designers, architects and builders",
            ],
          },
          {
            label: "Draftsmen commonly:",
            list: ["Create technical plans", "Document design details", "Prepare construction drawings", "Support design teams"],
          },
        ],
        paragraphs: [
          "Modern drafting professionals commonly use [CAD](https://www.autodesk.com/au/solutions/cad-software) (Computer-Aided Design) and [BIM](https://www.bim.com/) (Building Information Modelling) software to prepare detailed building documentation.",
        ],
      },
      {
        heading: "Building Designer, Architect or Draftsman: Quick Comparison",
        table: {
          headers: ["Profession", "Primary Role", "Best Suited For", "Typical Services"],
          rows: [
            [
              "Building Designer",
              "Design, documentation and project coordination",
              "New homes, renovations, extensions, townhouses and small-to-medium developments",
              "Design concepts, permit documentation, consultant coordination",
            ],
            [
              "Architect",
              "Registered design professional",
              "Complex residential, commercial and specialised projects",
              "Architectural design, project leadership, consultant coordination",
            ],
            [
              "Draftsman",
              "Technical documentation specialist",
              "Drafting support, plan preparation and documentation",
              "Construction drawings, drafting and plan amendments",
            ],
          ],
        },
        paragraphs: [
          "For many residential projects, homeowners may find that both building designers and architects can provide suitable design solutions, while draftsmen typically focus on preparing technical documentation.",
        ],
      },
      {
        heading: "Qualifications Comparison",
        table: {
          headers: ["Profession", "Typical Qualification", "Registration"],
          rows: [
            ["Building Designer", "Diploma, Advanced Diploma or Degree in Building Design or related field", "Varies by state"],
            ["Architect", "Accredited Architecture Degree + Registration", "Mandatory"],
            ["Draftsman", "Drafting qualification or CAD training", "Generally not required"],
          ],
        },
      },
      {
        heading: "Cost Comparison: Architect vs Building Designer vs Draftsman",
        leadIn: "Cost is often a major factor when selecting a design professional.",
        columns: [
          { heading: "Draftsman", sub: "Suitable for:", list: ["Simple documentation", "Existing design amendments", "Basic drafting work"] },
          { heading: "Building Designer", sub: "Suitable for:", list: ["New homes", "Renovations", "Extensions", "Residential developments"] },
          {
            heading: "Architect",
            sub: "Suitable for:",
            list: ["Complex projects", "Landmark homes", "Commercial developments", "Specialist architectural projects"],
          },
        ],
        paragraphs: ["The best choice should be based on project requirements rather than fees alone."],
      },
      {
        heading: "Which Professional Should You Choose?",
        banner: {
          src: img("/pub/c0173968/editor-uploaded-image/Which Professional Should You Choose.png"),
          alt: "Which Professional Should You Choose",
          aspect: "1080/693",
        },
        columns: [
          {
            heading: "Choose a Building Designer If You Are:",
            list: [
              "Building a new home",
              "Planning an extension",
              "Renovating an existing property",
              "Developing townhouses",
              "Seeking practical design solutions",
              "Looking for support through permits and approvals",
            ],
          },
          {
            heading: "Choose an Architect If You Are:",
            list: [
              "Designing a highly complex building",
              "Developing a large commercial project",
              "Seeking a highly specialised architectural outcome",
              "Working on a landmark project",
            ],
          },
          {
            heading: "Choose a Draftsman If You Need:",
            list: ["Technical drafting only", "Minor plan amendments", "Documentation support", "Existing design updates"],
          },
        ],
      },
      {
        heading: "Common Myths About Building Designers, Architects and Draftsmen",
        subsections: [
          {
            heading: "Myth 1: Building Designers Can Only Design Small Projects",
            paragraph: "Many building designers successfully deliver luxury homes, townhouse developments and commercial projects.",
          },
          {
            heading: "Myth 2: Architects Always Produce Better Designs",
            paragraph:
              "Project outcomes depend on the experience, expertise and creativity of the individual professional rather than their title alone.",
          },
          {
            heading: "Myth 3: Draftsmen Only Draw Plans",
            paragraph:
              "Modern drafting professionals often possess advanced technical knowledge and play an important role in construction documentation and project delivery.",
          },
        ],
      },
      {
        heading: "Why Choosing the Right Professional Matters",
        banner: {
          src: img("/pub/c0173968/editor-uploaded-image/Why Choosing the Right Professional Matters.png"),
          alt: "Why Choosing the Right Professional Matters",
          aspect: "1080/658",
        },
        leadIn: "The design phase influences every stage of a building project, including:",
        list: ["Construction costs", "Buildability", "Planning approvals", "Building approvals", "Energy efficiency", "Project timelines", "Long-term property value"],
        paragraphs: [
          "Selecting the right professional from the beginning can help reduce risk, improve project outcomes and create a smoother pathway from concept to construction.",
        ],
      },
      {
        heading: "Questions to Ask Before Hiring a Design Professional",
        leadIn: "Before appointing a building designer, architect or draftsman, consider asking:",
        list: [
          "Are you registered or licensed where required?",
          "Have you completed similar projects?",
          "Can you provide references or examples of previous work?",
          "Do you prepare planning permit documentation?",
          "Do you prepare building permit documentation?",
          "Do you coordinate consultants?",
          "What is included in your fee proposal?",
          "What level of project support do you provide?",
        ],
        paragraphs: ["The answers can help you determine whether the professional is the right fit for your project."],
      },
      {
        heading: "What About Melbourne and Victorian Projects?",
        leadIn: [
          "If you are [planning a project in Melbourne](/blog/building-design-services-melbourne) or regional Victoria, it is important to work with a professional who understands local planning controls and approval processes.",
          "Key considerations may include:",
        ],
        list: [
          "ResCode requirements",
          "Neighbourhood character provisions",
          "Planning overlays",
          "Heritage controls",
          "Bushfire management requirements",
          "Energy efficiency standards",
          "Planning permit requirements",
          "Building permit requirements",
        ],
        paragraphs: ["A professional familiar with Victorian regulations can help streamline the approval process and reduce the likelihood of costly delays."],
      },
    ],
    conclusion: [
      "There is no single answer when comparing a building designer, architect and draftsman.",
      "For many residential projects across Melbourne and Australia, a qualified building designer can provide the ideal combination of design expertise, practical construction knowledge and project coordination. Architects may be better suited to highly complex or specialised developments, while draftsmen remain valuable technical documentation professionals.",
      "The most important consideration is choosing a professional with the right experience, qualifications and understanding of your specific project.",
      "Whether you are planning a new home, extension, renovation or development, obtaining professional advice early can help create a more efficient and successful project outcome.",
    ],
    faqs: [
      {
        q: "Is a building designer cheaper than an architect?",
        a: "Fees vary depending on the project scope and complexity. Building designers are commonly engaged for residential projects because they often provide design, documentation and approval support in a cost-effective manner.",
      },
      {
        q: "Can a building designer prepare plans for council approval?",
        a: "Yes. Building designers commonly prepare planning permit and building permit documentation and coordinate consultants throughout the approval process.",
      },
      {
        q: "What is the difference between a draftsman and a building designer?",
        a: "A draftsman primarily focuses on technical documentation and drawings, while a building designer typically provides design development, project coordination, permit documentation and broader project support.",
      },
      {
        q: "Can a building designer design a new home?",
        a: "Yes. Building designers regularly design new homes, renovations, extensions and residential developments.",
      },
      {
        q: "Do I need an architect for a house extension?",
        a: "Not necessarily. Many house extensions are successfully designed and documented by qualified building designers. The most suitable professional depends on the complexity of the project and your specific requirements.",
      },
      {
        q: "Can a draftsman design a house?",
        a: "A draftsman may prepare house plans and documentation, but their role is typically focused on drafting and technical documentation rather than leading the overall design process.",
      },
    ],
  },

  "commercial-building-design-insights": {
    slug: "commercial-building-design-insights",
    intro: [
      "Commercial buildings have evolved significantly over the past decade. Today's businesses require spaces that do more than provide shelter - they need environments that support productivity, attract customers, improve sustainability and adapt to changing operational needs.",
      "From office developments and retail premises to healthcare facilities and mixed-use projects, commercial building design plays a crucial role in determining how a building performs over its lifespan. In Melbourne's competitive property market, thoughtful design can create long-term value while helping businesses achieve their operational goals.",
    ],
    sections: [
      {
        heading: "Why Commercial Building Design Matters",
        leadIn: [
          "A [well-designed commercial building](/our-projects) can influence every aspect of a business operation. Beyond aesthetics, design impacts efficiency, customer experience, employee wellbeing and long-term maintenance costs.",
          "Effective commercial design can help:",
        ],
        list: [
          "Improve workplace functionality",
          "Enhance customer and visitor experiences",
          "Increase property value",
          "Support sustainability goals",
          "Reduce operating costs",
          "Improve accessibility and compliance",
          "Create flexibility for future growth",
        ],
        paragraphs: [
          "As Melbourne continues to grow and diversify, commercial developments must respond to changing expectations around technology, sustainability and user experience.",
        ],
      },
      { heading: "Key Principles of Successful Commercial Building Design" },
      {
        heading: "1. Prioritising Functionality",
        level: 3,
        leadIn: [
          "Every successful commercial project begins with a clear understanding of how the building will be used.",
          "Design considerations typically include:",
        ],
        list: ["Staff workflows", "Customer movement patterns", "Equipment requirements", "Storage needs", "Accessibility requirements", "Future operational changes"],
        paragraphs: ["A building should support business activities efficiently while remaining practical for daily use."],
      },
      {
        heading: "2. Designing for Flexibility",
        level: 3,
        leadIn: [
          "Commercial requirements can change over time. Flexible spaces allow businesses to adapt without requiring extensive renovations.",
          "Common strategies include:",
        ],
        list: ["Open-plan layouts", "Modular workspaces", "Multi-purpose meeting areas", "Adaptable retail configurations", "Flexible tenancy arrangements"],
        paragraphs: ["Future-proofing a building can help reduce long-term costs while extending the usefulness of the space."],
      },
      {
        heading: "3. Sustainability and Environmental Performance",
        level: 3,
        leadIn: [
          "Sustainability is now a major consideration in commercial building projects across Melbourne.",
          "Modern commercial developments often incorporate:",
        ],
        list: ["Passive solar design", "Natural ventilation", "Energy-efficient lighting", "High-performance glazing", "Water-saving initiatives", "Sustainable building materials"],
        paragraphs: [
          "These strategies can improve occupant comfort while reducing environmental impacts and operating expenses.",
          "Businesses planning a new development can benefit from understanding the broader [professional building design process](/blog/building-design-services-melbourne), from initial feasibility assessments through to approvals and construction documentation.",
        ],
      },
      { heading: "Emerging Commercial Building Design Trends" },
      {
        heading: "1. Smart Building Technology",
        level: 3,
        leadIn: ["Technology is becoming increasingly integrated into commercial environments.", "Smart building features may include:"],
        list: ["Automated lighting systems", "Intelligent climate control", "Building management systems", "Occupancy monitoring", "Security integration", "Energy consumption tracking"],
        paragraphs: ["These technologies can improve efficiency while providing valuable operational insights."],
      },
      {
        heading: "2. Wellness-Focused Workspaces",
        level: 3,
        leadIn: ["Employee wellbeing has become an important consideration in workplace design.", "Modern commercial spaces often incorporate:"],
        list: ["Increased natural daylight", "Improved air quality", "Acoustic treatments", "Collaborative spaces", "Access to outdoor areas", "Biophilic design elements"],
        paragraphs: ["Creating healthier environments can support productivity, comfort and employee satisfaction."],
      },
      {
        heading: "3. Mixed-Use Development Growth",
        level: 3,
        leadIn: ["Mixed-use developments continue to gain popularity throughout Melbourne.", "These projects may combine:"],
        list: ["Commercial offices", "Retail spaces", "Residential apartments", "Hospitality venues", "Community facilities"],
        paragraphs: ["The integration of multiple uses can create vibrant, active precincts that maximise site potential."],
      },
      {
        heading: "4. Sustainable Urban Design",
        level: 3,
        leadIn: ["Modern commercial developments increasingly focus on how buildings contribute to the surrounding community.", "Design considerations may include:"],
        list: ["Streetscape activation", "Walkability", "Public realm improvements", "Green infrastructure", "Public transport accessibility", "Community connectivity"],
        paragraphs: ["Well-integrated developments contribute positively to both businesses and local neighbourhoods."],
      },
      { heading: "Types of Commercial Buildings" },
      {
        heading: "1. Office Buildings",
        level: 3,
        leadIn: ["Office environments must balance collaboration, productivity and flexibility.", "Important considerations include:"],
        list: ["Workspace planning", "Meeting facilities", "Staff amenities", "Technology infrastructure", "Acoustic performance", "Natural lighting"],
      },
      {
        heading: "2. Retail Spaces",
        level: 3,
        leadIn: ["Retail design focuses heavily on customer experience and operational efficiency.", "Successful retail projects often consider:"],
        list: ["Customer circulation", "Product visibility", "Storefront presentation", "Accessibility", "Storage requirements", "Future adaptability"],
      },
      {
        heading: "3. Healthcare and Specialist Facilities",
        level: 3,
        leadIn: ["Medical and health-related projects require specialised planning and compliance considerations.", "These developments commonly involve:"],
        list: ["Patient flow management", "Privacy requirements", "Accessibility compliance", "Specialist equipment integration", "Waiting areas", "Clinical support spaces"],
      },
      {
        heading: "4. Mixed-Use Developments",
        level: 3,
        paragraphs: [
          "Mixed-use projects require careful coordination between different building functions while ensuring each component operates efficiently and independently where required.",
        ],
      },
      { heading: "The Commercial Building Design Process" },
      {
        heading: "1. Site Analysis and Feasibility",
        level: 3,
        leadIn: "The first stage involves assessing:",
        list: ["Site dimensions", "Planning controls", "Access requirements", "Environmental constraints", "Development opportunities"],
        paragraphs: ["A detailed feasibility assessment helps establish realistic project outcomes from the outset."],
      },
      {
        heading: "2. Concept Design",
        level: 3,
        leadIn: ["Concept design transforms project objectives into an initial building solution.", "This stage may include:"],
        list: ["Floor plans", "Space planning", "Building massing", "Preliminary design concepts", "Site integration strategies"],
      },
      {
        heading: "3. Planning and Permit Documentation",
        level: 3,
        leadIn: ["Many commercial developments require planning and building approvals before construction can begin.", "This process may involve:"],
        list: ["Planning permit applications", "Building permit documentation", "Consultant coordination", "Council liaison", "Compliance reviews"],
      },
      {
        heading: "4. Construction Documentation",
        level: 3,
        paragraphs: [
          "Detailed drawings provide contractors and consultants with the information required to build the project accurately and efficiently.",
        ],
      },
      {
        heading: "Designing for Challenging Sites",
        leadIn: ["Not all commercial projects are located on large, straightforward sites.", "Melbourne developments often involve:"],
        list: ["Narrow allotments", "Corner sites", "Infill developments", "Irregular land shapes", "Urban constraints"],
        paragraphs: [
          "Many of the same design principles used when [maximising design outcomes on constrained sites](/blog/designing-a-home-on-a-narrow-block) can also be applied to commercial developments where efficient space planning is essential.",
        ],
      },
      {
        heading: "Balancing Aesthetics and Performance",
        leadIn: ["Commercial buildings must achieve both visual appeal and practical functionality.", "Successful projects balance:"],
        list: ["Architectural character", "Operational requirements", "User experience", "Construction efficiency", "Budget objectives", "Long-term maintenance considerations"],
        paragraphs: ["Good design creates buildings that are attractive, practical and durable."],
      },
      {
        heading: "Sustainability in Melbourne Commercial Development",
        leadIn: ["Environmental performance is becoming increasingly important within the commercial property sector.", "Modern developments often focus on:"],
        list: ["Energy efficiency", "Thermal performance", "Sustainable material selection", "Reduced carbon emissions", "Water conservation", "Building resilience"],
        paragraphs: [
          "Integrating sustainability early in the design process can lead to better outcomes than attempting to retrofit environmental features later.",
        ],
      },
      {
        heading: "Choosing a Commercial Building Designer",
        banner: {
          src: img("/pub/c0173968/editor-uploaded-image/Commercial Building Design Melbourne.png"),
          alt: "Choosing a Commercial Building Designer",
          aspect: "1080/720",
        },
        leadIn: [
          "Selecting the [right commercial building designer](/commercial-building-design) is an important step in any commercial project.",
          "Consider factors such as:",
        ],
        list: [
          "Relevant project experience",
          "Knowledge of planning regulations",
          "Documentation quality",
          "Communication processes",
          "Sustainability expertise",
          "Consultant coordination capabilities",
          "Understanding of construction requirements",
        ],
        paragraphs: ["A collaborative design approach can help reduce project risks while supporting smoother approvals and construction outcomes."],
      },
    ],
    conclusion: [
      "Commercial building design continues to evolve as businesses seek spaces that are more sustainable, adaptable and user-focused. Whether developing an office building, retail premises, healthcare facility or mixed-use project, thoughtful design can significantly influence long-term performance and value.",
      "By prioritising functionality, sustainability and future flexibility, commercial developments can better serve businesses, occupants and the wider community.",
      "For developers, investors and business owners, engaging experienced building design professionals early in the process can help unlock site potential while creating practical and future-ready commercial environments.",
    ],
    faqs: [
      {
        q: "What is commercial building design?",
        a: "Commercial building design involves planning and documenting buildings used for business purposes, including offices, retail stores, healthcare facilities, hospitality venues and mixed-use developments.",
      },
      {
        q: "Why is sustainable commercial building design important?",
        a: "Sustainable design can improve energy efficiency, reduce operating costs, enhance occupant comfort and support environmental performance over the life of a building.",
      },
      {
        q: "What should I look for in a commercial building designer?",
        a: "Look for experience with similar projects, strong documentation capabilities, knowledge of local planning requirements, effective communication and an understanding of sustainable design principles.",
      },
    ],
  },

  "building-design-services-melbourne": {
    slug: "building-design-services-melbourne",
    intro: [
      "Manzel Studio provides purpose-driven building design services in Melbourne for residential, commercial and health space projects. Based in Preston, the studio combines creative thinking, practical construction knowledge and a clear design process to develop spaces that respond to each client's site, budget and everyday requirements.",
      "Led by [Ahmed Dirani](/about-us), Registered Building Designer, Manzel Studio has been created for clients who want thoughtful design without losing sight of budget, function, or buildability. The studio's work is grounded in a simple idea: great building design should not only look good, but also support the way people live, work, recover, and connect.",
      "With decades of combined experience across building design and construction, Manzel Studio offers a practical, client-first approach to projects throughout Melbourne and surrounding areas. Every project begins with careful listening, a clear understanding of the site, and a review of the client's goals.",
    ],
    sections: [
      {
        heading: "A Clear Building Design Process From the First Idea",
        paragraphs: [
          "Starting a building project can feel overwhelming, especially when there are budgets, approvals, site conditions, and design decisions to think about. Manzel Studio helps clients move through the process with more clarity, beginning with the first conversation and continuing through concept development and detailed design.",
          "The aim is to make each stage feel considered and manageable, so clients understand their options and feel confident about the direction of their project.",
        ],
      },
      {
        heading: "Practical Building Design That Still Feels Thoughtful",
        paragraphs: [
          "For Manzel Studio, good design is not about creating something impressive on paper that becomes difficult or unrealistic to build. It is about finding the right balance between what looks beautiful, what works well, and what can be achieved within the client's budget.",
          "This practical mindset helps the studio create spaces that feel refined, functional, and suited to real life.",
        ],
      },
      {
        heading: "From Site Assessment to Construction Support",
        banner: {
          src: img("/pub/c0173968/editor-uploaded-image/Site Assessment to Construction Support.png"),
          alt: "Site Assessment to Construction Support",
          aspect: "1080/611",
        },
        paragraphs: [
          "Every successful project starts with understanding the property and its constraints. Manzel Studio's process may include [site assessment](/site-assessment), feasibility review, concept design, design development, consultant coordination, planning and building permit documentation, and support during construction.",
          "The exact stages depend on the project, site conditions and approval requirements. Clearly defining the process at the beginning helps clients understand what is required and make informed decisions about budget, design and project timing.",
        ],
      },
      {
        heading: "Building Design Services Across Melbourne",
        leadIn:
          "Based in Preston, Manzel Studio works with clients across metropolitan Melbourne and regional Victoria. Each design responds to the property's orientation, neighbourhood context, applicable planning controls and the way the completed space will be used.",
        wideImageColumn: true,
        columns: [
          {
            subsections: [
              {
                heading: "1. Residential",
                paragraph:
                  "Manzel Studio designs [custom homes, renovations, and home extensions](/residential-building-design) for families who want spaces that suit the way they actually live. From early concept planning through to detailed design, the studio focuses on comfort, flow, natural light, site potential, and long-term usability.",
              },
              {
                heading: "2. Commercial",
                paragraph:
                  "For businesses, retailers, and workplace owners, Manzel Studio creates [commercial spaces](/commercial-building-design) that support productivity, customer experience, and brand identity. The studio understands that a [well-designed commercial environment](/blog/commercial-building-design-insights) needs to look professional while also serving practical business needs.",
              },
              {
                heading: "3. Health Space",
                paragraph:
                  "Manzel Studio also specialises in [health space design](/health-space-design), including medical, wellness, and consulting environments. These spaces are designed with care to support patient comfort, staff workflow, accessibility, privacy, and clinical function.",
              },
            ],
          },
          {
            image: {
              src: img("/pub/c0173968/editor-uploaded-image/Building Design Services (1).png"),
              alt: "Building Design Services Across Melbourne",
            },
          },
        ],
      },
      {
        heading: "A Practical Building Design Partner",
        paragraphs: [
          "What sets Manzel Studio apart is its ability to connect creative design thinking with construction knowledge. This allows the studio to design spaces that are not only visually strong, but also realistic to build and aligned with each client's budget.",
          "The studio works closely with clients to understand the purpose behind each space. Whether designing a family home, a workplace, a retail setting, or a medical clinic, Manzel Studio aims to create environments that feel personal, functional, and carefully resolved.",
          "With its official launch, Manzel Studio is positioning itself as a [trusted building design studio in Melbourne](/) for clients seeking design quality, practical advice, and a clear process from concept to completion.",
        ],
      },
      {
        heading: "Creating Spaces That Work in Real Life",
        paragraphs: [
          "Manzel Studio believes successful building design should feel natural, useful, and enduring. Every design decision is made with real use in mind, from how people move through a space to how light, storage, comfort, privacy, and function are considered.",
          "This [human-centred approach](/blog/designing-a-home-on-a-narrow-block) allows the studio to create homes, workplaces, and health environments that support everyday life while still feeling refined and purposeful.",
        ],
      },
    ],
    faqs: [
      {
        q: "What building design services does Manzel Studio provide?",
        a: "Manzel Studio provides site assessments, feasibility reviews, concept design, design development, planning and permit documentation, consultant coordination and construction-stage support for suitable projects.",
      },
      {
        q: "What types of projects does Manzel Studio design?",
        a: "The studio works across residential, commercial and health-related projects, including new homes, renovations, extensions, multi-unit developments, commercial fit-outs and medical spaces.",
      },
      {
        q: "Where does Manzel Studio provide building design services?",
        a: "Manzel Studio is based in Preston and provides building design services across Melbourne and selected areas of regional Victoria.",
      },
      {
        q: "Can a building designer assist with council approvals?",
        a: "A building designer can help develop a design that responds to relevant planning requirements, coordinate necessary documentation and assist with council feedback. Approval requirements vary according to the site and project.",
      },
      {
        q: "When should I contact a building designer?",
        a: "It is helpful to engage a building designer before committing to a layout or making major project decisions. Early site and feasibility reviews can identify constraints and opportunities before significant time and money are invested.",
      },
    ],
  },

  "designing-a-home-on-a-narrow-block": {
    slug: "designing-a-home-on-a-narrow-block",
    intro: [
      "If you've bought, inherited, or are eyeing a long, narrow block, you've probably been told it is \"tricky.\" Maybe even that you'll have to compromise. We don't agree.",
      "Narrow blocks can deliver generous, thoughtful, and highly functional homes when the design is approached with care. The key is understanding how to work with the site's proportions rather than fighting against them.",
      "With the right planning, a narrow block can support excellent natural light, a strong indoor-outdoor connection, privacy, storage, and flexible living spaces. This article shares practical design principles that help narrow sites work well.",
    ],
    sections: [
      {
        heading: "Why Narrow Block Home Design Offers Unique Opportunities",
        paragraphs: [
          "[Narrow blocks](/project-coburg-the-avenue) are common in many established suburbs and inner-city neighbourhoods. They often sit close to shops, transport, parks, schools, and existing community infrastructure.",
          "While the width of the block may be limited, the depth often provides opportunities for clever spatial planning. A narrow site can encourage a more efficient, purposeful home where every square metre has a clear role.",
          "Rather than seeing a narrow block as a constraint, it is better to view it as a design challenge with strong potential.",
        ],
      },
      {
        heading: "Five Design Moves That Make Narrow Blocks Work",
        banner: {
          src: img("/pub/c0173968/editor-uploaded-image/Narrow Block.png"),
          alt: "Five Design Moves That Make Narrow Blocks Work",
          aspect: "1173/701",
        },
      },
      {
        heading: "1. Use the Rear of the Site Strategically",
        level: 3,
        paragraphs: [
          "On narrow blocks, the rear of the site is often one of the most valuable areas. It may provide opportunities for vehicle access, a garage, private outdoor space, or a secondary living zone.",
          "Where rear access is available, placing parking or service areas toward the back can free up the front of the home for a stronger street presence and better internal planning.",
          "A well-designed rear zone can also create a private courtyard, landscaped outlook, or flexible outdoor room that makes the whole home feel larger.",
        ],
      },
      {
        heading: "2. Stack Bonus Spaces Where They Do Not Disrupt the Main Form",
        level: 3,
        paragraphs: [
          "Narrow homes benefit from efficient vertical planning. Extra spaces such as studies, guest rooms, secondary living areas, roof terraces, or loft zones can often be added above garages or service areas.",
          "The goal is to gain usable floor area without creating a bulky or awkward building form. When handled carefully, these additional spaces can add major lifestyle value while keeping the home balanced and proportionate.",
        ],
      },
      {
        heading: "3. Zone the Plan from Front to Back",
        level: 3,
        paragraphs: [
          "Long, narrow homes work best when areas are clearly organised along the length of the site.",
          "A common approach is to place quieter spaces, such as bedrooms or studies, toward the front, with open-plan living areas positioned toward the rear where they can connect to garden or courtyard spaces.",
          "This creates a clear rhythm through the home: public to private, quiet to active, enclosed to open. It also helps reduce corridor-like interiors, which can otherwise make narrow homes feel tight.",
        ],
      },
      {
        heading: "4. Design for Light, Not Width",
        level: 3,
        paragraphs: [
          "One of the biggest misconceptions about narrow blocks is that the home will automatically feel dark or cramped. In reality, light is often more important than width.",
          "Skylights, courtyards, voids, highlight windows, glazed links, and carefully placed openings can bring natural light deep into the floor plan.",
          "The best narrow-block homes do not rely only on side windows. Instead, they use light from above, from the rear, and from carefully positioned internal openings to create a bright and open feeling.",
        ],
      },
      {
        heading: "5. Respect the Streetscape",
        level: 3,
        paragraphs: [
          "In established neighbourhoods, the street character matters. A successful narrow-block home should feel contemporary and functional while still responding to its surroundings.",
          "This may involve considering roof forms, materials, front setbacks, façade rhythm, landscaping, and the scale of neighbouring homes.",
          "Good design does not simply copy what is next door. It interprets the local context in a thoughtful way, creating a home that feels new without feeling out of place.",
        ],
      },
      {
        heading: "What to Watch Out For",
        paragraphs: [
          "There are several practical issues to consider before designing or building on a narrow block.",
          "Construction access can be more complex. Narrow sites may limit space for trades, machinery, storage, and deliveries, which can affect cost and timing.",
          "Setbacks and overlooking requirements are also important. Small changes to wall positions, window placement, or upper-level design can significantly affect what is possible.",
          "Privacy should be considered early. On narrow blocks, neighbouring windows, fences, courtyards, and outdoor areas are often close by. Good design protects privacy without creating a closed-in home.",
          "Planning requirements can also vary depending on the site, council, zoning, overlays, and neighbourhood character controls. Early advice from an experienced designer or architect can help identify opportunities and avoid unnecessary delays.",
        ],
      },
      {
        heading: "A Better Way to Approach Narrow Sites",
        paragraphs: [
          "The best homes on narrow blocks are not simply standard house plans squeezed into a tight site. They are designed around the block's specific dimensions, orientation, access, outlook, and planning constraints.",
          "A narrow block needs a tailored response. That means thinking carefully about light, movement, storage, outdoor space, privacy, and how each room connects to the next.",
          "When these elements are resolved properly, the result can be a home that feels calm, generous, practical, and highly liveable.",
        ],
      },
    ],
    conclusion: [
      "A narrow block does not have to mean a compromised home. With the [right building design](/) approach, it can become the foundation for a thoughtful, efficient, and beautiful place to live.",
      "The key is to build a design with the site, not against it. Focus on natural light, smart zoning, useful outdoor space, privacy, and a form that respects its surroundings.",
    ],
    faqs: [
      {
        q: "What is considered a narrow block in Melbourne?",
        a: "There is no single width that applies to every property. A block may be considered narrow when its limited frontage affects vehicle access, room arrangement, setbacks, natural light or the placement of windows.",
      },
      {
        q: "Can a narrow block home still receive plenty of natural light?",
        a: "Yes. Courtyards, skylights, voids, highlight windows and carefully positioned openings can bring daylight deep into a narrow floor plan.",
      },
      {
        q: "Are narrow block homes more expensive to build?",
        a: "They can involve additional costs due to restricted construction access, customised design, structural requirements and limited space for equipment or materials. Costs depend on the site and project specifications.",
      },
      {
        q: "Do I need a custom design for a narrow block?",
        a: "A site-specific design is generally more effective than placing a standard floor plan on a narrow block. It allows the home to respond to orientation, access, privacy, setbacks and the block's dimensions.",
      },
      {
        q: "Can Manzel Studio help assess a narrow property?",
        a: "Yes. Manzel Studio can [assess the site](/site-assessment), identify planning and design constraints, develop a tailored [home design](/) and prepare approval-ready documentation.",
      },
    ],
  },

  "how-to-get-a-planning-permit-approved-faster": {
    slug: "how-to-get-a-planning-permit-approved-faster",
    intro: [
      "If you are planning a new home, an extension, a renovation, a multi-unit development, or a commercial project, the planning permit process can feel slow and uncertain.",
      "Many applications take longer than expected, not because the project is impossible, but because the submission is incomplete, poorly coordinated, or not aligned with local planning requirements from the start.",
      "A faster approval process usually comes down to preparation. The more clearly a proposal responds to council requirements, neighbourhood character, site constraints, and planning policy, the easier it is for a planner to assess.",
      "This article outlines practical steps to reduce delays and improve the chances of a smoother planning permit process.",
    ],
    sections: [
      {
        heading: "Why Planning Permits Often Take Longer Than Expected",
        paragraphs: [
          "Planning permits can be delayed for several reasons.",
          "The first is incomplete documentation. [Councils](https://www.planning.vic.gov.au/guides-and-resources/guides/guide-to-victorias-planning-system/planning-permits) need sufficient information to understand the proposal, assess its impact, and confirm whether it complies with the relevant planning scheme. Missing drawings, unclear reports, or inconsistent information can quickly trigger requests for further information.",
          "The second issue is neighbourhood character. Even when a design is technically compliant, council may still assess how it responds to the surrounding area, including building height, setbacks, overlooking, overshadowing, landscaping, materials, and street presentation.",
          "The third issue is site constraints. Heritage overlays, vegetation controls, flood considerations, easements, access issues, and environmental requirements can all affect what is possible. If these are discovered late, they can force redesigns and extend the approval timeframe.",
          "The fourth issue is timing. Council workloads, public holidays, referral authorities, neighbour objections, and internal review processes can all influence how long an application takes.",
        ],
      },
      {
        heading: "A Better Approach to Planning Permit Applications",
        paragraphs: [
          "A strong planning permit strategy begins before the design is finalised.",
          "Instead of designing first and checking compliance later, the best approach is to understand the planning controls early and shape the design around them.",
          "This reduces the risk of major changes later in the process and gives the application a stronger foundation from the beginning.",
        ],
      },
      {
        heading: "1. Start With a Feasibility Review",
        paragraphs: [
          "Before preparing a full design, complete a feasibility review of the site.",
          "This should identify the zoning, overlays, ResCode or local planning requirements, neighbourhood character considerations, setbacks, height limits, private open space requirements, overlooking rules, parking requirements, and any referral triggers.",
          "A feasibility review helps answer the most important question early: what is likely to be supported on this site?",
          "It can also reveal whether a proposal needs to be simplified, adjusted, or supported with additional reports before it goes to council.",
        ],
      },
      {
        heading: "2. Design for Approval, Not Just Appearance",
        paragraphs: [
          "A good design should be visually strong, functional, and aligned with planning expectations.",
          "Planning issues should be considered during the design process, not after the design is finished. This includes building massing, site coverage, overlooking, overshadowing, streetscape response, landscaping, access, waste storage, and neighbouring amenity.",
          "When the design is shaped around these considerations from the start, it is less likely to attract major objections or require extensive redesign during [assessment](/site-assessment).",
        ],
      },
      {
        heading: "3. Prepare a Complete Submission Package",
        paragraphs: [
          "A complete application gives council the information it needs to assess the proposal efficiently.",
          "Depending on the project, this may include architectural drawings, site analysis, shadow diagrams, overlooking diagrams, a planning report, landscape concept plans, drainage information, traffic or parking reports, arborist reports, heritage advice, or other specialist documentation.",
          "The goal is to avoid unnecessary requests for further information. Every missing item can add weeks to the process.",
        ],
      },
      {
        heading: "4. Make the Proposal Easy to Assess",
        paragraphs: [
          "Council planners assess many applications at once. Clear documentation helps them understand the project quickly.",
          "Drawings should be consistent, labelled properly, and easy to read. Reports should directly address the relevant planning controls. Any areas of non-compliance should be explained clearly, with a strong planning rationale.",
          "A well-organised submission can make a significant difference to how smoothly the application progresses.",
        ],
      },
      {
        heading: "5. Respond Quickly During Assessment",
        paragraphs: [
          "Once an application is lodged, communication matters.",
          "If council requests more information, respond promptly and completely. If concerns are raised, address them early rather than waiting until the end of the process.",
          "In some cases, small design changes can resolve planning concerns before they become major objections. This may include adjusting a setback, relocating a window, modifying a façade, reducing overlooking, or refining landscaping.",
          "A proactive response can help keep the application moving.",
        ],
      },
      {
        heading: "What Applicants Can Do to Help",
        paragraphs: [
          "Clients and property owners also play an important role in the planning process.",
          "Make decisions early and avoid frequent design changes once documentation is underway. Every major change can affect drawings, reports, consultant input, and the overall timeline.",
          "Provide site information as soon as possible, including title documents, existing plans, survey information, easement details, previous permits, and any known site issues.",
          "Be realistic about the process. A fast approval depends on the quality of the application, the complexity of the site, council workload, and whether objections or referral requirements arise.",
        ],
      },
      {
        heading: "What a Faster Planning Permit Process Looks Like",
        leadIn: "While every project is different, a well-managed planning process usually follows a clear sequence:",
        subsections: [
          {
            heading: "Stage 1: Site review and planning feasibility",
            paragraph: "The planning controls, overlays, constraints, and approval risks are identified early.",
          },
          {
            heading: "Stage 2: Concept design",
            paragraph: "The design is developed with council requirements and site conditions in mind.",
          },
          {
            heading: "Stage 3: Documentation and reports",
            paragraph: "Architectural drawings and supporting documents are prepared for lodgement.",
          },
          {
            heading: "Stage 4: Council assessment",
            paragraph: "Council reviews the application and may request further information or clarification.",
          },
          {
            heading: "Stage 5: Response and refinement",
            paragraph: "Any council feedback, referral comments, or objections are addressed.",
          },
          {
            heading: "Stage 6: Decision",
            paragraph: "Council issues an approval, conditional approval, refusal, or the matter proceeds to further review if required.",
          },
        ],
      },
    ],
    conclusion: [
      "A planning permit approval is rarely about luck. It usually depends on good preparation, clear documentation, and a design that responds properly to the site and its planning context.",
      "The earlier planning requirements are considered, the smoother the process is likely to be.",
      "For homeowners, developers, and business owners, the key is to start with the right advice, understand the site constraints, prepare a complete submission, and keep communication open [throughout the assessment process](/blog/essential-steps-architectural-site-analysis).",
      "A well-prepared application will not guarantee instant approval, but it can significantly reduce avoidable delays and give the project the best chance of moving forward efficiently.",
    ],
    faqs: [
      {
        q: "How long does a planning permit take in Melbourne?",
        a: "The timeframe depends on the project, council workload, site constraints, referral requirements and whether objections are received. A complete and clearly documented application can help minimise avoidable delays, but it cannot guarantee a particular approval date.",
      },
      {
        q: "What commonly delays a planning permit application?",
        a: "Common causes include missing documents, inconsistent drawings, unresolved planning non-compliance, late consultant reports, neighbour objections and slow responses to council requests.",
      },
      {
        q: "Can a building designer help with a planning permit?",
        a: "Yes. A [building designer](/) can review site constraints, develop a design that responds to planning controls, coordinate supporting documentation and assist with council feedback during assessment.",
      },
      {
        q: "Is a planning permit the same as a building permit?",
        a: "No. A planning permit considers how land may be used or developed, while a building permit confirms that proposed construction complies with applicable building requirements. Some projects require both. This distinction aligns with official Victorian guidance, which treats planning approvals as a separate process with different pathways and requirements. [Planning Victoria](https://www.planning.vic.gov.au/planning-approvals) and the [City of Melbourne](https://www.melbourne.vic.gov.au/planning-permit-applications) provide further official guidance.",
      },
    ],
  },

  "custom-home-design-checklist": {
    slug: "custom-home-design-checklist",
    intro: [
      "Designing a [custom home](/residential-building-design) lets you create a space around the way you actually live. But with decisions ranging from your floor plan and room sizes to lighting, storage, finishes and future technology, it can quickly become overwhelming.",
      "A well-planned custom home design checklist helps you work through these decisions systematically before construction begins.",
      "The earlier important choices are made, the easier it is to develop a home that balances lifestyle, functionality, aesthetics and budget.",
      "Use this checklist as a starting point when planning your new custom home.",
    ],
    sections: [
      {
        heading: "1. Start With Your Lifestyle and Priorities",
        leadIn: [
          "Before deciding what your home should look like, think about how you want it to function.",
          "A beautiful home that does not suit your everyday routine can quickly become frustrating.",
          "Consider:",
        ],
        list: [
          "How many people will live in the home?",
          "How many bedrooms and bathrooms do you need?",
          "Do you regularly work from home?",
          "Do you entertain family and friends?",
          "Do you need separate spaces for children or teenagers?",
          "Is indoor-outdoor living important?",
          "How much storage do you need?",
          "Are you planning to grow your family?",
          "Do you want to remain in the property long term?",
        ],
        paragraphs: [
          "Separate your requirements into must-haves, nice-to-haves and future possibilities.",
          "This gives your designer and builder a much clearer brief and can make it easier to prioritise decisions when working within a budget.",
        ],
      },
      {
        heading: "2. Understand Your Block Before Designing",
        leadIn: [
          "Your land should influence your home design, not the other way around.",
          "Before finalising a floor plan, understand the characteristics and constraints of your site.",
          "Consider:",
        ],
        compact: true,
        groups: [
          { label: "Land & Site", items: ["Block dimensions", "Orientation", "Slope and levels", "Soil conditions"] },
          { label: "Planning & Regulatory", items: ["Easements", "Setbacks", "Planning restrictions", "Applicable overlays"] },
          {
            label: "Context & Services",
            items: [
              "Existing vegetation",
              "Neighbouring properties",
              "Views and privacy",
              "Access for construction",
              "Location of utilities and services",
            ],
          },
        ],
        paragraphs: [
          "Site conditions can influence everything from foundation requirements and construction costs to window placement and the overall shape of the home.",
          "Understanding these factors early - ideally through a proper [site assessment](/site-assessment) and [architectural site analysis](/blog/essential-steps-architectural-site-analysis) - can help avoid designing a home that later requires expensive modifications. If your site carries overlays or restrictions, it's also worth understanding the [planning permit process](/blog/how-to-get-a-planning-permit-approved-faster) early.",
        ],
      },
      {
        heading: "3. Set a Realistic Overall Budget",
        leadIn: [
          "Your construction budget should account for more than the headline price of building the house.",
          "Depending on the project, additional costs may include:",
        ],
        list: [
          "Site preparation",
          "Surveying and soil testing",
          "Architectural or building design",
          "Engineering",
          "Planning and building approvals",
          "Utility connections",
          "Upgraded fixtures and finishes",
          "Driveways",
          "Landscaping",
          "Fencing",
          "Window furnishings",
          "Retaining walls",
          "Outdoor living areas",
        ],
        paragraphs: [
          "It is also sensible to maintain a contingency for unexpected costs.",
          "Having a realistic budget from the beginning allows your design team to make decisions that are achievable rather than creating a home that needs to be substantially redesigned later.",
        ],
      },
      {
        heading: "4. Plan the Right Floor Plan",
        leadIn: [
          "Your floor plan determines how you experience your home every day.",
          "Think beyond simply choosing how many bedrooms you want. Consider how different spaces connect and whether the layout supports your daily routines.",
          "Think about:",
        ],
        compact: true,
        groups: [
          {
            label: "Bedrooms & Living",
            items: [
              "Number and location of bedrooms",
              "Number of bathrooms",
              "Master suite position",
              "Ensuite and walk-in robe",
              "Open-plan living and dining",
              "Separate lounge or media room",
            ],
          },
          {
            label: "Kitchen & Practical Spaces",
            items: ["Kitchen location", "Walk-in or butler's pantry", "Home office", "Children's activity area", "Laundry"],
          },
          {
            label: "Garage, Storage & Outdoor",
            items: ["Garage size", "Internal garage access", "Storage", "Outdoor entertaining", "Guest accommodation"],
          },
        ],
        paragraphs: [
          "Then consider movement between these areas.",
          "For example, can groceries be carried easily from the garage to the kitchen? Can you see the backyard from your main living space? Is the laundry conveniently positioned? Can guests access a bathroom without walking through private areas?",
          "Good design is often about these small everyday interactions.",
        ],
      },
      {
        heading: "5. Think Carefully About Home Orientation",
        leadIn: [
          "Orientation can have a significant effect on natural light, comfort and energy efficiency.",
          "Your designer should consider how the home responds to the sun throughout the day and across different seasons.",
          "Think about where you want:",
        ],
        list: [
          "Morning sunlight",
          "Afternoon sunlight",
          "Shaded areas",
          "Main living spaces",
          "Bedrooms",
          "Outdoor entertaining",
          "Large windows",
          "Private areas",
        ],
        paragraphs: [
          "Window positioning, glazing, shading and room orientation should work together rather than being considered separately.",
          "A well-oriented home can feel brighter and more comfortable while reducing unnecessary dependence on heating, cooling and artificial lighting.",
        ],
      },
      {
        heading: "6. Design the Kitchen Around How You Use It",
        leadIn: [
          "For many households, the kitchen is one of the most frequently used spaces in the home.",
          "Start with functionality before choosing colours and finishes.",
          "Consider:",
        ],
        compact: true,
        groups: [
          {
            label: "Layout & Workflow",
            items: ["Island bench size", "Preparation space", "Sink position", "Cooktop position", "Refrigerator location"],
          },
          {
            label: "Storage",
            items: ["Pantry size", "Butler's pantry", "Appliance storage", "Bin storage", "Overhead cabinetry", "Drawer configuration"],
          },
          {
            label: "Comfort & Connection",
            items: ["Power points", "Lighting", "Seating", "Connection with dining areas", "Access to outdoor entertaining"],
          },
        ],
        paragraphs: [
          "Think about how several people will use the kitchen simultaneously.",
          "The right layout should make cooking, cleaning, entertaining and everyday movement easier.",
        ],
      },
      {
        heading: "7. Don't Underestimate Storage",
        leadIn: [
          "Storage is one of the easiest things to overlook on a floor plan and one of the hardest things to add once a home has been built.",
          "Plan storage according to what your household actually owns.",
          "Consider:",
        ],
        list: [
          "Walk-in or built-in wardrobes",
          "Linen cupboards",
          "Kitchen storage",
          "Walk-in pantry",
          "Broom cupboard",
          "Laundry cabinetry",
          "Bathroom storage",
          "Entry storage",
          "Under-stair storage",
          "Garage storage",
          "Sports equipment",
          "Children's belongings",
          "Outdoor equipment",
        ],
        paragraphs: [
          "Purpose-designed storage can keep everyday items accessible without allowing clutter to dominate living areas.",
        ],
      },
      {
        heading: "8. Plan Your Bathrooms and Laundry",
        leadIn: ["Bathrooms need to balance appearance with durability and functionality.", "Consider:"],
        list: [
          "Shower size",
          "Bath requirements",
          "Vanity storage",
          "Mirror size",
          "Lighting",
          "Ventilation",
          "Privacy",
          "Towel storage",
          "Tapware",
          "Niches",
          "Power outlets",
        ],
        paragraphs: [
          "The laundry deserves similar attention.",
          "Think about bench space, storage, appliance placement, drying areas and whether you want direct outdoor access.",
          "These spaces may not receive the same attention as a kitchen or living room, but good planning can make everyday life significantly easier.",
        ],
      },
      {
        heading: "9. Choose Your Interior Finishes",
        leadIn: [
          "This is where the visual identity of your home starts to come together.",
          "Rather than choosing each product individually, establish an overall design direction first.",
          "Interior selections may include:",
        ],
        list: [
          "Flooring",
          "Wall colours",
          "Cabinetry",
          "Benchtops",
          "Splashbacks",
          "Bathroom tiles",
          "Tapware",
          "Door hardware",
          "Internal doors",
          "Skirting and architraves",
          "Feature walls",
          "Lighting fixtures",
        ],
        paragraphs: [
          "Consider how materials and colours transition between rooms.",
          "Consistency does not mean every room needs to look identical. It means the selections should feel like they belong to the same home.",
        ],
      },
      {
        heading: "10. Plan the Exterior of Your Home",
        leadIn: [
          "Your facade establishes the character of your home, but exterior materials also need to perform in local conditions.",
          "Consider:",
        ],
        list: [
          "Architectural style",
          "Brickwork",
          "Render",
          "Cladding",
          "Feature materials",
          "Roof profile",
          "Roof colour",
          "Window frames",
          "Garage door",
          "Front door",
          "External lighting",
          "Driveway",
          "Fencing",
          "Landscaping",
        ],
        paragraphs: [
          "Try to make these decisions together so the exterior has a cohesive material and colour palette.",
        ],
      },
      {
        heading: "11. Plan Lighting and Electrical Points Early",
        leadIn: [
          "Electrical planning is much easier before construction than after the walls are finished.",
          "Walk through the floor plan room by room and consider how each space will be used.",
          "Plan locations for:",
        ],
        compact: true,
        groups: [
          { label: "Living Areas", items: ["Power points", "Light switches", "Downlights", "Pendant lights", "Feature lighting"] },
          { label: "Bedrooms & Wet Areas", items: ["Bedside power", "Kitchen appliance outlets", "Bathroom outlets"] },
          {
            label: "Connectivity & Outdoor",
            items: ["Television points", "Data points", "Outdoor power", "Garage power", "Security cameras", "Electric vehicle charging"],
          },
        ],
        paragraphs: [
          "Think about furniture placement at the same time.",
          "For example, knowing where beds, televisions, desks and sofas will sit makes it much easier to position power points and switches logically.",
        ],
      },
      {
        heading: "12. Consider Technology and Smart Home Features",
        leadIn: [
          "Even if you do not want a fully automated home today, planning the infrastructure during construction can make future upgrades easier.",
          "Consider provisions for:",
        ],
        compact: true,
        groups: [
          {
            label: "Connectivity & Security",
            items: ["High-speed data", "Wi-Fi access points", "Security cameras", "Video doorbells", "Smart locks"],
          },
          {
            label: "Comfort & Energy",
            items: ["Automated lighting", "Smart blinds", "Climate control", "Home automation", "Solar", "Battery storage", "Electric vehicle charging"],
          },
        ],
        paragraphs: [
          "Planning cabling and infrastructure early is generally much simpler than trying to retrofit it after construction.",
        ],
      },
      {
        heading: "13. Think About Heating, Cooling and Energy Efficiency",
        leadIn: ["Comfort should be considered during design rather than treated as an afterthought.", "Discuss:"],
        list: [
          "Insulation",
          "Glazing",
          "Window orientation",
          "Shading",
          "Heating and cooling",
          "Ventilation",
          "Ceiling fans",
          "Hot water",
          "Solar",
          "Energy-efficient appliances",
        ],
        paragraphs: [
          "A home's orientation, building envelope and mechanical systems should complement each other.",
          "Good design can improve year-round comfort while helping reduce ongoing energy consumption.",
        ],
      },
      {
        heading: "14. Design Your Outdoor Areas at the Same Time",
        leadIn: [
          "Outdoor spaces should be part of the original design rather than leftover areas around the house.",
          "Consider:",
        ],
        list: [
          "Alfresco areas",
          "Decks",
          "Patios",
          "Outdoor kitchens",
          "Pools",
          "Gardens",
          "Lawn areas",
          "Children's play areas",
          "Privacy screening",
          "Outdoor lighting",
          "External power",
          "Taps and irrigation",
          "Storage",
        ],
        paragraphs: [
          "Pay particular attention to how indoor living areas connect with outdoor spaces.",
          "Wide openings, suitable orientation and convenient access from the kitchen can make an outdoor area feel like a genuine extension of the home.",
        ],
      },
      {
        heading: "15. Consider Privacy and Acoustics",
        leadIn: [
          "Privacy can easily be overlooked when looking at a floor plan in isolation.",
          "Think about both internal and external privacy.",
          "Consider whether:",
        ],
        list: [
          "Bedrooms share walls with noisy living areas",
          "Bathrooms have sufficient privacy",
          "The home office is separated from household noise",
          "Neighbouring properties overlook bedrooms or outdoor areas",
          "Windows directly face neighbouring windows",
          "Children's spaces are appropriately separated from adult areas",
        ],
        paragraphs: [
          "Thoughtful room placement and window design can solve many of these issues before construction begins.",
        ],
      },
      {
        heading: "16. Design for Your Future Needs",
        leadIn: [
          "A custom home should not only work on the day you move in.",
          "Think about what your household may look like in five, ten or twenty years.",
          "Future considerations could include:",
        ],
        list: [
          "Additional children",
          "Teenagers needing more privacy",
          "Working from home",
          "Elderly parents",
          "Accessibility",
          "Ageing in place",
          "Electric vehicles",
          "Increased storage",
          "Changing technology",
          "Flexible living areas",
        ],
        paragraphs: [
          "A room designed as a nursery today might become an office later. A second living area might eventually become a teenager's retreat or guest accommodation.",
          "Flexible spaces can extend the useful life of your design.",
        ],
      },
      {
        heading: "17. Review Your Inclusions Before Signing",
        leadIn: [
          "One of the most important steps is understanding exactly what your proposed building price includes.",
          "Do not assume an item is included simply because you saw it in a display home, render or concept drawing.",
          "Check the specifications for:",
        ],
        compact: true,
        groups: [
          { label: "Interior Finishes", items: ["Flooring", "Cabinetry", "Appliances", "Benchtops", "Tapware", "Lighting"] },
          { label: "Structure & Comfort", items: ["Ceiling heights", "Heating and cooling", "Windows and glazing", "Insulation"] },
          { label: "Site & External Costs", items: ["Landscaping", "Driveway", "Fencing", "Site costs", "Utility connections"] },
        ],
        paragraphs: [
          "Ask for clarification whenever something is unclear, and get a second opinion on your quote if anything feels vague.",
          "The more selections that can be confirmed before construction begins, the easier it becomes to understand your actual project cost.",
        ],
      },
      {
        heading: "18. Review the Entire Design Before Construction",
        leadIn: ["Before giving final approval, review your plans one more time from the perspective of actually living in the home."],
        list: [
          "Where do you enter?",
          "Where do you put your keys and shoes?",
          "How do you carry groceries into the kitchen?",
          "Where do children leave school bags?",
          "Where will the vacuum cleaner go?",
          "Where will you charge your phone beside the bed?",
          "Can you move easily between the kitchen and outdoor entertaining area?",
          "Where will guests go when they arrive?",
        ],
        paragraphs: [
          "These seemingly minor questions often reveal design improvements that are difficult or expensive to make once construction begins.",
        ],
      },
    ],
    conclusion: [
      "A successful custom home starts well before construction.",
      "Taking the time to understand your site, define your priorities and work through each design decision can help create a home that looks great while functioning naturally for the way you live.",
      "Most importantly, involve your designer and builder early. Experienced professionals can help identify opportunities, constraints and potential costs before decisions become expensive to change. Browse [our recent projects](/our-projects) for inspiration, or [get in touch](/contact-us) to talk through your own.",
      "With a clear brief and a comprehensive custom home design checklist, you can approach the design process with greater confidence and move one step closer to creating a home that genuinely feels like your own.",
    ],
    faqs: [
      {
        q: "What is the most important thing to consider first in a custom home design checklist?",
        a: "Start with your lifestyle and priorities - how you use each space day-to-day - before making decisions about layout, finishes or technology. Everything else should support how you actually live, not the other way around.",
      },
      {
        q: "How early should electrical and lighting be planned?",
        a: "As early as possible, ideally during the floor plan stage. Electrical planning is far simpler and cheaper before walls are built than trying to retrofit power points, data cabling or smart home wiring afterwards.",
      },
      {
        q: "Do I need to decide on smart home features before construction starts?",
        a: "Not necessarily, but it helps to plan the underlying infrastructure - such as data cabling and access points - even if you don't activate every smart feature straight away. Retrofitting this after construction is usually far more disruptive.",
      },
      {
        q: "What should I check before signing off on my building contract?",
        a: "Confirm exactly what's included in the price - flooring, cabinetry, fixtures, landscaping, site costs and more - rather than assuming an item is included because you saw it in a display home or render.",
      },
      {
        q: "How can I design a custom home that still works in 10 or 20 years?",
        a: "Build flexibility into your floor plan. A nursery can become a home office, a second living area can become a teenager's retreat, and generous storage and accessible design can accommodate changing needs over time.",
      },
    ],
  },
  "multi-unit-development-permits-melbourne": {
    slug: "multi-unit-development-permits-melbourne",
    intro: [
      "Developing two or more homes on one block can be an effective way to make better use of residential land in Melbourne. Whether you are considering a dual occupancy, a pair of townhouses or a larger multi-dwelling project, the design is only one part of the equation.",
      "Before construction can begin, you need to understand what can realistically be developed on the site and which approvals apply. For most multi-unit developments in Melbourne residential zones, a planning permit is required. Depending on the project, you will generally also need a building permit before construction begins.",
      "The process can appear complicated, particularly when zoning, overlays, site constraints and changing residential development standards are involved. Understanding these issues early, ideally through a proper [site assessment](/site-assessment), can help you develop a stronger design and avoid unnecessary redesign later.",
    ],
    sections: [
      {
        heading: "What Is Considered a Multi-Unit Development in Melbourne?",
        leadIn:
          "A multi-unit or multi-dwelling development generally involves two or more dwellings on the same parcel of land. This can include townhouses, units and apartment developments.",
        list: [
          "Two dwellings through a dual-occupancy development",
          "Side-by-side homes",
          "Townhouses",
          "Three or more dwellings on a larger residential block",
          "Low-rise apartment developments",
        ],
        paragraphs: [
          "The important question is not simply how many homes you would like to build. It is how many appropriate dwellings the site can support within the applicable planning controls and good design principles. Manzel Studio's [residential building design](/residential-building-design) service includes feasibility and design for dual occupancy, townhouses and multi-dwelling projects.",
        ],
      },
      {
        heading: "Do You Need a Planning Permit for a Multi-Unit Development?",
        banner: {
          src: "/images/blog/multi-unit-development-permits-melbourne-checklist.png",
          alt: "Checklist of factors to review before designing a multi-unit development: planning zone, overlays, title restrictions, easements, site characteristics and surrounding context",
          aspect: "1080/732",
        },
        leadIn:
          "In Victoria's residential zones, a planning permit is generally required for developments involving two or more dwellings on a lot under Clause 55. But knowing that you need a permit is only the beginning. Your local planning scheme can contain controls that affect what can be developed on a particular property. Before progressing too far with a design, it is important to investigate:",
        list: [
          "Planning zone and the requirements that apply to the land",
          "Overlays that may introduce additional planning controls",
          "Title restrictions or covenants that could affect development",
          "Easements and their location across the property",
          "Site size, shape and orientation",
          "Existing buildings, vegetation and neighbouring properties",
        ],
        paragraphs: [
          "This is why early site feasibility can be valuable for multi-unit projects. It helps identify potential opportunities and constraints before substantial time and money are committed to detailed documentation.",
          "Most importantly, it helps answer the question many property owners and developers have at the beginning: what can this block realistically accommodate?",
        ],
      },
      {
        heading: "Understanding Clause 55 and the Townhouse and Low-Rise Code",
        banner: {
          src: "/images/blog/multi-unit-development-permits-melbourne-clause-55.png",
          alt: "Key Clause 55 design considerations for multi-dwelling developments: street setbacks, building height, side and rear setbacks, site coverage, access, tree canopy, overlooking and overshadowing, daylight, and private open space",
          aspect: "1080/810",
        },
        leadIn:
          "Victoria's Townhouse and Low-Rise Code, contained in Clause 55 of planning schemes, applies to the development of two or more dwellings on a lot and residential buildings up to and including three storeys in relevant residential zones. It covers matters such as:",
        list: [
          "Street setbacks",
          "Building height",
          "Side and rear setbacks",
          "Site coverage",
          "Access",
          "Tree canopy",
          "Overlooking and overshadowing",
          "Daylight",
          "Private open space and amenity",
        ],
        paragraphs: [
          "The current Clause 55 framework includes a deemed-to-comply assessment pathway. Where a proposal meets an applicable standard, the corresponding objective is deemed to be met. Where a standard is not met, council considers whether the relevant objective has nevertheless been satisfied.",
          "Planning compliance should therefore influence the design from the beginning, rather than being checked only after floor plans have been finalised.",
        ],
      },
      {
        heading: "What About Four or More Storeys?",
        paragraphs: [
          "Not every multi-unit development falls under Clause 55. The planning framework changes as residential developments increase in height.",
          "Clause 55 covers relevant developments up to and including three storeys. Victoria's Mid-Rise Code at Clause 57 applies to four-to-six-storey apartment developments in residential areas and came into operation in March 2026. Apartment developments of seven or more storeys, and certain apartment developments in commercial areas and activity centres, are addressed under other planning provisions.",
          "This is another reason to establish the planning pathway before assuming that the requirements for one multi-unit project will apply to another.",
        ],
      },
      {
        heading: "What Should You Check Before Designing Multiple Dwellings?",
        paragraphs: [
          "The best time to discover a site's limitations is before detailed design begins. Two blocks of similar size in neighbouring Melbourne suburbs can have very different development potential.",
          "Zoning and overlays should be checked first. An overlay can introduce additional considerations relating to matters such as heritage, flooding, vegetation or other site-specific issues.",
          "The Certificate of Title should also be reviewed for easements, restrictive covenants and other agreements that may affect where or what you can build. Site width, depth, orientation, slope, access, neighbouring homes, windows, private open spaces, trees and vehicle movements can all influence the design response.",
        ],
      },
      {
        heading: "How Many Units Can You Build on Your Land?",
        leadIn:
          "This is often the first question property owners ask, but there is no universal answer based solely on land area. Development potential depends on:",
        list: [
          "Site dimensions and orientation",
          "Planning controls and overlays",
          "Neighbouring properties",
          "Vehicle access and parking",
          "Trees, easements and infrastructure",
        ],
        paragraphs: [
          "A feasibility assessment before committing to a particular number of dwellings can save considerable redesign. A larger site is not automatically an easy development site, and a constrained site is not necessarily unsuitable. The design needs to respond to the specific planning and physical conditions of the land.",
        ],
      },
      {
        heading: "What Documents Are Needed for a Multi-Unit Planning Permit?",
        leadIn:
          "Requirements vary by council and project, so applicants should always confirm the specific checklist with the responsible authority. Generally, applications may require:",
        list: [
          "Current Certificate of Title and relevant title documents",
          "Existing conditions and site analysis",
          "Site and floor plans",
          "Elevations and sections",
          "Shadow diagrams where required",
          "Landscape information",
          "Planning/design response",
          "Clause 55 assessment",
          "Other specialist reports depending on the property and proposal",
        ],
        paragraphs: [
          "A complete and coordinated submission makes it easier for council planners to understand exactly what is being proposed and can reduce avoidable requests for further information.",
        ],
      },
      {
        heading: "What Is the Multi-Unit Planning Permit Process?",
        banner: {
          src: "/images/blog/multi-unit-development-permits-melbourne-process.png",
          alt: "The five-stage multi-unit planning permit process: site assessment and feasibility, concept design, planning documentation, planning permit application, and assessment and decision",
          aspect: "1080/810",
        },
        leadIn: "While individual applications differ, the process generally follows several key stages.",
        subsections: [
          {
            heading: "1. Site Assessment and Feasibility",
            paragraph: "Investigate planning controls, physical constraints and development potential.",
          },
          {
            heading: "2. Concept Design",
            paragraph:
              "Establish the dwelling configuration, access, setbacks, private open space and relationship with neighbouring properties.",
          },
          {
            heading: "3. Planning Documentation",
            paragraph:
              "Prepare drawings and supporting material demonstrating how the proposal responds to applicable requirements.",
          },
          {
            heading: "4. Planning Permit Application",
            paragraph:
              "Lodge the application with the responsible authority, usually the local council. Council may request further information.",
          },
          {
            heading: "5. Assessment and Decision",
            paragraph:
              "Council assesses the proposal and may issue a permit, a Notice of Decision or a refusal. Conditions may need to be addressed before plans are endorsed.",
          },
        ],
      },
      {
        heading: "Planning Permit vs Building Permit: What Is the Difference?",
        paragraphs: [
          "These two approvals are often confused, but they perform different functions.",
          "A planning permit relates to whether the proposed use or development of land is acceptable under the relevant planning scheme. A building permit relates to whether the proposed building work meets applicable building legislation and technical construction requirements.",
          "A planning permit is not a building permit, and some developments require both. For a typical multi-unit project, planning approval therefore does not mean construction can immediately begin. Manzel Studio provides both planning permit support and building permit documentation, allowing the design and documentation stages to remain connected as a project progresses.",
        ],
      },
      {
        heading: "Can You Fast-Track a Multi-Unit Planning Permit?",
        paragraphs: [
          "Some straightforward applications may qualify for VicSmart, Victoria's streamlined planning permit process.",
          "VicSmart has a 10-business-day assessment process, does not involve advertising and limits assessment to predetermined matters. An application must satisfy the relevant eligibility criteria before it can use this pathway.",
          "For other projects, there is no simple shortcut. One of the most effective ways to reduce avoidable delays is to prepare the proposal properly from the outset. Incomplete documentation, unresolved site constraints and designs that have not adequately considered applicable planning requirements can all create additional rounds of work.",
        ],
      },
      {
        heading: "Why Good Design Matters Before the Permit Application",
        paragraphs: [
          "A successful multi-unit development is not simply about fitting the maximum number of dwellings onto a block.",
          "The design also needs to create homes that work. Natural light, privacy, usable open space, circulation, storage, access, orientation and the relationship between dwellings can all affect the quality of the final development.",
          "There is also a commercial consideration. Pushing an unsuitable layout too far during concept design can lead to expensive revisions when planning constraints are addressed later. A stronger approach is to consider development potential, planning compliance and liveability together.",
        ],
      },
      {
        heading: "Common Multi-Unit Development Permit Mistakes",
        leadIn: "Many planning problems begin before an application reaches council.",
        list: [
          "Assuming a certain number of units will fit because neighbouring properties have similar developments",
          "Overlooking title restrictions or easements",
          "Designing before checking overlays",
          "Failing to account properly for neighbouring amenity",
          "Submitting incomplete or poorly coordinated documentation",
        ],
        paragraphs: [
          "Another mistake is treating council requirements as something to address after the design has been completed. For multi-unit development, planning should inform the design from the start. A well-considered concept will not guarantee approval, but it gives the application a much stronger foundation.",
        ],
      },
    ],
    conclusion: [
      "If you are considering a dual occupancy, townhouse or multi-dwelling development, start by understanding your site rather than jumping straight into detailed floor plans.",
      "Manzel Studio works with homeowners, investors and developers on [multi-residential building design](/residential-building-design) in Melbourne, including site feasibility, concept design, planning documentation, permit support and detailed building documentation. Browse [our projects](/our-projects) or [get in touch](/contact-us) to talk through your site's potential.",
      "A clear understanding of your site's potential can help you establish the right development strategy before significant time and money are committed.",
    ],
    faqs: [
      {
        q: "Do I need a planning permit to build two units in Melbourne?",
        a: "For two or more dwellings on a lot in relevant residential zones, a planning permit is generally required. Some eligible proposals may qualify for a streamlined VicSmart pathway.",
      },
      {
        q: "Does Clause 55 apply to townhouses in Melbourne?",
        a: "Clause 55 applies to two or more dwellings on a lot and residential buildings up to and including three storeys in relevant zones.",
      },
      {
        q: "Is a planning permit the same as a building permit?",
        a: "No. Planning permits and building permits address different regulatory requirements, and a project may require both before construction can proceed.",
      },
      {
        q: "How many dwellings can I build on my Melbourne property?",
        a: "There is no single number based only on lot size. Zoning, overlays, title restrictions, easements, site dimensions, access, neighbouring properties and the proposed design can all influence development potential.",
      },
      {
        q: "Should I assess the site before designing townhouses?",
        a: "Yes. Early [site assessment](/site-assessment) can identify planning controls, restrictions and development opportunities before substantial money is committed to detailed design.",
      },
      {
        q: "Who submits a multi-unit planning permit application?",
        a: "Applications are generally submitted to the responsible authority, usually the local council. A building designer or planning professional can assist with preparing the design, supporting documentation and managing the planning process.",
      },
    ],
  },
};
