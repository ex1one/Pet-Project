import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Registration from "../components/Registration/Registration";

export interface IRoute {
  path: string;
  element: () => JSX.Element;
}

export enum ERoutesNames {
  HOME = "/",
  LOGIN = "/login",
  REG = "/reg",
}

export const routes: IRoute[] = [
  {
    path: ERoutesNames.HOME,
    element: Home,
  },
  {
    path: ERoutesNames.LOGIN,
    element: Login,
  },
  {
    path: ERoutesNames.REG,
    element: Registration,
  },
];
