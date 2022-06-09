import { createContext, FC, ReactNode, useMemo, useState } from "react";

interface IThemeProvider {
  children: ReactNode;
}

interface IContext {
  isDark: boolean;
}

export const ThemeContext = createContext<IContext>({ isDark: true });

export const ThemeProvider: FC<IThemeProvider> = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  const value = useMemo(() => ({ isDark, setIsDark }), [isDark]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
