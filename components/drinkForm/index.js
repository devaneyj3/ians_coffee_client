import React, { useState } from "react";

import { addDrink } from "../../helper/apiCalls";

export default function DrinkForm() {
	const [drink, setDrink] = useState({
		name: "",
		description: "",
		price: "",
		quantity: "",
		type: "",
	});
	const storeDrink = async (e, drink) => {
		e.preventDefault();

		///add drink to graphql
		const newDrink = await addDrink(drink);

		console.log(newDrink);
	};

	const onChange = (e) => {
		const { name, value } = e.target;
		setDrink({ ...drink, [name]: value });
	};
	return (
		<div>
			<form>
				<label htmlFor="name">Name</label>
				<input
					type="text"
					name="name"
					value={drink.name}
					onChange={(e) => onChange(e)}
				/>

				<label htmlFor="description">Description</label>
				<input
					type="text"
					name="description"
					value={drink.description}
					onChange={(e) => onChange(e)}
				/>

				<label htmlFor="quantity">Quantity</label>
				<input
					type="number"
					name="quantity"
					value={drink.quantity}
					onChange={(e) => onChange(e)}
				/>

				<label htmlFor="type">Type</label>
				<input
					type="text"
					name="type"
					value={drink.type}
					onChange={(e) => onChange(e)}
				/>

				<label htmlFor="price">Price</label>
				<input
					type="number"
					name="price"
					value={drink.price}
					onChange={(e) => onChange(e)}
				/>

				<button type="submit" onClick={(e) => storeDrink(e, drink)}>
					Submit
				</button>
			</form>
		</div>
	);
}
