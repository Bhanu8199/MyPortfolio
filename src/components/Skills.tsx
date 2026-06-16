import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Palette, Users, Brain, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      name: "Frontend Development",
      icon: Code2,
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
      barColor: "from-blue-400 to-cyan-400",
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
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30",
      barColor: "from-green-400 to-emerald-400",
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
      color: "from-violet-500/20 to-purple-500/20",
      borderColor: "border-violet-500/30",
      barColor: "from-violet-400 to-purple-400",
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
      color: "from-pink-500/20 to-rose-500/20",
      borderColor: "border-pink-500/30",
      barColor: "from-pink-400 to-rose-400",
      skills: [
        { name: "Canva", level: 75 },
        { name: "Git/GitHub", level: 90 },
        { name: "VS Code", level: 95 },
      ],
    },
    {
      name: "Productivity & Office",
      icon: Users,
      color: "from-orange-500/20 to-amber-500/20",
      borderColor: "border-orange-500/30",
      barColor: "from-orange-400 to-amber-400",
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
      color: "from-yellow-500/20 to-lime-500/20",
      borderColor: "border-yellow-500/30",
      barColor: "from-yellow-400 to-lime-400",
      skills: [
        { name: "Data Analysis", level: 85 },
        { name: "Problem Solving", level: 90 },
        { name: "API Integration", level: 85 },
        { name: "Cloud Services", level: 30 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-background via-indigo-950/10 to-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
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
                  className={`bg-gradient-to-br ${category.color} ${category.borderColor} border-2 rounded-2xl p-6 md:p-7 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105`}
                >
                  <div className="flex items-center gap-3 mb-7">
                    <div className={`p-3 bg-gradient-to-br ${category.barColor} rounded-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-foreground">
                      {category.name}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2.5">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-foreground text-sm md:text-base truncate">
                            {skill.name}
                          </span>
                          <Badge
                            className={`ml-2 font-bold text-xs md:text-sm bg-gradient-to-r ${category.barColor} text-white border-0`}
                          >
                            {skill.level}%
                          </Badge>
                        </div>
                        <div className="relative h-2.5 bg-muted/50 rounded-full overflow-hidden shadow-inner border border-muted/30">
                          <div
                            className={`h-full bg-gradient-to-r ${category.barColor} transition-all duration-1000 ease-out rounded-full shadow-lg`}
                            style={{ width: `${skill.level}%` }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full" />
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
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-2 border-blue-500/30 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">25+</p>
              <p className="text-muted-foreground font-semibold">Skills Covered</p>
            </div>
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-2 border-green-500/30 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">6</p>
              <p className="text-muted-foreground font-semibold">Categories</p>
            </div>
            <div className="bg-gradient-to-br from-violet-500/20 to-purple-500/20 border-2 border-violet-500/30 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-2">85%</p>
              <p className="text-muted-foreground font-semibold">Avg Proficiency</p>
            </div>
            <div className="bg-gradient-to-br from-orange-500/20 to-amber-500/20 border-2 border-orange-500/30 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent mb-2">∞</p>
              <p className="text-muted-foreground font-semibold">Learning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;