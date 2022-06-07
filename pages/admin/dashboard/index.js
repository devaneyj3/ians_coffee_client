import React, { useState } from "react";
import DrinkForm from "../../../components/drinkForm";

import { useSelector } from "react-redux";
import { Alert } from "reactstrap";
import { useRouter } from "next/router";
import Inventory from "../../../components/inventory";
import { GrAdd } from "react-icons/gr";

import classes from "./dashboard.module.scss";

import { Collapse, Button } from "reactstrap";

export default function Dashboard() {
	const admin = useSelector((state) => state.adminReducer);

	const drinks = useSelector((state) => state.drinkReducer);

	console.log(drinks.drinks, "drinks dashboard.js");

	const [collapse, setCollapse] = useState(false);

	const [message, setMessage] = useState("");

	const router = useRouter();

	if (admin.isLoggedIn == false) {
		router.push("/");
	}

	if (message) {
		setTimeout(() => {
			setMessage("");
		}, 2000);
	}
	return (
		<div className={classes.dashboard}>
			{message && <Alert color="success">{message}</Alert>}
			{drinks.drinks.length > 0 ? (
				<Inventory drinks={drinks.drinks} />
			) : (
				<p> You have no drinks</p>
			)}
			<Button
				color="primary"
				onClick={() => setCollapse(!collapse)}
				style={{ marginBottom: "1rem" }}>
				Add Drink <GrAdd />
			</Button>
			<Collapse isOpen={collapse}>
				<DrinkForm setMessage={setMessage} />
			</Collapse>
		</div>
	);
}
