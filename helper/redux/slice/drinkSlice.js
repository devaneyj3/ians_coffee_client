import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	drinks: [],
};

export const drinkSlice = createSlice({
	name: "drinks",
	initialState,
	reducers: {
		storeDrinks: (state, action) => {
			state.drinks = [...state.drinks, action.payload];
		},
		deleteDrinks: (state, action) => {
			const id = action.payload;
			const filteredDrinks = state.drinks.filter((drink) => drink.id !== id);
			state.drinks = filteredDrinks;
		},
	},
});

// Action creators are generated for each case reducer function
export const { storeDrinks, deleteDrinks } = drinkSlice.actions;

export default drinkSlice.reducer;
