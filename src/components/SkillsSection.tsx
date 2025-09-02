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
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-playfair mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`skill-card p-6 rounded-xl text-center border border-border/50 fade-in fade-in-delay-${(index % 3) + 1}`}
            >
              
<div className="flex items-center justify-center mb-4 h-16 w-16 mx-auto rounded-full shadow-lg p-2 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600">
  <img src={skill.logo} alt={skill.name} className="max-h-full max-w-full object-contain drop-shadow-md" />
</div>




              <h3 className="font-bold text-lg mb-2 text-card-foreground">
                {skill.name}
              </h3>
              <span className={`text-sm px-3 py-1 rounded-full border ${getCategoryColor(skill.category)}`}>
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
