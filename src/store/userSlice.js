import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: { firstName: "", lastName: "", email: "", message: "" },
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    addUser(state, action) {
      return { ...state, users: [...state.users, action.payload] };
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
