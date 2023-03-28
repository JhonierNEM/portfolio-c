//componets
import BIcon from "../form/buttons/BIcon";
import { IconType } from "../../assets";

export default function Footer() {
  return (
    <footer className="bg-main text-textOne border-t-2 border-black py-4 px-8 flex justify-between">
      <section>
        <span>by Yhonier Alegria</span>
      </section>
      <section></section>
      <section className="flex gap-2">
        {" "}
        <BIcon
          icon={IconType.LINKEDIN}
          href="https://www.linkedin.com/in/yhonier-c-alegria"
          className="hover:bg-blue-700 rounded hover:p-1"
        />
        <BIcon
          icon={IconType.GITHUB}
          href="https://github.com/SourerDev"
          className="hover:bg-black rounded hover:p-1"
        />
      </section>
    </footer>
  );
}
