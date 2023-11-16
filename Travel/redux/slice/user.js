import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  userLoading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      // console.log("got user", user);
      state.user = action.payload;
    },
    setUserLoading: (state, action) => {
      state.userLoading = action.payload;
    },
  },
});

export const { setUser, setUserLoading } = userSlice.actions;

export default userSlice.reducer;
