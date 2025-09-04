import { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from "../assets/profile.jpeg";

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    '<UI/UX & Frontend Dev/>',
    '< Impact Maker />',
    '< Hustle. Build. Repeat. />',
    '< Code. Create. Conquer. />'
  ];

  useEffect(() => {
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseTime = 2000;
    const currentRoleText = roles[currentRole];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRoleText.length) {
          setDisplayText(currentRoleText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole, roles]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 sm:pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center text-center lg:text-left">
          
          {/* Left Content */}
          <div className="fade-in">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-7xl font-bold font-playfair mb-6 leading-snug whitespace-nowrap"> 
              <span className="text-foreground">Vedant</span>{' '} 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Rakesh Rai </span> 
            </h1>

            <div className="mb-5 sm:mb-8">
              <div className="typewriter-container text-base sm:text-xl md:text-2xl font-semibold">
                <span className="typewriter-text text-primary">
                  {displayText}
                  <span className="typewriter-cursor">|</span>
                </span>
              </div>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Hi, I’m Vedant, a passionate tech enthusiast with a love for design and development. 
              I enjoy solving problems, creating intuitive interfaces, and bringing ideas to life through code. 
              Creativity, collaboration, and continuous learning drive my journey in tech.
            </p>

            <a href="/VRR_new_resume.pdf" download>
              <Button
                className="glow-hover bg-gradient-primary text-primary-foreground font-semibold px-5 sm:px-7 py-3 sm:py-5 text-sm sm:text-lg rounded-xl"
                size="lg"
              >
                <Download className="mr-2" size={18} />
                Download Resume
              </Button>
            </a>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end fade-in fade-in-delay-2">
            <div className="profile-glow">
              <div className="w-44 h-44 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden bg-gradient-card">
                <img
                  src={profileImage}
                  alt="Vedant Rakesh Rai"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
