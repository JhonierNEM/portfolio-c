import { IMGs_PY, IMGs_DA, IMGs_TW, IMGs_US, documents } from "../assets";

export const PAGES = {
  MAIN: {
    head: "Alegria",
    greetings: "Hola!, me llamo",
    user: "Yhonier Alegria",
    profession: "Soy un Desarrollador FrontEnd",
    img: IMGs_US.main,
    descrip:
      'Me encanta la programción, quiero explorar mas este mundo y disfrutar el recorrido "Siempre podré mejorar".',
    contact: "Contactar",
  },
  PROJECT: {
    title: "Proyectos",
    sub: "Proyectos Principales ",
  },
  ABOUTME: {
    title: "Sobre Mi",
    sub: "Mi Introducción",
    img: IMGs_US.about,
    descrip:
      "Desarrollador web con habilidades en HTML, CSS, JavaScript, TypeScript. Tengo experiencia en ReactJS, tengo una fuerte comprensión del diseño responsivo, con habilidades en metodologías ágiles y control de versiones usando Git.",
    cv: documents.cvAlegriaEng,
    download: "Descargar",
  },
  CONTACTME: {
    title: "Contacto",
    sub: "Enviame un mensaje",
    labels:["Nombre","Correo","Asunto","Mensaje"],
    contact:"Contactar"
  },
  MORE: {
    NAV: ["Proyectos","Sobre Mi","Contactar"],
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
      techStack: [
        "React 18.2.0",
        "Redux 4.2.0",
        "Axios 1.1.3",
        "Tailwindcss 3.2.3",
        "Styled- Components 5.3.6",
        "Sweetalert2 11.6.14",
        "Mercadopago 1.5.14",
      ],
      goals: [" Define the basic structure of the project (Front-End)"],
      contributors: ["SourerDev", "TomasPerez1", "arturogutierrez11"],
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
      techStack: [
        "React 18.2.0",
        "Redux 4.2.0",
        "Typescript 4.8.4",
        "Axios 1.1.2",
        "Pure CSS",
        "NodeJS 16.15.1",
        "Express 4.17.1",
        "Sequelize 6.3.5",
        "PostgreSQL 12.12.0",
      ],
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

export const information = {
  PROJECTS,
  PAGES,
};
