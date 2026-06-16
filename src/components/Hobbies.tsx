import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Music, Plane, Gamepad, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hobbies = () => {
  const hobbies = [
    {
      icon: Code,
      title: "Coding",
      favorite: "Building web applications and exploring new technologies",
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
      badgeGradient: "from-blue-400 to-cyan-400"
    },
    {
      icon: Gamepad,
      title: "Games",
      favorite: "Playing Cricket and Badminton",
      gradient: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30",
      badgeGradient: "from-green-400 to-emerald-400"
    },
    {
      icon: Music,
      title: "Music",
      favorite: "Listening songs from artists like Sid Sriram, Thaman S",
      gradient: "from-violet-500/20 to-purple-500/20",
      borderColor: "border-violet-500/30",
      badgeGradient: "from-violet-400 to-purple-400"
    },
    {
      icon: Plane,
      title: "Traveling",
      favorite: "Exploring new places and cultures",
      gradient: "from-orange-500/20 to-amber-500/20",
      borderColor: "border-orange-500/30",
      badgeGradient: "from-orange-400 to-amber-400"
    }
  ];

  return (
    <section id="hobbies" className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              My Hobbies
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Things that keep me motivated and passionate
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {hobbies.map((hobby, index) => {
            const Icon = hobby.icon;
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${hobby.gradient} ${hobby.borderColor} border-2 rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2`}
              >
                <div className={`p-4 bg-gradient-to-br ${hobby.badgeGradient} rounded-xl mb-4 w-fit`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-3">
                  {hobby.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {hobby.favorite}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white font-semibold px-8 py-6 text-lg rounded-xl border border-violet-500/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Work Together
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;