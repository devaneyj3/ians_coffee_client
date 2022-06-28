import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import { addIfNoUserExists } from "../../helper/apiCalls";
import { useDispatch } from "react-redux";
import { storeCustomer } from "../../helper/redux/slice/userSlice";

const Profile = () => {
	const dispatch = useDispatch();
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [phone_number, setPhoneNumber] = useState("");
	console.log(username, email, phone_number);
	const getCurrentUser = async () => {
		try {
			const userData = await Auth.currentAuthenticatedUser();
			console.log(userData);
			const { username } = userData;
			const { email, phone_number } = userData.attributes;
			setUsername(username);
			setEmail(email);
			setPhoneNumber(phone_number);
			const user = { username, email, phone: phone_number };
			//store in toolkit
			const person = await addIfNoUserExists(user);
			console.log("persson is", person);
			//store in toolkit
			dispatch(storeCustomer(person));
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		getCurrentUser();
	}, []);

	return (
		<div>
			<h1>Profile</h1>
			<p>{username}</p>
			<p>{email}</p>
			<p>{phone_number}</p>
		</div>
	);
};

export default React.memo(Profile);
