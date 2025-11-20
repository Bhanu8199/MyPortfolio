import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Music, Plane, Gamepad, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hobbies = () => {
  const hobbies = [
    {
      icon: Code,
      title: "Coding",
      favorite: "Building web applications and exploring new technologies.",
      color: "text-blue-500"
    },
    {
      icon: Gamepad,
      title: "Games",
      favorite: "Playing  Cricket and Badminton during leisure time.",
      color: "text-purple-500"
    },
    {
      icon: Music,
      title: "Music",
      favorite: "Listening songs from artists like Sid Sriram, Thaman S",
      color: "text-green-500"
    },
    {
      icon: Plane,
      title: "Traveling",
      favorite: "Exploring new places and cultures.",
      color: "text-blue-500"
    }
  ];

  return (
    <section id="hobbies" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            My Hobbies
          </h2>
        </div>

        <div className="text-center mb-12">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Hire Me
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {hobbies.map((hobby, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:scale-105"
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-3 rounded-lg bg-muted ${hobby.color}`}>
                    <hobby.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-2xl font-display">
                    {hobby.title}
                  </CardTitle>
                </div>
                <p className="text-sm font-medium text-primary">
                  {hobby.favorite}
                </p>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;