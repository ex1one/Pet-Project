import React from "react";
import Auth from "./components/Auth/Auth";

const App = () => {
  const isAuth = false;
  return isAuth ? <h1>Доступны все страницы</h1> : <Auth />;
};

export default App;
