import Home from "../components/Home/Home";
import Registration from "../components/Registration/Registration";
import Login from "../components/Login/Login";
import Profile from "../components/Profile/Profile";

interface IRoute {
  path: string;
  element: () => JSX.Element;
}

export enum RouteNames {
  HOME = "/",
  LOGIN = "/login",
  AUTH = "/auth",
  PROFILE = "/profile/:id",
}

export const privateRoutes: IRoute[] = [
  {
    path: RouteNames.HOME,
    element: Home,
  },
  {
    path: RouteNames.PROFILE,
    element: Profile,
  },
];

export const publicRoutes: IRoute[] = [
  {
    path: RouteNames.HOME,
    element: Home,
  },
  {
    path: RouteNames.AUTH,
    element: Registration,
  },
  {
    path: RouteNames.LOGIN,
    element: Login,
  },
  {
    path: RouteNames.PROFILE,
    element: Profile,
  },
];
