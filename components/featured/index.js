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

import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { addDrinkToCart } from "../../helper/redux/slice/cartSlice";

export default function Featured() {
	const drinks = useSelector((state) => state.drinkReducer);

	const admin = useSelector((state) => state.adminReducer);

	const user = useSelector((state) => state.userReducer);

	const cart = useSelector((state) => state.cartReducer);

	console.log("products in cart ", cart);

	const dispatch = useDispatch();

	const addToCart = async (drink) => {
		dispatch(addDrinkToCart(drink));
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
								<p>${price}</p>
								{!admin.isLoggedIn && user.currentCustomer === null ? (
									<Button>
										<Link href="/api/auth/login">Add to Cart</Link>
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
