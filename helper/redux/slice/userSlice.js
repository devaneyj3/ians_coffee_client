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
			if (action.payload.value) {
				state.currentCustomer = action.payload.person;
			} else {
				console.log("addding customer userSlice");
				state.customers = [...state.customers, action.payload];
			}
		},
		loadCustomers: (state, action) => {
			state.customers = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { storeCustomer, loadCustomers } = customerSlice.actions;

export default customerSlice.reducer;
