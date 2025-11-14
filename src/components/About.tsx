import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import bhanuImage from "@/img/BHANU.jpg";


const About = () => {
  const highlights = [
    "Hard & Smart Worker",
    "Passionate Python Data Science Developer",
    "Perfect At Time Management"
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="flex justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl hover:shadow-primary/20 transition-shadow duration-300">
              <img
                src={bhanuImage}
                alt="Bhanu Vardhan Medapalli"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              About
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              PU 2026 🎓 | Ex - Intern @Varcode Edtech | Frontend Developer | Python & Data Science Enthusiast | Skilled in C, Python, HTML, CSS , JavaScript, React.js , SQL, MongoDB | Looking for Job
            </p>

            <div className="space-y-4 mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg text-foreground">{highlight}</p>
                </div>
              ))}
            </div>

            <Card className="mb-6 border-2 border-primary/20 bg-primary/5 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground">
                  <Users className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">No of Participation</p>
                  <p className="text-4xl font-bold text-foreground">10</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    I am actively participating in many college workshops and competitions focused on covering areas like JavaScript, HTML/CSS, Machine Learning (ML), FunFest, and other events.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold"
                onClick={() => window.open('https://www.linkedin.com/in/bhanu-vardhan-medapalli/', '_blank')}
              >
                Read More On My LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;