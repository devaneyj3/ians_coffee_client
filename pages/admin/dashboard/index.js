import React from "react";
import DrinkForm from "../../../components/drinkForm";
import PageLayout from "../../../components/layout/page_layout";

import { useSelector } from "react-redux";
import { Alert } from "reactstrap";
import { useRouter } from "next/router";

export default function Dashboard() {
	const admin = useSelector((state) => state.adminReducer);

	const router = useRouter();

	if (admin.isLoggedIn == false) {
		router.push("/");
	}
	return (
		<PageLayout>
			<Alert color="success">Welcome {admin.username}</Alert>
			<DrinkForm />
		</PageLayout>
	);
}
