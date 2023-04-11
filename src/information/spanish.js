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
    labels: ["Nombre", "Correo", "Asunto", "Mensaje"],
    contact: "Contactar",
  },
  MORE: {
    NAV: ["Proyectos", "Sobre Mi", "Contactar","Inicio"],
  },
};
export const PROJECTS = [
  {
    id: 102,
    name: "Properties & You",
    shortDescription:
      "Aplicación web donde puedes encontrar diferentes bienes raíces, como casas, apartamentos, fincas, entre otros, que puedes comprar o alquilar. También existe la opción de vender o alquilar alguno de ellos si es posible.",
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
      goals: ["Definir la estructura básica del proyecto (Front-End)"],
      contributors: ["SourerDev", "TomasPerez1", "arturogutierrez11"],
      demoLink: "https://proyecto-final-frontend-jhoniernem.vercel.app/",
    },
  },
  {
    id: 101,
    name: "Dog App",
    shortDescription:
      "Aplicación donde puedes visualizar las diferentes razas de perros existentes, puedes buscar y filtrar, también puedes crear una nueva raza.",
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
      goals: ["Pendiente..."],
      contributors: ["SourerDev"],
      demoLink: "",
    },
  },
  {
    id: 100,
    name: "Today's Weather",
    shortDescription:
      "Aplicación del clima, mediante una petición a una API externa puedes visualizar los datos climáticos de un lugar dado.",
    URLs: [IMGs_TW.main],
    gitLink: "https://github.com/SourerDev/weather-app",
    more: {
      view: false,
      techStack: ["Pendiente..."],
      goals: ["Pendiente..."],
      contributors: ["SourerDev"],
      demoLink: "",
    },
  },
];

export const information = {
  PROJECTS,
  PAGES,
};
