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
    },
    {
      role: "SAP Intern",
      period: "Nov 2024 - Aug 2025",
      company: "SAP & Edunet Foundation ( Remote )",
      description: "Completed the SAP Educate to Employ Program, gaining 369+ hours of hands-on experience in SAP ABAP, BTP, software development, Agile practices, and professional skills to prepare for enterprise environments.",
      link_url: "https://www.linkedin.com/posts/bhanu-vardhan-medapalli_sap-internship-completion-certificate-activity-7367817240009682944-hnKR/",
    },
    {
      role: "Front-End Developer Intern",
      period: "Mar 2025 - Apr 2025",
      company: "Varcode Edtech Pvt.Ltd ( Remote )",
      description: "Developed and maintained responsive user interfaces using React and Tailwind CSS for various client projects.",
      link_url: "https://html-tutorials.varcode.in/",
    },
    {
      role: "Python Developer Intern",
      period: "Jul 2024 - Sep 2024",
      company: "Main Flow Services And Technologies Pvt.Ltd ( Remote )",
      description: "I am proficient in Python, having mastered both foundational and advanced concepts through project development and practical applications.",
      link_url: "https://github.com/Bhanu8199/MAIN-FLOW-SERVICES-INTERNSHIP-/",
    },
  ];

  return (
    <section id="experience" className="bg-background py-12 sm:py-16 lg:py-20">
      <div className="container px-4">
        <div className="mb-10 text-center sm:mb-12 lg:mb-16">
          <h2 className="mb-3 text-3xl font-display font-bold text-foreground sm:mb-4 sm:text-4xl md:text-5xl">
            <span className="text-primary">
              Experience
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-base text-muted-foreground sm:text-lg">
            Professional journey and internship experiences
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="rounded-lg border border-border bg-surface p-5 transition-all duration-300 hover:border-primary/40 hover:shadow-lg sm:p-6 md:p-8"
            >
              <div className="flex min-w-0 items-start gap-3 sm:gap-4 md:gap-6">
                <div className="flex-shrink-0 rounded-lg bg-primary/20 p-2.5 sm:p-3 md:p-4">
                  <Briefcase className="h-5 w-5 text-primary sm:h-6 sm:w-6 md:h-7 md:w-7" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4 mb-3">
                    <h3 className="break-words text-lg font-display font-bold text-foreground sm:text-xl md:text-2xl">
                      {exp.role}
                    </h3>
                    <Badge className="bg-primary/20 text-primary border-0 whitespace-nowrap font-semibold">
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="mb-2 break-words text-sm font-semibold text-muted-foreground md:text-base">{exp.company}</p>
                  <p className="mb-4 text-sm leading-relaxed text-foreground/80 sm:text-base">{exp.description}</p>
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
                        View Details
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
