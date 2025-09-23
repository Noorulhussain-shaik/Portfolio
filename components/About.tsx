import { FaCode, FaPalette, FaMobile, FaRocket } from 'react-icons/fa'

const About = () => {
  const skills = [
    { name: 'Angular & TypeScript', level: 95 },
    { name: 'Java & Spring Boot', level: 90 },
    { name: 'Python & Machine Learning', level: 85 },
    { name: 'React & Next.js', level: 80 },
    { name: 'AWS & Cloud Solutions', level: 85 },
    { name: 'Microservices Architecture', level: 90 },
  ]

  const services = [
    {
      icon: FaCode,
      title: 'Full-Stack Development',
      description: 'Building scalable web applications using Angular, React, Java Spring Boot, and Python with microservices architecture.',
    },
    {
      icon: FaPalette,
      title: 'Cloud Solutions',
      description: 'Designing and implementing cloud solutions on AWS and Azure, including EC2, S3, Lambda, and containerization.',
    },
    {
      icon: FaMobile,
      title: 'Machine Learning',
      description: 'Developing ML models using PyTorch, TensorFlow, and Scikit-Learn for data analysis and anomaly detection.',
    },
    {
      icon: FaRocket,
      title: 'DevOps & CI/CD',
      description: 'Implementing automated testing, CI/CD pipelines, and containerization with Docker and Kubernetes.',
    },
  ]

  return (
    <section id="about" className="py-20 bg-custom-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-custom-navy-text mb-4">
            About Me
          </h2>
          <p className="text-lg text-custom-navy-text max-w-3xl mx-auto">
            Experienced Software Developer with 5+ years of expertise in designing and developing scalable web applications. 
            Currently pursuing Master's in Computer Science at University of Colorado Denver.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-custom-navy-text">My Journey</h3>
              <p className="text-custom-navy-text leading-relaxed">
                I began my software development career at Infosys Limited, where I gained extensive experience 
                in full-stack development using Angular, Java Spring Boot, and microservices architecture. 
                Over 5+ years, I've built scalable web applications and contributed to NASA-funded research projects.
              </p>
              <p className="text-custom-navy-text leading-relaxed">
                Currently pursuing my Master's in Computer Science at University of Colorado Denver with a 3.72 GPA, 
                I'm passionate about machine learning, cloud solutions, and delivering high-quality software that 
                drives business success. I believe in continuous learning and staying current with emerging technologies.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-custom-navy-text">Technical Skills</h3>
              <div className="space-y-3">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-custom-navy-text font-medium">{skill.name}</span>
                      <span className="text-custom-navy-text">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-custom-navy-lighter rounded-full h-2">
                      <div
                        className="bg-chatgpt-green h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Services */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-custom-navy-text">Expertise Areas</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="p-6 bg-custom-navy-light rounded-lg hover:bg-custom-navy-lighter transition-colors duration-200 border border-custom-navy-lighter"
                >
                  <service.icon className="h-8 w-8 text-chatgpt-green mb-4" />
                  <h4 className="text-lg font-semibold text-custom-navy-text mb-2">
                    {service.title}
                  </h4>
                  <p className="text-custom-navy-text text-sm">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
