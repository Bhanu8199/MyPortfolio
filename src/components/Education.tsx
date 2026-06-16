import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Education = () => {
  const education = [
    {
      degree: "B.TECH ( CSE - AI )",
      period: "2022 - 2026",
      institution: "Parul University - ( Parul Institute of Engineering & Technology, Vadodara, Gujarat )",
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
      badgeGradient: "from-blue-400 to-cyan-400"
    },
    {
      degree: "HSC",
      period: "2020 - 2022",
      institution: "Sri Chaitanya Junior College, Eluru, Andhra Pradesh",
      gradient: "from-violet-500/20 to-purple-500/20",
      borderColor: "border-violet-500/30",
      badgeGradient: "from-violet-400 to-purple-400"
    },
    {
      degree: "SSC",
      period: "2019 - 2020",
      institution: "Vignan Global Gen School, Eluru, Andhra Pradesh",
      gradient: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30",
      badgeGradient: "from-green-400 to-emerald-400"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My academic journey and qualifications
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${edu.gradient} ${edu.borderColor} border-2 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2`}
            >
              <div className="flex items-start gap-6">
                <div className={`p-4 bg-gradient-to-br ${edu.badgeGradient} rounded-xl flex-shrink-0`}>
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-3">
                    <h3 className="text-2xl font-display font-bold text-foreground">
                      {edu.degree}
                    </h3>
                    <Badge
                      className={`bg-gradient-to-r ${edu.badgeGradient} text-white border-0 font-semibold px-4 py-1 text-sm`}
                    >
                      {edu.period}
                    </Badge>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">{edu.institution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;