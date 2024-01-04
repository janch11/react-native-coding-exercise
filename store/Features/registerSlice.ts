import { createSlice } from "@reduxjs/toolkit";
import { RegisterStateType } from "../../types";

const initialState: RegisterStateType = {
  dob: "",
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
  language: "",
  guardianFirstName: "",
  guardianLastName: "",
};

export const registerSlice = createSlice({
  name: "Register",
  initialState,
  reducers: {
    updateRegisterState: (
      state,
      action: { payload: Partial<RegisterStateType> }
    ) => ({ ...state, ...action.payload }),
  },
});

export const { updateRegisterState } = registerSlice.actions;
export default registerSlice.reducer;
