import { ILogin } from "./types";
import instance from "../instance";

const login = (payload: ILogin) => {
  return instance.post("/auth/local", payload);
};

export default login;
