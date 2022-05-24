import { API, graphqlOperation } from "aws-amplify";

import { listDrinks } from "../src/graphql/queries";
import { listAdmins } from "../src/graphql/queries";

export async function getDrinks() {
	try {
		const drinkData = await API.graphql(graphqlOperation(listDrinks));
		const drinks = drinkData.data.listDrinks.items;
		return drinks;
	} catch (err) {
		console.log("error fetching drinks");
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