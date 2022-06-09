import React, { useEffect } from "react";
import AppRoutes from "./components/AppRoutes/AppRoutes";
import Header from "./components/Header/Header";

const App = () => {
  useEffect(() => {
    // Логика по проверке авторизации
  }, []);

  return (
    <>
      <Header />
      <AppRoutes />
    </>
  );
};

export default App;
