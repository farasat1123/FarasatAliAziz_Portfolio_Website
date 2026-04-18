import type { PortfolioData, Skill, Education, SocialLink } from "@/lib/types";

// ─── Shared data (language-independent) ─────────────────────────────────────

const name = "Farasat Ali Aziz";
const email = "azizfarasatali@gmail.com";
const phone = "+49 17677327356";

const skills: Skill[] = [
  // QA & Testing
  { name: "Regression Testing", category: "QA & Testing" },
  { name: "Functional Testing", category: "QA & Testing" },
  { name: "Integration Testing", category: "QA & Testing" },
  { name: "Smoke Testing", category: "QA & Testing" },
  { name: "Sanity Testing", category: "QA & Testing" },
  { name: "User Acceptance Testing (UAT)", category: "QA & Testing" },
  { name: "Black Box Testing", category: "QA & Testing" },
  { name: "API Testing", category: "QA & Testing" },
  { name: "System Testing", category: "QA & Testing" },
  { name: "Manual Testing", category: "QA & Testing" },
  { name: "Defect Management", category: "QA & Testing" },
  { name: "Software Quality Assurance", category: "QA & Testing" },
  // Test Automation
  { name: "Selenium WebDriver", category: "Test Automation" },
  { name: "Playwright using JavaScript", category: "Test Automation" },
  { name: "Web Automation (Cypress)", category: "Test Automation" },
  { name: "Robot Framework", category: "Test Automation" },
  { name: "Cucumber Framework", category: "Test Automation" },
  { name: "Appium", category: "Test Automation" },
  { name: "API Automation", category: "Test Automation" },
  { name: "Framework Creation", category: "Test Automation" },
  { name: "Mobile Automation (Appium)", category: "Test Automation" },
  { name: "Test Automation Frameworks", category: "Test Automation" },
  // Programming
  { name: "JavaScript", category: "Programming" },
  { name: "TypeScript", category: "Programming" },
  { name: "Java", category: "Programming" },
  { name: "Python", category: "Programming" },
  { name: "Node.js", category: "Programming" },
  { name: "React.js", category: "Programming" },
  { name: "React Native", category: "Programming" },
  { name: "NestJS", category: "Programming" },
  // Tools & Platforms
  { name: "Jira", category: "Tools & Platforms" },
  { name: "Postman", category: "Tools & Platforms" },
  { name: "Confluence", category: "Tools & Platforms" },
  { name: "ClickUp", category: "Tools & Platforms" },
  { name: "Swagger API", category: "Tools & Platforms" },
  { name: "GraphQL", category: "Tools & Platforms" },
  { name: "Linear", category: "Tools & Platforms" },
  { name: "Slack", category: "Tools & Platforms" },
  { name: "Visual Studio", category: "Tools & Platforms" },
  { name: "PyCharm", category: "Tools & Platforms" },
  // Methodologies
  { name: "Agile (Scrum)", category: "Methodologies" },
  { name: "Agile Testing", category: "Methodologies" },
  { name: "Test Planning", category: "Methodologies" },
  { name: "Sprint Planning", category: "Methodologies" },
];

const education: Education[] = [
  {
    institution: "Technische Universität Ilmenau",
    url: "https://www.tu-ilmenau.de/",
    degree: "M.Sc. Research in Computer & Systems Engineering",
    startYear: "2025",
    endYear: "Present",
    location: "Ilmenau, Germany",
  },
  {
    institution: "University of Central Punjab",
    url: "https://ucp.edu.pk/",
    degree: "BS Computer Science (Honors)",
    startYear: "2015",
    endYear: "2019",
    location: "Lahore, Pakistan",
  },
];

const socialLinks: SocialLink[] = [
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/farasataliaziz/" },
  { platform: "GitHub", url: "https://github.com/farasat1123?tab=overview" },
];

// ─── English ─────────────────────────────────────────────────────────────────

export const en: PortfolioData = {
  name,
  email,
  phone,
  skills,
  education,
  socialLinks,
  projects: [],
  certifications: [
    {
      title: "LinkedIn Certifications",
      issuer: "LinkedIn",
      url: "https://www.linkedin.com/in/farasataliaziz/details/certifications/",
    },
    {
      title: "LinkedIn Featured Posts",
      issuer: "LinkedIn",
      url: "https://www.linkedin.com/in/farasataliaziz/details/featured/",
    },
  ],

  role: "Senior QA Specialist | Agile Testing Expert",
  tagline:
    "Championing software quality through strategic manual and automated testing — across web, mobile, and enterprise platforms in global Agile teams.",

  about: [
    "Seasoned QA professional with 6+ years of experience delivering software quality for global clients in Agile environments. Proficient in a comprehensive range of manual testing methodologies — Sanity, Smoke, Integration, Regression, Functional, Grey Box, and System testing — across web, mobile, and enterprise platforms.",
    "Specialist in test automation using Cypress, Selenium WebDriver, Playwright, and Robot Framework. Skilled at designing robust test strategies, managing defect lifecycles, generating actionable QA reports, and mentoring engineering teams to raise quality standards and ship reliable software at scale.",
  ],

  navLinks: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],

  experience: [
    {
      company: "10Pearls",
      url: "https://10pearls.com/",
      role: "Senior Test Consultant III",
      startDate: "July 2022",
      endDate: "November 2025",
      highlights: [
        "Led cross-functional project teams and delivered hybrid web automation solutions, improving team efficiency by 85%",
        "Designed and executed comprehensive test strategies with in-depth QA reviews across multiple enterprise projects",
        "Mentored senior QA engineers on automation best practices and modern testing frameworks",
        "Engaged directly with international clients to align quality standards and gather project requirements",
        "Researched and evaluated emerging automation technologies to drive continuous improvement",
      ],
      achievement:
        "Delivered an 85% efficiency gain through hybrid web automation — recognized as a key automation champion across the organization.",
      techStack: ["JavaScript", "React Native", "Node.js", "React", "Angular", "PostgreSQL", "MongoDB", "GraphQL", "Swagger API"],
    },
    {
      company: "Bykea",
      url: "https://bykea.com/",
      role: "Software Quality Assurance Engineer",
      startDate: "February 2022",
      endDate: "June 2022",
      highlights: [
        "Contributed to QA for Bykea's Cash Transfer Vertical within the Fintech product line",
        "Executed end-to-end test planning, test case design, and feature validation for critical financial flows",
        "Performed Black Box, Smoke, GUI, Functional, Integration, Regression, Negative, Workflow, and Acceptance testing",
        "Conducted manual (functional & non-functional) testing alongside Android automation testing",
      ],
      techStack: ["Java", "React Native", "Node.js", "PostgreSQL", "MongoDB", "Swagger API"],
    },
    {
      company: "TxLabz · Client: Entertainment Group (AU)",
      url: "https://www.txlabz.com/",
      role: "QA Engineer",
      startDate: "March 2021",
      endDate: "January 2022",
      highlights: [
        "Delivered QA services for Entertainment Group (Sydney, Australia) — a leading entertainment platform — embedded via TxLabz",
        "Conducted Black Box, Smoke, GUI, Functional, Integration, and Regression testing across product releases",
        "Actively participated in Agile Scrum ceremonies: daily standups, sprint planning, and retrospectives",
        "Tracked and resolved defects using Jira and Monday.com, improving product quality and customer satisfaction by 85%",
      ],
    },
    {
      company: "10Pearls",
      url: "https://10pearls.com/",
      role: "Test Engineer",
      startDate: "March 2020",
      endDate: "March 2021",
      highlights: [
        "Developed detailed test cases and comprehensive bug reports for international clients (Abu Dhabi, Denmark)",
        "Tested Android & iOS mobile applications, Unity3D game applications, and web applications",
        "Performed API testing using Postman and collaborated with cross-functional teams to resolve defects efficiently",
        "Contributed to R&D initiatives and SRS documentation covering functional and additional requirements",
      ],
    },
    {
      company: "Upwork",
      role: "Software Quality Assurance Engineer (Freelance)",
      startDate: "August 2019",
      endDate: "December 2020",
      highlights: [
        "Delivered freelance QA services covering database testing, smoke, sanity, integration, regression, GUI, and API testing",
        "Applied Agile methodologies and automation frameworks across diverse client projects",
      ],
    },
    {
      company: "Himaliyan Edibles Pvt. Limited",
      role: "IT Project Manager (Part-Time)",
      startDate: "December 2018",
      endDate: "September 2020",
      highlights: [
        "Managed IT projects using Jira and Trello, overseeing team coordination and delivery timelines",
        "Applied Agile methodologies to drive team efficiency and ensure on-time project delivery",
      ],
    },
    {
      company: "US Apparel & Textiles",
      url: "https://usgroup.org/new-venture",
      role: "IT Intern",
      startDate: "October 2019",
      endDate: "December 2019",
      highlights: [
        "Supported IT department operations and gained foundational experience in enterprise software environments",
      ],
    },
  ],

  ui: {
    hiIm: "Hi, I'm",
    downloadCV: "Download CV",
    getInTouch: "Get in Touch",
    resume: "Resume",
    aboutHeading: "About Me",
    skillsHeading: "Skills & Technologies",
    skillCategories: {
      "QA & Testing": "QA & Testing",
      "Test Automation": "Test Automation",
      "Programming": "Programming",
      "Tools & Platforms": "Tools & Platforms",
      "Methodologies": "Methodologies",
    },
    experienceHeading: "Work Experience",
    educationHeading: "Education",
    certAndEduHeading: "Certifications & Education",
    certHeading: "Certifications",
    eduHeading: "Education",
    contactHeading: "Get in Touch",
    contactSubtext:
      "I'm open to new opportunities and collaborations. Feel free to reach out.",
    emailLabel: "Email",
    phoneLabel: "Phone / WhatsApp",
    viewProfile: "View Profile",
    allRightsReserved: "All rights reserved.",
    formName: "Name",
    formEmail: "Email",
    formMessage: "Message",
    formNamePlaceholder: "Your full name",
    formEmailPlaceholder: "your@email.com",
    formMessagePlaceholder: "Write your message here...",
    formSubmit: "Send Message",
    formSending: "Sending...",
    formSuccess: "Thank you! Your message has been sent successfully.",
    formError: "Something went wrong. Please try again.",
  },
};

// ─── German ──────────────────────────────────────────────────────────────────

export const de: PortfolioData = {
  name,
  email,
  phone,
  skills,
  education,
  socialLinks,
  projects: [],
  certifications: [
    {
      title: "LinkedIn Zertifikate",
      issuer: "LinkedIn",
      url: "https://www.linkedin.com/in/farasataliaziz/details/certifications/",
    },
    {
      title: "LinkedIn Featured Posts",
      issuer: "LinkedIn",
      url: "https://www.linkedin.com/in/farasataliaziz/details/featured/",
    },
  ],

  role: "Senior QA-Spezialist | Agile-Testing-Experte",
  tagline:
    "Softwarequalität durch strategische manuelle und automatisierte Tests sicherstellen — über Web-, Mobile- und Enterprise-Plattformen in globalen agilen Teams.",

  about: [
    "Erfahrener QA-Profi mit über 6 Jahren Erfahrung in der Sicherstellung von Softwarequalität für internationale Kunden in agilen Umgebungen. Versiert in einem breiten Spektrum manueller Testmethoden — Sanity-, Smoke-, Integrations-, Regressions-, Funktions-, Grey-Box- und Systemtests — für Web-, Mobile- und Enterprise-Plattformen.",
    "Spezialist für Testautomatisierung mit Cypress, Selenium WebDriver, Playwright und Robot Framework. Erfahren in der Entwicklung robuster Teststrategien, im Defektmanagement, der Erstellung aussagekräftiger QA-Berichte sowie in der Förderung von Engineering-Teams zur Steigerung der Qualitätsstandards und Auslieferung zuverlässiger Software.",
  ],

  navLinks: [
    { label: "Über mich", href: "#about" },
    { label: "Fähigkeiten", href: "#skills" },
    { label: "Erfahrung", href: "#experience" },
    { label: "Kontakt", href: "#contact" },
  ],

  experience: [
    {
      company: "10Pearls",
      url: "https://10pearls.com/",
      role: "Senior Test Consultant III",
      startDate: "Juli 2022",
      endDate: "November 2025",
      highlights: [
        "Leitete funktionsübergreifende Projektteams und lieferte hybride Web-Automatisierungslösungen mit einer Effizienzsteigerung von 85%",
        "Entwarf und führte umfassende Teststrategien mit detaillierten QA-Reviews für mehrere Enterprise-Projekte durch",
        "Mentoring von Senior-QA-Engineers in Bezug auf Automatisierungs-Best-Practices und moderne Testframeworks",
        "Direkte Zusammenarbeit mit internationalen Kunden zur Ausrichtung von Qualitätsstandards und Erfassung von Projektanforderungen",
        "Recherche und Evaluierung neuer Automatisierungstechnologien zur kontinuierlichen Prozessverbesserung",
      ],
      achievement:
        "85% Effizienzsteigerung durch hybride Web-Automatisierung erreicht — als Automatisierungs-Champion der Organisation anerkannt.",
      techStack: ["JavaScript", "React Native", "Node.js", "React", "Angular", "PostgreSQL", "MongoDB", "GraphQL", "Swagger API"],
    },
    {
      company: "Bykea",
      url: "https://bykea.com/",
      role: "Software Quality Assurance Engineer",
      startDate: "Februar 2022",
      endDate: "Juni 2022",
      highlights: [
        "QA-Beiträge zum Cash-Transfer-Bereich von Bykaas Fintech-Produktlinie",
        "End-to-End-Testplanung, Testfalldesign und Feature-Validierung für kritische Finanz-Workflows",
        "Black-Box-, Smoke-, GUI-, Funktions-, Integrations-, Regressions-, Negativ-, Workflow- und Akzeptanztests durchgeführt",
        "Manuelle (funktionale und nicht-funktionale) Tests sowie Android-Automatisierungstests",
      ],
      techStack: ["Java", "React Native", "Node.js", "PostgreSQL", "MongoDB", "Swagger API"],
    },
    {
      company: "TxLabz · Kunde: Entertainment Group (AU)",
      url: "https://www.txlabz.com/",
      role: "QA Engineer",
      startDate: "März 2021",
      endDate: "Januar 2022",
      highlights: [
        "QA-Dienstleistungen für Entertainment Group (Sydney, Australien) — eine führende Unterhaltungsplattform — im Einsatz über TxLabz erbracht",
        "Black-Box-, Smoke-, GUI-, Funktions-, Integrations- und Regressionstests über Produktversionen hinweg durchgeführt",
        "Aktive Teilnahme an Agile-Scrum-Zeremonien: Daily Standups, Sprint-Planung und Retrospektiven",
        "Fehler mithilfe von Jira und Monday.com verfolgt und behoben; Produktqualität und Kundenzufriedenheit um 85% verbessert",
      ],
    },
    {
      company: "10Pearls",
      url: "https://10pearls.com/",
      role: "Test Engineer",
      startDate: "März 2020",
      endDate: "März 2021",
      highlights: [
        "Erstellung detaillierter Testfälle und umfassender Fehlerberichte für internationale Kunden (Abu Dhabi, Dänemark)",
        "Tests von Android- und iOS-Mobilanwendungen, Unity3D-Spielanwendungen und Webanwendungen",
        "API-Tests mit Postman und Zusammenarbeit mit funktionsübergreifenden Teams zur effizienten Fehlerbehebung",
        "Mitarbeit an F&E-Initiativen und SRS-Dokumentation zu funktionalen und weiteren Anforderungen",
      ],
    },
    {
      company: "Upwork",
      role: "Software Quality Assurance Engineer (Freiberuflich)",
      startDate: "August 2019",
      endDate: "Dezember 2020",
      highlights: [
        "Freiberufliche QA-Dienstleistungen: Datenbanktest, Smoke-, Sanity-, Integrations-, Regressions-, GUI- und API-Tests",
        "Einsatz agiler Methoden und Automatisierungs-Frameworks für verschiedene Kundenprojekte",
      ],
    },
    {
      company: "Himaliyan Edibles Pvt. Limited",
      role: "IT-Projektmanager (Teilzeit)",
      startDate: "Dezember 2018",
      endDate: "September 2020",
      highlights: [
        "IT-Projekte mit Jira und Trello geleitet, Teamkoordination und Lieferzeiträume überwacht",
        "Agile Methoden eingesetzt zur Steigerung der Teameffizienz und termingerechten Projektabwicklung",
      ],
    },
    {
      company: "US Apparel & Textiles",
      url: "https://usgroup.org/new-venture",
      role: "IT-Praktikant",
      startDate: "Oktober 2019",
      endDate: "Dezember 2019",
      highlights: [
        "IT-Bereich unterstützt und grundlegende Kenntnisse in Enterprise-Softwareumgebungen aufgebaut",
      ],
    },
  ],

  ui: {
    hiIm: "Hallo, ich bin",
    downloadCV: "Lebenslauf herunterladen",
    getInTouch: "Kontakt aufnehmen",
    resume: "Lebenslauf",
    aboutHeading: "Über mich",
    skillsHeading: "Fähigkeiten & Technologien",
    skillCategories: {
      "QA & Testing": "QA & Testen",
      "Test Automation": "Testautomatisierung",
      "Programming": "Programmierung",
      "Tools & Platforms": "Tools & Plattformen",
      "Methodologies": "Methoden",
    },
    experienceHeading: "Berufserfahrung",
    educationHeading: "Ausbildung",
    certAndEduHeading: "Zertifikate & Ausbildung",
    certHeading: "Zertifikate",
    eduHeading: "Ausbildung",
    contactHeading: "Kontakt",
    contactSubtext:
      "Ich bin offen für neue Möglichkeiten und Kooperationen. Kontaktieren Sie mich gerne.",
    emailLabel: "E-Mail",
    phoneLabel: "Telefon / WhatsApp",
    viewProfile: "Profil ansehen",
    allRightsReserved: "Alle Rechte vorbehalten.",
    formName: "Name",
    formEmail: "E-Mail",
    formMessage: "Nachricht",
    formNamePlaceholder: "Ihr vollständiger Name",
    formEmailPlaceholder: "ihre@email.de",
    formMessagePlaceholder: "Schreiben Sie hier Ihre Nachricht...",
    formSubmit: "Nachricht senden",
    formSending: "Wird gesendet...",
    formSuccess: "Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.",
    formError: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.",
  },
};
