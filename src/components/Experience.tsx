import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experience = [
    {
      role: "Green Skills & Artificial Intelligence Intern",
      period: "Jul 2025 - Dec 2025",
      company: "Shell India & Edunet Foundation ( Onsite On My College Campus )",
      description: "Completed the Advanced Internship in Green Skills and Artificial Intelligence under the Skills4Future Program, gaining practical knowledge in AI fundamentals, sustainable technologies, and professional development.",
      link_url: "https://www.linkedin.com/posts/bhanu-vardhan-medapalli_green-skills-ai-internship-completion-certificate-activity-7406598206798827522-5caH/",
      link_text: "Visit LinkedIn To See My Certification"
    },
    {
      role: "SAP Intern",
      period: "Nov 2024 - Aug 2025",
      company: "SAP & Edunet Foundation ( Remote )",
      description: "Completed the SAP Educate to Employ Program, gaining 369+ hours of hands-on experience in SAP ABAP, BTP, software development, Agile practices, and professional skills to prepare for enterprise environments.",
      link_url: "https://www.linkedin.com/posts/bhanu-vardhan-medapalli_sap-internship-completion-certificate-activity-7367817240009682944-hnKR/",
      link_text: "Visit LinkedIn To See My Certification"
    },
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
    <section id="experience" className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            <span className="text-primary">
              Experience
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Professional journey and internship experiences
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="bg-surface border border-border rounded-lg p-6 md:p-8 hover:border-primary/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4 md:gap-6">
                <div className="p-3 md:p-4 bg-primary/20 rounded-lg flex-shrink-0">
                  <Briefcase className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4 mb-3">
                    <h3 className="text-xl md:text-2xl font-display font-bold text-foreground">
                      {exp.role}
                    </h3>
                    <Badge className="bg-primary/20 text-primary border-0 whitespace-nowrap font-semibold">
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-sm md:text-base font-semibold text-muted-foreground mb-2">{exp.company}</p>
                  <p className="text-sm text-foreground/80 mb-4 leading-relaxed">{exp.description}</p>
                  {exp.link_url && (
                    <Button
                      asChild
                      className="bg-primary hover:bg-primary/90 text-white font-semibold transition-all duration-300"
                    >
                      <a
                        href={exp.link_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {exp.link_text}
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
