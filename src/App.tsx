import React from "react";
import Modal from "./components/Modal/Modal";
import Registration from "./components/Registration/Registration";

const App = () => {
  const isAuth = false;
  return isAuth ? (
    <h1>Доступ ко всему</h1>
  ) : (
    <Modal>
      <Registration />
    </Modal>
  );
};

export default App;
