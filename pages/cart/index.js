import React from "react";

import { useDispatch, useSelector } from "react-redux";

export default function Cart() {
	const cart = useSelector((state) => state.cartReducer);

	console.log("products in cart ", cart);

	return <div>Cart</div>;
}
