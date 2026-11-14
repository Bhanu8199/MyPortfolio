import { Badge } from "@/components/ui/badge";
import { BookOpen, ExternalLink } from "lucide-react";

const authors = [
  {
    name: "Bhanu Vardhan Medapalli",
    url: "https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=11068868",
  },
  {
    name: "Sri Lavanya Tamatapu",
    url: "https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=11068871",
  },
  {
    name: "Sindhu Tuppudu",
    url: "https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=11068869",
  },
  {
    name: "Akhil Chandra Tammisetti",
    url: "https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=11068870",
  },
];

const Publications = () => (
  <section id="publications" className="bg-background py-12 sm:py-16 lg:py-20">
    <div className="container px-4">
      <div className="mb-10 text-center sm:mb-12 lg:mb-16">
        <h2 className="mb-3 text-3xl font-display font-bold text-foreground sm:mb-4 sm:text-4xl md:text-5xl">
          <span className="text-primary">Publications</span>
        </h2>
        <p className="mx-auto max-w-3xl text-base text-muted-foreground sm:text-lg">
          Research and publications
        </p>
      </div>

      <article className="mx-auto max-w-4xl rounded-lg border border-border bg-surface p-5 transition-all duration-300 hover:border-primary/40 hover:shadow-lg sm:p-6 md:p-8">
        <div className="flex min-w-0 items-start gap-3 sm:gap-4">
          <div className="flex-shrink-0 rounded-lg bg-primary/20 p-2.5 sm:p-3">
            <BookOpen className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Badge className="border-0 bg-primary/20 font-semibold text-primary">
                SSRN
              </Badge>
              <Badge className="border-0 bg-primary/20 font-semibold text-primary">
                Apr 18, 2026
              </Badge>
            </div>
            <h3 className="mb-3 break-words text-xl font-display font-bold text-foreground sm:text-2xl">
              An Improved CNN-Based Approach for Brain Tumor Diagnosis Using MRI Images
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-foreground/80 sm:text-base">
              Brain tumor diagnosis using Magnetic Resonance Imaging (MRI) is a critical task that requires high accuracy and consistency. Manual interpretation of MRI scans is time-consuming and subject to inter-observer variability. This paper presents a CNN-based automated system for brain tumor detection and classification using MRI images. The proposed approach employs deep learning architectures such as ResNet50 and EfficientNet, along with an ensemble CNN strategy, to classify MRI scans into four categories: Glioma, Meningioma, Pituitary Tumor, and Normal tissue. Image preprocessing techniques including resizing, normalization, and noise reduction are applied to enhance model performance. The trained models are integrated into a web-based application developed using Streamlit, enabling real-time MRI image upload and prediction with confidence scores. Experimental results obtained on publicly available MRI datasets demonstrate that the proposed system achieves an overall classification accuracy of 97.2%.
            </p>
            <div className="mb-5 flex flex-wrap gap-x-2 gap-y-1 text-sm text-muted-foreground sm:text-base">
              <span className="font-semibold">Authors:</span>
              {authors.map((author, index) => (
                <span key={author.name}>
                  <a
                    href={author.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary transition-colors hover:text-primary/80"
                  >
                    {author.name}
                  </a>
                  {index < authors.length - 1 ? "," : ""}
                </span>
              ))}
            </div>
            <a
              href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6544198"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-primary transition-colors hover:text-primary/80"
            >
              Read publication
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </article>
    </div>
  </section>
);

export default Publications;
