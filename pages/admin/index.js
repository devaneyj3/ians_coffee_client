import React, { useState } from "react";
import Form from "../../components/auth/form";
import { useSelector } from "react-redux";
import { Alert } from "reactstrap";

export default function Login() {
	const admin = useSelector((state) => state.admin);

	const [invalidMsg, setInvalidMsg] = useState("");
	return (
		<>
			{invalidMsg && <Alert color="danger">{invalidMsg}</Alert>}
			{admin.isLoggedIn == !false && (
				<Alert color="success">Hello, {admin.username}</Alert>
			)}
			<Form setInvalidMsg={setInvalidMsg} role="admin" />
		</>
	);
}
