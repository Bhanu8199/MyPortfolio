import Navigation from "@/components/Navigation";
import ScrollToTop from "@/components/ScrollToTop";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
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
      <Projects />
      <Hobbies />
      <Certificates />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
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