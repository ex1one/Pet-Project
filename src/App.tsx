import React from "react";
import Login from "./components/Login/Login";
import Modal from "./components/Modal/Modal";

const App = () => {
  const isAuth = false;
  return isAuth ? (
    <h1>Доступны все страницы</h1>
  ) : (
    <Modal title={"Войти"}>
      <Login />
    </Modal>
  );
};

export default App;
