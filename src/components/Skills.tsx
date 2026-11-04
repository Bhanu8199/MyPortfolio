import { Code2, Database, Users, Brain, Sparkles, Wrench, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      name: "Frontend Development",
      icon: Code2,
      skills: ["HTML/CSS", "JavaScript", "React.js", "TypeScript", "Tailwind CSS", "Bootstrap"],
    },
    {
      name: "Backend & Database",
      icon: Database,
      skills: ["Python", "MySQL", "MongoDB", "PostgreSQL", "Node.js", "REST APIs", "Express.js"],
    },
    {
      name: "AI & Machine Learning",
      icon: Brain,
      skills: ["Machine Learning", "Generative AI", "CNN (Convolutional Neural Networks)", "Classification", "Regression", "Artificial Intelligence", "Data Science"],
    },
    {
      name: "AI Tools & Assistants",
      icon: Sparkles,
      skills: ["GitHub Copilot", "Claude", "OpenAI", "ChatGPT", "Gemini", "Perplexity", "Meta AI"],
    },
    {
      name: "Tools & Productivity",
      icon: Wrench,
      skills: ["Canva", "Git/GitHub", "VS Code", "MS Office", "Excel", "PowerPoint", "Power BI", "Communication"],
    },
    {
      name: "Advanced Technologies",
      icon: Zap,
      skills: ["Data Analysis", "Problem Solving", "API Integration", "Cloud Services"],
    },
  ];

  return (
    <section id="skills" className="bg-background py-12 sm:py-16 lg:py-20">
      <div className="container px-4">
        <div className="mb-10 text-center sm:mb-12 lg:mb-16">
          <h2 className="mb-3 text-3xl font-display font-bold text-foreground sm:mb-4 sm:text-4xl md:text-5xl">
            <span className="text-primary">
              Skills & Expertise
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-base text-muted-foreground sm:text-lg">
            The technologies and strengths I use to build thoughtful, reliable digital experiences.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <div
                  key={categoryIndex}
                  className="rounded-lg border border-border bg-surface p-5 transition-all duration-300 hover:border-primary/40 hover:shadow-lg sm:p-6"
                >
                  <div className="mb-5 flex min-w-0 items-center gap-3 sm:mb-6">
                    <div className="p-3 bg-primary/20 rounded-lg flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="min-w-0 break-words text-base font-bold text-foreground sm:text-lg">
                      {category.name}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="max-w-full break-words rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground sm:text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-7xl sm:mt-16 lg:mt-20">
          <div className="rounded-lg border border-border bg-surface p-6 md:p-8">
            <h3 className="mb-5 text-center text-xl font-bold text-foreground">
              How I Work
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["Problem-solving", "Collaboration", "Continuous learning", "Adaptability"].map((strength) => (
                <span
                  key={strength}
                  className="rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary"
                >
                  {strength}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
