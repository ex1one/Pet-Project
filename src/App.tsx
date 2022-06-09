import React, { FC, ReactNode } from "react";
import Header from "./components/Header/Header";
import { ThemeProvider } from "./providers/ThemeProvider";
import Layout from "./components/Layout/Layout";

interface IApp {
  children: ReactNode;
}

const App: FC<IApp> = ({ children }) => {
  return (
    <ThemeProvider>
      <Layout>
        <Header />
        {children}
      </Layout>
    </ThemeProvider>
  );
};

export default App;
