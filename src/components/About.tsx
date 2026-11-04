import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Users, Award, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const highlights = [
    { text: "Hard & Smart Worker", icon: Zap },
    { text: "Passionate Python Data Science Developer", icon: Target },
    { text: "Perfect At Time Management", icon: Award },
  ];

  return (
    <section id="about" className="bg-background py-12 sm:py-16 lg:py-20">
      <div className="container px-4">
        <div className="mb-10 text-center sm:mb-12 lg:mb-16">
          <h2 className="mb-3 text-3xl font-display font-bold text-foreground sm:mb-4 sm:text-4xl md:text-5xl">
            <span className="text-primary">
              About Me
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-base text-muted-foreground sm:text-lg">
            Learn more about my journey, passion, and what drives me in the tech world
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main About Card */}
          <div className="mb-8 rounded-2xl border-2 border-primary/20 bg-surface p-5 transition-all hover:border-primary/40 hover:shadow-lg sm:mb-12 sm:p-8 md:p-10">
            <div className="mb-8">
              <Badge className="bg-primary text-white border-0 px-4 py-2 text-sm font-semibold">
                Who I Am
              </Badge>
            </div>

            <p className="mb-6 text-base leading-relaxed text-muted-foreground sm:text-xl">
              Computer Science Engineering - AI graduate from Parul University and former SAP intern, passionate about building impactful software solutions. I specialize in full-stack development, Python, and AI, turning ideas into responsive, intelligent, and user-friendly applications.
            </p>

            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 sm:gap-6">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <div
                    key={index}
                    className="rounded-lg border border-primary/20 bg-primary/10 p-4 transition-all hover:border-primary/50 hover:shadow-md sm:p-6"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-3 bg-primary/20 rounded-lg flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <p className="min-w-0 break-words text-base font-semibold text-foreground">{highlight.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Participation Card */}
          <div className="mb-8 grid grid-cols-1 gap-5 md:grid-cols-2 sm:gap-8">
            <div className="rounded-lg border border-border bg-surface p-5 transition-all hover:shadow-lg sm:p-8">
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="p-4 bg-primary/20 rounded-lg flex-shrink-0">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground font-semibold mb-2">Active Participation</p>
                  <p className="mb-3 text-3xl font-bold text-primary sm:text-4xl">10+</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Actively participating in college workshops and competitions covering Generative AI, Python, JavaScript, HTML/CSS, Machine Learning, and more.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-surface p-5 transition-all hover:shadow-lg sm:p-8">
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="p-4 bg-primary/20 rounded-lg flex-shrink-0">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground font-semibold mb-2">Experience</p>
                  <p className="mb-3 break-words text-3xl font-bold text-primary sm:text-4xl">Multi-Skilled</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Experienced in frontend development, backend technologies, and data science with hands-on internship experience at SAP.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button
              size="lg"
              className="max-w-full rounded-lg bg-primary px-5 py-5 text-base font-bold text-white transition-all hover:bg-primary/90 sm:px-8 sm:py-6 sm:text-lg"
              onClick={() => window.open('https://www.linkedin.com/in/bhanu-vardhan-medapalli/', '_blank')}
            >
              Connect With Me on LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
