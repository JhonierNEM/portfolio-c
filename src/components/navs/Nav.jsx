import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import { useSelector } from 'react-redux'

import { LanguageSelect } from '../form/selects/Language'
import { IconType } from '../../assets'
import BIcon from '../form/buttons/BIcon'
import { Menu } from './Menu'

export default function Nav() {
  const view = useSelector((state) => state.app.viewNav)
  const { NAV } = useSelector((state) => state.app.information.PAGES.MORE)
  const [scrollPos, setScrollPos] = useState(0)
  const [section, setSection] = useState('none')

  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPos(position)
    /* const projectsElement = document.getElementById('projects')
    const projectsRect = projectsElement.getBoundingClientRect()

    const aboutElement = document.getElementById('about')
    const aboutRect = aboutElement.getBoundingClientRect()

    const contactElement = document.getElementById('contactme')
    const contactRect = contactElement.getBoundingClientRect()

    if (projectsRect.top < scrollPos && projectsRect.bottom >= scrollPos) {
      setSection('projects')
    } else if (aboutRect.top < scrollPos && aboutRect.bottom >= scrollPos) {
      setSection('about')
    } else if (contactRect.top < scrollPos && contactRect.bottom >= scrollPos) {
      setSection('contact')
    } else {
      setSection('none')
    } */
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
          className={`transition-opacity duration-500 ease-in-out h-[4rem] flex items-center justify-between bg-main ${
            scrollPos >= 85
              ? 'fixed top-0.5 inset-x-0 max-w-7xl mx-auto z-50 rounded shadow-lg shadow-black px-6'
              : 'block border-b-2 border-black mx-6'
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
            <ul className="flex gap-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <li>
                <LinkItem
                  href="projects"
                  currentSection={section}
                  name={NAV[0]}
                  value="projects"
                />
              </li>
              <li>
                <LinkItem
                  href="about"
                  currentSection={section}
                  name={NAV[1]}
                  value="about"
                />
              </li>
              <li>
                <LinkItem
                  href="contactme"
                  currentSection={section}
                  name={NAV[2]}
                  value="contact"
                />
              </li>
            </ul>
          )}
          <div id="socialnetwork" className="flex gap-2">
            <LanguageSelect />
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

function LinkItem({ currentSection, href, name, value }) {
  return (
    <LinkS
      className={`py-2 px-6 hover:bg-hv-main hover:shadow shadow-white/50 hover:rounded-md cursor-pointer border-b-2 hover:border-none ${
        currentSection === value ? 'border-hv-main' : 'border-main'
      }`}
      to={href}
      smooth={true}
      duration={500}
    >
      {name}
    </LinkS>
  )
}
