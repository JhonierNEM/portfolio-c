import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Squares2X2Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { IconType } from '../../assets'
import { useSelector } from 'react-redux'

//components
import Item from './items/Item'
import BIcon from '../form/buttons/BIcon'
import { LanguageSelect } from '../form/selects/Language'

export function Menu({ view }) {
  const { NAV } = useSelector((state) => state.app.information.PAGES.MORE)
  return (
    <Popover>
      {view && (
        <Popover.Button className="w-12 h-12 mt-1">
          <span className="sr-only">Menu</span>
          <Squares2X2Icon className="stroke-tx-main " />
        </Popover.Button>
      )}

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
          className="h-screen bg-main text-tx-main m-2 flex flex-col rounded-lg fixed inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden z-50"
        >
          <Popover.Button className="w-10 h-10  hover:shadow-sm rounded-full self-end outline-none">
            <span className="sr-only">Menu</span>
            <XMarkIcon />
          </Popover.Button>
          <div className="h-4/5 p-2 space-y-3 flex flex-col rounded-lg mb-2 sm:text-xl ">
            <Item to="#home" title={NAV[3]} IconType={IconType.HOME} />
            <Item to="#projects" title={NAV[0]} IconType={IconType.CODE} />
            <Item to="#about" title={NAV[1]} IconType={IconType.ABOUT} />
            {/* <Item to="#skills" title="Habilidades" icon="note/stroke"/> */}
            {/*  <Item to="#services" title="Servicios" icon="service"/> */}
            <Item
              to="#contactme"
              title={NAV[2]}
              IconType={IconType.CONTACT + '/stroke'}
              className="stroke-tx-main"
            />
          </div>
          <div className="border-t w-1/2 flex self-center justify-between gap-2 sm:p-2">
            <LanguageSelect />
            <div className="flex gap-4">
              <BIcon
                className="w-8 hover:fill-hv-main"
                icon={IconType.LINKEDIN}
                href="https://www.linkedin.com/in/yhonier-c-alegria"
              />
              <BIcon
                className="w-8 hover:fill-hv-main"
                icon={IconType.GITHUB}
                href="https://github.com/SourerDev"
              />
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
