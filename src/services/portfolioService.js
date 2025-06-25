
// Portfolio data service - similar to Pinia store pattern
class PortfolioService {
  constructor() {
    this.projects = [
      {
        id: 1,
        title: "E-Commerce Platform",
        description: "Full-stack e-commerce solution with Vue 3 frontend and Rails API backend. Features include user authentication, payment processing, and admin dashboard.",
        technologies: ["Vue 3", "Ruby on Rails", "PostgreSQL", "Tailwind CSS", "AWS S3"],
        category: "Full Stack",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
        demoUrl: "https://demo-ecommerce.com",
        githubUrl: "https://github.com/yourname/ecommerce-platform",
        featured: true
      },
      {
        id: 2,
        title: "Task Management App",
        description: "Real-time task management application built with Vue 3 and Rails. Features include drag-and-drop, real-time updates, and team collaboration.",
        technologies: ["Vue 3", "Ruby on Rails", "WebSockets", "PostgreSQL"],
        category: "Full Stack",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
        demoUrl: "https://task-manager-demo.com",
        githubUrl: "https://github.com/yourname/task-manager",
        featured: true
      },
      {
        id: 3,
        title: "Next.js Portfolio Site",
        description: "Modern portfolio website built with Next.js, featuring server-side rendering, optimized performance, and dynamic content management.",
        technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
        category: "Frontend",
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
        demoUrl: "https://nextjs-portfolio.com",
        githubUrl: "https://github.com/yourname/nextjs-portfolio",
        featured: false
      },
      {
        id: 4,
        title: "API Management System",
        description: "RESTful API built with Ruby on Rails for managing client data, featuring JWT authentication, rate limiting, and comprehensive documentation.",
        technologies: ["Ruby on Rails", "PostgreSQL", "JWT", "AWS EC2"],
        category: "Backend",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
        demoUrl: "https://api-docs.com",
        githubUrl: "https://github.com/yourname/api-system",
        featured: false
      }
    ];

    this.experiences = [
      {
        id: 1,
        company: "TechCorp Solutions",
        role: "Senior Full Stack Developer",
        duration: "2022 - Present",
        location: "San Francisco, CA",
        description: "Lead development of scalable web applications using Vue 3 and Ruby on Rails. Managed team of 4 developers and implemented CI/CD pipelines.",
        achievements: [
          "Reduced application load time by 40% through optimization",
          "Led migration from Vue 2 to Vue 3 for 5 production applications",
          "Implemented automated testing resulting in 95% code coverage"
        ],
        technologies: ["Vue 3", "Ruby on Rails", "PostgreSQL", "AWS"]
      },
      {
        id: 2,
        company: "StartupHub Inc",
        role: "Full Stack Developer",
        duration: "2020 - 2022",
        location: "Austin, TX",
        description: "Developed and maintained multiple client projects using modern JavaScript frameworks and Ruby on Rails backend services.",
        achievements: [
          "Built 8 client applications from concept to deployment",
          "Integrated payment systems and third-party APIs",
          "Mentored 2 junior developers"
        ],
        technologies: ["Vue.js", "Next.js", "Ruby on Rails", "Heroku"]
      },
      {
        id: 3,
        company: "Digital Agency Pro",
        role: "Junior Full Stack Developer",
        duration: "2019 - 2020",
        location: "New York, NY",
        description: "Started career developing responsive websites and web applications. Gained expertise in both frontend and backend technologies.",
        achievements: [
          "Delivered 15+ responsive websites",
          "Learned Ruby on Rails and Vue.js",
          "Contributed to open-source projects"
        ],
        technologies: ["HTML/CSS", "JavaScript", "Ruby on Rails", "MySQL"]
      }
    ];

    this.skills = {
      frontend: [
        { name: "Vue 3", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "React", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "JavaScript/TypeScript", level: 90 }
      ],
      backend: [
        { name: "Ruby on Rails", level: 95 },
        { name: "Node.js", level: 80 },
        { name: "PostgreSQL", level: 90 },
        { name: "RESTful APIs", level: 95 },
        { name: "GraphQL", level: 75 }
      ],
      tools: [
        { name: "AWS EC2/S3", level: 85 },
        { name: "Heroku", level: 90 },
        { name: "Git/GitHub", level: 95 },
        { name: "Docker", level: 80 },
        { name: "CI/CD", level: 85 }
      ]
    };

    this.contact = {
      email: "developer@example.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
      linkedin: "https://linkedin.com/in/yourname",
      github: "https://github.com/yourname",
      website: "https://yourportfolio.com"
    };
  }

  // Methods similar to Pinia actions
  getProjects() {
    return this.projects;
  }

  getFeaturedProjects() {
    return this.projects.filter(project => project.featured);
  }

  getProjectsByCategory(category) {
    if (!category || category === 'All') return this.projects;
    return this.projects.filter(project => project.category === category);
  }

  getExperiences() {
    return this.experiences;
  }

  getSkills() {
    return this.skills;
  }

  getContact() {
    return this.contact;
  }

  // Get unique categories for filtering
  getCategories() {
    const categories = [...new Set(this.projects.map(project => project.category))];
    return ['All', ...categories];
  }
}

// Export singleton instance
export const portfolioService = new PortfolioService();
export default portfolioService;
