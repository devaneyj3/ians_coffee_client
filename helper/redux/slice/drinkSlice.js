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
		updateDrinks: (state, action) => {
			const { id } = action.payload;
			const foundDrink = state.drinks.findIndex((drink) => drink.id === id);

			state.drinks[foundDrink] = action.payload;
		},
		initialLoad: (state, action) => {
			state.drinks = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { storeDrinks, deleteDrinks, initialLoad, updateDrinks } =
	drinkSlice.actions;

export default drinkSlice.reducer;
