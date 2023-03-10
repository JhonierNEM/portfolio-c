import Main from "./main/Main";
import Menu from "../components/navs/Menu";
import ContactMe from "./contact/ContactMe";
import Projects from "./projects/Proyects";
import About from "./about/About";
import Skills from "./skills/Skills";

export default function Container() {
  return (
    <div className="md:w-[90%]">
      <div className="w-14 h-14 fixed bottom-4 right-4 flex items-center justify-center p-1 rounded-full shadow z-50 md:hidden">
        <Menu />
      </div>

      <Main />
      <Projects />
      <About />
      <Skills />
      <ContactMe />
    </div>
  );
}
