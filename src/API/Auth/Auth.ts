import { IAuth } from "./types";
import instance from "../instance";

const authorization = (payload: IAuth) => {
  instance.post("/auth/local/register", payload).then((response) => {
    // dispatch(
    //   auth({
    //     displayName: data.displayName,
    //     email: data.email,
    //     id: data.id,
    //     photoUrl: "",
    //     regDate: new Date().toString(),
    //   }),
    // );
  });
};

export default authorization;
