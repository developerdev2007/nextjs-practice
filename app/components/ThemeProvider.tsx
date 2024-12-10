"use client";
import { ThemeProvider } from "next-themes";

interface Props {
  children: React.ReactNode;
}

const ThemeProviderWrapper = ({ children }: Props) => {
  return (
    <ThemeProvider
      attribute={"class"}
      defaultTheme="dark"
      storageKey="theme"
      enableSystem
    >
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderWrapper;
