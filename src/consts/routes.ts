import Home from "../components/Home/Home";
import Auth from "../components/Auth/Auth";
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
    element: Auth,
  },
  {
    path: ERoutesNames.REG,
    element: Registration,
  },
];
