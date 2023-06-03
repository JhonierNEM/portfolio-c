import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import { useSelector } from 'react-redux'

import Language from '../form/selects/Language'
import { IconType } from '../../assets'
import BIcon from '../form/buttons/BIcon'
import { Menu } from './Menu'

export default function Nav() {
  const view = useSelector((state) => state.app.viewNav)
  const { NAV } = useSelector((state) => state.app.information.PAGES.MORE)
  const [scrollPos, setScrollPos] = useState(0)

  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPos(position)
    console.log(position)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <div className="hidden text-tx-main h-[4rem] w-full md:block relative">
        <nav
          className={`transition-opacity duration-500 ease-in-out h-[4rem] flex items-center justify-between px-14 bg-main ${
            scrollPos >= 85 ? 'fixed top-1 inset-x-0 max-w-7xl mx-auto z-50 rounded shadow-lg shadow-black' : 'block border-b-2 border-black '
          }`}
        >
          <div>
            {!view ? (
              <Link to="/">
                <h2 className="text-xl font-bold">Alegria</h2>
                <img src="" alt="" />
              </Link>
            ) : (
              <LinkS
                to="home"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
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
            <Language />
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

      <div className="w-14 h-14 fixed bottom-6 right-6 grid place-content-center p-1 rounded-full shadow z-50 md:hidden">
        <Menu view={view} />
      </div>
    </>
  )
}
