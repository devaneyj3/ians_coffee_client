import React, { useState } from "react";
import { Table } from "reactstrap";

import { AiFillDelete } from "react-icons/ai";
import CustomModal from "../CustomModal";

export default function Inventory({ drinks }) {
	const [selectedDrink, setSelectedDrink] = useState("");

	const toggle = () => {
		setModal(!modal);
	};

	const [modal, setModal] = useState(false);

	const deleteDrink = (drink) => {
		setSelectedDrink(drink);
		setModal(!modal);
	};
	return (
		<>
			<Table striped>
				<thead>
					<tr>
						<th>#</th>
						<th>Name</th>
						<th>Description</th>
						<th>Type</th>
						<th>Price</th>
					</tr>
				</thead>
				{drinks.map((drink, index) => {
					const { id, name, description, type, price } = drink;
					return (
						<>
							<tbody>
								<tr>
									<th scope="row">{index + 1}</th>
									<td>{name}</td>
									<td>{description}</td>
									<td>{type}</td>
									<td>{price}</td>
									<td>
										<AiFillDelete onClick={() => deleteDrink(drink)} />
									</td>
								</tr>
							</tbody>
						</>
					);
				})}
			</Table>
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
