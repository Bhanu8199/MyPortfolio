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
    <section id="hobbies" className="bg-background py-12 sm:py-16 lg:py-20">
      <div className="container px-4">
        <div className="mb-10 text-center sm:mb-12 lg:mb-16">
          <h2 className="mb-3 text-3xl font-display font-bold text-foreground sm:mb-4 sm:text-4xl md:text-5xl">
            <span className="text-primary">
              My Hobbies
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-base text-muted-foreground sm:text-lg">
            Things that keep me motivated and passionate
          </p>
        </div>

        <div className="mx-auto mb-8 grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:mb-12 lg:grid-cols-4">
          {hobbies.map((hobby, index) => {
            const Icon = hobby.icon;
            return (
              <div
                key={index}
                className="rounded-lg border border-border bg-surface p-5 transition-all duration-300 hover:border-primary/40 hover:shadow-lg sm:p-6"
              >
                <div className="p-4 bg-primary/20 rounded-lg mb-4 w-fit">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-display font-bold text-foreground sm:text-2xl">
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
            className="max-w-full rounded-lg bg-primary px-6 py-5 text-base font-semibold text-white transition-all hover:bg-primary/90 sm:px-8 sm:py-6 sm:text-lg"
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
