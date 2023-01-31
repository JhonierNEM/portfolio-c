import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Squares2X2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { icons } from "../../assets";
import Item from "./items/Item";

export default function Menu() {
  return (
    <Popover>
      <Popover.Button className="w-12 h-12 mt-1">
        <span className="sr-only">Menu</span>
        <Squares2X2Icon/>
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="h-screen bg-bgFirst m-2 flex flex-col rounded-lg fixed inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden z-50"
        >
          <Popover.Button className="w-10 h-10  hover:shadow-sm rounded-full self-end outline-none">
            <span className="sr-only">Menu</span>
            <XMarkIcon  />
          </Popover.Button>
          <div className="h-4/5 p-2 space-y-3 flex flex-col rounded-lg mb-2 sm:text-xl ">
            
            <Item to="#home" title="Inicio" icon="home"/>
            <Item to="#about" title="Sobre mi" icon="about"/>
            <Item to="#skills" title="Habilidades" icon="note/stroke"/>
           {/*  <Item to="#services" title="Servicios" icon="service"/> */}
            <Item to="#proyects" title="Proyectos" icon="code"/>
            <Item to="#contactme" title="Contactame" icon="contact/stroke"/>
          </div>
          <div className="h-1/5 border-t w-1/2 self-center flex p-2  justify-between">
            <a
              className="w-10 h-10 rounded"
              href="https://www.linkedin.com/in/yhonier-esteban-caype-alegria-2299a6248"
              target="_blank"
              rel="noreferrer"
            >
              <icons.LinkedIn
                className="rounded hover:fill-txSecond"
              />
            </a>
            <a
              className="w-10 h-10 rounded"
              href="https://github.com/JhonierNEM"
              target="_blank"
              rel="noreferrer"
            >
              <icons.GitHub className="hover:fill-txSecond"/>
            </a>
            <button className="w-10 h-10 rounded">
              <icons.Instagram className="hover:fill-txSecond"/>
            </button>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
