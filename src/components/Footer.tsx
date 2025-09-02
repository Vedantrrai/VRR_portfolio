import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      href: 'https://linkedin.com',
      color: 'hover:text-blue-400'
    },
    {
      name: 'GitHub',
      icon: <Github size={20} />,
      href: 'https://github.com',
      color: 'hover:text-gray-400'
    },
    {
      name: 'Email',
      icon: <Mail size={20} />,
      href: 'mailto:vedant@example.com',
      color: 'hover:text-red-400'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo/Name */}
          <div className="flex items-center space-x-4">
            <button
              onClick={scrollToTop}
              className="font-playfair font-bold text-2xl hover:text-primary transition-colors cursor-pointer"
            >
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Vedant Rakesh Rai
              </span>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 text-muted-foreground transition-all duration-300 ${link.color} glow-hover rounded-lg`}
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground flex items-center gap-1">
              © {currentYear} Made with <Heart size={16} className="text-red-400" /> by Vedant
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;