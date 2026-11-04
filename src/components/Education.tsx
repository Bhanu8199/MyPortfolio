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
    <section id="education" className="bg-background py-12 sm:py-16 lg:py-20">
      <div className="container px-4">
        <div className="mb-10 text-center sm:mb-12 lg:mb-16">
          <h2 className="mb-3 text-3xl font-display font-bold text-foreground sm:mb-4 sm:text-4xl md:text-5xl">
            <span className="text-primary">
              Education
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-base text-muted-foreground sm:text-lg">
            My academic journey and qualifications
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="rounded-lg border border-border bg-surface p-5 transition-all duration-300 hover:border-primary/40 hover:shadow-lg sm:p-8"
            >
              <div className="flex min-w-0 items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0 rounded-lg bg-primary/20 p-3 sm:p-4">
                  <GraduationCap className="h-6 w-6 text-primary sm:h-8 sm:w-8" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-3">
                    <h3 className="text-xl font-display font-bold text-foreground sm:text-2xl">
                      {edu.degree}
                    </h3>
                    <Badge
                      className="bg-primary/20 text-primary border-0 font-semibold px-4 py-1 text-sm"
                    >
                      {edu.period}
                    </Badge>
                  </div>
                  <p className="break-words text-base leading-relaxed text-muted-foreground sm:text-lg">{edu.institution}</p>
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
