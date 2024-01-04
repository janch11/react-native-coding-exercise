import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { updateRegisterState } from "../store";
import { RegisterStateType } from "../types";

export const useRegister = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.register);

  const setRegisterState = (data: Partial<RegisterStateType>) =>
    dispatch(updateRegisterState(data));

  return { setRegisterState, state };
};
