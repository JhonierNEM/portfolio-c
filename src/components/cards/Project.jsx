import { icons } from "../../assets";
import { classNames } from "../inputs/Progress";

export default function Proyect({
  image,
  title,
  description,
  gitLink,
  demoLink,
  project
}) {
  return (
    <div className="text-textOne min-h-[500px] col-span-1  relative overflow-hidden rounded shadow-lg shadow-black">
      <picture className="grid place-content-center h-full w-full" /*  */>
        <img src={project.image} alt="" className="h-full w-auto" style={{aspectRatio:"auto",height:"auto"}}/>
      </picture>
      <div className="bg-black/80 backdrop-blur-sm absolute left-0 bottom-0 h-[150px] w-full flex justify-between items-center px-8 py-4  rounded">
        <section className="w-3/4">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="font-light max-h-[70px] overflow-hidden">{description}</p>
        </section>
        <section className="h-full flex flex-col items-end justify-evenly shadow">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <icons.GitHub className="w-8 h-8 fill-white hover:fill-hoverOne"/>
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <icons.NewWindow className="w-8 h-8 fill-white hover:fill-hoverOne" />
          </a>
        </section>
      </div>
    </div>
  );
}
