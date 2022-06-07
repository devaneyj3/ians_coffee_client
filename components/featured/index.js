import React, { useState } from "react";
import classes from "./featured.module.scss";

import {
	CardImg,
	Card,
	CardBody,
	CardTitle,
	CardText,
	Button,
} from "reactstrap";

import { AiFillDelete } from "react-icons/ai";
import { useSelector } from "react-redux";

import CustomModal from "../CustomModal";

export default function Featured() {
	const [selectedDrink, setSelectedDrink] = useState("");

	const toggle = () => {
		setModal(!modal);
	};

	const [modal, setModal] = useState(false);

	const deleteDrink = (drink) => {
		setSelectedDrink(drink);
		setModal(!modal);
	};

	const drinks = useSelector((state) => state.drinkReducer);

	console.log(drinks, "featured.js");

	return (
		<>
			{drinks.length > 0 && <p>There are {drinks.length} drinks.</p>}
			<div className={classes.featured}>
				{drinks.length > 0 &&
					drinks.map((drink) => {
						const { id, name, price, description } = drink;
						// const { image } = drink
						return (
							<Card className={classes.card}>
								{/* <CardImg alt={name} src={url} top width="100%" /> */}
								<CardBody>
									<section className={classes.icon}>
										<AiFillDelete onClick={() => deleteDrink(drink)} />
									</section>
									<CardTitle tag="h5">{name}</CardTitle>
									<CardText>{description}</CardText>
									<p>${price}</p>
									<Button>More Info</Button>
								</CardBody>
							</Card>
						);
					})}
			</div>
			{selectedDrink && (
				<CustomModal
					selectedDrink={selectedDrink}
					modal={modal}
					toggle={toggle}
				/>
			)}
		</>
	);
}
