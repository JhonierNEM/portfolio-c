//Components
import BIcon from "../../form/buttons/BIcon";

import { Popover } from "@headlessui/react";
import { classNames } from "../../../utils";

export default function Item({ to, IconType, title, className}) {
  return (
    <a href={to}>
      <Popover.Button className="w-full h-12 flex items-center p-2 space-x-3 group/iNav hover:bg-hv-main hover:rounded-md">
        <BIcon icon={IconType} className={classNames("w-7 fill-tx-main",className)}/>
        <h2 className="text-tx-main text-xl font-medium group-hover/iNav:text-txSecond">
          {title}
        </h2>
      </Popover.Button>
    </a>
  );
}