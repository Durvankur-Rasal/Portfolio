import { Button } from "@/components/ui/button";
import { Download, Code, BrainCircuit, Lightbulb, LinkIcon } from "lucide-react";

const resume = "https://drive.google.com/file/d/1SDjMx6_o4m4otTBXSK4l787HxY1lElMF/view?usp=sharing";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/5 dark:primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-8 right-1/4 w-64 h-64 bg-blue-500/5 dark:blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="section-container">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold animate-slide-up gradient-text">About Me</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-blue-500 rounded-full mt-4 animate-scale-in"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-right">
            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-tr from-primary/20 to-blue-500/20 dark:primary/10 dark:blue-500/10 blur-xl"></div>
              <div className="relative overflow-hidden rounded-xl animated-border">
                <img 
                  src="https://images.unsplash.com/photo-1618389041494-8fab89c3f22b?w=600&auto=format&fit=crop&q=60"
                  alt="Profile"
                  className="rounded-xl shadow-lg relative w-full h-100 object-cover transform transition-transform duration-700 hover:scale-110"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-slide-left">
            <h3 className="text-xl sm:text-2xl font-semibold">
              <span className="relative inline-block">
                <span className="absolute inset-x-0 bottom-0 h-3 bg-primary/10 dark:primary/20 -z-10"></span>
                Artificial Intelligence & Data Science Student
              </span> at VIIT Pune
            </h3>

            <p className="text-muted-foreground">
              I am passionate about AI, Machine Learning, and Software Development. My expertise lies in full-stack web development with the MERN stack, as well as working on ML and deep learning projects.
            </p>

            <p className="text-muted-foreground">
              I enjoy solving complex problems and continuously expanding my knowledge in data science and backend frameworks like FastAPI and Django. My projects range from NLP-based applications to advanced AI models.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-4">
              <div className="border dark:border-gray-700 rounded-lg p-4 text-center hover:bg-primary/40 dark:hover:bg-primary/40 transition-colors">
                <BrainCircuit className="mx-auto h-8 w-8 text-primary mb-2" />
                <h4 className="font-medium">AI & ML</h4>
                <p className="text-muted-foreground text-sm">Deep Learning & NLP</p>
              </div>
              
              <div className="border dark:border-gray-700 rounded-lg p-4 text-center hover:bg-primary/40 dark:hover:bg-primary/40 transition-colors">
                <Code className="mx-auto h-8 w-8 text-primary mb-2" />
                <h4 className="font-medium">Full-Stack Dev</h4>
                <p className="text-muted-foreground text-sm">MERN, FastAPI, Django</p>
              </div>
              
              <div className="border dark:border-gray-700 rounded-lg p-4 text-center hover:bg-primary/40 dark:hover:bg-primary/40 transition-colors">
                <Lightbulb className="mx-auto h-8 w-8 text-primary mb-2" />
                <h4 className="font-medium">Problem Solving</h4>
                <p className="text-muted-foreground text-sm">DSA in C++</p>

                {/* LeetCode Profile Button */}
                {/* <a
                  href="https://leetcode.com/Durvankur_R_Rasal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-2 text-sm text-blue-400 hover:text-blue-500 transition"
                >
                  <LinkIcon className="w-4 h-4" />
                  View My LeetCode
                </a> */}
              </div>
            </div>

            {/* Resume Download Button */}
            <div className="flex flex-col items-center sm:flex-row sm:justify-center gap-8">
            <Button
              asChild
              className="rounded-full glow bg-gradient-to-r from-primary to-blue-600 hover:bg-primary/90 hover:blue-600/90"
              size="lg"
            >
              <a href={resume} >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
            <a
                  href="https://leetcode.com/Durvankur_R_Rasal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-2 text-sm text-blue-400 hover:text-blue-500 transition"
                >
                  <LinkIcon className="w-4 h-4" />
                  View My LeetCode
                </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
