import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Palette, Users, Brain, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      name: "Frontend Development",
      icon: Code2,
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 80 },
        { name: "React.js", level: 80 },
        { name: "TypeScript", level: 65 },
        { name: "Tailwind CSS", level: 80 },
        { name: "Bootstrap", level: 85 },
      ],
    },
    {
      name: "Backend & Database",
      icon: Database,
      skills: [
        { name: "Python", level: 80 },
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 85 },
        { name: "Node.js", level: 70 },
        { name: "REST APIs", level: 80 },
        { name: "Express.js", level: 65 },
      ],
    },
    {
      name: "AI & Machine Learning",
      icon: Brain,
      skills: [
        { name: "Machine Learning", level: 70 },
        { name: "Generative AI", level: 50 },
        { name: "CNN (Convolutional Neural Networks)", level: 75 },
        { name: "Classification", level: 75 },
        { name: "Regression", level: 75 },
        { name: "Artificial Intelligence", level: 60 },
        { name: "Data Science", level: 60 },
      ],
    },
    {
      name: "Tools & Design",
      icon: Palette,
      skills: [
        { name: "Canva", level: 75 },
        { name: "Git/GitHub", level: 90 },
        { name: "VS Code", level: 95 },
      ],
    },
    {
      name: "Productivity & Office",
      icon: Users,
      skills: [
        { name: "MS Office", level: 95 },
        { name: "Excel", level: 92 },
        { name: "PowerPoint", level: 90 },
        { name: "PowerBI", level: 80 },
        { name: "Communication", level: 88 },
      ],
    },
    {
      name: "Advanced Technologies",
      icon: Zap,
      skills: [
        { name: "Data Analysis", level: 85 },
        { name: "Problem Solving", level: 90 },
        { name: "API Integration", level: 85 },
        { name: "Cloud Services", level: 30 },
      ],
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
            A comprehensive overview of my technical skills across frontend, backend, AI/ML, and specialized technologies
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

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-foreground text-sm truncate">
                            {skill.name}
                          </span>
                          <Badge className="ml-2 font-bold text-xs bg-primary/20 text-primary border-0">
                            {skill.level}%
                          </Badge>
                        </div>
                        <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary transition-all duration-1000 ease-out rounded-full"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-20 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-surface border border-border rounded-lg p-6 text-center hover:shadow-lg transition-all">
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">25+</p>
              <p className="text-muted-foreground font-semibold">Skills Covered</p>
            </div>
            <div className="bg-surface border border-border rounded-lg p-6 text-center hover:shadow-lg transition-all">
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">6</p>
              <p className="text-muted-foreground font-semibold">Categories</p>
            </div>
            <div className="bg-surface border border-border rounded-lg p-6 text-center hover:shadow-lg transition-all">
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">85%</p>
              <p className="text-muted-foreground font-semibold">Avg Proficiency</p>
            </div>
            <div className="bg-surface border border-border rounded-lg p-6 text-center hover:shadow-lg transition-all">
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">∞</p>
              <p className="text-muted-foreground font-semibold">Learning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
