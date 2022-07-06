import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import CartItem from "../../components/CartItem/CartItem";
import PageLayout from "../../components/layout/page_layout";

import classes from "./cart.module.scss";

export default function Cart() {
	const [productTotal, setProductTotal] = useState(0);
	const cart = useSelector((state) => state.cartReducer);

	console.log("products in cart ", cart);

	const cartTotal = cart.cartTotal.toFixed(2);

	return (
		<>
			<h1>My Cart</h1>
			<hr />
			{cart.cart.map((product) => {
				return (
					<CartItem
						key={product.id}
						product={product}
						setProductTotal={setProductTotal}
					/>
				);
			})}
			<hr />
			<section className={classes.summary}>
				<p>{cart.cart.length} Items</p>

				<p>${cartTotal}</p>
			</section>
			<Button color="primary">Order</Button>
		</>
	);
}
