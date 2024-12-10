"use client";
import { useTheme } from "next-themes";
import { create } from "zustand";
interface IStoreTheme {
  theme: string;
  setTheme: (theme: string) => void;
  getTheme: () => void;
}

const store = create<IStoreTheme>((set) => ({
  theme: "dark",
  setTheme: (theme) => {
    set({ theme });
    localStorage.setItem("theme", theme);
  },
  getTheme: () => store.getState().theme,
}));

export const useThemeChanger = () => {
  const { theme, systemTheme, setTheme } = useTheme();
  console.log(systemTheme);

  const currentTheme = theme === "system" ? systemTheme : theme;
  const setThemeHandler = (theme: string) => {
    setTheme(theme);
    store.setState({ theme });
  };
  return {
    systemTheme,
    theme: currentTheme,
    setTheme: setThemeHandler,
    getTheme: store.getState().getTheme,
  };
};
