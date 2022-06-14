import React, { useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import { addIfNoUserExists } from "../../helper/apiCalls";
import { useDispatch } from "react-redux";
import { storeCustomer } from "../../helper/redux/slice/userSlice";

const Profile = () => {
	const { user, error, isLoading } = useUser();
	const dispatch = useDispatch();

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
	useEffect(() => {
		checkIfUserExists(user);
	}, [user]);

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>{error.message}</div>;

	return (
		user && (
			<div>
				<img src={user.picture} alt={user.name} />
				<h2>{user.name}</h2>
				<p>{user.email}</p>
			</div>
		)
	);
};

export default React.memo(Profile);
