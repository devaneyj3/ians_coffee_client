import React from "react";

import Link from "next/link";

import classes from "./nav.module.scss";

import { useUser } from "@auth0/nextjs-auth0";
import { useSelector } from "react-redux";
import AdminRoutes from "./AdminRoutes";

export default function Nav() {
	const { user } = useUser();

	const admin = useSelector((state) => state.adminReducer);

	return (
		<nav className={classes.nav_container}>
			<video autoPlay muted loop className={classes.video}>
				<source src="/video/making_coffee.mp4" type="video/mp4" />
			</video>
			<ul className={classes.nav}>
				<Link href="/">Home</Link>
				<Link href="/menu">Menu</Link>
				<AdminRoutes />
				{user && (
					<>
						<Link href="/api/auth/logout">Logout</Link>
						<Link href="/profile">Profile</Link>
					</>
				)}
				{!admin.isLoggedIn && !user ? (
					<Link href="/api/auth/login">Login</Link>
				) : null}
			</ul>
			<section className={classes.info}>
				<h1 className={classes.greeting}>Welcome to Ian's Coffee</h1>
			</section>
		</nav>
	);
}
