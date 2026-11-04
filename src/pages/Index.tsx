import Navigation from "@/components/Navigation";
import ScrollToTop from "@/components/ScrollToTop";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Hobbies from "@/components/Hobbies";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ScrollToTop />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Hobbies />
      <Certificates />
      <Contact />
      
      {/* Footer */}
      <footer className="border-t border-border bg-surface/70 py-6 sm:py-8">
        <div className="container px-4 text-center">
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            © {new Date().getFullYear()}{" "}
            <a href="#home" className="font-semibold text-foreground transition-colors hover:text-primary">
              BHANUVARDHAN MEDAPALLI
            </a>
            . All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;