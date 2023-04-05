//components
import Project from "../../components/cards/Project";
import HTitle from "../../components/headers/HTitle";

import { useSelector } from "react-redux";

export default function Projects() {
  const {PROJECT} = useSelector((state) => state.app.information.PAGES);
  const projects = useSelector(state=> state.app.information.PROJECTS)
  return (
    <div className="bg-main text-tx-main min-h-screen px-6" id="projects">
      <HTitle title={PROJECT.title} sub={PROJECT.sub} />
      <div className="grid md:grid-cols-2 gap-8 py-6">
        {projects.map((project, i) => (
          <Project
            key={i}
            id={project.id}
            image={project.URLs[0]}
            description={project.shortDescription}
            title={project.name}
            gitLink={project.gitLink}
          />
        ))}
      </div>
    </div>
  );
}
