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
			const { drink, quantity, id } = action.payload;
			let total = drink.price * quantity;
			total = Number(total.toFixed(2));

			quantity = ~~quantity;

			// if the drink is already in the cart, increase the quantity
			const drinkInCart = state.cart.find((item) => item.id === id);
			if (drinkInCart) {
				drinkInCart.quantity += quantity;
				drinkInCart.productTotal = drinkInCart.price * drinkInCart.quantity;
			}
			// if the drink is not in the cart, add it
			else {
				state.cart.push({
					...drink,
					quantity,
					productTotal: total,
					id,
				});
			}
			state.cartTotal += drink.price * quantity;
		},
		updateTotals: (state, action) => {
			//update the total of the cart
			state.cartTotal = action.payload;
			const id = action.payload;
			const filteredDrinks = state.drinks.filter((drink) => drink.id !== id);
			state.drinks = filteredDrinks;
		},
		clearCart: (state, action) => {
			//clear the cart
			state.cart = [];
			state.cartTotal = 0;
		},
		initialLoad: (state, action) => {
			state.drinks = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { addDrinkToCart, clearCart, initialLoad, updateDrinks } =
	cartSlice.actions;

export default cartSlice.reducer;
