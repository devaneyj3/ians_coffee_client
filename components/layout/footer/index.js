import React from "react";

import classes from "./footer.module.scss";

import Link from "next/link";

import { useSelector } from "react-redux";

export default function Footer() {
	const admin = useSelector((state) => state.adminReducer);
	return (
		<div className={classes.footer}>
			<span>@2022 The Web Accelerator | </span>
			{!admin.isLoggedIn && <Link href="/admin">Admin</Link>}
		</div>
	);
}
