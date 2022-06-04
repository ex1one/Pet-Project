import { TRootState } from "../index";

const selectors = {
  auth: (state: TRootState) => state.auth,
};
export default selectors;
