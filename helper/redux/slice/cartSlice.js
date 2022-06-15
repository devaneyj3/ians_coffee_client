import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	cart: [],
};

export const cartSlice = createSlice({
	name: "userCart",
	initialState,
	reducers: {
		addDrinkToCart: (state, action) => {
			console.log(action.payload);
			state.cart = [...state.cart, action.payload];
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
export const { addDrinkToCart, deleteDrinks, initialLoad, updateDrinks } =
	cartSlice.actions;

export default cartSlice.reducer;
