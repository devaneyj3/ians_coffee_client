import React from "react";

import Link from "next/link";

import classes from "./featured.module.scss";

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

export default function Featured({ drinks }) {
	return (
		<>
			<CardGroup>
				{drinks.map((drink) => {
					const { name, price, quantity, description } = drink.attributes;
					const { url } = drink.attributes.image.data.attributes;
					return (
						<Card>
							<CardImg alt={name} src={url} top width="100%" />
							<CardBody>
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
			</CardGroup>
		</>
	);
}
