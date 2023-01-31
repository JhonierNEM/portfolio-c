import { icons } from "../../assets";

export default function Nav() {
  return (
    <div className="bg-bgSecond w-[10%] h-[100vh]  p-2 flex flex-col justify-between fixed top-0 left-0 shadow-xl group/lh lg:w-[90px] lg:hover:w-[200px] z-50">
      <nav className="flex flex-col items-center space-y-1 list-none my-2 font-semibold">
        <li className="w-full">
          <a
            href="#home"
            className="flex items-center justify-center relative py-2 rounded-lg group/nav md:hover:bg-hvSecond lg:group-hover/lh:justify-start lg:group-hover/lh:pl-2"
          >
            <icons.Home className="fill-txFirst w-9 h-9" />

            <span className="hidden bg-white text-txSecond text-base px-4 mx-2 absolute left-full top-1 rounded shadow group-hover/nav:block lg:text-txFirst lg:bg-transparent lg:relative lg:left-0 lg:top-0 lg:shadow-none lg:overflow-hidden lg:group-hover/lh:block">
              Inicio
            </span>
          </a>
        </li>

        <li className="w-full">
          <a
            href="#about"
            className="flex items-center justify-center relative py-2 rounded-lg group/nav md:hover:bg-hvSecond lg:group-hover/lh:justify-start lg:group-hover/lh:pl-2"
          >
            <icons.About className="fill-txFirst w-9 h-9" />

            <span className="hidden bg-white text-txSecond text-base px-4 mx-2 absolute left-full top-1 rounded shadow group-hover/nav:block lg:text-txFirst lg:bg-transparent lg:relative lg:left-0 lg:top-0 lg:shadow-none lg:overflow-hidden lg:group-hover/lh:block whitespace-nowrap">
              Sobre mi
            </span>
          </a>
        </li>

        <li className="w-full">
          <a
            href="#skills"
            className="flex items-center justify-center relative py-2 rounded-lg group/nav md:hover:bg-hvSecond lg:group-hover/lh:justify-start lg:group-hover/lh:pl-2"
          >
            <icons.Note className="stroke-txFirst w-9 h-9" />

            <span className="hidden bg-white text-txSecond text-base px-4 mx-2 absolute left-full top-1 rounded shadow group-hover/nav:block lg:text-txFirst lg:bg-transparent lg:relative lg:left-0 lg:top-0 lg:shadow-none lg:overflow-hidden lg:group-hover/lh:block">
              Habilidades
            </span>
          </a>
        </li>

        <li className="w-full">
          <a
            href="#proyects"
            className="flex items-center justify-center relative py-2 rounded-lg group/nav md:hover:bg-hvSecond lg:group-hover/lh:justify-start lg:group-hover/lh:pl-2"
          >
            <icons.Code className="fill-txFirst w-9 h-9" />

            <span className="hidden bg-white text-txSecond text-base px-4 mx-2 absolute left-full top-1 rounded shadow group-hover/nav:block lg:text-txFirst lg:bg-transparent lg:relative lg:left-0 lg:top-0 lg:shadow-none lg:overflow-hidden lg:group-hover/lh:block">
              Proyectos
            </span>
          </a>
        </li>

        <li className="w-full">
          <a
            href="#contactme"
            className="flex items-center justify-center relative py-2 rounded-lg group/nav md:hover:bg-hvSecond lg:group-hover/lh:justify-start lg:group-hover/lh:pl-2"
          >
            <icons.Contact className="stroke-txFirst w-9 h-9" />

            <span className="hidden bg-white text-txSecond text-base px-4 mx-2 absolute left-full top-1 rounded shadow group-hover/nav:block lg:text-txFirst lg:bg-transparent lg:relative lg:left-0 lg:top-0 lg:shadow-none lg:overflow-hidden lg:group-hover/lh:block">
              Contactame
            </span>
          </a>
        </li>
      </nav>

      <div className="w-full flex flex-col space-y-4 items-center px-2 py-4 lg:group-hover/lh:items-start">
        <a
        className="hover:bg-hvSecond rounded-lg p-1"
          href="https://www.linkedin.com/in/yhonier-esteban-caype-alegria-2299a6248"
          target="_blank"
          rel="noreferrer"
        >
          <icons.LinkedIn className="w-9 h-9 fill-txFirst" />
        </a>
        <a
        className="hover:bg-hvSecond rounded-lg p-1"
          href="https://github.com/JhonierNEM"
          target="_blank"
          rel="noreferrer"
        >
          <icons.GitHub className="w-9 h-9 fill-txFirst" />
        </a>
        <icons.Instagram className="w-9 h-9 fill-txFirst" />
      </div>
    </div>
  );
}
