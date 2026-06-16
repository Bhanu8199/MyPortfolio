import { Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experience = [
    {
      role: "Green Skills & Artificial Intelligence Intern",
      period: "Jul 2025 - Dec 2025",
      company: "Shell India & Edunet Foundation ( Onsite On My College Campus )",
      description: "Completed the Advanced Internship in Green Skills and Artificial Intelligence under the Skills4Future Program, gaining practical knowledge in AI fundamentals, sustainable technologies, and real-world problem-solving through industry-oriented training.",
      link_url: "https://www.linkedin.com/posts/bhanu-vardhan-medapalli_green-skills-ai-internship-completion-certificate-activity-7406598206798827522-5caH/",
      link_text: "View Certificate",
      gradient: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30",
      badgeGradient: "from-green-400 to-emerald-400"
    },
    {
      role: "SAP Intern",
      period: "Nov 2024 - Aug 2025",
      company: "SAP & Edunet Foundation ( Remote )",
      description: "Completed the SAP Educate to Employ Program, gaining 369+ hours of hands-on experience in SAP ABAP, BTP, software development, Agile practices, and professional skills to prepare for real-world industry challenges.",
      link_url: "https://www.linkedin.com/posts/bhanu-vardhan-medapalli_sap-internship-completion-certificate-activity-7367817240009682944-hnKR/",
      link_text: "View Certificate",
      gradient: "from-orange-500/20 to-amber-500/20",
      borderColor: "border-orange-500/30",
      badgeGradient: "from-orange-400 to-amber-400"
    },
    {
      role: "Front-End Developer Intern",
      period: "Mar 2025 - Apr 2025",
      company: "Varcode Edtech Pvt.Ltd ( Remote )",
      description: "Developed and maintained responsive user interfaces using React and Tailwind CSS for various client projects.",
      link_url: "https://html-tutorials.varcode.in/",
      link_text: "Visit Website",
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
      badgeGradient: "from-blue-400 to-cyan-400"
    },
    {
      role: "Python Developer Intern",
      period: "Jul 2024 - Sep 2024",
      company: "Main Flow Services And Technologies Pvt.Ltd ( Remote )",
      description: "I am proficient in Python, having mastered both foundational and advanced concepts through project development and practical applications.",
      link_url: "https://github.com/Bhanu8199/MAIN-FLOW-SERVICES-INTERNSHIP-/",
      link_text: "View GitHub Repo",
      gradient: "from-violet-500/20 to-purple-500/20",
      borderColor: "border-violet-500/30",
      badgeGradient: "from-violet-400 to-purple-400"
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My professional journey and internship experiences
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {experience.map((exp, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${exp.gradient} ${exp.borderColor} border-2 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2`}
            >
              <div className="flex items-start gap-6">
                <div className={`p-4 bg-gradient-to-br ${exp.badgeGradient} rounded-xl flex-shrink-0`}>
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-3">
                    <h3 className="text-2xl font-display font-bold text-foreground">
                      {exp.role}
                    </h3>
                    <Badge
                      className={`bg-gradient-to-r ${exp.badgeGradient} text-white border-0 font-semibold px-4 py-1 text-sm`}
                    >
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-lg font-semibold text-muted-foreground mb-2">{exp.company}</p>
                  <p className="text-sm text-foreground/80 mb-4 leading-relaxed">{exp.description}</p>
                  {exp.link_url && (
                    <a
                      href={exp.link_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white hover:scale-105 transition-transform font-semibold bg-gradient-to-r from-white/20 to-white/10 hover:from-white/30 hover:to-white/20 px-4 py-2 rounded-lg border border-white/30"
                    >
                      {exp.link_text}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
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
