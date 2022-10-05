


import { UserEmptyState } from "@/models";
import { createSlice } from "@reduxjs/toolkit";

export const userKey='user';
export const userSlice = createSlice({
  name: "user",
  initialState: UserEmptyState,
  reducers: {
    createUser: (state, action) => {
      return action.payload;
    },
    updateUser: (state, action) => {
      const result = { ...state, ...action.payload };
      return result;
    },
    resetUser: () => {
      return UserEmptyState;
    },
  },
});
export const { createUser, updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
