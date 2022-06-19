import React, { useState } from "react";
import { Button } from "reactstrap";
import { masterLogin } from "../../helper/apiCalls";
import PageLayout from "../layout/page_layout";

import { useRouter } from "next/router";

import { adminLogin } from "../../helper/redux/slice/loginSlice";
import { useDispatch } from "react-redux";

import classes from "./form.module.scss";

export default function Form({ role, setInvalidMsg, formName }) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [code, setCode] = useState("");

	const dispatch = useDispatch();
	const router = useRouter();

	const formSubmit = async (e) => {
		e.preventDefault();
		if (role === "client") {
			console.log(username, password, email, phone);
		}
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
			<form onSubmit={formSubmit}>
				<input
					type="text"
					placeholder="Username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				{role === "admin" ? (
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
									type="phone"
									placeholder="Phone"
									value={phone}
									onChange={(e) => setPhone(e.target.value)}
								/>
							</>
						)}
					</>
				)}

				<Button color="primary">Submit</Button>
			</form>
		</PageLayout>
	);
}
