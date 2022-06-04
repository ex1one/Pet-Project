import { TRootState } from "../store";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const useTypedSelector: TypedUseSelectorHook<TRootState> = useSelector;

export default useTypedSelector;
