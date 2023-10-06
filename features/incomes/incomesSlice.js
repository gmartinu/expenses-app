import { createSlice } from "@reduxjs/toolkit";

export const incomesSlice = createSlice({
  name: "incomes",
  initialState: [],
  reducers: {
    add_or_edit: (state, { payload }) => {
      if (payload.index !== null && payload.index !== undefined) {
        state[payload.index] = {
          ...payload,
          index: null,
        };
      } else {
        state.push(payload);
      }
    },
    remove: (state, { payload }) => {
      state.splice(payload, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { add_or_edit, remove } = incomesSlice.actions;

export default incomesSlice.reducer;
