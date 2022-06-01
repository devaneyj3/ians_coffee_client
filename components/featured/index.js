import React from "react";

import Link from "next/link";

import classes from "./featured.module.scss";

import {
	CardImg,
	Card,
	CardBody,
	CardTitle,
	CardText,
	CardSubtitle,
	Button,
} from "reactstrap";

import { MdDeleteForever } from "react-icons/md";
import { deleteCoffee } from "../../helper/apiCalls";

import { useDispatch, useSelector } from "react-redux";
import { deleteDrinks } from "../../helper/redux/slice/drinkSlice";

export default function Featured() {
	const dispatch = useDispatch();

	const { drinks } = useSelector((state) => state.drinkReducer);

	const deleteInfo = async (drinkId) => {
		//delete from appSync
		const { name, id } = await deleteCoffee(drinkId);
		console.log(name, " is deleted");
		//delete from redux
		dispatch(deleteDrinks(id));
	};
	return (
		<div className={classes.featured}>
			<p>There are {drinks.length} drinks.</p>
			{drinks.map((drink) => {
				const { id, name, price, quantity, description } = drink;
				// const { image } = drink
				return (
					<Card>
						{/* <CardImg alt={name} src={url} top width="100%" /> */}
						<CardBody>
							<MdDeleteForever onClick={() => deleteInfo(id)} />
							<CardTitle tag="h5">{name}</CardTitle>
							<CardSubtitle className="mb-2 text-muted" tag="h6">
								{quantity} items left
							</CardSubtitle>
							<CardText>{description}</CardText>
							<p>${price}</p>
							<Button>More Info</Button>
						</CardBody>
					</Card>
				);
			})}
		</div>
	);
}
