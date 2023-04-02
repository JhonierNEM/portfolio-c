import { IMGs_PY, IMGs_DA, IMGs_TW, IMGs_US, documents } from "../assets";

export const pages = {
  MAIN: {
    head:"Alegria",
    title: "",
    user: "Yhonier Alegria",
    profession: "FrontEnd Developer",
    img: IMGs_US.main,
    descrip:
      'I love programming, I want to explore this world more and enjoy the journey "I will always be willing to improve".',
  },
  PROJECTS: {
    title: "Projects",
    sub: "Main Projects",
  },
  ABOUTME: {
    title: "About Me",
    sub: "My Introduction",
    img: IMGs_US.about,
    descrip:
      "Web developer with skills in HTML, CSS, JavaScript, TypeScript. I have experience in ReactJS, I have a strong understanding of responsive design, with skills in agile methodologies and version control using Git.",
    cv:documents.cvAlegriaEng
  },
  CONTACTME: {
    title: "Contact Me",
    sub: "Send me a message",
  },
};
export const PROJECTS = [
  {
    id: 102,
    name: "Properties & You",
    shortDescription:
      "Web application where you can find various real estate, such as houses, apartments, farms, among others, which you can buy or rent. which you can buy or rent, there is also the option to sell or rent one of them if possible.",
    URLs: [IMGs_PY.landing],
    gitLink: "https://github.com/SourerDev/Proyecto-Final-Frontend",
    more: {
      view: true,
      description: "",
      techStack: ["React 18.2.0","Redux 4.2.0","Axios 1.1.3","Tailwindcss 3.2.3","Styled- Components 5.3.6","Sweetalert2 11.6.14"],
      goals: [" Define the basic structure of the project (Front-End)"],
      contributors: ["SourerDev","TomasPerez1","arturogutierrez11"],
      demoLink: "https://proyecto-final-frontend-jhoniernem.vercel.app/",
    },
  },
  {
    id: 101,
    name: "Dog App",
    shortDescription:
      "Application where you can visualize the different existing dog breeds, you can search and filter, you can also create a new breed.",
    URLs: [IMGs_DA.landing],
    gitLink: "https://github.com/SourerDev/PI-Dogs-main",
    more: {
      view: false,
      techStack: ["Pending..."],
      goals: ["Pending..."],
      contributors: ["SourerDev"],
      demoLink: "",
    },
  },
  {
    id: 100,
    name: "Today's Weather",
    shortDescription:
      "Weather application, by means of a request to an external api you can visualize the weather data of a given place.",
    URLs: [IMGs_TW.main],
    gitLink: "https://github.com/SourerDev/weather-app",
    more: {
      view: false,
      techStack: ["Pending..."],
      goals: ["Pendding..."],
      contributors: ["SourerDev"],
      demoLink: "",
    },
  },
];
