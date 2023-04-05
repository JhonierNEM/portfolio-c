//components
import BIcon from "./BIcon";

import { IconType } from "../../../assets";

export default function BDownload({value,file}) {
  return (
    <a
      href={file}
      download="Cv_Yhonier_Alegria"
      className=" bg-second w-[210px] h-[60px] flex items-center justify-around p-2 rounded-lg hover:bg-hv-main"
    >
      <span className="pl-2 text-lg font-bold whitespace-nowrap">
        {value} CV
      </span>
      <BIcon icon={IconType.DOWNLOAD}/>
    </a>
  );
}
/* 
const Button = styled.a`
  --width: 100px;
  --height: 35px;
  --tooltip-height: 35px;
  --tooltip-width: 90px;
  --gap-between-tooltip-to-button: 18px;
  --button-color: #1163ff;
  --tooltip-color: #fff;
  width: var(--width);
  height: var(--height);
  background: var(--button-color);
  position: relative;
  text-align: center;
  border-radius: 0.45em;
  font-family: "Arial";
  transition: background 0.3s;


::before {
  position: absolute;
  content: attr(data-tooltip);
  width: var(--tooltip-width);
  height: var(--tooltip-height);
  background-color: var(--tooltip-color);
  font-size: 0.9rem;
  color: #111;
  border-radius: .25em;
  line-height: var(--tooltip-height);
  bottom: calc(var(--height) + var(--gap-between-tooltip-to-button) + 10px);
  left: calc(50% - var(--tooltip-width) / 2);
}

::after {
  position: absolute;
  content: '';
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-top-color: var(--tooltip-color);
  left: calc(50% - 10px);
  bottom: calc(100% + var(--gap-between-tooltip-to-button) - 10px);
}

::after,::before {
  opacity: 0;
  visibility: hidden;
  transition: all 0.5s;
}

.text {
  display: flex;
  align-items: center;
  justify-content: center;
}

.button-wrapper,.text,.icon {
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  color: #fff;
}

.text {
  top: 0
}

.text,.icon {
  transition: top 0.5s;
}

.icon {
  color: #fff;
  top: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

:hover {
  background: #6c18ff;
}

:hover .text {
  top: -100%;
}

:hover .icon {
  top: 0;
}

:hover:before, :hover:after {
  opacity: 1;
  visibility: visible;
}

:hover:after {
  bottom: calc(var(--height) + var(--gap-between-tooltip-to-button) - 20px);
}

:hover:before {
  bottom: calc(var(--height) + var(--gap-between-tooltip-to-button));
}
` */
