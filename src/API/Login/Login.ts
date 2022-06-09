import { ILogin } from "./types";
import instance from "../instance";

const login = (payload: ILogin) => {
  return instance.post("/auth/local/register", payload);
};

export default login;
