import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/noorulshaik', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/noorul-shaik/', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:snhussain1505@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="bg-custom-navy-light text-custom-navy-text">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-chatgpt-green">Noorul Hussain Shaik</h3>
            <p className="text-custom-navy-text">
              Experienced Software Developer passionate about creating scalable web applications and innovative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-custom-navy-text hover:text-chatgpt-green transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-custom-navy-text hover:text-chatgpt-green transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-custom-navy-text hover:text-chatgpt-green transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-custom-navy-text hover:text-chatgpt-green transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-custom-navy-text hover:text-chatgpt-green transition-colors"
                  aria-label={label}
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-custom-navy-lighter mt-8 pt-8 text-center">
          <p className="text-custom-navy-text">
            © {currentYear} Noorul Hussain Shaik. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
