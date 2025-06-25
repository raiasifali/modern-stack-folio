
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar';
import portfolioService from '../services/portfolioService';

const Hero = () => {
  const contact = portfolioService.getContact();

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="text-center z-10 px-6">
        <div className="animate-fade-in">
          {/* Profile Photo with subtle filter enhancement */}
          <div className="mb-8 flex justify-center">
            <Avatar className="w-32 h-32 ring-4 ring-white/20 ring-offset-4 ring-offset-transparent">
              <AvatarImage 
                src="/lovable-uploads/5a2360b5-76ef-4e53-b55f-334a35c4a91e.png" 
                alt={contact.name}
                className="object-cover brightness-105 contrast-105 saturate-110"
              />
              <AvatarFallback className="text-2xl font-bold bg-gradient-to-br from-purple-600 to-blue-600 text-white">
                {contact.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            {contact.name}
          </h1>
          
          {/* Title */}
          <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-purple-300">
            Full Stack Developer
          </h2>
          
          <p className="text-xl md:text-2xl mb-4 text-gray-300">
            4+ Years Experience in Vue 3 & Ruby on Rails
          </p>
          <p className="text-lg mb-8 text-gray-400 max-w-2xl mx-auto">
            Passionate about creating elegant, scalable web applications with modern technologies. 
            Specialized in Vue 3, Next.js, and Ruby on Rails development.
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-12 animate-fade-in delay-300">
          <a 
            href={contact.github} 
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <Github size={24} />
          </a>
          <a 
            href={contact.linkedin} 
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href={`mailto:${contact.email}`} 
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
            title="Email"
          >
            <Mail size={24} />
          </a>
        </div>

        <button 
          onClick={scrollToProjects}
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 animate-fade-in delay-500"
        >
          View My Work
        </button>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown size={32} className="text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
