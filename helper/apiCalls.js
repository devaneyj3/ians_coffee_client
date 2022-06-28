import { API, graphqlOperation } from "aws-amplify";
import {
	createDrink,
	deleteDrink,
	updateDrink,
	createUser,
	createCart,
} from "../src/graphql/mutations";

import { listDrinks, listAdmins, listUsers } from "../src/graphql/queries";

export async function addDrink(drinkData) {
	console.log(drinkData);
	try {
		const drinks = await API.graphql(
			graphqlOperation(createDrink, { input: drinkData })
		);
		console.log(drinks);
		const newDrink = drinks.data.createDrink;
		return newDrink;
	} catch (err) {
		console.log("error creating drinks");
	}
}
export async function addCart(drinkData, userID) {
	try {
		console.log(drinkData, userID);
		const cart = await API.graphql(
			graphqlOperation(createCart, {
				input: { userID: userID, drinkID: drinkData.id },
			})
		);
		console.log(cart);
		const newCart = cart.data.createCart;
		return newCart;
	} catch (err) {
		console.log(err.errors[0]);
	}
}
export async function addUser(userData) {
	console.log("adding,", userData);
	try {
		const { username, email, phone } = userData;
		const user = await API.graphql(
			graphqlOperation(createUser, {
				input: {
					username,
					email,
					phone,
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
					username: { eq: user.username },
				},
			})
		);
		const person = userData.data.listUsers.items[0];
		console.log("user already created ", person);
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
