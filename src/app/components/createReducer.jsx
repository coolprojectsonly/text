import { createSlice } from "@reduxjs/toolkit";
import { getspeech } from "./action";

const initialState = {
  status: "idle",
  error: null,
  data: [],
};

const createReducer = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getspeech.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getspeech.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })

      .addCase(getspeech.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export default createReducer;
