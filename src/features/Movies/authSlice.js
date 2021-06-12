import { createSlice } from '@reduxjs/toolkit'

const initialState = {
// user: []
name: '',
email: "",
photo: ""
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    activeUser: (state, {payload}) => {
      state.name = payload.name;
      state.email = payload.email;
      state.photo = payload.photo;
    }
  },
    logOut: (state) => {
      state.name = null;
      state.email = null;
      state.photo = null;
    }
});

export const {
  activeUser, logOut
} = authSlice.actions

export const selectUserName = state => state.auth.name
export const selectUserEmail = state => state.auth.email
export const selectUserPhoto = state => state.auth.photo


export default authSlice.reducer