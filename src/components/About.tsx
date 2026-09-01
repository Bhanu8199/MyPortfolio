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
    <section id="about" className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            <span className="text-primary">
              About Me
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Learn more about my journey, passion, and what drives me in the tech world
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main About Card */}
          <div className="bg-surface border-2 border-primary/20 rounded-2xl p-8 md:p-10 mb-12 hover:shadow-lg hover:border-primary/40 transition-all">
            <div className="mb-8">
              <Badge className="bg-primary text-white border-0 px-4 py-2 text-sm font-semibold">
                Who I Am
              </Badge>
            </div>

            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              PU 2026 🎓 | Ex - Intern @SAP | Frontend Developer | Python & Data Science Enthusiast | Skilled in Generative AI & ML, Python, HTML, CSS, JavaScript, React.js, SQL, MongoDB | Currently exploring advanced AI technologies.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <div
                    key={index}
                    className="bg-primary/10 border border-primary/20 rounded-lg p-6 hover:border-primary/50 hover:shadow-md transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-3 bg-primary/20 rounded-lg flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <p className="text-base font-semibold text-foreground">{highlight.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Participation Card */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-surface border border-border rounded-lg p-8 hover:shadow-lg transition-all">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-primary/20 rounded-lg flex-shrink-0">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground font-semibold mb-2">Active Participation</p>
                  <p className="text-4xl font-bold text-primary mb-3">10+</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Actively participating in college workshops and competitions covering Generative AI, Python, JavaScript, HTML/CSS, Machine Learning, and more.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-surface border border-border rounded-lg p-8 hover:shadow-lg transition-all">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-primary/20 rounded-lg flex-shrink-0">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground font-semibold mb-2">Experience</p>
                  <p className="text-4xl font-bold text-primary mb-3">Multi-Skilled</p>
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
              className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-6 text-lg rounded-lg transition-all"
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
