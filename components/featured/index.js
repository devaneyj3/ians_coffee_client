import React from "react";

import { DRINKS } from "../../public/Dummy_Products";

import {
	CardGroup,
	CardImg,
	Card,
	CardBody,
	CardTitle,
	CardText,
	CardSubtitle,
	Button,
} from "reactstrap";

export default function Featured() {
	return (
		<CardGroup>
			{DRINKS.map((drink) => {
				return (
					<Card>
						<CardImg alt={drink.name} src={drink.image} top width="100%" />
						<CardBody>
							<CardTitle tag="h5">{drink.name}</CardTitle>
							<CardSubtitle className="mb-2 text-muted" tag="h6">
								{drink.quantity} items left
							</CardSubtitle>

							<CardText>{drink.description}</CardText>
							<p>${drink.price}</p>
							<Button>Add To Cart</Button>
						</CardBody>
					</Card>
				);
			})}
		</CardGroup>
	);
}
