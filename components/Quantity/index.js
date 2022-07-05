import React from "react";

export default function Quantity({ setQuantity, quantity }) {
	return (
		<input
			type="number"
			min={1}
			max={99}
			value={quantity}
			onChange={(e) => setQuantity(e.target.value)}
		/>
	);
}
