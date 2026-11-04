import { Code2, Database, Palette, Users, Brain, Sparkles, Zap } from "lucide-react";

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
      name: "Tools & Design",
      icon: Palette,
      skills: ["Canva", "Git/GitHub", "VS Code"],
    },
    {
      name: "Productivity & Office",
      icon: Users,
      skills: ["MS Office", "Excel", "PowerPoint", "Power BI", "Communication"],
    },
    {
      name: "Advanced Technologies",
      icon: Zap,
      skills: ["Data Analysis", "Problem Solving", "API Integration", "Cloud Services"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            <span className="text-primary">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
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
                  className="bg-surface border border-border rounded-lg p-6 hover:border-primary/40 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-primary/20 rounded-lg flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">
                      {category.name}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-border bg-background px-3 py-1.5 text-sm font-medium text-foreground"
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

        <div className="mt-20 max-w-7xl mx-auto">
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
