import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Music, Plane, Gamepad, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hobbies = () => {
  const hobbies = [
    {
      icon: Code,
      title: "Coding",
      favorite: "Building web applications and exploring new technologies",
    },
    {
      icon: Gamepad,
      title: "Games",
      favorite: "Playing Cricket and Badminton",
    },
    {
      icon: Music,
      title: "Music",
      favorite: "Listening songs from artists like Sid Sriram, Thaman S",
    },
    {
      icon: Plane,
      title: "Traveling",
      favorite: "Exploring new places and cultures",
    }
  ];

  return (
    <section id="hobbies" className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            <span className="text-primary">
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
                className="bg-surface border border-border rounded-lg p-6 hover:border-primary/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="p-4 bg-primary/20 rounded-lg mb-4 w-fit">
                  <Icon className="w-8 h-8 text-primary" />
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
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg rounded-lg transition-all"
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
