import { createContext, ReactNode, useState } from "react";

type Theme = 'light' | 'dark';

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
}

type ThemeContextProviderTypeProps = {
  children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextType);

export function ThemeContextProvider(props: ThemeContextProviderTypeProps) {
  const [currentTheme, setCurrentTheme] = useState<Theme>('dark');

  function toggleTheme() {
    setCurrentTheme(currentTheme === 'dark' ? 'light' : 'dark')
  }
  
  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  )
}