import React, { useState } from "react";

import { addDrink } from "../../helper/apiCalls";
import { storeDrinks } from "../../helper/redux/slice/drinkSlice";
import { useDispatch } from "react-redux";

import classes from "./drinkForm.module.scss";
import { Button } from "reactstrap";
import CustomInputs from "../CustomInput";

export default function DrinkForm({ setMessage }) {
	const [drink, setDrink] = useState({
		name: "",
		description: "",
		price: "",
		type: "",
	});

	const dispatch = useDispatch();
	const storeDrink = async (e, drink) => {
		e.preventDefault();

		///add drink to appsync
		const newDrink = await addDrink(drink);

		setMessage(`${newDrink.name} has been added successfully`);

		// add drink to redux
		dispatch(storeDrinks(newDrink));
	};
	return (
		<div>
			<form className={classes.form_container}>
				<CustomInputs drink={drink} setDrink={setDrink} />

				<Button color="success" onClick={(e) => storeDrink(e, drink)}>
					Submit
				</Button>
			</form>
		</div>
	);
}
