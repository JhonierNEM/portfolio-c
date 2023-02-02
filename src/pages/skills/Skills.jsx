import { useState } from "react";
import Skill from "../../components/cards/Skill";
import information from "../../information";

export default function Skills({}) {
  const [view, setView] = useState({ frontend: true });
  const {skills} = information

  const handleChangeView = (evt, name) => {
    evt.preventDefault();
    setView((previus) => {
      return { [name]: previus[name] ? false : true };
    });
  };

  return (
    <div className="h-screen" id="skills">
      <div className="p-2 text-center text-txThird">
        <h1 className="text-3xl font-bold">Habilidades</h1>
        <p className="text-txThird/50">Mi nivel tecnico</p>
      </div>

      <div className=" my-6 sm:p-2">
        <Skill
          title="Frontend Developer"
          subTitle="Mas de 6 meses"
          icon="brackets"
          view={view.frontend ? view.frontend : false}
          setView={handleChangeView}
          name="frontend"
          skills={skills.frontend}
        />
        <Skill
          title="Backend Developer"
          subTitle="Mas de 4 meses"
          icon="server"
          view={view.backend ? view.backend : false}
          setView={handleChangeView}
          name="backend"
          skills={skills.backend}
        />
        {/* <Skill
          title="Web Design"
          subTitle="More than 2 monts"
          icon="design/stroke"
          view={view.design ? view.design : false}
          setView={handleChangeView}
          name="design"
          skills={skills.design}
        /> */}
      </div>
    </div>
  );
}
