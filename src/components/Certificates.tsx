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
    },
    {
      title: "SAP Internship Completion Certificate",
      issuer: "SAP & Edunet Foundation",
      image: "/img/SAP INTERNSHIP COMPLETION CERTIFICATE.jpg"
    },
  ];

  return (
    <section id="certificates" className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Certificates & Achievements
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Recognition of my professional growth and certifications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
          {certificates.map((cert, index) => {
            const colors = [
              { gradient: "from-blue-500/20 to-cyan-500/20", border: "border-blue-500/30", badge: "from-blue-400 to-cyan-400" },
              { gradient: "from-violet-500/20 to-purple-500/20", border: "border-violet-500/30", badge: "from-violet-400 to-purple-400" },
              { gradient: "from-green-500/20 to-emerald-500/20", border: "border-green-500/30", badge: "from-green-400 to-emerald-400" },
              { gradient: "from-orange-500/20 to-amber-500/20", border: "border-orange-500/30", badge: "from-orange-400 to-amber-400" },
              { gradient: "from-pink-500/20 to-rose-500/20", border: "border-pink-500/30", badge: "from-pink-400 to-rose-400" },
              { gradient: "from-yellow-500/20 to-lime-500/20", border: "border-yellow-500/30", badge: "from-yellow-400 to-lime-400" },
            ];
            const color = colors[index % colors.length];

            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${color.gradient} ${color.border} border-2 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group`}
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted relative">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`p-2 bg-gradient-to-br ${color.badge} rounded-lg flex-shrink-0`}>
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-bold text-foreground text-sm md:text-base leading-tight">
                      {cert.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground font-semibold">{cert.issuer}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold px-8 py-6 text-lg rounded-xl border border-amber-500/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Connect
          </Button>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;