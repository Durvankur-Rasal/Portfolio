import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FileText, ExternalLink } from "lucide-react";
import paperImage from "../../../public/paper.webp";

const researchPapers = [
  {
    id: 1,
    title: "Enhancing Summarization of Legal Text Documents using Pre-trained Models",
    description:
      "Presented at an IEEE Conference, this research explores the use of BART and PEGASUS models for legal document summarization, improving accuracy with fine-tuning on the BillSum dataset.",
    tags: ["Legal NLP", "BART", "PEGASUS", "BillSum Dataset", "ROUGE Evaluation"],
    paperUrl: "https://drive.google.com/file/d/15yHkBtk8vZE_Pb7osElzcB5_DHUCs37w/view?usp=sharing", // Replace with actual file link
    image: paperImage,
    ieeeUrl: "#", // Add IEEE publication link if available
  },
];

export function Research() {
  return (
    <section id="research" className="py-12 sm:py-16 bg-secondary/50 dark:bg-gray-900/30 relative overflow-hidden transition-colors duration-500">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-10 left-1/3 w-72 h-72 bg-blue-300 dark:bg-purple-700 opacity-20 blur-3xl transition-all duration-500"></div>
        <div className="absolute -bottom-10 right-1/4 w-72 h-72 bg-purple-300 dark:bg-blue-700 opacity-20 blur-3xl transition-all duration-500"></div>
      </div>

      <div className="section-container flex flex-col items-center text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text dark:from-purple-400 dark:to-blue-400">
          Research & Publications
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mt-2 transition-colors">
          My contributions to AI and NLP research, focusing on legal text summarization and deep learning.
        </p>

        <div className="mt-8 flex justify-center">
          {researchPapers.map((paper) => (
            <Card key={paper.id} className="w-[90%] md:w-[60%] shadow-lg rounded-xl text-center bg-white dark:bg-gray-900 transition duration-500 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl font-bold">{paper.title}</CardTitle>
                <div className="relative overflow-hidden rounded-md">
                  <img src={paper.image} alt={paper.title} className="w-full h-[340px] object-cover p-6 rounded-md transition-transform duration-500 hover:scale-110" />
                </div>
                <CardDescription className="text-gray-700 dark:text-gray-300 mt-3">{paper.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  {paper.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-primary/10 text-gray-800 dark:text-gray-200 rounded-md text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-center mt-6 gap-6">
                  <a href={paper.paperUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:text-blue-600 transition">
                    <FileText className="mr-2 h-5 w-5" /> Read Paper
                  </a>
                  {/* Uncomment if IEEE Link is available */}
                  {/* <a href={paper.ieeeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:text-blue-600 transition">
                    View on IEEE <ExternalLink className="ml-2 h-5 w-5" />
                  </a> */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
