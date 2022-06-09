import React, { FC, ReactNode, useEffect } from "react";
import Header from "./components/Header/Header";
import { ThemeProvider } from "./providers/ThemeProvider";

interface IApp {
  children: ReactNode;
}

const App: FC<IApp> = ({ children }) => {
  useEffect(() => {
    // Логика по проверке авторизации
  }, []);

  return (
    <ThemeProvider>
      <Header />
      {children}
    </ThemeProvider>
  );
};

export default App;
