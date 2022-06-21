import React, { useEffect } from "react";
import { Auth } from "aws-amplify";
import { addIfNoUserExists } from "../../helper/apiCalls";
import { useDispatch } from "react-redux";
import { storeCustomer } from "../../helper/redux/slice/userSlice";

const Profile = () => {
	const dispatch = useDispatch();

	const { username } = Auth.user;
	const { email, phone_number } = Auth.user.attributes;

	const checkIfUserExists = async (user) => {
		try {
			const userData = await addIfNoUserExists(user);
			console.log(userData);
			//store in toolkit
			dispatch(storeCustomer(userData));
		} catch (error) {
			console.log(error);
		}
	};
	// useEffect(() => {
	// 	checkIfUserExists(user);
	// }, [user]);

	return (
		username && (
			<div>
				<h2>{username}</h2>
				<p>{email}</p>
				<p>{phone_number}</p>
			</div>
		)
	);
};

export default React.memo(Profile);
