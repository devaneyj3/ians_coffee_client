import React, { useState } from "react";
import Form from "../../components/auth/form";
import PageLayout from "../../components/layout/page_layout";

export default function SignIn() {
	const [formName, setFormName] = useState("signup");
	return (
		<PageLayout>
			<Form role="client" formName={formName} />
			{formName === "signup" ? (
				<p onClick={() => setFormName("signin")}>Sign in</p>
			) : (
				<p onClick={() => setFormName("signup")}>Sign up</p>
			)}
		</PageLayout>
	);
}
