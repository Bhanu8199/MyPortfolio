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
      <footer className="bg-foreground py-6 text-background sm:py-8">
        <div className="container px-4 text-center">
          <p className="text-sm">
            © <a href="#home" className="hover:text-secondary transition-colors">BHANUVARDHAN MEDAPALLI</a>, All Right Reserved.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;