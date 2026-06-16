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
    <section id="about" className="py-20 bg-gradient-to-br from-background via-pink-950/10 to-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-red-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Learn more about my journey, passion, and what drives me in the tech world
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main About Card */}
          <div className="bg-gradient-to-br from-pink-600/30 via-rose-500/25 to-red-600/30 border-2 border-pink-400/80 rounded-3xl p-8 md:p-10 mb-12 hover:shadow-2xl hover:shadow-pink-500/40 hover:border-pink-400/100 transition-all duration-500 shadow-lg shadow-pink-500/20">
            <div className="mb-8">
              <Badge className="bg-gradient-to-r from-pink-500 to-rose-500 text-white border-0 px-4 py-2 text-sm font-semibold mb-4 shadow-lg shadow-pink-500/40">
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
                    className="bg-gradient-to-br from-pink-500/30 to-rose-500/20 border-2 border-pink-400/70 rounded-2xl p-6 hover:border-pink-400/100 hover:shadow-2xl hover:shadow-pink-500/40 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-4 bg-gradient-to-br from-pink-500/60 to-rose-500/60 rounded-xl shadow-lg shadow-pink-500/40">
                        <Icon className="w-7 h-7 text-white" />
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
            <div className="bg-gradient-to-br from-cyan-600/30 via-blue-500/25 to-teal-600/30 border-2 border-cyan-400/80 rounded-2xl p-8 hover:shadow-2xl hover:shadow-cyan-500/40 hover:border-cyan-400/100 transition-all duration-500 transform hover:-translate-y-1 shadow-lg shadow-cyan-500/20">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-gradient-to-br from-cyan-500/60 to-blue-500/60 rounded-xl shadow-lg shadow-cyan-500/40">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground font-semibold mb-2">Active Participation</p>
                  <p className="text-4xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent mb-3">10+</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Actively participating in college workshops and competitions covering Generative AI, Python, JavaScript, HTML/CSS, Machine Learning, and more.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-600/30 via-green-500/25 to-lime-600/30 border-2 border-emerald-400/80 rounded-2xl p-8 hover:shadow-2xl hover:shadow-emerald-500/40 hover:border-emerald-400/100 transition-all duration-500 transform hover:-translate-y-1 shadow-lg shadow-emerald-500/20">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-gradient-to-br from-emerald-500/60 to-green-500/60 rounded-xl shadow-lg shadow-emerald-500/40">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground font-semibold mb-2">Experience</p>
                  <p className="text-4xl font-bold bg-gradient-to-r from-emerald-300 to-green-400 bg-clip-text text-transparent mb-3">Multi-Skilled</p>
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
              className="bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 hover:from-pink-600 hover:via-rose-600 hover:to-red-600 text-white font-bold px-8 py-6 text-lg rounded-xl border-2 border-pink-400/80 shadow-lg shadow-pink-500/50 hover:shadow-2xl hover:shadow-pink-500/70 transition-all duration-300 transform hover:scale-105"
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