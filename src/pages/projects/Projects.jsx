import Project from "../../components/cards/Project";
import information from "../../information";

export default function Projects() {
  const { projects } = information;
  return (
    <div className="bg-main text-textOne min-h-screen px-6" id="projects">
      <div className="flex flex-col items-center justify-center pt-6 md:pt-[5.5rem]">
        <h2 className="text-3xl font-bold">Projects</h2>
        <p className="text-textThree">Main Projects</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 py-6">
        {projects.map((project,i) => <Project key={i} image={project.image} description={project.shortDescription} title={project.name} gitLink={project.gitLink}/>)}
      </div>
    </div>
  );
}
