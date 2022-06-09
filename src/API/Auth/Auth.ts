import { IAuth } from "./types";
import instance from "../instance";

const authorization = (payload: IAuth) => {
  return instance.post("/auth/local/register", payload);
};

export default authorization;
