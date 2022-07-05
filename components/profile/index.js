import React, { useEffect, useState, useCallback } from "react";
import { Auth } from "aws-amplify";
import { addIfNoUserExists } from "../../helper/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { storeCustomer } from "../../helper/redux/slice/userSlice";
import classes from "./profile.module.scss";

const Profile = () => {
	const dispatch = useDispatch();

	const { currentCustomer } = useSelector((state) => state.userReducer);

	console.log(currentCustomer);

	const getCurrentUser = async () => {
		try {
			const userData = await Auth.currentAuthenticatedUser();
			console.log("calling useEffect, Profile.js");
			const { username } = userData;
			const { email, phone_number } = userData.attributes;
			const user = { username, email, phone: phone_number };
			//store in toolkit
			const person = await addIfNoUserExists(user);
			//store in toolkit
			dispatch(storeCustomer(person));
		} catch (error) {
			console.log(error);
		}
	};

	const user = useCallback(() => {
		getCurrentUser();
	}, []);

	useEffect(() => {
		user();
	}, []);

	return (
		<div className={classes.profile_container}>
			<h1>Profile</h1>
			{currentCustomer && (
				<>
					<p>{currentCustomer.username}</p>
					<p>{currentCustomer.email}</p>
					<p>{currentCustomer.phone}</p>
				</>
			)}
		</div>
	);
};

export default React.memo(Profile);
