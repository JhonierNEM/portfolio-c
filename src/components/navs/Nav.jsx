import { icons } from "../../assets";

export default function Nav() {
  return (
    <div className="hidden text-textOne max-h-[5rem] h-[4rem] fixed top-0 left-0 w-full z-50 md:block px-2 pt-2 backdrop-blur-sm">
      <nav className="h-full flex items-center justify-between px-14 rounded shadow bg-main">
        <div>
          <a href="#home">
            <h2 className="text-xl font-bold">Alegria</h2>
            <img src="" alt="" />
          </a>
        </div>
        <ul className="flex gap-6">
          <li>
            <a className="py-2 px-6 hover:bg-black hover:shadow shadow-white/50 rounded-md " href="#projects">Projects</a>
          </li>
          <li>
            <a className="py-2 px-6 hover:bg-black hover:shadow shadow-white/50 rounded-md " href="#about">About</a>
          </li>
          <li>
            <a className="py-2 px-6 hover:bg-black hover:shadow shadow-white/50 rounded-md " href="#contactme">Contact</a>
          </li>
          <li>
            <a href=""></a>
          </li>
        </ul>
        <div id="socialnetwork" className="flex gap-2">
          <a
            className=""
            href="https://www.linkedin.com/in/yhonier-esteban-caype-alegria-2299a6248"
            target="_blank"
            rel="noreferrer"
          >
            <icons.LinkedIn className="w-6 h-6 fill-txFirst hover:fill-blue-800" />
          </a>
          <a
            className=""
            href="https://github.com/JhonierNEM"
            target="_blank"
            rel="noreferrer"
          >
            <icons.GitHub className="w-6 h-6 fill-txFirst hover:fill-gray-300" />
          </a>
        </div>
      </nav>
    </div>
  );
}
