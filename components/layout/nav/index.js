import React from "react";

import Link from "next/link";

import classes from "./nav.module.scss";

export default function Nav() {
	return (
		<nav className={classes.nav_container}>
			<video autoPlay muted loop className={classes.video}>
				<source src="/video/making_coffee.mp4" type="video/mp4" />
			</video>
			<ul className={classes.nav}>
				<Link href="/">Home</Link>
				<Link href="/menu">Menu</Link>
				<Link href="/about">About</Link>
				<Link href="/login">Login</Link>
			</ul>
			<h1 className={classes.greeting}>Welcome to Ian's Coffee</h1>
		</nav>
	);
}
