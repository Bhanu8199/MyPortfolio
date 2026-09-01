import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Education = () => {
  const education = [
    {
      degree: "B.TECH ( CSE - AI )",
      period: "2022 - 2026",
      institution: "Parul University - ( Parul Institute of Engineering & Technology, Vadodara, Gujarat )",
    },
    {
      degree: "HSC",
      period: "2020 - 2022",
      institution: "Sri Chaitanya Junior College, Eluru, Andhra Pradesh",
    },
    {
      degree: "SSC",
      period: "2019 - 2020",
      institution: "Vignan Global Gen School, Eluru, Andhra Pradesh",
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            <span className="text-primary">
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
              className="bg-surface border border-border rounded-lg p-8 hover:border-primary/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="p-4 bg-primary/20 rounded-lg flex-shrink-0">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-3">
                    <h3 className="text-2xl font-display font-bold text-foreground">
                      {edu.degree}
                    </h3>
                    <Badge
                      className="bg-primary/20 text-primary border-0 font-semibold px-4 py-1 text-sm"
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
