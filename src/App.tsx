import React from "react";
import Modal from "./components/Modal/Modal";
import Registration from "./components/Registration/Registration";
import useTypedSelector from "./hooks/useTypedSelector";
import selectors from "./store/selectors/selectors";

const App = () => {
  const { token, user } = useTypedSelector(selectors.auth);

  return token ? (
    <h1>Доступ ко всему</h1>
  ) : (
    <Modal>
      <Registration />
    </Modal>
  );
};

export default App;
