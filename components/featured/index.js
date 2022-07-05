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

import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { addDrinkToCart } from "../../helper/redux/slice/cartSlice";
import Quantity from "../Quantity";

export default function Featured() {
	const [quantity, setQuantity] = useState(1);
	const drinks = useSelector((state) => state.drinkReducer);

	const admin = useSelector((state) => state.adminReducer);

	const user = useSelector((state) => state.userReducer);

	const dispatch = useDispatch();

	const addToCart = async (drink) => {
		dispatch(addDrinkToCart({ drink, quantity }));
	};
	return (
		<>
			<p>There are {drinks.drinks.length} drinks.</p>
			<div className={classes.featured}>
				{drinks.drinks.map((drink) => {
					const { id, name, price, description } = drink;
					const { image } = drink;
					return (
						<Card className={classes.card}>
							{/* <CardImg alt={name} src={url} top width="100%" /> */}
							<CardBody>
								<section className={classes.icon}></section>
								<CardTitle tag="h5">{name}</CardTitle>
								<CardText>{description}</CardText>
								<Quantity quantity={quantity} setQuantity={setQuantity} />
								<p>${price}</p>
								{!admin.isLoggedIn && user.currentCustomer === null ? (
									<Button>
										<Link href="/sign_in">Add to Cart</Link>
									</Button>
								) : (
									<Button onClick={() => addToCart(drink)}>Add to Cart</Button>
								)}
							</CardBody>
						</Card>
					);
				})}
			</div>
		</>
	);
}
