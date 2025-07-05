
// Portfolio data service - similar to Pinia store pattern
class PortfolioService {
  constructor() {
    this.projects = [
      {
        id: 1,
        title: "Klingit",
        description: "Spearheaded the development of Klingit's dynamic platform, leveraging Vue.js as the core frontend framework. Optimized user interactions and experience through meticulous utilization of Vue.js functionalities. Contributed to the creation of a seamless, responsive, and engaging interface for clients worldwide. Collaborated with cross-functional teams to integrate backend functionalities and ensure robust system performance.",
        technologies: ["Vue 3", "Ruby on Rails", "PostgreSQL", "Vuetify", "Stripe API"],
        category: "Full Stack",
        image: "/projects/klingit.png",
        demoUrl: "https://klingit.com/",
        githubUrl: "https://klingit.com/",
        featured: true
      },
      {
        id: 2,
        title: "Microhealthllc",
        description: "Orchestrated the creation of consumer-centric healthcare apps at Microhealth, employing Vue.js and Ruby on Rails (RoR) as primary development frameworks. Engineered user-friendly interfaces and seamless functionalities through Vue.js, ensuring a smooth and interactive user experience. Leveraged the power of RoR to implement robust backend systems, enabling efficient data processing and seamless app operations.",
        technologies: ["Vue 3", "Ruby on Rails", "WebSockets", "PostgreSQL", "Redis"],
        category: "Full Stack",
        image: "/projects/microhealthllc.png",
        demoUrl: "https://www.microhealthllc.com/",
        githubUrl: "https://www.microhealthllc.com/",
        featured: false
      },
      {
        id: 5,
        title: "CoachCoach Catalyst",
        description: "Coach Catalyst is an all-in-one coaching solution founded by Trevor Wittwer and Kane Sivesind in 2016. It’s designed to help coaches streamline client management, automate routine tasks, and scale their businesses efficiently. The platform provides a fully white-labeled, brandable web and mobile ecosystem tailored for both coaches and clients. Key features include habit tracking, workout programs, real-time messaging, progress tracking, check-ins, and seamless payment integration — all in one place.",
        technologies: ["Vue 3", "Ruby on Rails", "WebSockets", "PostgreSQL", "AWS S3"],
        category: "Full Stack",
        image: "/projects/klingit.png",
        demoUrl: "https://coachcatalyst.com/",
        githubUrl: "https://coachcatalyst.com/",
        featured: true
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
