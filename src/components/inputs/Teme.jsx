import { MoonIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

export default function Teme() {
  const [teme, setTeme] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );

  useEffect(() => {
    document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"));
  }, [teme]);

  const ThemeChange = () => {
    if (teme === false) {
      localStorage.setItem("theme", "dark");
      setTeme(true);
    } else {
      localStorage.setItem("theme", "light");
      setTeme(false);
    }
  };

  return (
    <button onClick={ThemeChange} className="w-12 h-12 flex items-center justify-center p-1 rounded-full shadow hidden">
      <MoonIcon stroke="#242424" />
    </button>
  );
}
