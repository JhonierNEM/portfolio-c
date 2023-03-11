import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import information from "../../information";

export default function Main() {
  const { main } = information.personal;

  return (
    <div
      id="home"
      className="relative min-h-[800px]  h-screen px-6 text-textOne flex flex-col items-center justify-center gap-8 md:min-h-[500px]"
      style={{
        background:
          "linear-gradient(180deg, #000000 0%, #0A232F 95.31%, #050614 100%)",
      }}
    >
      <h2 className="fixed top-2 left-6 text-lg font-bold mix-blend-difference md:hidden">
        {main.header}
      </h2>

      <picture className="max-w-[250px] w-3/4 grid place-content-center md:fixed md:top-4 md:right-6 md:w-[90px] md:h-auto md:z-50">
        <img
          src={main.image}
          style={{ borderRadius: "29% 71% 31% 69% / 77% 23% 77% 23%" }}
          className="w-full bg-[#0A192F]"
          alt="MainImage"
          width={400}
          height={400}
        />
      </picture>

      <div className="w-full sm:p-12">
        <span className="text-[1em] text-textTwo font-mono ml-6 sm:text-[1.5em] md:text-[2em]">Hi, My name is</span>
        <h1 className="text-[2.4em] font-bold -mt-3 whitespace-nowrap sm:text-[3em] md:text-[3.6em]">{main.myName} Alegria</h1>
        <h2 className="text-[1.2em] font-semibold text-white/50 bg-clip-text bg-gradient-to-l from-textThree -mt-3 whitespace-nowrap sm:text-[2em] md:text-[2.6em]">I'm a {main.profession}</h2>
        <p className="text-[1em] sm:text-[1.4em] md:text-[1.8em] md:max-w-[80%]">{main.description}</p>
      </div>

      <a href="#contactme" className="bg-textTwo flex px-8 py-4 mt-8 gap-2 rounded-md animate-bounce md:absolute md:right-6 bottom-6">
        <span className="text-lg text-txFirst font-bold ">Contact</span>
        <PaperAirplaneIcon className="stroke-txFirst " width={30} height={30} />
      </a>
    </div>
  );
}