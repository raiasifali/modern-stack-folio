
import React from 'react';
import { MapPin, Calendar, ChevronRight } from 'lucide-react';
import portfolioService from '../services/portfolioService';

const Experience = () => {
  const experiences = portfolioService.getExperiences();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            5+ years of full-stack development experience across innovative companies
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <div 
              key={experience.id}
              className="relative flex items-start mb-12 last:mb-0 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-12 w-0.5 h-40 bg-gradient-to-b from-purple-400 to-blue-400"></div>
              )}
              
              {/* Timeline Dot */}
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mr-8 relative z-10">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>

              {/* Content */}
              <div className="flex-1 bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{experience.role}</h3>
                  <h4 className="text-xl text-purple-600 font-semibold mb-3">{experience.company}</h4>
                  
                  <div className="flex flex-wrap items-center text-gray-600 mb-4 gap-4">
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{experience.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin size={16} />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-6">{experience.description}</p>

                <div className="mb-6">
                  <h5 className="font-semibold text-gray-900 mb-3">Key Achievements:</h5>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start space-x-2">
                        <ChevronRight size={16} className="text-purple-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map(tech => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
