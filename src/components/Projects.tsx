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
    <section id="projects" className="py-20 bg-gradient-to-br from-background via-rose-950/10 to-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-fuchsia-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work and technical expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const colors = [
              { gradient: "from-blue-500/20 to-cyan-500/20", border: "border-blue-500/30", badge: "from-blue-400 to-cyan-400" },
              { gradient: "from-violet-500/20 to-purple-500/20", border: "border-violet-500/30", badge: "from-violet-400 to-purple-400" },
              { gradient: "from-green-500/20 to-emerald-500/20", border: "border-green-500/30", badge: "from-green-400 to-emerald-400" },
              { gradient: "from-orange-500/20 to-amber-500/20", border: "border-orange-500/30", badge: "from-orange-400 to-amber-400" },
              { gradient: "from-pink-500/20 to-rose-500/20", border: "border-pink-500/30", badge: "from-pink-400 to-rose-400" },
            ];
            const color = colors[index % colors.length];

            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${color.gradient} ${color.border} border-2 rounded-2xl p-6 hover:shadow-2xl hover:${color.border.replace('border-', 'border-')}/50 transition-all duration-500 transform hover:-translate-y-2`}
              >
                <div className={`h-2 bg-gradient-to-r ${color.badge} rounded-full mb-4`} />
                <div className="flex items-start gap-3 mb-4">
                  <div className={`p-3 bg-gradient-to-br ${color.badge} rounded-lg`}>
                    <Code2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-foreground">
                    {project.title}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm md:text-base">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} className={`bg-gradient-to-r ${color.badge} text-white border-0 font-medium`}>
                      {tag}
                    </Badge>
                  ))}
                </div>
                {project.link_url && (
                  <a
                    href={project.link_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white hover:scale-105 transition-transform font-semibold bg-gradient-to-r from-white/20 to-white/10 hover:from-white/30 hover:to-white/20 px-4 py-2 rounded-lg border border-white/30 text-sm"
                  >
                    {project.link_text || "View Project"}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;