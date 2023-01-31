import { Popover } from "@headlessui/react";
import { icons } from "../../../assets";

export default function Item({ to, icon, title }) {
  return (
    <a href={to}>
      <Popover.Button className="w-full h-12 flex items-center p-2 space-x-3 group/iNav hover:bg-hvFirst hover:rounded-md">
        <div className="w-10 h-10 rounded">{getIcon(icon)}</div>
        <h2 className="text-txThird text-xl font-medium group-hover/iNav:text-txSecond">
          {title}
        </h2>
      </Popover.Button>
    </a>
  );
}

export function getIcon(icon) {
  const [iconName, stroke] = icon.split("/");
  const className = stroke
    ? "stroke-txThird group-hover/iNav:stroke-txSecond "
    : "group-hover/iNav:fill-txSecond";

  switch (iconName) {
    case "home":
      return <icons.Home className={className} />;

    case "about":
      return <icons.About className={className} />;

    case "note":
      return <icons.Note className={className} />;

    case "service":
      return <icons.Service className={className} />;

    case "code":
      return <icons.Code className={className} />;

    case "contact":
      return <icons.Contact className={className} />;

    default:
      return;
  }
}
