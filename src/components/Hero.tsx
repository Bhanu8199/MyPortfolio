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
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold px-8 py-6 text-lg rounded-xl border border-blue-500/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              onClick={() => window.open('/BHANUVARDHAN_RESUME.pdf', '_blank')}
            >
              <Download className="w-5 h-5 mr-2" />
              DOWNLOAD RESUME
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gradient-to-r from-purple-500/50 to-pink-500/50 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-300"
              onClick={() => window.open('https://www.linkedin.com/in/bhanu-vardhan-medapalli/', '_blank')}
            >
              Let's Connect
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-lg p-4 hover:border-blue-500/50 transition-all">
              <p className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">10+</p>
              <p className="text-sm text-muted-foreground">Projects Completed</p>
            </div>
            <div className="bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-violet-500/30 rounded-lg p-4 hover:border-violet-500/50 transition-all">
              <p className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">25+</p>
              <p className="text-sm text-muted-foreground">Skills Mastered</p>
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