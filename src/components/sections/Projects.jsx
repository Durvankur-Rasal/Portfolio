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
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import churn from "../../assets/churn-predict.png";
import Health from "../../assets/health.webp";
import potato from "../../assets/potato-disease.jpeg";
import job from "../../assets/job-portal.jpg";
import crop from "../../assets/crop2.webp";

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
    <section id="projects" className="py-12 relative overflow-hidden bg-secondary/50 dark:bg-gray-900/30">
      <div className="section-container max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            My Projects
          </h2>
          <p className="text-muted-foreground max-w-3xl mt-4 text-lg">
            Here are some of my recent projects. Each one presented unique challenges and opportunities to apply my skills.
          </p>
        </div>

        {/* Swiper for Smooth Scrolling with Infinite Loop */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true} // Infinite looping enabled
          className="project-slider"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev text-primary cursor-pointer">
            <ArrowLeft size={32} />
          </div>
          <div className="swiper-button-next text-primary cursor-pointer">
            <ArrowRight size={32} />
          </div>
        </Swiper>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <Card className="project-card overflow-hidden shadow-lg rounded-2xl w-[80%] mx-auto h-[650px] transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</CardTitle>
        <CardDescription className="text-gray-700 dark:text-gray-300">{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <img src={project.image} alt={project.title} className="w-full h-[350px] object-cover rounded-md" />
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <Badge key={tag} className="bg-primary/10 text-foreground text-sm px-3 py-1">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button asChild variant="outline" size="sm">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <Github className="h-4 w-4" /> View Code
          </a>
        </Button>
        <Button asChild size="sm" className="bg-gradient-to-r from-primary to-blue-600 hover:scale-105 transition-transform">
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            Live Demo <ArrowUpRight className="h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
