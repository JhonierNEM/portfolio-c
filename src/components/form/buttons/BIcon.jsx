import { classNames } from "../../../utils";
import getIcon from "../../../assets";
export default function BIcon({
  icon,
  className,
  href,
  target = "_blank",
  rel = "noreferrer",
}) {
  const [ICON, stroke] = icon.split("/");
  const Icon = getIcon(ICON);
  const ClassName = "fill-white w-7 h-auto transition-all ease-in hover:scale-125";

  if (!href)
    return (
      <Icon
        className={classNames(
          ClassName,
          stroke && "stroke-white fill-none",
          className
        )}
      />
    );

  return (
    <a href={href} target={target} rel={rel}>
      <Icon className={classNames(ClassName, className)} />
    </a>
  );
}
