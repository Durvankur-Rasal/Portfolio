import { useState } from "react";
import Slider from "react-slick";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Skills() {
  const [activeTab, setActiveTab] = useState("frontend");

  const skillCategories = [
    {
      id: "frontend",
      label: "Frontend",
      skills: [
        { name: "React", icon: "⚛️" },
        { name: "JavaScript", icon: "𝐉𝐒" },
        { name: "HTML5", icon: "🌐" },
        { name: "Tailwind CSS", icon: "🌊" },
        { name: "Bootstrap", icon: "📦" },
      ],
    },
    {
      id: "backend",
      label: "Backend",
      skills: [
        { name: "Node.js", icon: "🟢" },
        { name: "Express.js", icon: "🚂" },
        { name: "MongoDB", icon: "🍃" },
        { name: "FastAPI", icon: "⚡" },
        { name: "SQL", icon: "💾" },
      ],
    },
    {
      id: "others",
      label: "Tools & Others",
      skills: [
        { name: "Git/GitHub", icon: "🐙" },
        { name: "Docker", icon: "🐳" },
        { name: "NLP", icon: "🗣️" },
        { name: "Django", icon: "🐍" },
      ],
    },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section id="skills" className="py-24 sm-40 bg-secondary/50 dark-gray-900/30 relative overflow-hidden">
      <div className="section-container max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl sm-5xl font-bold">My Skills</h2>
          <p className="text-muted-foreground max-w-3xl mt-6">
            I've worked with a variety of technologies in the web development world.
          </p>
        </div>

        <Tabs defaultValue="frontend" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-10">
            <TabsList className="bg-background/80 dark-gray-800/80 backdrop-blur-sm">
              {skillCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="text-lg sm-lg px-6 py-3">
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className={`animate-slide-up ${activeTab === category.id ? "block" : "hidden"}`}>
              <Slider {...sliderSettings} className="px-6">
                {category.skills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </Slider>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

function SkillCard({ skill }) {
  return (
    <Card className="skill-card card-hover transform transition-transform duration-500 hover:scale-110 hover:rotate-2 hover:shadow-xl hover:bg-primary/20 dark-primary/10 mx-4">
      <CardContent className="p-8 flex flex-col items-center">
        <div className="mb-3 text-3xl bg-primary/10 dark-primary/20 w-16 h-16 rounded-full flex items-center justify-center text-foreground shadow-lg transition-all duration-300 hover:scale-125 hover:shadow-2xl">
          {skill.icon}
        </div>
        <h3 className="font-medium text-xl text-center">{skill.name}</h3>
      </CardContent>
    </Card>
  );
}
