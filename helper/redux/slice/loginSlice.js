import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

const initialState = {
	isLoggedIn: false,
	username: "",
};

export const adminSlice = createSlice({
	name: "adminAuth",
	initialState,
	reducers: {
		adminLogin: (state, action) => {
			state.isLoggedIn = true;
			state.username = action.payload.username;
		},
		adminLogout: (state) => {
			storage.removeItem("persist:root");
			state.isLoggedIn = false;
			state.username = "";
		},
	},
});

// Action creators are generated for each case reducer function
export const { adminLogin, adminLogout } = adminSlice.actions;

export default adminSlice.reducer;
