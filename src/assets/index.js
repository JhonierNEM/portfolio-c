//Images
import PY_Landing from './images/propertiesyou/PY_Landing.jpg'

import TW_Main from './images/todaysweather/TW_Main.jpg'

import DA_Landing from './images/dogapp/DA_Landing.png'

import US_About from './images/a-personal/US_About.jpg'
import US_Main from './images/a-personal/US_Main.png'

import iconsSuccess from './images/others/iconsSuccess.png'
import iconsWarning from './images/others/iconsWarning.png'

import About from './icons/About'
import BoxUp from './icons/BoxUp'
import Brackets from './icons/Brackets'
import Code, { Work } from './icons/Code'
import Contact from './icons/Contact'
import Design from './icons/Design'
import Download from './icons/Download'
import GitHub from './icons/GitHub'
import Home from './icons/Home'
import Instagram from './icons/Instagram'
import LinkedIn from './icons/LinkedIn'
import Note from './icons/Note'
import NewWindow from './icons/NewWindow'
import Rigth from './icons/Right'
import Service from './icons/Service'
import Server from './icons/Server'
import Up from './icons/Up'

import cvAlegriaEng from './documents/CV_Alegria_ENG.pdf'
import cvAlegira from './documents/CV_Alegria.pdf'

export const IMGs_US = {
  main: US_Main,
  about: US_About,
}
export const IMGs_PY = {
  landing: PY_Landing,
}
export const IMGs_TW = {
  main: TW_Main,
}
export const IMGs_DA = {
  landing: DA_Landing,
}
export const IMGs_Others = {
  alert: {
    iconsSuccess,
    iconsWarning,
  },
}
const icons = {
  About,
  BoxUp,
  Brackets,
  Code,
  Contact,
  Design,
  Download,
  GitHub,
  Home,
  Instagram,
  LinkedIn,
  Rigth,
  Service,
  Server,
  NewWindow,
  Note,
  Up,
  Work,
}

export default function getIcon(icon) {
  return icons[icon] ? icons[icon] : icons[icon]
}

export const IconType = {
  ABOUT: 'About',
  BOX_UP: 'BoxUp',
  BRACKETS: 'Brackets',
  CODE: 'Code',
  CONTACT: 'Contact',
  DESIGN: 'Design',
  DOWNLOAD: 'Download',
  GITHUB: 'GitHub',
  HOME: 'Home',
  INSTAGRAM: 'Instagram',
  LINKEDIN: 'LinkedIn',
  RIGTH: 'Rigth',
  SERVICE: 'Service',
  NEW_WINDOW: 'NewWindow',
  NOTE: 'Note',
  UP: 'Up',
  WORK: 'Work',
  SERVER: 'Server',
}

export const documents = {
  cvAlegriaEng,
  cvAlegira,
}
