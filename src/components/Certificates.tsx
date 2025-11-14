import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const Certificates = () => {
  const certificates = [
    {
      title: "Varcode Internship Completion Certificate",
      issuer: "Varcode Edtech Pvt.Ltd",
      image: "/img/VARCODE INTERNSHIP CERTIFICATE.jpg"
    },
    {
      title: "Mainflow Internship Completion Certificate",
      issuer: "Mainflow Services & Technologies Pvt.Ltd",
      image: "/img/MAINFLOW INTERNSHIP CERTIFICATE_page-0001.jpg"
    },
    {
      title: "Prompt Engineering Workshop Completion Certificate",
      issuer: "Parul University",
      image: "/img/WORKSHOP CERTIFICATE OF FUNDAMENTALS OF PROMPT ENGINEERING.jpg"
    },
    {
      title: "Introduction to Software, Programming, and Database",
      issuer: "Coursera",
      image: "/img/COURSERA1.jpg"
    },
    {
      title: "Getting Started with Git & Github",
      issuer: "Coursera",
      image: "/img/COURSERA2.jpg"
    },
    {
      title: "SAP Job Readiness Completion Certificate",
      issuer: "SAP",
      image: "/img/SAP JOB READINESS CERTIFICATE.jpg"
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Certificates
          </h2>
        </div>

        <div className="text-center mb-12">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Me
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {certificates.map((cert, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 overflow-hidden hover:scale-105"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <div className="flex items-start gap-2 mb-2">
                  <Award className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <h3 className="font-semibold text-foreground leading-tight">
                    {cert.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;