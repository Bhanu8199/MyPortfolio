import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Sparkles } from "lucide-react";
import bhanuImage from "@/img/BHANU.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-0 pb-12 pt-20 sm:py-20">
      {/* Subtle blue gradient accent - no purple/pink rainbow */}
      <div className="absolute left-0 top-0 h-64 w-64 opacity-20 blur-3xl sm:h-96 sm:w-96">
        <div className="w-full h-full bg-gradient-to-br from-primary/40 to-primary/20 rounded-full"></div>
      </div>
      <div className="absolute bottom-0 right-0 h-64 w-64 opacity-15 blur-3xl sm:h-96 sm:w-96">
        <div className="w-full h-full bg-gradient-to-br from-primary/30 to-primary/10 rounded-full"></div>
      </div>

      <div className="container relative z-10 grid grid-cols-1 items-center gap-10 px-4 md:grid-cols-2 lg:gap-12">
        {/* Left side - Text content */}
        <div className="min-w-0 text-center md:text-left">
          <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-2 sm:mb-6 sm:px-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <p className="text-xs font-semibold text-primary sm:text-sm">Welcome to my portfolio</p>
          </div>

          <h1 className="mb-4 text-4xl font-display font-bold leading-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="text-primary">
              BHANU VARDHAN
            </span>
            <br />
            <span className="text-foreground">MEDAPALLI</span>
          </h1>

          <h2 className="mb-5 text-lg font-semibold text-muted-foreground sm:mb-6 sm:text-xl lg:text-2xl">
            Frontend Developer | Python Data Science Enthusiast
          </h2>

          <p className="mx-auto mb-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:mb-8 sm:text-lg md:mx-0">
            I build responsive web applications and explore practical AI solutions that solve real-world problems.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Button
              size="lg"
              className="w-full rounded-lg bg-primary px-5 py-5 text-base font-bold text-white transition-all hover:bg-primary/90 sm:w-auto sm:px-8 sm:py-6 sm:text-lg"
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
              className="w-full rounded-lg border-2 border-primary/30 bg-surface px-5 py-5 text-base font-bold text-foreground transition-all hover:bg-surface/80 sm:w-auto sm:px-8 sm:py-6 sm:text-lg"
              onClick={() => window.open('https://www.linkedin.com/in/bhanu-vardhan-medapalli/', '_blank')}
            >
              Let's Connect
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-6">
            <div className="rounded-lg border border-border bg-surface p-4 transition-all hover:border-primary/50 hover:shadow-lg sm:p-5">
              <p className="text-2xl font-bold text-primary sm:text-3xl">10+</p>
              <p className="mt-1 text-xs font-semibold text-muted-foreground sm:text-sm">Projects Completed</p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-4 transition-all hover:border-primary/50 hover:shadow-lg sm:p-5">
              <p className="text-2xl font-bold text-primary sm:text-3xl">25+</p>
              <p className="mt-1 text-xs font-semibold text-muted-foreground sm:text-sm">Skills Mastered</p>
            </div>
          </div>
        </div>

        {/* Right side - Profile image */}
        <div className="flex min-w-0 justify-center md:justify-end">
          <div className="group relative">
            <div className="absolute -inset-1 bg-primary/30 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition duration-1000"></div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-xl"></div>
              <div className="relative h-64 w-64 max-w-full overflow-hidden rounded-2xl border-2 border-primary/40 shadow-lg sm:h-80 sm:w-80 lg:h-96 lg:w-96">
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
