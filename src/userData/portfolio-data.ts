export const portfolioData = {
  meta: {
    version: "1.0.0",
    lastUpdated: "2025-04-30",
  },

  personal: {
    name: "Abdalla Diaa",
    title: "Front-End Developer",
    subtitle: "Computer Science Student @ Benha University",
    tagline: "I build fast, accessible, and modern user interfaces.",
    email: "abdallazx009@gmail.com",
    phone: "+201018639402",
    location: "Egypt",
    availableForWork: true,
    avatar: "/abdalla_diaa_profile.JPG",
    resumeUrl: "/assets/resume.pdf",
  },

  social: {
    linkedin: "https://linkedin.com/in/abdalla-diaa",
    github: "https://github.com/abdalladiaa",
    twitter: "",
    email: "mailto:abdallazx009@gmail.com",
  },

  about: {
    bio: "Motivated Front-End Developer and Computer Science student at Benha University with hands-on experience building 15+ responsive web applications, including social media and e-commerce platforms. Proficient in React, Next.js, TypeScript, and Tailwind CSS. Passionate about crafting fast, accessible, and modern user interfaces with clean, maintainable code.",
    highlights: [
      "15+ responsive web applications built",
      "Currently in the Next.js phase of a full-stack track",
      "Strong CS fundamentals: Algorithms, Data Structures, OOP",
      "Open to junior frontend opportunities in Egypt and the Gulf",
    ],
  },

  education: [
    {
      id: "edu-1",
      institution: "Benha University",
      degree:
        "Bachelor of Computer and Artificial Intelligence — Computer Science",
      period: "09/2024 – 09/2028",
      location: "Benha, Egypt",
      coursework: [
        "Data Structures",
        "Algorithms",
        "Object-Oriented Programming",
        "C++",
        "JAVA",
        "Artificial Intelligence Fundamentals",
        
      ],
    },
  ],

  courses: [
    {
      id: "course-1",
      name: "Full-Stack Web Development Track",
      provider: "Route Academy",
      period: "09/2025 – 09/2026",
      topics: [
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
        "React",
        "Tailwind CSS",
        "TypeScript",
        "Next.js",
      ],
      certificateUrl: "",
    },
    {
      id: "course-2",
      name: "Web Development Workshop",
      provider: "GDG Benha",
      period: "02/2025",
      topics: [],
      certificateUrl: "",
    },
  ],

  skills: {
    frontend: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "JavaScript (ES6+)", level: 85 },
      { name: "React", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "TypeScript", level: 75 },
      { name: "Responsive Design", level: 90 },
    ],
    styling: [
      { name: "Tailwind CSS", level: 85 },
      { name: "Bootstrap", level: 80 },
      { name: "Shadcn UI", level: 75 },
      { name: "HeroUI", level: 70 },
      { name: "Figma", level: 65 },
    ],
    stateManagement: [
      { name: "React Query (TanStack)", level: 80 },
      { name: "Redux Toolkit", level: 75 },
      { name: "Context API", level: 85 },
    ],
    toolsWorkflow: [
      { name: "Git & GitHub", level: 85 },
      { name: "REST APIs & Axios", level: 85 },
      { name: "React Router", level: 85 },
      { name: "React Hook Form + Zod", level: 80 },
      { name: "NextAuth", level: 70 },
    ],
    csFundamentals: [
      "Data Structures",
      "Algorithms",
      "OOP",
      "Networking Basics",
      "Operating Systems",
    ],
  },

  projects: [
    {
      id: "proj-1",
      title: "FreshCart — E-commerce Web App",
      shortDesc:
        "Full-featured e-commerce platform with cart, auth, and protected routes.",
      longDesc:
        "Developed a full-featured e-commerce web application with shopping cart, user authentication, and protected routes. Integrates REST APIs using React Query for efficient data fetching and caching. Built with Next.js and NextAuth for seamless SSR and session management.",
      tags: [
        "Next.js",
        "NextAuth",
        "React Query",
        "TypeScript",
        "Tailwind CSS",
      ],
      type: "E-commerce",
      liveUrl: "https://fresh-cart-ruddy-eight.vercel.app",
      githubUrl: "https://github.com/abdalladiaa/FreshCart",
      image: "/assets/projects/freshcart.png",
      featured: true,
      highlights: [
        "Advanced filtering sidebar with React Hook Form and URL params",
        "JWT-based auth with NextAuth v4 Credentials provider",
        "Middleware-based route protection",
        "Efficient caching strategy with React Query",
      ],
    },
    {
      id: "proj-2",
      title: "Social Media Web App",
      shortDesc:
        "Responsive social media app with dynamic content and user interactions.",
      longDesc:
        "Built a responsive social media web application using React and REST APIs. Features include posts feed, comments, optimistic UI updates, infinite scroll with useInfiniteQuery, and suggested friends sidebar.",
      tags: ["React", "REST API", "React Query", "Context API"],
      type: "Social Media",
      liveUrl: "https://social-media-app-eight-roan.vercel.app",
      githubUrl: "https://github.com/abdalladiaa/Social-Media-App",
      image: "/assets/projects/social-media.png",
      featured: true,
      highlights: [
        "Infinite scroll with useInfiniteQuery + IntersectionObserver",
        "Optimistic UI updates for posts and comments",
        "Custom useGenericMutation hook pattern",
        "Component architecture: AddPost, PostCard, AddComment, Posts, SuggestedFriends",
      ],
    },
    {
      id: "proj-3",
      title: "Adasa (عدسة) — Photography Hub",
      shortDesc:
        "A premium photography platform and blog for Arabic-speaking photography enthusiasts.",
      longDesc:
        "Developed a professional photography hub dedicated to educational content and professional techniques. The platform features a high-performance RTL (Right-to-Left) layout, a modern dark-mode UI with glassmorphism effects, and a dynamic categorization system for photography styles like Portrait, Landscape, and Lighting.",
      tags: ["React", "Tailwind CSS", "Framer Motion", "RTL", "Dark Mode"],
      type: "Photography Platform",
      liveUrl: "https://adasa-dun-two.vercel.app/",
      githubUrl: "https://github.com/abdalladiaa/adasa",
      image: "/assets/projects/adasa.png",
      featured: true,
      highlights: [
        "Specialized RTL professional design for Arabic content",
        "Modern Dark Mode UI with seamless Framer Motion animations",
        "Dynamic blog system with category-based filtering",
        "Interactive search and newsletter integration for user engagement",
      ],
    },
    {
      id: "proj-4",
      title: "Cosmos Space Dashboard",
      shortDesc:
        "An interactive dashboard for exploring space data and celestial bodies.",
      longDesc:
        "Built a high-performance space exploration platform that visualizes complex astronomical data. The application features a streamlined dashboard UI for tracking planets, moons, and space missions, focusing on data clarity and a modern aesthetic.",
      tags: [
        "REST API",
        "javascript",
        "Bootstrap",
        "API Integration",
        "Responsive Design",
      ],
      type: "Space Exploration",
      liveUrl: "https://abdalladiaa.github.io/cosmos-space-dashboard",
      githubUrl: "https://github.com/abdalladiaa/cosmos-space-dashboard",
      image: "/assets/projects/cosmos-dashboard.png",
      featured: true,
      highlights: [
        "Dynamic data rendering for planets and celestial missions",
        "Modern dashboard layout with optimized information architecture",
        "Fully responsive design using Tailwind CSS utility classes",
        "Interactive UI components for seamless data navigation",
      ],
    },
    {
      id: "proj-5",
      title: "ContactHub",
      shortDesc:
        "A modern contact management system for organizing and tracking professional connections.",
      longDesc:
        "ContactHub is a functional web application designed to handle CRUD operations for contact management. It features a clean interface for adding, searching, and organizing contacts, built with a focus on efficient DOM manipulation and persistent data handling without the need for complex frameworks.",
      tags: [
        "javascript",
        "Bootstrap",
        "HTML5",
        "CSS3",
        "DOM Manipulation",
      ],
      type: "Web Productivity Tool",
      liveUrl: "https://abdalladiaa.github.io/contacthub/",
      githubUrl: "https://github.com/abdalladiaa/contacthub",
      image: "/assets/projects/contacthub.png",
      featured: true,
      highlights: [
        "Full CRUD functionality for seamless contact organization",
        "Real-time search filtering for instant data retrieval",
        "Persistent data handling and dynamic DOM updates",
        "Clean, responsive UI built with Bootstrap for all device sizes",
      ],
    },
    {
      id: "proj-6",
      title: "EliteHomes",
      shortDesc:
        "A high-end real estate landing page built exclusively with semantic HTML5 and custom CSS3.",
      longDesc:
        "EliteHomes is a professional-grade landing page that demonstrates the power of native web technologies. Built without any external frameworks, libraries, or scripts, it showcases a deep mastery of CSS architecture, custom layouts, and responsive design principles, resulting in a lightweight and lightning-fast user experience.",
      tags: [
        "HTML5",
        "CSS3",
        "Flexbox",
        "CSS Grid",
        "Responsive Design",
      ],
      type: "Static Landing Page",
      liveUrl: "https://abdalladiaa.github.io/EliteHomes",
      githubUrl: "https://github.com/abdalladiaa/EliteHomes",
      image: "/assets/projects/elitehomes.png",
      featured: true,
      highlights: [
        "100% Native CSS implementation with zero external dependencies",
        "Expert use of CSS Grid and Flexbox for complex, multi-column layouts",
        "Fully responsive architecture crafted via custom media queries",
        "Optimized for performance with a focus on clean, semantic HTML structure",
      ],
    },
  ],

  experience: [
    {
      id: "exp-1",
      role: "Media Buyer",
      company: "القادة",
      type: "Part-time",
      period: "Present",
      location: "Egypt",
      description:
        "Managing paid advertising campaigns, comment handling, and post design using Meta Ads Manager and Canva.",
      skills: [
        "Meta Ads Manager",
        "Canva",
        "Copywriting",
        "KPI Analysis",
        "Content Creation",
      ],
    },
  ],

  services: [
    {
      id: "svc-1",
      title: "Frontend Development",
      description:
        "Building modern, responsive web applications using React and Next.js with clean, maintainable code.",
      icon: "code",
    },
    {
      id: "svc-2",
      title: "UI Implementation",
      description:
        "Converting Figma designs into pixel-perfect, responsive interfaces with Tailwind CSS.",
      icon: "layout",
    },
    {
      id: "svc-3",
      title: "API Integration",
      description:
        "Integrating REST APIs efficiently using Axios and React Query for optimal data fetching and caching.",
      icon: "zap",
    },
  ],

  contact: {
    heading: "Let's Work Together",
    subheading:
      "Open to junior frontend roles, freelance projects, and collaborations.",
    email: "abdallazx009@gmail.com",
    preferredContact: "email",
  },

  seo: {
    title: "Abdalla Diaa — Front-End Developer",
    description:
      "Front-End Developer and CS student specializing in React, Next.js, and TypeScript. Building fast, accessible, and modern web applications.",
    keywords: [
      "Front-End Developer",
      "React Developer",
      "Next.js",
      "TypeScript",
      "Web Developer Egypt",
      "Junior Frontend Developer",
    ],
    ogImage: "/assets/og-image.png",
  },
};
