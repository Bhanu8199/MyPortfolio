import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Sparkles } from "lucide-react";
import bhanuImage from "@/img/BHANU.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background pt-16">
      {/* Enhanced gradient background effects */}
      <div className="absolute top-0 left-0 w-96 h-96 opacity-30 blur-3xl">
        <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full"></div>
      </div>
      <div className="absolute bottom-0 right-0 w-96 h-96 opacity-30 blur-3xl">
        <div className="w-full h-full bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-full"></div>
      </div>

      <div className="container px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left side - Text content */}
        <div className="text-left">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <p className="text-sm font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Welcome to my portfolio</p>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-4 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              BHANU VARDHAN
            </span>
            <br />
            <span className="text-foreground">MEDAPALLI</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold mb-6 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            Frontend Developer | Python Data Science Enthusiast
          </h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
            Building beautiful, responsive web experiences with cutting-edge technologies. Passionate about AI, ML, and creating solutions that matter.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-700 text-white font-bold px-8 py-6 text-lg rounded-xl border-2 border-purple-400/60 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
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
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold px-8 py-6 text-lg rounded-xl border-2 border-cyan-400/60 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
              onClick={() => window.open('https://www.linkedin.com/in/bhanu-vardhan-medapalli/', '_blank')}
            >
              Let's Connect
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-pink-500/30 to-rose-500/20 border-2 border-pink-400/60 rounded-xl p-5 hover:border-pink-400/100 transition-all hover:shadow-lg transform hover:-translate-y-1">
              <p className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">10+</p>
              <p className="text-sm font-semibold text-muted-foreground mt-1">Projects Completed</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-500/30 to-purple-500/20 border-2 border-indigo-400/60 rounded-xl p-5 hover:border-indigo-400/100 transition-all hover:shadow-lg transform hover:-translate-y-1">
              <p className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">25+</p>
              <p className="text-sm font-semibold text-muted-foreground mt-1">Skills Mastered</p>
            </div>
          </div>
        </div>

        {/* Right side - Profile image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/40 to-purple-500/40 rounded-3xl blur-2xl"></div>
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden border-2 border-white/80 shadow-2xl hover:shadow-2xl transition-all duration-300">
                <img
                  src={bhanuImage}
                  alt="Bhanu Vardhan Medapalli"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;