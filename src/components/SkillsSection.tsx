import HTMLLogo from '../assets/logos/html logo.png';
import CSSLogo from '../assets/logos/css logo.png';
import JSLogo from '../assets/logos/js logo.png';
import ReactLogo from '../assets/logos/react logo.png';
import FirebaseLogo from '../assets/logos/firebase.png';
import FigmaLogo from '../assets/logos/figma logo.png';
import GitLogo from '../assets/logos/github.png';
import JavaLogo from '../assets/logos/java logo.png';
import PythonLogo from '../assets/logos/python logo.png';
import SQLLogo from '../assets/logos/sql.png';

const skills = [
  { name: 'HTML', category: 'Frontend', logo: HTMLLogo },
  { name: 'CSS', category: 'Frontend', logo: CSSLogo },
  { name: 'JavaScript', category: 'Frontend', logo: JSLogo },
  { name: 'React', category: 'Frontend', logo: ReactLogo },
  { name: 'Firebase', category: 'Backend', logo: FirebaseLogo },
  { name: 'Figma', category: 'Design', logo: FigmaLogo },
  { name: 'Git/GitHub', category: 'Tools', logo: GitLogo },
  { name: 'Java', category: 'Programming', logo: JavaLogo },
  { name: 'Python', category: 'Programming', logo: PythonLogo },
  { name: 'SQL', category: 'Database', logo: SQLLogo },
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'Frontend':
      return 'from-blue-500 via-blue-400 to-blue-300';
    case 'Backend':
      return 'from-green-500 via-green-400 to-green-300';
    case 'Design':
      return 'from-purple-500 via-purple-400 to-purple-300';
    case 'Tools':
      return 'from-orange-500 via-orange-400 to-orange-300';
    case 'Programming':
      return 'from-red-500 via-red-400 to-red-300';
    case 'Database':
      return 'from-cyan-500 via-cyan-400 to-cyan-300';
    default:
      return 'from-gray-200 via-gray-100 to-gray-50';
  }
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair mb-3 sm:mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
            Technologies and tools I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`skill-card p-4 sm:p-6 rounded-lg sm:rounded-xl text-center border border-border/50 fade-in fade-in-delay-${(index % 3) + 1}`}
            >
              {/* Logo */}
              <div className="flex items-center justify-center mb-3 sm:mb-4 h-12 w-12 sm:h-16 sm:w-16 mx-auto rounded-full shadow-lg p-2 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="max-h-full max-w-full object-contain drop-shadow-md"
                />
              </div>

              {/* Skill Name */}
              <h3 className="font-bold text-sm sm:text-lg mb-1 sm:mb-2 text-card-foreground">
                {skill.name}
              </h3>

              {/* Category Badge */}
              <span
                className={`text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full border bg-gradient-to-r ${getCategoryColor(
                  skill.category
                )} text-white`}
              >
                {skill.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
