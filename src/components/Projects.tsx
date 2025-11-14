import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Golden Restaurant",
      description: "A restaurant website built with modern web technologies featuring menu display, online ordering, and responsive design.",
      tags: ["Html", "Css", "Javascript"]
    },
    {
      title: "GUI of Generating Billing & Invoices",
      description: "Desktop application for automated billing and invoice generation with database integration for managing customer records.",
      tags: ["Python", "SQL"]
    },
    {
      title: "StoreRate",
      description: "A web application that allows users to rate and review local stores, built with a focus on user experience and community engagement.",
      tags: ["Html", "Css", "React", "Typescript"]
    },
    {
      title: "CAR Price Prediction Dataset",
      description: "Machine learning project for predicting car prices using various features and algorithms with comprehensive data analysis.",
      tags: ["Python", "Numpy", "Pandas", "Matplotlib", "Seaborn", "ML Models"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and technical projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:scale-105"
            >
              <div className="h-2 bg-gradient-to-r from-primary to-secondary" />
              <CardHeader>
                <div className="flex items-start gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Code2 className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-display group-hover:text-primary transition-colors flex-1">
                    {project.title}
                  </CardTitle>
                </div>
                <p className="text-muted-foreground">
                  {project.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="font-medium">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;