
import React from 'react';
import { Code, Database, Wrench } from 'lucide-react';
import portfolioService from '../services/portfolioService';

const Skills = () => {
  const skills = portfolioService.getSkills();

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      skills: skills.frontend,
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Backend Development',
      icon: Database,
      skills: skills.backend,
      color: 'from-green-500 to-teal-600'
    },
    {
      title: 'Tools & DevOps',
      icon: Wrench,
      skills: skills.tools,
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Expertise across the full development stack with modern technologies and best practices
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <div className="text-center mb-8">
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${category.color} mb-4`}>
                  <category.icon size={32} />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="animate-fade-in" style={{ animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms` }}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r ${category.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 200) + (skillIndex * 100) + 500}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Full Stack Expertise</h3>
            <p className="text-lg text-purple-100 mb-6">
              Specialized in building scalable web applications with Vue 3, Ruby on Rails, and modern deployment practices on AWS and Heroku.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Vue 3', 'Ruby on Rails', 'PostgreSQL', 'AWS', 'Tailwind CSS', 'Next.js'].map(tech => (
                <span key={tech} className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
