import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FileText, ExternalLink } from "lucide-react";
import paper from "../../../public/2025013301.pdf";
import paperImage from "../../../public/paper.webp";

const researchPapers = [
  {
    id: 1,
    title: "Enhancing Summarization of Legal Text Documents using Pre-trained Models",
    description:
      "Presented at an IEEE Conference, this research explores the use of BART and PEGASUS models for legal document summarization, improving accuracy with fine-tuning on the BillSum dataset.",
    tags: ["Legal NLP", "BART", "PEGASUS", "BillSum Dataset", "ROUGE Evaluation"],
    paperUrl: paper, // Replace with actual file link
    image:paperImage,
    ieeeUrl: "#", // Add IEEE publication link if available
  },
];

export function Research() {
  return (
    <section id="research" className="py-10 sm:py-20 relative overflow-hidden">
      <div className="section-container flex flex-col items-center text-center">
        <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Research & Publications</h2>
        <p className="text-muted-foreground max-w-2xl mt-4">
          My contributions to AI and NLP research, focusing on legal text summarization and deep learning.
        </p>

        <div className="mt-8 flex justify-center">
          {researchPapers.map((paper) => (
            <Card key={paper.id} className="w-[90%] md:w-[60%] shadow-lg rounded-xl text-center">
              <CardHeader>
                <CardTitle>{paper.title}</CardTitle>
                <img src={paper.image} alt={paper.title} className="w-full h-[340px] object-cover p-10 rounded-md " />
                <CardDescription>{paper.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  {paper.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-primary/10 text-foreground rounded-md text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-center mt-6 gap-6">
                  <a href={paper.paperUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
                    <FileText className="mr-2 h-5 w-5" /> Read Paper
                  </a>
                  {/* {paper.ieeeUrl && (
                    <a href={paper.ieeeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
                      View on IEEE <ExternalLink className="ml-2 h-5 w-5" />
                    </a>
                  )} */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
