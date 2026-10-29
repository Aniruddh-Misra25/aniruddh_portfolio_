/* ==================================================================
   data.js — every piece of content on the site lives here.
   Edit this file; the components never need to change.
   ================================================================== */

export const PROFILE = {
  first: "Aniruddh",
  last: "Misra",
  fullName: "Aniruddh Misra",
  tagline: "Exploring the intersection of mathematics, technology, and real-world problem solving",
  location: "",
  email: "",
  phone: "",
  bio: [
    "I am a curious and analytical learner who enjoys exploring challenging ideas through mathematics, science, and technology. Whether solving complex problems, learning new computational techniques, or collaborating with peers, I am motivated by the opportunity to understand how knowledge can be applied to real-world challenges.",
    "Outside the classroom, I enjoy balancing academics with leadership and teamwork through basketball and the Math Club. These experiences have strengthened my ability to think critically, communicate effectively, and approach every challenge with discipline and persistence.",
    "I am driven by curiosity and the desire to continuously learn. I enjoy breaking down complex problems, exploring different perspectives, and developing solutions through logical thinking. Every new challenge is an opportunity to expand my understanding and become a more thoughtful learner.",
  ],
  socials: {
    github: "",
    scholar: "",
    linkedin: "",
    codeforces: "",
    fide: "",
    imo: "",
    wespa: "",
    twitter: "",
  },
  cv: "",
  photo: "",
  aboutPhoto: "",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Experience",
    children: [
      { label: "Featured Projects", to: "/projects" },
      { label: "Areas of Interest", to: "/publications" },
    ],
  },
  { label: "Achievements", to: "/awards" },
  { label: "Participations", to: "/volunteering" },
  { label: "Activities", to: "/sports" },
];

/* ---- Roles & engagement (renders as "Work Experience" cards) ---- */

export const EXPERIENCE = [
  {
    slug: "math-club-vice-president",
    role: "Vice President, Math Club",
    org: "School Math Club",
    logo: "",
    location: "",
    dates: "",
    meta: "",
    badge: "Elected",
    desc: "Working alongside fellow students to lead the Math Club, encouraging academic engagement beyond the classroom and contributing to the school's Mathematics Magazine.",
    bullets: [
      "Led the Math Club alongside fellow student leaders to encourage academic engagement beyond the classroom",
      "Contributed to the collaborative production of the school's Mathematics Magazine",
      "Learned to organize ideas, coordinate with peers, and make mathematics more accessible and engaging for the school community",
    ],
    tags: ["Leadership", "Mathematics", "Student Publications"],
    featured: true,
  },
];

/* ---- Engineering projects (renders as "Featured Projects") ---- */
/* NOTE: source content is math/leadership/sports focused rather than
   engineering-project focused — using this section for independent
   coursework and applied learning instead. Review before publishing. */

export const PROJECTS = [
  {
    name: "Statistical Learning with Python",
    org: "Independent Coursework (CS50)",
    meta: "",
    desc: "Completed independent coursework exploring statistical modelling, data analysis, and computational techniques using Python, strengthening understanding of how mathematics can be applied to solve real-world problems.",
    tags: ["Statistics", "Python", "Data Analysis", "Computational Thinking"],
    featured: true,
  },
  {
    name: "Spanish Writing — Creative Expression",
    org: "Independent Writing Project",
    meta: "",
    desc: "Wrote an article in Spanish, developing confidence in communicating ideas across different cultural and linguistic contexts.",
    tags: ["Spanish", "Writing", "Communication"],
    featured: false,
  },
];

/* ---- Achievements ---- */

export const AWARDS = [
  {
    icon: "🏀",
    title: "National-Level Basketball Competitor",
    meta: "Team Sports",
    detail: "Represented school in basketball competitions at the national level, built on years of training and tournament participation.",
    link: "",
    featured: false,
  },
  {
    icon: "➗",
    title: "Mathematics Competitions — AMC 10, AMC 12, CSMC",
    meta: "Competitive Mathematics",
    detail: "Participant in AMC 10, AMC 12, and CSMC mathematics competitions, challenging logical reasoning, analytical thinking, and creative problem-solving.",
    link: "",
    featured: true,
  },
  {
    icon: "💻",
    title: "Statistical Learning with Python — CS50",
    meta: "Independent Learning",
    detail: "Completed Statistical Learning with Python through CS50, strengthening the ability to apply mathematics to real-world problems.",
    link: "",
    featured: true,
  },
  {
    icon: "📚",
    title: "IB Diploma Candidate",
    meta: "IB Diploma Programme",
    detail: "Pursuing a rigorous academic curriculum with Higher Level STEM subjects, including Mathematics: Analysis & Approaches, Physics, and Chemistry.",
    link: "",
    featured: true,
  },
  {
    icon: "📖",
    title: "Vice President, Math Club",
    meta: "Student Leadership",
    detail: "Vice President of the Math Club and contributor to the school's Mathematics Magazine.",
    link: "",
    featured: false,
  },
];

/* ---- Academic interests ---- */

export const ARTICLES = [
  {
    title: "Advanced Mathematics",
    outlet: "Currently exploring advanced mathematical concepts and problem-solving techniques",
    link: "",
  },
  {
    title: "Physics and Scientific Inquiry",
    outlet: "Currently exploring physics and methods of scientific inquiry",
    link: "",
  },
  {
    title: "Statistical Learning with Python",
    outlet: "Currently exploring computational and statistical techniques applied through Python",
    link: "",
  },
  {
    title: "Computational Thinking",
    outlet: "Currently exploring computational approaches to problem-solving",
    link: "",
  },
  {
    title: "Economics and Data-Driven Decision Making",
    outlet: "Currently exploring economics and how data informs decision-making",
    link: "",
  },
];

/* ---- Leadership, service & community ---- */

export const VOLUNTEER = {
  stats: [
    { value: "Vice President", label: "School Math Club" },
    { value: "CS50", label: "Python Statistical Learning" },
    { value: "CSMC", label: "Mathematics Competitions" },
  ],
  orgs: [
    {
      name: "Math Club",
      role: "Vice President",
      desc: "Led the Math Club alongside fellow students and contributed to the collaborative production of the school's Mathematics Magazine, making mathematics more accessible and engaging for the school community.",
    },
    {
      name: "Model United Nations",
      role: "Participant",
      desc: "Participated in Model United Nations, engaging with research, diplomacy, and thoughtful discussion, and reinforcing the value of listening to different perspectives before arriving at informed decisions.",
    },
  ],
};

/* ---- Athletics, debate & competitions (renders on the /sports route) ---- */

export const SPORTS = [
  {
    icon: "",
    name: "Basketball",
    desc: "Competitive team player, representing school in basketball competitions at the national level. Years of training and tournament participation have strengthened discipline, resilience, and the ability to perform under pressure while working toward a shared goal.",
  },
  {
    icon: "",
    name: "Mathematics Competitions",
    desc: "Participant in AMC 10, AMC 12, and CSMC, competitions that challenge logical reasoning, analytical thinking, and creative problem-solving.",
  },
  {
    icon: "",
    name: "Model United Nations",
    desc: "Participated in Model United Nations, developing an appreciation for research, diplomacy, and thoughtful discussion.",
  },
  {
    icon: "",
    name: "Spanish Writing",
    desc: "Wrote an article in Spanish, developing confidence in expressing ideas across different cultural and linguistic contexts.",
  },
];

/* ---- Skills ---- */
/* NOTE: Skills are inferred from described projects, coursework, sport,
   competitions, and training — review and edit before publishing. */

export const SKILLS = [
  {
    group: "Core Competencies",
    items: ["Analytical Thinking", "Problem-Solving", "Leadership", "Communication", "Teamwork", "Discipline"],
  },
  {
    group: "Mathematics & Data",
    items: ["Advanced Mathematics", "Statistical Learning", "Python", "Computational Thinking", "Data Analysis"],
  },
  {
    group: "Sciences",
    items: ["Physics", "Chemistry", "Scientific Inquiry"],
  },
  {
    group: "Languages",
    items: ["English", "Hindi", "Spanish (IB)"],
  },
];

/* ---- Education ---- */

export const EDUCATION = [
  {
    school: "",
    location: "",
    level: "IB Diploma Programme",
    dates: "",
    gpa: "",
    coursework: [
      "Mathematics: Analysis & Approaches",
      "Physics",
      "Chemistry",
    ],
  },
];

/* ---- Test scores (none listed in the source document) ---- */

export const TEST_SCORES = [];

/* ---- Looking ahead ---- */
/* NOTE: source PDF did not include a distinct "looking ahead" / future-goals
   section — the lines below are adapted from the "What Drives Me" content.
   Review and edit before publishing. */

export const LOOKING_AHEAD = [
  "I am driven by curiosity and the desire to continuously learn — breaking down complex problems, exploring different perspectives, and developing solutions through logical thinking.",
  "I want to keep learning in environments that encourage curiosity, analytical thinking, and continuous exploration, deepening my understanding of mathematics, science, and technology while applying that knowledge beyond the classroom.",
];

export const FOOTER_NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Featured Projects", to: "/projects" },
  { label: "Areas of Interest", to: "/publications" },
  { label: "Achievements", to: "/awards" },
  { label: "Participations", to: "/volunteering" },
  { label: "Activities", to: "/sports" },
];

export const FOOTER_PROFILES = [
  { label: "LinkedIn", href: PROFILE.socials.linkedin },
];
