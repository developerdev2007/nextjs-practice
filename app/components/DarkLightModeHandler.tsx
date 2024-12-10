"use client";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { useThemeChanger } from "../hooks/useThemeChanger";
const DarkLightModeHandler = () => {
  const { setTheme, theme } = useThemeChanger();
  console.log(theme);
  const handleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  // console.log(systemTheme);
  //   const theme2 = getTheme();
  return (
    <>
      <div
        onClick={handleTheme}
        className="backdrop-blur-3xl bg-white/10 rounded-full  h-10  md:h-12 focus:outline-none focus:ring-1 border-0 flex items-center justify-center"
      >
        {theme !== "light" ? (
          <div className="px-2 py-1 w-20 flex item-center justify-center gap-2 flex-row capitalize transition-none select-none">
            <IoSunnyOutline size={25} className="hover:scale-95" />
            {theme === "light" ? "dark" : "light"}
          </div>
        ) : (
          <div className="px-2 py-1 w-20 flex item-center justify-center gap-2 flex-row capitalize transition-none select-none">
            <IoMoonOutline size={22} className="hover:scale-95" />

            {theme === "light" ? "dark" : "light"}
          </div>
        )}
      </div>
    </>
  );
};
export default DarkLightModeHandler;
