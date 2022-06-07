import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

import { useDispatch } from "react-redux";
import { deleteDrinks } from "../../helper/redux/slice/drinkSlice";

import { deleteCoffee } from "../../helper/apiCalls";
export default function CustomModal({ selectedDrink, modal, toggle }) {
	const dispatch = useDispatch();

	const deleteInfo = async (drinkId) => {
		//delete from appSync
		const { id } = await deleteCoffee(drinkId);

		//delete from redux
		dispatch(deleteDrinks(id));

		//close modal
		toggle();
	};
	return (
		<div>
			<Modal isOpen={modal} toggle={toggle}>
				<ModalHeader toggle={toggle}>Delete</ModalHeader>
				<ModalBody>
					Are you sure you want to delete {selectedDrink.name}
				</ModalBody>
				<ModalFooter>
					<Button color="primary" onClick={() => deleteInfo(selectedDrink.id)}>
						Yes
					</Button>
					<Button color="secondary" onClick={toggle}>
						No
					</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
}
