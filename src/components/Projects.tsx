import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "My Portfolio",
      description: "A responsive personal portfolio showcasing projects, skills, and experience, with a contact form for professional enquiries.",
      tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui"],
      link_url: "https://bvm-portfolio.vercel.app/",
    },
    {
      title: "Sri Hari Wood Works",
      description: "A responsive business website featuring services, project galleries, customer reviews, and direct phone and WhatsApp enquiry options.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Neon PostgreSQL"],
      link_url: "https://sri-hari-wood-works-site.vercel.app/",
    },
    {
      title: "Team Task Manager",
      description: "A full-stack project management app with JWT authentication, role-based access, project membership, and collaborative task tracking.",
      tags: ["React", "Vite", "Node.js", "Express", "PostgreSQL", "JWT"],
      link_url: "https://team-task-manager-azure.vercel.app/",
    },
    {
      title: "Feedback Portal",
      description: "A responsive feedback management portal with customer accounts, feedback status tracking, and an admin dashboard with search, analytics, and CSV export.",
      tags: ["Laravel 12", "PHP", "SQLite", "MySQL", "Blade", "Bootstrap 5"],
      link_url: "https://github.com/Bhanu8199/Feedback-Portal",
    },
    {
      "title": "Golden Restaurant",
      "description": "This restaurant website utilizes modern web technologies to offer a seamless experience, featuring clear menu displays, robust online ordering capabilities, and a fully responsive design.",
      "tags": ["Html", "Css", "Javascript"],
      "link_url": "https://goldenrest.vercel.app/",
    },
    {
      title: "Brain Tumor Detection Using CNN",
      description: "NeuroVision AI is a Streamlit platform using deep learning for automated MRI analysis to detect, classify, and localize brain tumors, offering explainable visualizations and educational insights.",
      tags: ["Python", "TensorFlow", "Keras", "CNN", "Streamlit", "OpenCV", "Matplotlib", "YoloV8", "ResNet50"],
      link_url: "https://github.com/Bhanu8199/BRAIN_TUMOR_DIAGNOSIS_BY_TUMOR_TRACKER_TEAM",
    },
    {
      title: "GUI of Generating Billing & Invoices",
      description: "Desktop application for automated billing and invoice generation with database integration for managing customer records.",
      tags: ["Python", "SQL"],
      link_url: "https://github.com/Bhanu8199/MAIN-FLOW-SERVICES-INTERNSHIP-/blob/main/TASK6.py",
    },
    {
      title: "StoreRate",
      description: "A web application that allows users to rate and review local stores, built with a focus on user experience and community engagement.",
      tags: ["Html", "Css", "React", "Typescript"],
      link_url: "https://github.com/Bhanu8199/StoreRate",
    },
    {
      title: "Research Paper Analyzer",
      description: "A full-stack platform for uploading and analyzing research papers, extracting metadata, and viewing summaries, key topics, and research insights.",
      tags: ["React", "TypeScript", "Vite", "Express", "PostgreSQL", "Drizzle ORM", "TanStack Query"],
      link_url: "https://github.com/Bhanu8199/Research-Paper-Analyzer",
    },
    {
      title: "Prompt Refinement App",
      description: "A full-stack AI-powered application that refines prompts from text and multimodal inputs, including images, documents, and videos, with persistent refinement history.",
      tags: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Drizzle ORM", "Hugging Face"],
      link_url: "https://github.com/Bhanu8199/Prompt-Refinement-App",
    },
    {
      title: "Car Price Prediction",
      description: "Machine learning project for predicting car prices using various features and algorithms with comprehensive data analysis.",
      tags: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Machine Learning"],
      link_url: "https://github.com/Bhanu8199/CAR-PRICE-PREDICTION-PROJECT",
    },
  ];

  return (
    <section id="projects" className="bg-background py-12 sm:py-16 lg:py-20">
      <div className="container px-4">
        <div className="mb-10 text-center sm:mb-12 lg:mb-16">
          <h2 className="mb-3 text-3xl font-display font-bold text-foreground sm:mb-4 sm:text-4xl md:text-5xl">
            <span className="text-primary">
              Projects
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-base text-muted-foreground sm:text-lg">
            A showcase of my recent work and technical expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="min-w-0 rounded-lg border border-border bg-surface p-5 transition-all duration-300 hover:border-primary/40 hover:shadow-lg sm:p-6"
            >
              <div className="h-1 bg-primary rounded-full mb-4" />
              <div className="flex items-start gap-3 mb-4">
                <div className="p-3 bg-primary/20 rounded-lg flex-shrink-0">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="min-w-0 break-words text-lg font-display font-bold text-foreground sm:text-xl">
                  {project.title}
                </h3>
              </div>
              <p className="mb-4 break-words text-sm leading-relaxed text-muted-foreground sm:text-base">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} className="bg-primary/20 text-primary border-0 font-medium text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              {project.link_url && (
                <a
                  href={project.link_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold text-sm"
                >
                  View Details
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
