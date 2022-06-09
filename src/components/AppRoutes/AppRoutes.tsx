import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import {
  privateRoutes,
  publicRoutes,
  RouteNames,
} from "../../constants/rootRoutes";
import useTypedSelector from "../../hooks/useTypedSelector";
import selectors from "../../store/selectors/selectors";
import App from "../../App";

const AppRoutes = () => {
  const { user, jwt } = useTypedSelector(selectors.auth);

  return (
    <App>
      {jwt ? (
        <Routes>
          {privateRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          ))}
          <Route path="*" element={<Navigate to={RouteNames.HOME} />} />
        </Routes>
      ) : (
        <Routes>
          {publicRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          ))}
          <Route path="*" element={<Navigate to={RouteNames.AUTH} />} />
        </Routes>
      )}
    </App>
  );
};

export default AppRoutes;
