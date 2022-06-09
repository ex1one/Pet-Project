import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import useTypedSelector from "../../hooks/useTypedSelector";
import selectors from "../../store/selectors/selectors";
import {
  privateRoutes,
  publicRoutes,
  RouteNames,
} from "../../constants/rootRoutes";

const AppRoutes = () => {
  const { user } = useTypedSelector(selectors.auth);
  return !user ? (
    <Routes>
      {publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.element />} />
      ))}
      <Route path="*" element={<Navigate to={RouteNames.HOME} />} />
    </Routes>
  ) : (
    <Routes>
      {privateRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.element />} />
      ))}
      <Route path="*" element={<Navigate to={RouteNames.HOME} />} />
    </Routes>
  );
};

export default AppRoutes;
