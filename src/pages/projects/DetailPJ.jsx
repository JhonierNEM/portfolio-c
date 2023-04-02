import BGoBack from "../../components/form/buttons/BGoBack";

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setViewNav } from "../../redux/reducers";
import { PROJECTS } from "../../information/english";

export default function DetailPJ() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [project] = PROJECTS.filter((project) => project.id === parseInt(id));

  useEffect(() => {
    dispatch(setViewNav(false));
    return () => {
      dispatch(setViewNav(true));
    };
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-main text-tx-main px-6  pt-6 md:px-16  md:pt-[5.5rem]">
      <div className="mb-3">
        <h2 className="text-3xl font-bold">{project.name}</h2>
        <BGoBack />
      </div>
      <div className="flex flex-col gap-5 md:flex-row">
        <section>
          <picture>
            <img src={project.URLs[0]} alt="" />
          </picture>
          <p>{project.shortDescription}</p>
          <ul className="list-disc">
            <h3 className="text-xl font-semibold">Goals</h3>
            {project.more.goals.map((goal, i) => (
              <li key={i}>{goal}</li>
            ))}
          </ul>
        </section>
        <section className="min-[200px]:">
          <ul className="list-disc">
            <h3 className="text-xl font-semibold">Tech Stack</h3>
            {project.more.techStack.map((tech, i) => (
              <li className="whitespace-nowrap" key={i}>
                {tech}
              </li>
            ))}
          </ul>
          <h3 className="text-xl font-semibold">Contribuitors</h3>
          <ul className="flex gap-2">
            {project.more.contribuitors.map((user, i) => (
              <li key={i}>
                <a href={`https://github.com/${user}`}>
                  <img
                    className="rounded-full w-12"
                    src={`https://avatars.githubusercontent.com/${user}`}
                    alt=""
                  />
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
