import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	cart: [],
	cartTotal: 0,
};

export const cartSlice = createSlice({
	name: "userCart",
	initialState,
	reducers: {
		addDrinkToCart: (state, action) => {
			let total = action.payload.drink.price * action.payload.quantity;

			total = Number(total.toFixed(2));

			(action.payload.quantity = ~~action.payload.quantity),
				(action.payload.total = total);
			console.log("redux adding to cart, ", action.payload);
			state.cart = [...state.cart, action.payload];

			state.cartTotal = state.cartTotal + total;
		},
		updateTotals: (state, action) => {
			//update the total of the cart
			state.cartTotal = action.payload;
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
