import React, { useState } from "react";
import Quantity from "../Quantity";

import classes from "./CartItem.module.scss";

export default function CartItem({ product, setProductTotal }) {
	const [quantityOp, setQuantity] = useState(product.quantity);

	const { drink, quantity, total } = product;
	console.log(drink, quantity, total);

	let quantityNum = ~~quantity;
	quantityNum = quantityNum.toFixed(2);

	let newProductTotal = drink.price * quantityOp;
	newProductTotal = newProductTotal.toFixed(2);

	setProductTotal(newProductTotal);
	return (
		<div>
			<div className={classes.product}>
				<p>{drink.name}</p>
				<p>{drink.price}</p>
				<Quantity quantity={quantityOp} setQuantity={setQuantity} />
				<p>${newProductTotal}</p>
			</div>
		</div>
	);
}
