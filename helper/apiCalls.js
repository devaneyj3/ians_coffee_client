import { API, graphqlOperation } from "aws-amplify";
import {
	createDrink,
	deleteDrink,
	updateDrink,
	createUser,
} from "../src/graphql/mutations";

import { listDrinks, listAdmins, listUsers } from "../src/graphql/queries";

export async function addDrink(drinkData) {
	try {
		const drinks = await API.graphql(
			graphqlOperation(createDrink, { input: drinkData })
		);
		const newDrink = drinks.data.createDrink;
		return newDrink;
	} catch (err) {
		console.log("error creating drinks");
	}
}
export async function addUser(userData) {
	try {
		const { name, nickname } = userData;
		const user = await API.graphql(
			graphqlOperation(createUser, {
				input: {
					name: name,
					username: nickname,
				},
			})
		);
		const newUser = user.data.createUser;
		return newUser;
	} catch (err) {
		console.log("error creating user", err.errors[0].message);
	}
}

export async function addIfNoUserExists(user) {
	try {
		const userData = await API.graphql(
			graphqlOperation(listUsers, {
				filter: {
					username: { eq: user.nickname },
				},
			})
		);
		const person = userData.data.listUsers.items[0];
		if (person) {
			return { person, value: -1 };
		} else {
			const newData = await addUser(user);
			return newData;
		}
	} catch (err) {
		console.log(err);
	}
}
export async function editDrinks(drinkData) {
	try {
		const drinks = await API.graphql(
			graphqlOperation(updateDrink, { input: drinkData })
		);
		const updatedDrink = drinks.data.updateDrink;
		return updatedDrink;
		// return newDrink;
	} catch (err) {
		console.log("error fetching drinks");
	}
}
export async function getDrinks() {
	try {
		const drinkData = await API.graphql(graphqlOperation(listDrinks));
		const drinks = drinkData.data.listDrinks.items;
		return drinks;
	} catch (err) {
		console.log("error fetching drinks");
	}
}
export async function deleteCoffee(drinkId) {
	try {
		const drinkData = await API.graphql(
			graphqlOperation(deleteDrink, { input: { id: drinkId } })
		);
		const drink = drinkData.data.deleteDrink;
		return drink;
	} catch (err) {
		console.log("error deleting drinks", err);
	}
}
export async function masterLogin(username, code) {
	try {
		const adminData = await API.graphql(
			graphqlOperation(listAdmins, {
				filter: {
					code: { eq: code },
					username: { eq: username },
				},
			})
		);
		return adminData.data.listAdmins.items[0];
	} catch (err) {
		return err;
	}
}
