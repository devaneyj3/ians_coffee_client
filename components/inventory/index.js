import React, { useState } from "react";
import { Table } from "reactstrap";

import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import CustomModal from "../CustomModal";
import CustomInputs from "../CustomInput";
import { editDrinks } from "../../helper/apiCalls";

import { useDispatch } from "react-redux";
import { updateDrinks } from "../../helper/redux/slice/drinkSlice";

export default function Inventory({ drinks }) {
	const [selectedDrink, setSelectedDrink] = useState("");
	const [editingId, setIsEditingId] = useState("");
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState("");
	const [type, setType] = useState("");

	const toggle = () => {
		setModal(!modal);
	};

	const [modal, setModal] = useState(false);

	const dispatch = useDispatch();

	const triggerModal = (drink) => {
		setSelectedDrink(drink);
		setModal(!modal);
	};

	const editedDrink = async (id) => {
		const editedDrink = { id, name, description, price, type };

		console.log(editedDrink);

		if (name === "" || description === "" || price === "" || type === "") {
			setIsEditingId(null);
		}
		const updatedDrink = await editDrinks(editedDrink);

		dispatch(updateDrinks(updatedDrink));
		setIsEditingId(null);
	};
	console.log(drinks, "inventory");
	return (
		<>
			<Table striped>
				<thead>
					<tr>
						<th>Name</th>
						<th>Description</th>
						<th>Type</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{drinks.map((drink) => {
						return (
							<>
								{editingId === drink.id ? (
									<tr>
										<td>
											<input
												type="text"
												name="name"
												placeholder="Name"
												value={name}
												onChange={(e) => setName(e.target.value)}
											/>
										</td>
										<td>
											<input
												type="text"
												name="description"
												placeholder="Description"
												value={description}
												onChange={(e) => setDescription(e.target.value)}
											/>
										</td>
										<td>
											<input
												type="text"
												name="type"
												placeholder="Type"
												value={type}
												onChange={(e) => setType(e.target.value)}
											/>
										</td>
										<td>
											<input
												type="number"
												min={0}
												max={100}
												name="price"
												placeholder="Price"
												value={price}
												onChange={(e) => setPrice(e.target.value)}
											/>
										</td>
										<td>
											<AiFillEdit onClick={() => editedDrink(drink.id)} />
										</td>
									</tr>
								) : (
									<tr>
										<td>{drink.name}</td>
										<td>{drink.description}</td>
										<td>{drink.type}</td>
										<td>{drink.price}</td>
										<td>
											<AiFillDelete onClick={() => triggerModal(drink)} />
										</td>
										<td>
											<AiFillEdit onClick={() => setIsEditingId(drink.id)} />
										</td>
									</tr>
								)}
							</>
						);
					})}
				</tbody>
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
