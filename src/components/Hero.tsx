import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Sparkles } from "lucide-react";
import bhanuImage from "@/img/BHANU.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-16">
      {/* Subtle blue gradient accent - no purple/pink rainbow */}
      <div className="absolute top-0 left-0 w-96 h-96 opacity-20 blur-3xl">
        <div className="w-full h-full bg-gradient-to-br from-primary/40 to-primary/20 rounded-full"></div>
      </div>
      <div className="absolute bottom-0 right-0 w-96 h-96 opacity-15 blur-3xl">
        <div className="w-full h-full bg-gradient-to-br from-primary/30 to-primary/10 rounded-full"></div>
      </div>

      <div className="container px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left side - Text content */}
        <div className="text-left">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
            <Sparkles className="w-4 h-4 text-primary" />
            <p className="text-sm font-semibold text-primary">Welcome to my portfolio</p>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-4 leading-tight">
            <span className="text-primary">
              BHANU VARDHAN
            </span>
            <br />
            <span className="text-foreground">MEDAPALLI</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-muted-foreground">
            Frontend Developer | Python Data Science Enthusiast
          </h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
            Building beautiful, responsive web experiences with cutting-edge technologies. Passionate about AI, ML, and creating solutions that matter.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-6 text-lg rounded-lg transition-all"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/BHANUVARDHAN_RESUME.pdf';
                link.download = 'BHANUVARDHAN_RESUME.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <Download className="w-6 h-6 mr-2" />
              DOWNLOAD RESUME
            </Button>
            <Button
              size="lg"
              className="bg-surface hover:bg-surface/80 text-foreground font-bold px-8 py-6 text-lg rounded-lg border-2 border-primary/30 transition-all"
              onClick={() => window.open('https://www.linkedin.com/in/bhanu-vardhan-medapalli/', '_blank')}
            >
              Let's Connect
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 gap-6">
            <div className="bg-surface border border-border rounded-lg p-5 hover:border-primary/50 transition-all hover:shadow-lg">
              <p className="text-3xl font-bold text-primary">10+</p>
              <p className="text-sm font-semibold text-muted-foreground mt-1">Projects Completed</p>
            </div>
            <div className="bg-surface border border-border rounded-lg p-5 hover:border-primary/50 transition-all hover:shadow-lg">
              <p className="text-3xl font-bold text-primary">25+</p>
              <p className="text-sm font-semibold text-muted-foreground mt-1">Skills Mastered</p>
            </div>
          </div>
        </div>

        {/* Right side - Profile image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative group">
            <div className="absolute -inset-1 bg-primary/30 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition duration-1000"></div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-xl"></div>
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden border-2 border-primary/40 shadow-lg">
                <img
                  src={bhanuImage}
                  alt="Bhanu Vardhan Medapalli"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
