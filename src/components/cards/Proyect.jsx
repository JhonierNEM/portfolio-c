import { icons } from "../../assets";
import { classNames } from "../inputs/Progress";

export default function Proyect({
  image,
  title,
  description,
  gitLink,
  demoLink,
}) {
  return (
    <div className="relative w-full max-h-full rounded p-2 md:my-2 flex flex-col items-center md:shadow md:w-[340px]">
      <img className="h-[200px] rounded-xl shadow md:shadow-none" src={image} />

      <div></div>
      <h1 className="w-full my-4 text-xl font-bold">{title}</h1>
      <p className="w-full min-h-[150px] max-h-[150px]  overflow-hidden text-txThird/60">
        {description}
      </p>

      <div className={classNames("w-full my-6 flex items-center sm:my-1")}>
        {gitLink ? (
          <a
            href={gitLink}
            target="_blank"
            rel="noreferrer"
            className="w-16 h-16 py-2 px-4 bg-bgSecond rounded-lg flex items-center text-txFirst sm:py-0 sm:h-14 hover:bg-hvSecond"
          >
            {/* <span className="text-lg font-bold">GitHub</span> */}
            <icons.GitHub className="fill-bgFirst" />
          </a>
        ) : null}

        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noreferrer"
            className="bg-bgSecond h-16 flex items-center p-2 mx-4 rounded-lg shadow-sm overflow-hidden sm:h-14 hover:bg-hvSecond"
          >
            <span className="text-txFirst text-xl font-bold mx-4 md:text-lg">Demo</span>
            <icons.BoxUp className="fill-txFirst w-8 h-8 mx-2" />
          </a>
        )}
      </div>
    </div>
  );
}
