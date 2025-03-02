import { Nav } from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import { Research } from "@/components/sections/Research";

function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Research />
        <Contact />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default Index;
