import React from "react";

import { adminLogout } from "../../../helper/redux/slice/loginSlice";

import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";

export default function AdminRoutes() {
	const admin = useSelector((state) => state.adminReducer);
	const dispatch = useDispatch();
	return (
		<div>
			{admin.isLoggedIn && (
				<>
					<Link href="/admin/dashboard">Dashboard</Link>
					<Button onClick={() => dispatch(adminLogout())}>Logout</Button>
				</>
			)}
		</div>
	);
}
