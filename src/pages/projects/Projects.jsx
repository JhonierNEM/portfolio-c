//components
import Project from "../../components/cards/Project";
import H_Title from "../../components/headers/H_Title";

import information from "../../information";

export default function Projects() {
  const { projects } = information;
  return (
    <div className="bg-main text-textOne min-h-screen px-6" id="projects">
      <H_Title title="Projects" sub="Main Projects"/>
      <div className="grid md:grid-cols-2 gap-8 py-6">
        {projects.map((project,i) => <Project key={i} image={project.image} description={project.shortDescription} title={project.name} gitLink={project.gitLink}/>)}
      </div>
    </div>
  );
}
