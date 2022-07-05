import { Auth } from "aws-amplify";

export async function signUp(person) {
	let { email, password, username, phone_number } = person;
	phone_number = `+${phone_number.replace(/-/g, "")}`;

	try {
		const { user } = await Auth.signUp({
			username,
			password,
			attributes: {
				email, // optional
				phone_number, // optional - E.164 number convention
				// other custom attributes
			},
		});
		return user;
	} catch (error) {
		console.log("error signing up, cognito.js line 19:", error);
	}
}

export async function confirmSignUp(username, code) {
	try {
		const message = await Auth.confirmSignUp(username, code);
		return message;
	} catch (error) {
		return error;
	}
}

export async function signIn(username, password) {
	try {
		const user = await Auth.signIn(username, password);
		return user;
	} catch (error) {
		return error.message;
	}
}
