import { icons } from "../../assets";
import Teme from "../../components/inputs/Teme";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import information from "../../information";

export default function Main() {
  const { main } = information.personal;

  return (
    <div id="home" className="h-screen p-2">
      <div
        id="header"
        className="h-[5%] flex justify-between items-center px-2"
      >
        <h1 className="text-xl font-bold text-txThird">{main.header}</h1>
        <Teme />
      </div>

      <div className="h-[70%] flex flex-col items-center justify-center  md:flex-row md:p-6">
        <img
          src={main.image}
          style={{ borderRadius: "29% 71% 31% 69% / 77% 23% 77% 23%" }}
          className="w-2/3 sm:w-[200px] md:w-[300px]"
        />
        <div className="px-4 w-full my-8">
          <h1 className="text-3xl font-bold">Hola, Soy {main.myName}</h1>
          <h2 className="text-lg text-txThird/40">{main.profession}</h2>
          <p className="text-xl text-txThird/60 my-4">{main.description}</p>
        </div>
      </div>

      <div
      className="h-[25%] flex flex-col items-center justify-center"
      >
        <a
          href="#contactme"
          className="bg-txSecond w-[200px] h-[60px] flex items-center justify-around p-2 rounded-lg hover:bg-hvSecond"
        >
          <span className="text-lg text-txFirst font-bold">Contactar</span>
          <PaperAirplaneIcon className="stroke-txFirst" width={30} height={30} />
        </a>
        <div className="flex justify-center space-x-4 my-3">
          <a
            href="https://www.linkedin.com/in/yhonier-esteban-caype-alegria-2299a6248"
            target="_blank"
            rel="noreferrer"
          >
            <icons.LinkedIn className="w-10 h-10 fill-txSecond hover:fill-hvSecond" />
          </a>
          <a
            href="https://github.com/JhonierNEM"
            target="_blank"
            rel="noreferrer"
          >
            <icons.GitHub className="w-10 h-10 fill-txSecond hover:fill-hvSecond" />
          </a>
          <icons.Instagram className="w-10 h-10 fill-txSecond hover:fill-hvSecond" />
        </div>
      </div>
    </div>
  );
}
