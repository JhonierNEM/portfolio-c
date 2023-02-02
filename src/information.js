import { images, documents } from "./assets";

const information = {
  personal: {
    main: {
      header: "Alegria",
      myName: "Yhonier",
      image: images.main.MainImage,
      profession: "Full Stack Developer",
      description: `Me encanta la programación, quiero explorar mas este mundo y dusfrutar la travecia "Siempre se puede mejorar"`,
    },
    about: {
      image: images.main.AboutImage,
      description: `Desarrollador web con habilidades en HTML, CSS, JavaScript,
      TypeScript. Tengo experiencia en ReactJS, Cuento con
      una fuerte comprensión del diseño responsivo, con
      habilidades en metodologías ágiles y control de
      versiones usando Git.`,
      cv: {
        eng: documents.cvAlegriaEng,
        spa: documents.cvAlegira,
      },
    },
  },
  skills: {
    frontend: [
      { name: "HTML", value: 90 },
      { name: "Javascript", value: 85 },
      { name: "React", value: 50 },
      { name: "Redux", value: 50 },
    ],
    backend: [
      {name:"Sql",value:100},
      { name: "Node.js", value: 80 },
      { name: "Express.js", value: 80 },
      { name: "sequelize", value: 50 },
    ],
     design: [
      { name: "Figma", value: 30 },
    ], 
  },
  proyects: [
    {
      name: "Properties & You",
      shortDescription: `Aplicacion web donde puedes encontrar diversas inmoviliarias, como casas, departamentos, fincas, entre otros
      las cuales puedes comprar o alquilar, tambien esta la opcion de vender o alquilar una de ellas si te es posible`,
      image: images.PropertiesYou.landing,
      gitLink: "https://github.com/JhonierNEM/Proyecto-Final-Frontend",
      demoLink: "https://proyecto-final-frontend-jhoniernem.vercel.app/",
      more: {
        view: false,
      },
    },
    {
      name: "Dog App",
      shortDescription: `Aplicacion donde puede visualizar las diferentes razas de perros existentes, se pueden realizar busquedas y filtrado,
      ademas se puede crear una nueva raza`,
      image: images.DogsApp.DogsApp,
      gitLink: "https://github.com/JhonierNEM/PI-Dogs-main",
      demoLink: "",
      more: {
        view: false,
      },
    },
    {
      name: "Weather App",
      shortDescription: `Aplicacion  del clima, mediante una peticion a una api externa se puede visualizar los datos sobre el clima de una lugar determnado.
      `,
      image: images.WeatherApp.WeatherApp,
      gitLink: "https://github.com/JhonierNEM/weather-app",
      demoLink: "",
      more: {
        view: false,
      },
    },
  ],
  services: [],
};

export default information;
