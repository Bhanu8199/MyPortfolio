import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      "title": "Golden Restaurant",
      "description": "This restaurant website utilizes modern web technologies to offer a seamless experience, featuring clear menu displays, robust online ordering capabilities, and a fully responsive design.",
      "tags": ["Html", "Css", "Javascript"],
      "link_url": "https://goldenrest.vercel.app/", // Corrected URL format
      "link_text": "Visit Website"
    },
    {
      title: "Brain Tumor Detection Using CNN",
      description: "NeuroVision AI is a Streamlit platform using deep learning for automated MRI analysis to detect, classify, and localize brain tumors, offering explainable visualizations and educational reports.",
      tags: ["Python", "TensorFlow", "Keras", "CNN", "Streamlit", "OpenCV", "Python Imaging Library", "Matplotlib", "plotly",  "YoloV8", "ResNet50"],
      link_url: "https://github.com/Bhanu8199/BRAIN_TUMOR_DIAGNOSIS_BY_TUMOR_TRACKER_TEAM",
      link_text: "Visit GitHub Repo"
    },
    {
      title: "GUI of Generating Billing & Invoices",
      description: "Desktop application for automated billing and invoice generation with database integration for managing customer records.",
      tags: ["Python", "SQL"],
      link_url: "https://github.com/Bhanu8199/MAIN-FLOW-SERVICES-INTERNSHIP-/blob/main/TASK6.py",
      link_text: "Visit GitHub Repo"
    },
    {
      title: "StoreRate",
      description: "A web application that allows users to rate and review local stores, built with a focus on user experience and community engagement.",
      tags: ["Html", "Css", "React", "Typescript"],
      link_url: "https://github.com/Bhanu8199/StoreRate",
      link_text: "Visit GitHub Repo"
    },
    {
      title: "Car Price Prediction",
      description: "Machine learning project for predicting car prices using various features and algorithms with comprehensive data analysis.",
      tags: ["Python", "Numpy", "Pandas", "Matplotlib", "Seaborn", "ML Models"],
      link_url: "https://github.com/Bhanu8199/CAR-PRICE-PREDICTION-PROJECT",
      link_text: "Visit GitHub Repo"
    },
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
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="font-medium">
                      {tag}
                    </Badge>
                  ))}
                </div>
                {project.link_url && (
                  <a
                    href={project.link_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    {project.link_text || "View Project"}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;