import React from "react";

export default function CustomInputs({ drink, setDrink }) {
	const onChange = (e) => {
		const { name, value } = e.target;
		setDrink({ ...drink, [name]: value });
	};
	return (
		<>
			<input
				type="text"
				name="name"
				placeholder="Name"
				value={drink.name}
				onChange={(e) => onChange(e)}
			/>
			<input
				type="text"
				name="description"
				placeholder="Description"
				value={drink.description}
				onChange={(e) => onChange(e)}
			/>
			<input
				type="text"
				name="type"
				placeholder="Type"
				value={drink.type}
				onChange={(e) => onChange(e)}
			/>
			<input
				type="number"
				placeholder="Price"
				name="price"
				value={drink.price}
				onChange={(e) => onChange(e)}
			/>
		</>
	);
}
