import { icons } from "../../assets";
import information from "../../information";

export default function About({}) {
  const { about } = information.personal;
  return (
    <div className="h-screen p-2 " id="about">
      <div className="h-[10%] p-2 text-center text-txThird">
        <h1 className="text-3xl font-bold">Sobre mi</h1>
        <p className="text-txThird/50">Mi introduccion</p>
      </div>

      <div className="h-[75%] flex flex-col items-center justify-center md:flex-row-reverse md:px-10">
        <img className="w-2/3 my-4 rounded-lg sm:w-[200px] md:w-[300px]" src={about.image} />

        <p className="my-4 p-2 text-xl text-txThird/600 text-center md:mx-6">
          {about.description}
        </p>
      </div>

      <div className="h-[15%] flex items-center justify-center">
        <a
          href={about.cv.spa}
          download="Cv_Yhonier_Alegria"
          className=" bg-txSecond w-[210px] h-[60px] flex items-center justify-around p-2 rounded-lg hover:bg-hvSecond"
        >
          <span className="pl-2 text-lg text-white font-bold whitespace-nowrap">
            Descargar CV
          </span>
          <icons.Download fill="#fff" />
        </a>
      </div>

      {/* <iframe
        src={about.cv.spa}
        style={{width:"100%", height:"700px"}}
        frameborder="0"
      ></iframe> */}
    </div>
  );
}
