import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About"
import Projects from "./components/Projects";


export default function Home() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <section id="about" className="py-20">
        <About />
      </section>
      <section id="projects" className="py-20">
        <Projects />
      </section>
    </>
  );
}
