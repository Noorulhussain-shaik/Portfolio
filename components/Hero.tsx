'use client'

import { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'

const Hero = () => {
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  const texts = ['Software Developer', 'Full-Stack Engineer', 'Cloud Solutions Expert', 'Angular & React Specialist']

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < texts[textIndex].length) {
          setCurrentText(texts[textIndex].substring(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (charIndex > 0) {
          setCurrentText(texts[textIndex].substring(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        } else {
          setIsDeleting(false)
          setTextIndex((textIndex + 1) % texts.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, textIndex, texts])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-custom-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-custom-navy-text">
                Hi, I'm{' '}
                <span className="text-chatgpt-green">Noorul Hussain Shaik</span>
              </h1>
              
              <div className="text-xl sm:text-2xl lg:text-3xl text-custom-navy-text h-12 flex items-center justify-center lg:justify-start">
                <span className="mr-2">I'm a</span>
                <span className="text-chatgpt-green font-semibold">
                  {currentText}
                  <span className="animate-pulse">|</span>
                </span>
              </div>

              <p className="text-lg text-custom-navy-text max-w-2xl mx-auto lg:mx-0">
                Experienced Software Developer with 5+ years of expertise in designing and developing scalable web applications using Angular, Java, Python, and React. Passionate about delivering high-quality, secure, and efficient solutions that enhance user experience and drive business success.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#projects"
                  className="bg-chatgpt-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-chatgpt-green-dark transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="border-2 border-chatgpt-green text-chatgpt-green px-8 py-3 rounded-lg font-semibold hover:bg-chatgpt-green hover:text-white transition-colors duration-200"
                >
                  Get In Touch
                </a>
              </div>

              <div className="flex justify-center lg:justify-start space-x-6 pt-4">
                <a
                  href="https://github.com/Noorulhussain-shaik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-custom-navy-text hover:text-chatgpt-green transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub className="h-8 w-8" />
                </a>
                <a
                  href="https://www.linkedin.com/in/noorul-shaik/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-custom-navy-text hover:text-chatgpt-green transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="h-8 w-8" />
                </a>
                <a
                  href="mailto:snhussain1505@gmail.com"
                  className="text-custom-navy-text hover:text-chatgpt-green transition-colors"
                  aria-label="Email"
                >
                  <FaDownload className="h-8 w-8" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-chatgpt-green-dark">
                <img
                  src="/LinkedIn.png"
                  alt="Noorul Hussain Shaik"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to initials if image fails to load
                    e.currentTarget.style.display = 'none'
                    const nextElement = e.currentTarget.nextElementSibling as HTMLElement
                    if (nextElement) {
                      nextElement.style.display = 'flex'
                    }
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-chatgpt-green-darker to-chatgpt-green-darkest flex items-center justify-center" style={{ display: 'none' }}>
                  <span className="text-6xl font-bold text-white">NHS</span>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-chatgpt-green-dark rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-chatgpt-green rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-chatgpt-green-light rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
