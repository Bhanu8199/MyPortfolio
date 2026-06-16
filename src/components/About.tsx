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
    <section id="about" className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Learn more about my journey, passion, and what drives me in the tech world
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main About Card */}
          <div className="bg-gradient-to-br from-violet-500/20 to-purple-500/20 border-2 border-violet-500/30 rounded-3xl p-8 md:p-10 mb-12 hover:shadow-2xl hover:border-violet-500/50 transition-all duration-500">
            <div className="mb-8">
              <Badge className="bg-gradient-to-r from-violet-500 to-purple-500 text-white border-0 px-4 py-2 text-sm font-semibold mb-4">
                Who I Am
              </Badge>
            </div>

            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              PU 2026 🎓 | Ex - Intern @SAP | Frontend Developer | Python & Data Science Enthusiast | Skilled in Generative AI & ML, Python, HTML, CSS, JavaScript, React.js, SQL, MongoDB | Currently seeking exciting job opportunities
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-white/5 to-white/10 border border-white/20 rounded-2xl p-6 hover:border-white/40 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-3 bg-gradient-to-br from-violet-500/40 to-purple-500/40 rounded-lg">
                        <Icon className="w-6 h-6 text-violet-400" />
                      </div>
                      <p className="text-lg font-semibold text-foreground">{highlight.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Participation Card */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-2 border-blue-500/30 rounded-2xl p-8 hover:shadow-2xl hover:border-blue-500/50 transition-all duration-500 transform hover:-translate-y-1">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-gradient-to-br from-blue-500/40 to-cyan-500/40 rounded-xl">
                  <Users className="w-8 h-8 text-blue-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground font-semibold mb-2">Active Participation</p>
                  <p className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3">10+</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Actively participating in college workshops and competitions covering Generative AI, Python, JavaScript, HTML/CSS, Machine Learning, and more.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-2 border-green-500/30 rounded-2xl p-8 hover:shadow-2xl hover:border-green-500/50 transition-all duration-500 transform hover:-translate-y-1">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-gradient-to-br from-green-500/40 to-emerald-500/40 rounded-xl">
                  <Award className="w-8 h-8 text-green-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground font-semibold mb-2">Experience</p>
                  <p className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-3">Multi-Skilled</p>
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
              className="bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white font-semibold px-8 py-6 text-lg rounded-xl border border-violet-500/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
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