import { images, documents } from "./assets";

const information = {
  personal: {
    main: {
      header: "Alegria",
      myName: "Yhonier",
      image: images.main.MainImage,
      profession: "Full Stack Developer",
      description: `I love programming, I want to explore this world more and enjoy the journey "I will always be willing to improve".`,
    },
    about: {
      image: images.main.AboutImage,
      description: `Web developer with skills in HTML, CSS, JavaScript, TypeScript. I have experience in ReactJS, I have a strong understanding of responsive design, with skills in agile methodologies and version control using Git.`,
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
      { name: "Sql", value: 100 },
      { name: "Node.js", value: 80 },
      { name: "Express.js", value: 80 },
      { name: "sequelize", value: 50 },
    ],
    design: [{ name: "Figma", value: 30 }],
  },
  projects: [
    {
      name: "Properties & You",
      shortDescription: `Web application where you can find various real estate, such as houses, apartments, farms, among others, which you can buy or rent. which you can buy or rent, there is also the option to sell or rent one of them if possible.`,
      image: images.PropertiesYou.landing,
      gitLink: "https://github.com/JhonierNEM/Proyecto-Final-Frontend",
      demoLink: "https://proyecto-final-frontend-jhoniernem.vercel.app/",
      more: {
        view: false,
      },
    },
    {
      name: "Dog App",
      shortDescription: `Application where you can visualize the different existing dog breeds, you can search and filter, you can also create a new breed.`,
      image: images.DogsApp.DogsApp,
      gitLink: "https://github.com/JhonierNEM/PI-Dogs-main",
      demoLink: "",
      more: {
        view: false,
      },
    },
    {
      name: "Weather App",
      shortDescription: `Weather application, by means of a request to an external api you can visualize the weather data of a given place.`,
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
