'use client'

import { useState } from 'react'
import { FaGithub, FaExternalLinkAlt, FaCode, FaPalette } from 'react-icons/fa'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'NASA Anomaly Detection System',
      description: 'Developed novel methods for adaptive real-time anomaly detection in space systems using sensor-controller isolation with 70% success rate.',
      technologies: ['Python', 'PyTorch', 'TensorFlow', 'Machine Learning', 'NASA Research'],
      category: 'research',
      github: null,
      live: null,
      featured: true,
    },
    {
      id: 2,
      title: 'Fertilizer Company Intranet Platform',
      description: 'Designed and developed a real-time intranet web application for streamlined management of product inventory, customer data, and business operations.',
      technologies: ['Angular 15', 'TypeScript', 'Java Spring Boot', 'Microservices', 'Docker'],
      category: 'web',
      github: null,
      live: null,
      featured: true,
    },
    {
      id: 3,
      title: 'Hotel Booking Web Application',
      description: 'Single-page responsive web application for hotel room bookings utilizing MEAN Stack with intuitive user interface and optimal performance.',
      technologies: ['MEAN Stack', 'MongoDB', 'Express.js', 'Angular', 'Node.js'],
      category: 'web',
      github: null,
      live: null,
      featured: false,
    },
    {
      id: 4,
      title: 'Microservices E-commerce Platform',
      description: 'Scalable web application with microservice architecture, featuring Angular frontend, Java Spring Boot backend, and Kubernetes deployment.',
      technologies: ['Angular', 'Java Spring Boot', 'Kubernetes', 'Docker', 'REST APIs'],
      category: 'web',
      github: null,
      live: null,
      featured: false,
    },
    {
      id: 5,
      title: 'Machine Learning Data Analysis',
      description: 'ML models for data analysis and visualization using PyTorch, TensorFlow, and Scikit-Learn with clustering and classification techniques.',
      technologies: ['Python', 'PyTorch', 'TensorFlow', 'Scikit-Learn', 'Data Visualization'],
      category: 'ml',
      github: null,
      live: null,
      featured: false,
    },
    {
      id: 6,
      title: 'AWS Cloud Solutions',
      description: 'Cloud infrastructure implementation using AWS services including EC2, S3, Lambda, API Gateway, and ECS with automated CI/CD pipelines.',
      technologies: ['AWS', 'EC2', 'S3', 'Lambda', 'API Gateway', 'ECS'],
      category: 'cloud',
      github: null,
      live: null,
      featured: false,
    },
  ]

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Development' },
    { key: 'research', label: 'Research & ML' },
    { key: 'cloud', label: 'Cloud Solutions' },
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter || 
      (activeFilter === 'research' && project.category === 'ml'))

  return (
    <section id="projects" className="py-20 bg-custom-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-custom-navy-text mb-4">
            My Projects
          </h2>
          <p className="text-lg text-custom-navy-text max-w-3xl mx-auto mb-8">
            Here are some of my key projects that showcase my expertise in full-stack development, 
            machine learning research, and cloud solutions.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                  activeFilter === filter.key
                    ? 'bg-chatgpt-green text-white'
                    : 'bg-dark-700 text-gray-300 hover:bg-dark-600 border border-dark-600'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`bg-dark-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-dark-700 ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-chatgpt-green-darker to-chatgpt-green-dark">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-chatgpt-green rounded-full flex items-center justify-center mx-auto mb-4">
                      {project.category === 'research' || project.category === 'ml' ? (
                        <FaPalette className="h-8 w-8 text-white" />
                      ) : (
                        <FaCode className="h-8 w-8 text-white" />
                      )}
                    </div>
                    <p className="text-chatgpt-green-lighter font-semibold">Project Preview</p>
                  </div>
                </div>
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-chatgpt-green-darker text-chatgpt-green-lighter rounded-full text-xs font-medium border border-chatgpt-green-dark"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-400 hover:text-chatgpt-green transition-colors"
                    >
                      <FaGithub className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-400 hover:text-chatgpt-green transition-colors"
                    >
                      <FaExternalLinkAlt className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">
            Interested in working together? Let's discuss your project!
          </p>
          <a
            href="#contact"
            className="bg-chatgpt-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-chatgpt-green-dark transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
