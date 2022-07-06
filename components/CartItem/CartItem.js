import React, { useState } from "react";
import Quantity from "../Quantity";

import classes from "./CartItem.module.scss";

export default function CartItem({ product, setProductTotal }) {
	const [quantityOp, setQuantity] = useState(product.quantity);

	const { name, price, quantity } = product;

	let quantityNum = ~~quantity;
	quantityNum = quantityNum.toFixed(2);

	let newProductTotal = price * quantityOp;
	newProductTotal = newProductTotal.toFixed(2);

	setProductTotal(newProductTotal);
	return (
		<div>
			<div className={classes.product}>
				<p>{name}</p>
				<p>{price}</p>
				<Quantity quantity={quantityOp} setQuantity={setQuantity} />
				<p>${newProductTotal}</p>
			</div>
		</div>
	);
}
