//Components
import BIcon from "../form/buttons/BIcon"

import { IconType } from "../../assets";

export default function Proyect({
  image,
  title,
  description,
  gitLink,
}) {
  return (
    <div className="min-h-[500px] col-span-1  relative overflow-hidden shadow-lg shadow-black z-1">
      <picture className="h-full w-full" /*  */>
        <img src={image} alt="" className="object-cover h-full"/>
      </picture>
      <div className="bg-black/80 backdrop-blur-sm absolute left-0 bottom-0 h-[150px] w-full flex justify-between items-center px-4 py-4 sm:px-8 rounded-tl rounded-tr">
        <section className="w-3/4">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="font-light max-h-[70px] overflow-hidden">{description}</p>
        </section>
        <section className="h-full flex flex-col items-end justify-evenly">
          <BIcon className="w-9 hover:bg-hv-main rounded hover:p-1 hover:shadow-hv-main hover:shadow" icon={IconType.GITHUB} href={gitLink}/>
          <BIcon className="w-9 hover:bg-hv-main rounded hover:p-1 hover:shadow-hv-main hover:shadow" icon={IconType.NEW_WINDOW} />
        </section>
      </div>
    </div>
  );
}
