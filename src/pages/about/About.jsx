//components
import HTitle from "../../components/headers/HTitle";
import BDownload from "../../components/form/buttons/BDownload";

import { useSelector } from "react-redux";

export default function About({}) {
  const {ABOUTME} = useSelector((state)=>state.app.information.PAGES)
  
  return (
    <div className="bg-main text-tx-main min-h-screen px-6 sm:min-h-[600px]" id="about">
      <HTitle title={ABOUTME.title} sub={ABOUTME.sub}/>
      <div className="flex flex-col-reverse gap-6 min-h-[60vh] md:flex-row md:px-[50px] md:gap-12">
        <section className="flex-1 flex flex-col items-center justify-center gap-8">
          <p className="text-xl text-justify">{ABOUTME.descrip}</p>
          <BDownload value={ABOUTME.download} file={ABOUTME.cv}/>
        </section>
        <picture className="grid place-content-center">
          <img className="max-w-[300px] md:max-w-[500px] rounded" src={ABOUTME.img} width={400} height={400}/>
        </picture>
      </div>
    </div>
  );
}
