import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	drinks: [],
};

export const drinkSlice = createSlice({
	name: "drinks",
	initialState,
	reducers: {
		storeDrinks: (state, action) => {
			state.drinks = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { storeDrinks } = drinkSlice.actions;

export default drinkSlice.reducer;
