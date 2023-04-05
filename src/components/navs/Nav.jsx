import { Link } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import Language from "../form/selects/Language";
import { IconType } from "../../assets";
import BIcon from "../form/buttons/BIcon";
import { useSelector } from "react-redux";

export default function Nav({ view }) {
  const {NAV} = useSelector(state=>state.app.information.PAGES.MORE)
  
  return (
    <div className="hidden text-tx-main max-h-[5rem] h-[4rem] fixed top-0 left-0 w-full z-50 md:block px-2 pt-2 backdrop-blur-sm">
      <nav className="h-full flex items-center justify-between px-14 rounded shadow-lg shadow-black bg-main">
        <div>
          {!view ? (
            <Link to="/">
              <h2 className="text-xl font-bold">Alegria</h2>
              <img src="" alt="" />
            </Link>
          ) : (
            <LinkS to="home" smooth={true} duration={500} className="cursor-pointer">
              <h2 className="text-xl font-bold">Alegria</h2>
              <img src="" alt="" />
            </LinkS>
          )}
        </div>
        {view && (
          <ul className="flex gap-6">
            <li>
              <LinkS
                className="py-2 px-6 hover:bg-hv-main hover:shadow shadow-white/50 rounded-md cursor-pointer"
                to="projects"
                smooth={true}
                duration={500}
              >
                {NAV[0]}
              </LinkS>
            </li>
            <li>
              <LinkS
                className="py-2 px-6 hover:bg-hv-main hover:shadow shadow-white/50 rounded-md cursor-pointer"
                to="about"
                smooth={true}
                duration={500}
              >
                {NAV[1]}
              </LinkS>
            </li>
            <li>
              <LinkS
                className="py-2 px-6 hover:bg-hv-main hover:shadow shadow-white/50 rounded-md cursor-pointer"
                to="contactme"
                smooth={true}
                duration={500}
              >
                {NAV[2]}
              </LinkS>
            </li>
          </ul>
        )}
        <div id="socialnetwork" className="flex gap-2">
          <Language/>
          <BIcon
            icon={IconType.LINKEDIN}
            href="https://www.linkedin.com/in/yhonier-c-alegria"
            className="hover:bg-blue-700 rounded hover:p-1"
          />
          <BIcon
            icon={IconType.GITHUB}
            href="https://github.com/SourerDev"
            className="hover:bg-black rounded hover:p-1"
          />
        </div>
      </nav>
    </div>
  );
}
