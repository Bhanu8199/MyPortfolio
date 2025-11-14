import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skills = [
    { name: "MS Office", level: 95 },
    { name: "MySql", level: 85 },
    { name: "Javascript", level: 70 },
    { name: "ReactJS", level: 70 },
    { name: "Excel", level: 90 },
    { name: "Canva", level: 50 },
    { name: "Mongodb", level: 75 },
    { name: "Html/Css", level: 75 },
    { name: "Python", level: 75 },
    { name: "Postgre Sql", level: 60 },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I am trying to enhance my skills and myself.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">


          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="hover:scale-105 transition-transform duration-300 p-4 rounded-lg hover:bg-muted/30"
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="font-semibold text-primary">{skill.level}%</span>
                </div>
                <div>
                  <Progress value={skill.level} className="h-3 hover:h-4 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;