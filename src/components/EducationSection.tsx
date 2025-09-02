import { GraduationCap } from "lucide-react";

const educationData = [
  {
    icon: "🎓",
    title: "B.Tech in Information Technology",
    subtitle: "SLRTCE, Mumbai",
    period: "2023 - 2027",
    details: "CGPA: 8.26/10",
    tags: ["DSA", "Web Development", "OOP", "Database Management"],
  },
  {
    icon: "📚",
    title: "HSC (Science)",
    subtitle: "Mother Mary Junior College, Nalasopara West",
    period: "2021 - 2023",
    details: "",
    tags: [],
  },
  {
    icon: "🏫",
    title: "SSC",
    subtitle: "Sacred Heart High School, Nalasopara West",
    period: "2021",
    details: "Percentage: 89%",
    tags: [],
  },
];

const experienceData = [
  {
    icon: "🖥️",
    title: "Frontend Developer Intern",
    subtitle: "Compozent Technologies",
    period: "Dec 2024 – Jan 2025",
    points: [
      "Developed responsive web pages using HTML, CSS, and JavaScript.",
      "Collaborated with backend team in an Agile environment.",
      "Improved frontend usability and performance with optimized layouts.",
    ],
    tags: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    icon: "💡",
    title: "Research Intern",
    subtitle: "SLRTCE, Mumbai",
    period: "Jan 2025",
    points: [
      "Conducted UI/UX research on user flows and design efficiency.",
      "Analyzed usability case studies and documented insights.",
    ],
    tags: ["Figma", "User Research", "Prototyping"],
  },
];

const EducationExperienceSection = () => {
  return (
    <section
      id="education-experience"
      className="py-20 bg-background text-foreground transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-playfair mb-4">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Education & Experience
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            My academic foundation and professional journey
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
          {/* Education Column */}
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 animate-pulse"></div>

            <div className="space-y-12">
              {educationData.map((edu, index) => (
                <div key={index} className="relative flex items-start group">
                  {/* Timeline Icon */}
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg ring-4 ring-blue-500/20">
                    <span className="block text-white text-[2rem]">
                      {edu.icon}
                    </span>
                  </div>

                  {/* Card */}
                  <div className="ml-8 bg-card text-card-foreground p-6 rounded-xl border border-border flex-1 transform transition-all duration-300 group-hover:scale-[1.03] group-hover:shadow-lg group-hover:shadow-blue-500/30">
                    <h3 className="font-bold text-xl mb-2">{edu.title}</h3>
                    <p className="text-primary font-semibold mb-2">{edu.subtitle}</p>
                    <p className="text-muted-foreground mb-2">
                      {edu.period} {edu.details && `• ${edu.details}`}
                    </p>
                    {edu.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {edu.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-sm bg-muted rounded-md border border-border"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Column */}
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-teal-500 to-blue-500 animate-pulse"></div>

            <div className="space-y-12">
              {experienceData.map((exp, index) => (
                <div key={index} className="relative flex items-start group">
                  {/* Timeline Icon */}
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg ring-4 ring-green-500/20">
                    <span className="block text-white text-[2rem]">
                      {exp.icon}
                    </span>
                  </div>

                  {/* Card */}
                  <div className="ml-8 bg-card text-card-foreground p-6 rounded-xl border border-border flex-1 transform transition-all duration-300 group-hover:scale-[1.03] group-hover:shadow-lg group-hover:shadow-green-500/30">
                    <h3 className="font-bold text-xl mb-1">{exp.title}</h3>
                    <p className="text-primary font-semibold mb-2">{exp.period}</p>
                    <p className="text-muted-foreground mb-2">{exp.subtitle}</p>
                    <ul className="list-disc list-inside text-muted-foreground mb-4">
                      {exp.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                    {exp.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-sm bg-muted rounded-md border border-border"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationExperienceSection;
