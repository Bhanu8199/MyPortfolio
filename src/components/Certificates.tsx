import { Award } from "lucide-react";
import { Button } from "@/components/ui/button";

type Certificate = {
  title: string;
  issuer: string;
} & (
  | { image: string; pdf?: never }
  | { pdf: string; image?: never }
);

const Certificates = () => {
  const certificates: Certificate[] = [
    {
      title: "Varcode Internship",
      issuer: "Varcode Edtech Pvt.Ltd",
      image: "/img/VARCODE INTERNSHIP CERTIFICATE.jpg"
    },
    {
      title: "Mainflow Internship",
      issuer: "Mainflow Services & Technologies Pvt.Ltd",
      image: "/img/MAINFLOW INTERNSHIP CERTIFICATE_page-0001.jpg"
    },
    {
      title: "Prompt Engineering Workshop",
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
      title: "SAP Technology Consultant",
      issuer: "Coursera",
      pdf: "/img/COURSERA COURSE6 EBXC6WPB8AAV.pdf"
    },
    {
      title: "Professional Skills for the Workplace",
      issuer: "Coursera",
      pdf: "/img/COURSERA COURSE5 BXTL7N7AB97C.pdf"
    },
    {
      title: "SAP Professional Fundamentals",
      issuer: "Coursera",
      pdf: "/img/COURSERA COURSE6 8NAZJ816UGJ3.pdf"
    },
    {
      title: "Becoming an SAP Professional",
      issuer: "Coursera",
      pdf: "/img/COURSERA COURSE6 47VMMLEPCVT3.pdf"
    },
    {
      title: "Generative AI: Prompt Engineering Basics",
      issuer: "Coursera",
      pdf: "/img/COURSERA COURSE UUP4RU18MULH.pdf"
    },
    {
      title: "SAP Job Readiness",
      issuer: "SAP",
      image: "/img/SAP JOB READINESS CERTIFICATE.jpg"
    },
    {
      title: "SAP Internship",
      issuer: "SAP & Edunet Foundation",
      image: "/img/SAP INTERNSHIP COMPLETION CERTIFICATE.jpg"
    },
    {
      title: "Green Skills & Artificial Intelligence Internship",
      issuer: "Shell India & Edunet Foundation",
      pdf: "/img/GREEN SKILLS AI INTERNSHIP COMPLETION CERTIFICATE.pdf"
    },
  ];

  return (
    <section id="certificates" className="bg-background py-12 sm:py-16 lg:py-20">
      <div className="container px-4">
        <div className="mb-10 text-center sm:mb-12 lg:mb-16">
          <h2 className="mb-3 text-3xl font-display font-bold text-foreground sm:mb-4 sm:text-4xl md:text-5xl">
            <span className="text-primary">
              Certificates & Achievements
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-base text-muted-foreground sm:text-lg">
            Recognition of my professional growth and certifications
          </p>
        </div>

        <div className="mx-auto mb-8 grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:mb-12 lg:grid-cols-3">
          {certificates.map((cert, index) => (
            <a
              key={index}
              href={cert.pdf ?? cert.image}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open full certificate: ${cert.title}`}
              className="group min-w-0 overflow-hidden rounded-lg border border-border bg-surface transition-all duration-300 hover:border-primary/40 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted relative">
                {cert.pdf ? (
                  <iframe
                    src={`${cert.pdf}#toolbar=0&navpanes=0&view=FitH`}
                    title={cert.title}
                    loading="lazy"
                    className="pointer-events-none h-full w-full border-0 bg-white"
                  />
                ) : (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 bg-primary/20 rounded-lg flex-shrink-0">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="min-w-0 break-words font-bold text-foreground text-sm md:text-base leading-tight">
                    {cert.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground font-semibold">{cert.issuer}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="max-w-full rounded-lg bg-primary px-6 py-5 text-base font-semibold text-white transition-all hover:bg-primary/90 sm:px-8 sm:py-6 sm:text-lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Connect
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
