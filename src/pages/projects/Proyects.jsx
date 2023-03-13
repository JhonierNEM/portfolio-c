import ProjectsCrl from "../../components/carousels/ProjectsCrl";
import Project from "../../components/cards/Project";
import information from "../../information";
import styled from "styled-components";

export default function Projects() {
  const { projects } = information;
  return (
    <div className="bg-main min-h-[800px]  h-screen md:flex flex-col items-center text-textOne ms:min-h-[500px] md:pl-[150px]" id="projects">
      <div className="">
        <h1 className="text-3xl font-bold">Proyectos</h1>
        <p className="text-gray-500">Principales Proyectos</p>
      </div>

      <ProjectsCrl proyects={projects} />

      <Media className="w-auto hidden md:flex flex-col items-center">
        {projects.map((element, i) => (
          <Project
            key={i}
            title={element.name}
            description={element.shortDescription}
            image={element.image}
            gitLink={element.gitLink}
            demoLink={element.demoLink}
          />
        ))}
      </Media>
    </div>
  );
}

const Media = styled.div`
@media screen and (min-width:800px){
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
}

@media screen and (min-width:1200px){
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

`