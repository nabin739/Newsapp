import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  current: localStorage.getItem("lang") || "en",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<string>) {
      state.current = action.payload;
      localStorage.setItem("lang", state.current);
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
