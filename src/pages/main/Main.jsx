import { PaperAirplaneIcon } from '@heroicons/react/24/outline'
import { useSelector } from 'react-redux'

export default function Main() {
  const { MAIN } = useSelector((state) => state.app.information.PAGES)
  return (
    <div
      id="home"
      className=" bg-main relative min-h-[800px]  h-screen px-6 text-tx-main flex flex-col items-center justify-center gap-8 md:min-h-[500px] md:pl-[200px]"
    >
      <h2 className="z-50 fixed top-2 left-6 text-lg font-bold mix-blend-difference md:hidden">
        {MAIN.head}
      </h2>

      <picture className="max-w-[250px] w-3/4 grid place-content-center md:hidden md:top-4 md:right-6 md:w-[90px] md:h-auto md:z-50">
        <img
          src={MAIN.img}
          style={{ borderRadius: '29% 71% 31% 69% / 77% 23% 77% 23%' }}
          className="w-full bg-[#0A192F]"
          alt="MainImage"
          width={400}
          height={400}
        />
      </picture>

      <div className="w-full sm:p-12">
        <span className="text-[1em] text-second font-mono ml-6 sm:text-[1.5em] md:text-[2em]">
          {MAIN.greetings}
        </span>
        <h1 className="text-[2.4em] font-bold -mt-3 whitespace-nowrap sm:text-[3em] md:text-[3.6em]">
          {MAIN.user}
        </h1>
        <h2 className="text-[1.2em] font-semibold text-tx-main/50 bg-clip-text bg-gradient-to-l from-textThree -mt-3 whitespace-nowrap sm:text-[2em] md:text-[2.6em]">
          {MAIN.profession}
        </h2>
        <p className="text-[1em] sm:text-[1.4em] md:text-[1.8em] md:max-w-[80%]">
          {MAIN.descrip}
        </p>
      </div>

      <a
        href="#contactme"
        className="bg-second flex px-8 py-4 mt-8 gap-2 rounded-md animate-bounce hover:bg-hv-main shadow-lg shadow-black md:absolute md:right-6 bottom-6"
      >
        <span className="text-lg text-txFirst font-bold ">{MAIN.contact}</span>
        <PaperAirplaneIcon className="stroke-txFirst " width={30} height={30} />
      </a>
    </div>
  )
}
