import React from "react";

import Link from "next/link";

import classes from "./nav.module.scss";

import { adminLogout } from "../../../helper/redux/slice/loginSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";

export default function Nav() {
	const admin = useSelector((state) => state.admin);

	const dispatch = useDispatch();

	console.log(admin);
	return (
		<nav className={classes.nav_container}>
			<video autoPlay muted loop className={classes.video}>
				<source src="/video/making_coffee.mp4" type="video/mp4" />
			</video>
			<ul className={classes.nav}>
				<Link href="/">Home</Link>
				<Link href="/menu">Menu</Link>
				<Link href="/about">About</Link>
				<Link href="/admin">Admin</Link>
				{admin.isLoggedIn && (
					<button onClick={() => dispatch(adminLogout())}>Logout</button>
				)}
			</ul>
			<section className={classes.info}>
				<h1 className={classes.greeting}>Welcome to Ian's Coffee</h1>
				<Link href="/menu">
					<Button className={classes.btn} outline color="info">
						Shop Now
					</Button>
				</Link>
			</section>
		</nav>
	);
}
