import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "B.TECH ( CSE - AI )",
      period: "2022 - 2026",
      institution: "Parul University - ( Parul Institute of Engineering & Technology, Vadodara, Gujarat )"
    },
    {
      degree: "HSC",
      period: "2020 - 2022",
      institution: "Sri Chaitanya Junior College, Eluru, Andhra Pradesh"
    },
    {
      degree: "SSC",
      period: "2019 - 2020",
      institution: "Vignan Global Gen School, Eluru, Andhra Pradesh"
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Education
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="border-l-4 border-l-primary hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-display font-semibold text-foreground">
                        {edu.degree}
                      </h3>
                      <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{edu.institution}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;