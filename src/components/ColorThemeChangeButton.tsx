import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import ImageDarkThemeChangeButton from "./ImageDarkThemeChangeButton";
import ImageLightThemeChangeButton from "./ImageLightThemeChangeButton";

export default function ColorChangeButton() {

  const { theme, setTheme } = useTheme();

  const [icon, setIcon] = useState<any>(<ImageLightThemeChangeButton/>);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    // Atualiza o ícone com base no tema
    const localTheme = localStorage.getItem("theme");
    console.log(localTheme, "local storage theme");
    setIcon(
      (theme === "dark") ? (
        <ImageDarkThemeChangeButton/>
      ) : (
        <ImageLightThemeChangeButton/>
      )
    );
  }, [theme]);

  return(
    <>
        <button
        className="p-2 rounded-full bottom-[15px] right-[15px] absolute bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-white"
        onClick={toggleTheme}
      >
        { icon }
      </button>
    </>
  );
}