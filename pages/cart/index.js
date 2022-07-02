import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import PageLayout from "../../components/layout/page_layout";

export default function Cart() {
	const { cart } = useSelector((state) => state.cartReducer);

	console.log("products in cart ", cart);

	return (
		<PageLayout>
			<p>There are {cart.length} drinks in you cart.</p>
			{cart.map((product) => {
				return (
					<div>
						<p>{product.name}</p>
						<p>{product.price}</p>
					</div>
				);
			})}
			<p>Total: {cart.reduce((acc, curr) => acc + curr.price, 0)}</p>
			<Button color="primary">Order</Button>
		</PageLayout>
	);
}
