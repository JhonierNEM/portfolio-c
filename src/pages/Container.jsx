import Main from "./main/Main";
import ContactMe from "./contact/ContactMe";
import Projects from "./projects/Proyects";
import About from "./about/About";
import Skills from "./skills/Skills";

export default function Container() {
  return (
    <div className="w-full">
      <Main />
      <Projects />
      <About />
      <Skills />
      <ContactMe />
    </div>
  );
}
