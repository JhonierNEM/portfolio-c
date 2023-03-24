import { icons } from "../../assets";
import information from "../../information";

export default function About({}) {
  const { about } = information.personal;
  return (
    <div className="bg-main text-textOne min-h-screen px-6 sm:min-h-[600px]" id="about">
      <div className="flex flex-col items-center justify-center pt-6 pb-5 md:pt-[5.5rem]">
        <h1 className="text-3xl font-bold">About me</h1>
        <p className="text-textThree">My Introduction</p>
      </div>
      <div className="flex flex-col-reverse gap-6 min-h-[60vh] md:flex-row md:px-[50px] md:gap-12">
        <section className="flex-1 flex flex-col items-center justify-center gap-8">
          <p className="text-xl text-justify">{about.description}</p>
          <a
            href={about.cv.eng}
            download="Cv_Yhonier_Alegria"
            className=" bg-txSecond w-[210px] h-[60px] flex items-center justify-around p-2 rounded-lg hover:bg-hvSecond"
          >
            <span className="pl-2 text-lg text-white font-bold whitespace-nowrap">
              Download CV
            </span>
            <icons.Download fill="#fff" />
          </a>
        </section>
        <picture className="grid place-content-center">
          <img className="max-w-[300px] md:max-w-[500px] rounded" src={about.image} width={400} height={400}/>
        </picture>
      </div>
    </div>
  );
}
