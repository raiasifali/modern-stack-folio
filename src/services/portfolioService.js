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
        githubUrl: "https://github.com/raiasifali/ecommerce-platform",
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
        githubUrl: "https://github.com/raiasifali/task-manager",
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
        githubUrl: "https://github.com/raiasifali/nextjs-portfolio",
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
        githubUrl: "https://github.com/raiasifali/api-system",
        featured: false
      }
    ];

    this.experiences = [
      {
        id: 1,
        company: "Stack360",
        role: "Software Developer",
        duration: "2022 - Present",
        location: "Lahore, Pakistan",
        description: "Currently working as a Software Developer, evolved from Associate Developer role. Specializing in full-stack development with Vue 3 and Ruby on Rails, delivering scalable web solutions for diverse clients.",
        achievements: [
          "Promoted from Associate Developer to Software Developer",
          "Developed and maintained multiple client applications using Vue 3 and Rails",
          "Implemented responsive designs and modern UI/UX patterns",
          "Collaborated with cross-functional teams to deliver high-quality software solutions"
        ],
        technologies: ["Vue 3", "Ruby on Rails", "PostgreSQL", "Tailwind CSS", "JavaScript"],
        website: "https://www.stack360.co/"
      },
      {
        id: 2,
        company: "Stack360",
        role: "Associate Developer",
        duration: "August 2020 - 2022",
        location: "Lahore, Pakistan",
        description: "Started my professional journey as an Associate Developer, learning and implementing modern web technologies. Focused on building responsive web applications and gaining expertise in full-stack development.",
        achievements: [
          "Successfully completed training in Vue.js and Ruby on Rails",
          "Contributed to multiple client projects from concept to deployment",
          "Developed strong foundation in modern web development practices",
          "Collaborated effectively in agile development environment"
        ],
        technologies: ["Vue.js", "Ruby on Rails", "HTML/CSS", "JavaScript", "MySQL"],
        website: "https://www.stack360.co/"
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
      name: "Asif Ali",
      email: "devasif.alee@gmail.com",
      phone: "+92 300 0041176",
      location: "Lahore, Pakistan",
      linkedin: "https://www.linkedin.com/in/raiasifali/",
      github: "https://github.com/raiasifali/",
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
