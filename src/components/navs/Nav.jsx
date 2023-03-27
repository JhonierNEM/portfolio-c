import { IconType } from "../../assets";
import BIcon from "../form/buttons/BIcon";

export default function Nav() {
  return (
    <div className="hidden text-textOne max-h-[5rem] h-[4rem] fixed top-0 left-0 w-full z-50 md:block px-2 pt-2 backdrop-blur-sm">
      <nav className="h-full flex items-center justify-between px-14 rounded shadow-lg shadow-black bg-main">
        <div>
          <a href="#home">
            <h2 className="text-xl font-bold">Alegria</h2>
            <img src="" alt="" />
          </a>
        </div>
        <ul className="flex gap-6">
          <li>
            <a
              className="py-2 px-6 hover:bg-black hover:shadow shadow-white/50 rounded-md"
              href="#projects"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className="py-2 px-6 hover:bg-black hover:shadow shadow-white/50 rounded-md"
              href="#about"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="py-2 px-6 hover:bg-black hover:shadow shadow-white/50 rounded-md"
              href="#contactme"
            >
              Contact
            </a>
          </li>
          <li>
            <a href=""></a>
          </li>
        </ul>
        <div id="socialnetwork" className="flex gap-2">
          <BIcon
            icon={IconType.LINKEDIN}
            href="https://www.linkedin.com/in/yhonier-c-alegria"
          />
          <BIcon icon={IconType.GITHUB} href="https://github.com/SourerDev" />
        </div>
      </nav>
    </div>
  );
}
