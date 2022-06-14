import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	customers: [],
	currentCustomer: null,
};

export const customerSlice = createSlice({
	name: "customers",
	initialState,
	reducers: {
		storeCustomer: (state, action) => {
			console.log("current customer: " + action.payload.person);
			if (action.payload.value) {
				state.currentCustomer = action.payload.person;
			} else {
				console.log("addding customer userSlice");
				state.customers = [...state.customers, action.payload];
				state.currentCustomer = action.payload;
			}
		},
		loadCustomers: (state, action) => {
			state.customers = action.payload;
		},
		customerNotInSession: (state, action) => {
			state.customers = state.customers;
			state.currentCustomer = null;
		},
	},
});

// Action creators are generated for each case reducer function
export const { storeCustomer, customerNotInSession, loadCustomers } =
	customerSlice.actions;

export default customerSlice.reducer;
