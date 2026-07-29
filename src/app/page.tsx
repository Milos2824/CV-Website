import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import heroStyle from "./components/Hero/hero.module.css"
import Projects from "./components/Projects/Projects";

export default function Home() {
  return (
    <div>
      <section id="home" className={`${heroStyle.heroBg} min-h-screen`}>
        <Hero />
      </section>

      <section id="about" className={`relative z-20`}>
        <About />
      </section>

      <section id="projects" className={`relative z-20`}>
        <Projects />
      </section>
    </div>
  );
}
