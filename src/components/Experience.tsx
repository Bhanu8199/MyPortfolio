import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react"; // Changed from GraduationCap to Briefcase

const Experience = () => {
  // Sample data for experience
  const experience = [
    {
      role: "Front-End Developer Intern",
      period: "Mar 2025 - Apr 2025",
      company: "Varcode Edtech Pvt.Ltd ( Remote )",
      description: "Developed and maintained responsive user interfaces using React and Tailwind CSS for various client projects.",
      link_url: "https://html-tutorials.varcode.in/",
      link_text: "Visit Website"
    },
    {
      role: "Python Developer Intern",
      period: "Jul 2024 - Sep 2024",
      company: "Main Flow Services And Technologies Pvt.Ltd ( Remote )",
      description: "I am proficient in Python, having mastered both foundational and advanced concepts through project development and practical applications.",
      link_url: "https://github.com/Bhanu8199/MAIN-FLOW-SERVICES-INTERNSHIP-/",
      link_text: "Visit GitHub Repo"
    },
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Experience {/* Changed heading to Experience */}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experience.map((exp, index) => (
            <Card
              key={index}
              className="border-l-4 border-l-primary hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Briefcase className="w-6 h-6 text-primary" /> {/* Changed icon to Briefcase */}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-display font-semibold text-foreground">
                        {exp.role} {/* Displays the Job Role */}
                      </h3>
                      <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
                        {exp.period} {/* Displays the Time Period */}
                      </span>
                    </div>
                    {/* Displays the Company/Institution Name */}
                    <p className="text-muted-foreground mb-2">{exp.company}</p>
                    {/* Added an optional description for more detail */}
                    <p className="text-sm text-foreground/70">{exp.description}</p>
                    {exp.link_url && (
                      <a
                        href={exp.link_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                      >
                        {exp.link_text}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;