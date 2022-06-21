import React, { useState } from "react";
import { Button } from "reactstrap";
import { masterLogin } from "../../helper/apiCalls";
import PageLayout from "../layout/page_layout";

import { useRouter } from "next/router";

import { adminLogin } from "../../helper/redux/slice/loginSlice";
import { useDispatch } from "react-redux";

import classes from "./form.module.scss";
import { confirmSignUp, signIn, signUp } from "../../helper/auth/cognito";

export default function Form({
	role,
	setInvalidMsg,
	formName,
	client,
	setClient,
}) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const [email, setEmail] = useState("");
	const [phone_number, setPhoneNumber] = useState("");
	const [code, setCode] = useState("");

	const dispatch = useDispatch();
	const router = useRouter();

	const formSubmit = async (e) => {
		e.preventDefault();
		if (role === "client" && !code) {
			const person = { username, email, password, phone_number };
			const user = signUp(person);
			setClient(user);
		}
		if (code !== "" && client) {
			const message = await confirmSignUp(username, code);
			console.log(message);
			if (message === "SUCCESS") {
				router.push("/profile");
			}
		}

		if (formName == "signin") {
			const message = await signIn(username, password);
			router.push("/profile");
		}
		//add to appsync
		//add user to redux
		if (role === "admin") {
			const user = await masterLogin(username, code);
			// add admin as logged in in the store
			if (user) {
				dispatch(adminLogin({ username, name: user.name }));
				setInvalidMsg("");
				router.push("/admin/dashboard");
			} else {
				setInvalidMsg("Invalid Credentials");
			}
		}
	};
	return (
		<PageLayout>
			<section className={classes.form_container}>
				<form className={classes.form} onSubmit={formSubmit}>
					<input
						type="text"
						placeholder="Username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
					{role === "admin" || client ? (
						<input
							type="text"
							placeholder="Code"
							value={code}
							onChange={(e) => setCode(e.target.value)}
						/>
					) : (
						<>
							<input
								type="password"
								placeholder="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
							{formName === "signup" && (
								<>
									<input
										type="email"
										placeholder="Email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
									/>
									<input
										type="tel"
										placeholder="Phone"
										value={phone_number}
										onChange={(e) => setPhoneNumber(e.target.value)}
									/>
								</>
							)}
						</>
					)}

					<Button color="primary">Submit</Button>
				</form>
			</section>
		</PageLayout>
	);
}
