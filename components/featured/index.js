import React from "react";
import classes from "./featured.module.scss";

import {
	CardImg,
	Card,
	CardBody,
	CardTitle,
	CardText,
	Button,
} from "reactstrap";

import { useSelector } from "react-redux";

export default function Featured() {
	const drinks = useSelector((state) => state.drinkReducer);
	console.log(drinks.drinks, "featured.js");

	return (
		<>
			<p>There are {drinks.drinks.length} drinks.</p>
			<div className={classes.featured}>
				{drinks.drinks.map((drink) => {
					const { id, name, price, description } = drink;
					// const { image } = drink
					return (
						<Card className={classes.card}>
							{/* <CardImg alt={name} src={url} top width="100%" /> */}
							<CardBody>
								<section className={classes.icon}></section>
								<CardTitle tag="h5">{name}</CardTitle>
								<CardText>{description}</CardText>
								<p>${price}</p>
								<Button>More Info</Button>
							</CardBody>
						</Card>
					);
				})}
			</div>
		</>
	);
}
