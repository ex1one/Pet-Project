import React, { FC, ReactNode } from "react";
import Header from "./components/Header/Header";

interface IAppProps {
  children: ReactNode;
}

const App: FC<IAppProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default App;
