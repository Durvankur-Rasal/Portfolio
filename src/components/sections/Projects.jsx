import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import churn from "../../../public/churn.webp";
import Health from "../../../public/health-nodes.webp";
import potato from "../../../public/potato.webp";
import job from "../../../public/job.webp";
import crop from "../../../public/crop.webp";

const projects = [
  {
    id: 1,
    title: "Crop Recommendation System",
    description:
      "A predictive model to suggest optimal crops based on climate conditions such as rainfall, pH, temperature, humidity, and soil nutrients.",
    tags: ["Python", "Logistic Regression", "K-means", "Streamlit"],
    image: crop,
    demoUrl: "#",
    githubUrl: "https://github.com/Durvankur-Rasal/Climate-based-crop-recommendation",
  },
  {
    id: 2,
    title: "HealthNodes - AI-Powered Healthcare Assistant",
    description:
      "An AI-powered healthcare assistant providing disease diagnosis using NLP, skin disease detection with deep learning, and a chatbot for health assistance.",
    tags: ["Python", "FastAPI", "NLP", "Deep Learning", "React"],
    image: Health,
    demoUrl: "#",
    githubUrl: "https://github.com/vishaldjagdale/Health",
  },
  {
    id: 3,
    title: "Job Portal",
    description:
      "A full-stack job portal featuring user authentication, job listings, applications, and admin management using MERN stack.",
    tags: ["MongoDB", "Node.js", "JavaScript", "React", "Redux Toolkit"],
    image: job,
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Potato Disease Classification",
    description:
      "A deep learning model to classify potato diseases using CNN, improving early disease detection for better crop management.",
    tags: ["Python", "Deep Learning", "CNN", "Image Classification"],
    image: potato,
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "ANN Churn Classification",
    description:
      "An artificial neural network-based classification model to predict customer churn, improving retention strategies for businesses.",
    tags: ["Python", "ANN", "Deep Learning", "Classification"],
    image: churn,
    demoUrl: "https://ann-churn-classification-sgow4mirzdpjh9j2fjjjjp.streamlit.app/",
    githubUrl: "https://github.com/Durvankur-Rasal/ANN-churn-classification",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-6 sm:py-12 relative overflow-hidden">
      <div className="section-container">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text">My Projects</h2>
          <p className="text-muted-foreground max-w-2xl mt-6">
            Here are some of my recent projects. Each one presented unique challenges and opportunities to apply my skills.
          </p>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="project-slider"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev text-primary">
            <ArrowLeft size={32} />
          </div>
          <div className="swiper-button-next text-primary">
            <ArrowRight size={32} />
          </div>
        </Swiper>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <Card className="project-card overflow-hidden shadow-lg rounded-xl w-[70%] mx-auto h-[700px]">
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <img src={project.image} alt={project.title} className="w-full h-[350px] object-cover rounded-md" />
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <Badge key={tag} className="bg-primary/10 text-foreground">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button asChild variant="outline" size="sm">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" /> View Code
          </a>
        </Button>
        <Button asChild size="sm" className="bg-gradient-to-r from-primary to-blue-600">
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
            Live Demo <ArrowUpRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
