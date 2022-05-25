import React, { useState } from "react";
import Form from "../../components/auth/form";
import { Alert } from "reactstrap";

export default function Login() {
	const [invalidMsg, setInvalidMsg] = useState("");
	return (
		<>
			{invalidMsg && <Alert color="danger">{invalidMsg}</Alert>}

			<Form setInvalidMsg={setInvalidMsg} role="admin" />
		</>
	);
}
