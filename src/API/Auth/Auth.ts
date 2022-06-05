import { IAuth } from "./types";
import instance from "../instance";
import { useDispatch } from "react-redux";
import { auth } from "../../store/reducers/auth";

const authorization = (payload: IAuth) => {
  instance.post("/auth/reg", payload).then(({ data }) => {
    const dispatch = useDispatch();
    dispatch(
      auth({
        displayName: data.displayName,
        email: data.email,
        id: data.id,
        photoUrl: "",
        regDate: new Date().toString(),
      }),
    );
  });
};

export default authorization;
