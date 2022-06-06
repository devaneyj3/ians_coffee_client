import React, { useState } from "react";

import { addDrink } from "../../helper/apiCalls";
import { storeDrinks } from "../../helper/redux/slice/drinkSlice";

import { useRouter } from "next/router";

import { useDispatch } from "react-redux";

import classes from "./drinkForm.module.scss";
import { Button } from "reactstrap";

export default function DrinkForm({ setMessage }) {
	const [drink, setDrink] = useState({
		name: "",
		description: "",
		price: "",
		type: "",
	});

	const router = useRouter();

	const dispatch = useDispatch();
	const storeDrink = async (e, drink) => {
		e.preventDefault();

		///add drink to appsync
		const newDrink = await addDrink(drink);

		setMessage(`${newDrink.name} has been added successfully`);

		// add drink to redux
		dispatch(storeDrinks(newDrink));
	};

	const onChange = (e) => {
		const { name, value } = e.target;
		setDrink({ ...drink, [name]: value });
	};
	return (
		<div>
			<form className={classes.form_container}>
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

				<Button color="success" onClick={(e) => storeDrink(e, drink)}>
					Submit
				</Button>
			</form>
		</div>
	);
}
