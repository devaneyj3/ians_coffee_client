import React, { useState } from "react";
import { Button } from "reactstrap";
import Form from "../../components/auth/form";
import PageLayout from "../../components/layout/page_layout";

export default function SignIn() {
	const [formName, setFormName] = useState("signup");
	const [client, setClient] = useState("");
	let heading = "";
	if (formName === "signin") {
		heading = "Please sign in with your credentials.";
	} else {
		heading = "Please sign up.";
	}
	if (client) {
		heading = "Please confirm your username and the code sent to your email.";
	}
	return (
		<PageLayout>
			<p>{heading}</p>
			<Form
				role="client"
				formName={formName}
				client={client}
				setClient={setClient}
			/>
			{formName === "signup" ? (
				<Button onClick={() => setFormName("signin")}>Sign in</Button>
			) : (
				<Button onClick={() => setFormName("signup")}>Sign up</Button>
			)}
		</PageLayout>
	);
}
