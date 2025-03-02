import { useState, useEffect } from "react";
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

  // Calculate start index for each category
  let categoryStartIndexes = {};
  let indexCounter = 0;
  skillCategories.forEach((category) => {
    categoryStartIndexes[category.id] = indexCounter;
    indexCounter += category.skills.length;
  });

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    beforeChange: (oldIndex, newIndex) => {
      // Find the correct category based on newIndex
      for (const category of skillCategories) {
        if (newIndex >= categoryStartIndexes[category.id] && newIndex < categoryStartIndexes[category.id] + category.skills.length) {
          setActiveTab(category.id);
          break;
        }
      }
    },
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section id="skills" className="py-12 sm:py-16 bg-secondary/50 dark:bg-gray-900/30 relative overflow-hidden transition-colors duration-500">
      {/* Background Effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-16 left-1/2 w-72 h-72 bg-blue-200 dark:bg-purple-600 opacity-20 blur-3xl transition-all duration-500"></div>
        <div className="absolute -bottom-16 right-1/3 w-72 h-72 bg-purple-200 dark:bg-blue-600 opacity-20 blur-3xl transition-all duration-500"></div>
      </div>

      <div className="section-container max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text dark:from-purple-400 dark:to-blue-400">
            My Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mt-2">
            Exploring technologies in web development and AI, with expertise in full-stack development.
          </p>
        </div>

        {/* Tabs Section */}
        <Tabs value={activeTab} className="w-full">
          <div className="flex justify-center mb-6 space-x-4 sm:space-x-8">
            <TabsList className="bg-white/70 dark:bg-black/20 px-4 py-2 rounded-full backdrop-blur-md shadow-md transition-all duration-500">
              {skillCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className={`text-lg font-medium px-5 py-2 rounded-full transition ${
                    activeTab === category.id ? "bg-blue-500 text-white" : "hover:bg-primary/20"
                  }`}
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Slider with Dynamic Category Switching */}
          <Slider {...sliderSettings} className="px-4 sm:px-6">
            {skillCategories.flatMap((category) =>
              category.skills.map((skill) => <SkillCard key={skill.name} skill={skill} />)
            )}
          </Slider>
        </Tabs>
      </div>
    </section>
  );
}

function SkillCard({ skill }) {
  return (
    <Card className="relative skill-card card-hover transition-transform transform duration-500 hover:scale-110 hover:rotate-2 mx-2 sm:mx-4 bg-white dark:bg-gray-900 shadow-lg dark:shadow-xl border border-gray-300 dark:border-gray-700">
      {/* Glowing Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-10 dark:opacity-20 blur-xl rounded-xl transition-all duration-500"></div>

      <CardContent className="relative p-6 flex flex-col items-center">
        <div className="mb-3 text-3xl w-14 h-14 flex items-center justify-center bg-gray-200 dark:bg-primary/10 rounded-full text-gray-900 dark:text-white shadow-lg transition hover:scale-125">
          {skill.icon}
        </div>
        <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{skill.name}</h3>
      </CardContent>
    </Card>
  );
}
