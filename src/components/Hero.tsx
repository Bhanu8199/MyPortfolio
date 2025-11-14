import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import bhanuImage from "@/img/BHANU.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background pt-16">
      {/* Orange splash effect */}
      <div className="absolute top-0 left-0 w-96 h-96 opacity-20">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path
            fill="hsl(var(--splash-orange))"
            d="M45,-60C55,-50,58,-30,58,-15C58,0,55,10,48,20C40,30,28,40,15,45C2,50,-12,50,-25,45C-38,40,-50,30,-55,15C-60,0,-58,-20,-50,-35C-42,-50,-28,-60,-12,-62C4,-64,35,-70,45,-60Z"
            transform="translate(50 50) scale(1.5)"
          />
          <circle cx="20" cy="30" r="8" fill="hsl(var(--splash-orange))" opacity="0.6" />
          <circle cx="80" cy="20" r="12" fill="hsl(var(--splash-orange))" opacity="0.4" />
          <circle cx="50" cy="70" r="6" fill="hsl(var(--splash-orange))" opacity="0.5" />
          <line x1="30" y1="40" x2="70" y2="25" stroke="hsl(var(--splash-orange))" strokeWidth="2" opacity="0.3" />
          <line x1="60" y1="50" x2="85" y2="35" stroke="hsl(var(--splash-orange))" strokeWidth="1.5" opacity="0.3" />
        </svg>
      </div>

      <div className="container px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left side - Text content */}
        <div className="text-left">
          <p className="text-lg text-muted-foreground mb-2">I'm</p>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-4 leading-tight">
            BHANU VARDHAN MEDAPALLI
          </h1>
          <h2 className="text-2xl md:text-3xl text-primary font-semibold mb-6">
            Frontend Developer | Python Data Science Enthusiast.
          </h2>
          {/* <p className="text-lg text-muted-foreground mb-8 max-w-xl">
            Frontend Developer | Aspiring To Be A Python Data Science Developer.
          </p> */}
          <div>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg"
              onClick={() => window.open('/BHANUVARDHAN_RESUME.pdf', '_blank')}
            >
              <Download className="w-5 h-5 mr-2" />
              DOWNLOAD MY RESUME
            </Button>
          </div>
        </div>

        {/* Right side - Profile image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl" />
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl hover:shadow-primary/20 transition-shadow duration-300">
              <img
                src={bhanuImage}
                alt="Bhanu Vardhan Medapalli"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;