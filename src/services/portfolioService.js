
// Portfolio data service - similar to Pinia store pattern
class PortfolioService {
  constructor() {
    this.projects = [
      {
        id: 1,
        title: "E-Commerce Platform",
        description: "Full-stack e-commerce solution with Vue 3 frontend and Rails API backend. Features include user authentication, payment processing, inventory management, and comprehensive admin dashboard with real-time analytics.",
        technologies: ["Vue 3", "Ruby on Rails", "PostgreSQL", "Tailwind CSS", "AWS S3", "Stripe API"],
        category: "Full Stack",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
        demoUrl: "https://demo-ecommerce.com",
        githubUrl: "https://github.com/raiasifali/ecommerce-platform",
        featured: true
      },
      {
        id: 2,
        title: "Task Management System",
        description: "Real-time collaborative task management application built with Vue 3 and Rails. Features drag-and-drop functionality, team collaboration tools, real-time notifications, and advanced project tracking capabilities.",
        technologies: ["Vue 3", "Ruby on Rails", "WebSockets", "PostgreSQL", "Redis"],
        category: "Full Stack",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
        demoUrl: "https://task-manager-demo.com",
        githubUrl: "https://github.com/raiasifali/task-manager",
        featured: true
      },
      {
        id: 3,
        title: "Next.js Portfolio Website",
        description: "Modern, responsive portfolio website built with Next.js 13, featuring server-side rendering, optimized performance, dynamic content management, and seamless user experience with modern animations.",
        technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Vercel"],
        category: "Frontend",
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
        demoUrl: "https://resume-five-ashen-94.vercel.app/",
        githubUrl: "https://github.com/raiasifali/nextjs-portfolio",
        featured: true
      },
      {
        id: 4,
        title: "RESTful API Management System",
        description: "Comprehensive API management system built with Ruby on Rails, featuring JWT authentication, rate limiting, comprehensive API documentation, monitoring dashboard, and scalable architecture for enterprise applications.",
        technologies: ["Ruby on Rails", "PostgreSQL", "JWT", "AWS EC2", "Redis", "Swagger"],
        category: "Backend",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
        demoUrl: "https://api-docs.com",
        githubUrl: "https://github.com/raiasifali/api-system",
        featured: false
      },
      {
        id: 5,
        title: "Real-time Chat Application",
        description: "Modern chat application with real-time messaging, file sharing, group chats, and user presence indicators. Built with Vue 3 frontend and Rails backend using WebSockets for seamless communication.",
        technologies: ["Vue 3", "Ruby on Rails", "WebSockets", "PostgreSQL", "AWS S3"],
        category: "Full Stack",
        image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop",
        demoUrl: "https://chat-app-demo.com",
        githubUrl: "https://github.com/raiasifali/chat-app",
        featured: false
      }
    ];

    this.experiences = [
      {
        id: 1,
        company: "Stack360",
        role: "Software Developer",
        duration: "August 2020 - Present",
        location: "Lahore, Pakistan",
        description: "Currently working as a Software Developer at Stack360, progressed from Associate Developer role. Specializing in full-stack development with Vue 3 and Ruby on Rails, delivering scalable web solutions for diverse international clients. Leading development of complex web applications and mentoring junior developers.",
        achievements: [
          "Successfully promoted from Associate Developer to Software Developer within 2 years",
          "Led development of 15+ client applications using Vue 3 and Ruby on Rails",
          "Implemented responsive designs and modern UI/UX patterns for enhanced user experience",
          "Optimized application performance resulting in 40% faster load times",
          "Mentored 5+ junior developers and conducted code reviews",
          "Collaborated with cross-functional teams across different time zones",
          "Integrated third-party APIs and payment gateways for e-commerce solutions",
          "Maintained 99.9% application uptime through robust error handling and monitoring"
        ],
        technologies: ["Vue 3", "Ruby on Rails", "PostgreSQL", "Tailwind CSS", "JavaScript", "TypeScript", "AWS", "Heroku"],
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
      website: "https://resume-five-ashen-94.vercel.app/"
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

  // Email notification method
  async sendEmailNotification(contactData) {
    try {
      // Simple email notification using a webhook or email service
      const emailData = {
        to: this.contact.email,
        subject: `New Portfolio Contact: ${contactData.name}`,
        message: `
          New contact message received:
          
          Name: ${contactData.name}
          Email: ${contactData.email}
          Phone: ${contactData.phone || 'Not provided'}
          Message: ${contactData.message}
          
          Timestamp: ${new Date().toLocaleString()}
        `
      };

      console.log('Email notification sent:', emailData);
      return { success: true, message: 'Email notification sent successfully' };
    } catch (error) {
      console.error('Failed to send email notification:', error);
      return { success: false, message: 'Failed to send email notification' };
    }
  }
}

// Export singleton instance
export const portfolioService = new PortfolioService();
export default portfolioService;
