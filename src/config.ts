export const siteConfig = {
  name: "Kristo Anugrah",
  title: "Software Engineer",
  description: "Portfolio website of Kristo Anugrah",
  accentColor: "#f59e0b",
  social: {
    email: "kristoanugrah@gmail.com",
    linkedin: "https://linkedin.com/in/kristo-anugrah",
    twitter: "",
    github: "https://github.com/qrst0",
  },
  aboutMe:
    "Computer Science graduate from Institut Teknologi Bandung (GPA 3.88/4.00). I build production backend, full-stack, cross-platform applications, and cloud infrastructure on GCP and AWS, backed by a strong foundation in algorithms and data structures.",
  skills: [
    "Java",
    "C++",
    "TypeScript",
    "Dart",
    "Python",
    "NestJS",
    "Next.js",
    "React",
    "Node.js",
    "Flutter",
    "Prisma",
    "TailwindCSS",
    "PostgreSQL",
    "GCP",
    "AWS",
    "Docker",
  ],
  projects: [
    {
      name: "Dynamic Call-Graph Community Detection Platform",
      description:
        "Final year thesis. Adapted the DYNMOGA multi-objective genetic algorithm to directed, time-varying call graphs by replacing its objective functions with directed modularity and intersection-normalized mutual information.",
      link: "",
      skills: ["Java", "Multi-objective Optimization", "LLM Integration", "Web UI"],
    },
    {
      name: "Nelfix, Movie Streaming Platform",
      description:
        "A monolithic movie streaming platform in NestJS where users can purchase, stream, and review movies. Integrated AWS S3 through the AWS SDK to store and stream video content securely, with a responsive UI built in EJS and TailwindCSS.",
      link: "https://github.com/qrst0/Nelfix",
      skills: ["NestJS", "PostgreSQL", "Prisma", "AWS S3", "TailwindCSS"],
    },
  ],
  experience: [
    {
      company: "Digitala",
      title: "Mobile Application Developer Intern",
      dateRange: "Aug 2025 - Oct 2025",
      bullets: [
        "Developed features for a cross-platform Flutter/Dart medical application that oncologists use to navigate cancer treatment pathways",
        "Implemented an end-to-end JWT authentication flow covering login, registration, email verification, password reset, and account deletion, with encrypted token storage and role-based route guards",
        "Structured the app around Riverpod state management, go_router (Navigator 2.0) deep linking, and a Dio HTTP client with interceptors that inject and refresh tokens automatically",
      ],
    },
  ],
  education: [
    {
      school: "Institut Teknologi Bandung",
      degree: "Bachelor of Engineering in Computer Science",
      dateRange: "2022 - 2026",
      achievements: [
        "Graduated Summa Cum Laude with GPA 3.88/4.00",
        "Acted as Deputy Division Head in ARKAVIDIA, contest hosted by ITB",
      ],
    },
  ],
  awards: [
    {
      title: "ICPC Asia Jakarta Regional Contest, Finalist",
      organization: "International Collegiate Programming Contest",
      dateRange: "2022 - 2025",
      description:
        "Qualified for the regional finals four consecutive years (2022-2025); best national result top 20 of 700+ teams in 2024.",
    },
    {
      title: "Competitive Programming Competition, 1st Place (National)",
      organization: "Informatics Festival, Universitas Padjadjaran",
      dateRange: "Oct 2024",
      description:
        "Won first place solving complex algorithmic problems under time pressure.",
    },
    {
      title: "RISTEK Datathon 2024, Finalist (National)",
      organization: "RISTEK Fasilkom UI",
      dateRange: "Aug 2024",
      description:
        "Placed in the top 7 of 150+ teams and received an Honorable Mention for the most innovative model. Built a Graph Neural Network for fintech fraud detection and fine-tuned an SBERT model for product search.",
    },
  ],
  languages: [
    {
      name: "Indonesian",
      level: "Native",
    },
    {
      name: "English",
      level: "Professional",
    },
    {
      name: "Japanese",
      level: "Beginner",
    },
  ],
};
