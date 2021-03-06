import React from "react";

import Link from "next/link";

import { Auth } from "aws-amplify";

import classes from "./nav.module.scss";
import { useDispatch, useSelector } from "react-redux";
import AdminRoutes from "./AdminRoutes";
import { customerNotInSession } from "../../../helper/redux/slice/userSlice";
import { clearCart } from "../../../helper/redux/slice/cartSlice";
import { useRouter } from "next/router";

export default function Nav() {
	const admin = useSelector((state) => state.adminReducer);
	const user = useSelector((state) => state.userReducer);

	const router = useRouter();
	const { currentCustomer } = user;
	console.log(user);
	const dispatch = useDispatch();

	//sign customer out
	const signOut = async () => {
		try {
			console.log("clearning cart");
			//clear drink cart
			dispatch(clearCart());
			//sign customer out
			await Auth.signOut();
			//set customer to null
			dispatch(customerNotInSession());
			//navigate to home
			router.push("/");
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<nav className={classes.nav_container}>
			<video autoPlay muted loop className={classes.video}>
				<source src="/video/making_coffee.mp4" type="video/mp4" />
			</video>
			<ul className={classes.nav}>
				<Link href="/">Home</Link>
				<Link href="/menu">Menu</Link>
				<AdminRoutes />

				{!admin.isLoggedIn && !currentCustomer ? (
					<Link href="/sign_in">Login</Link>
				) : null}

				{currentCustomer && (
					<>
						<Link href="/profile">Profile</Link>
						<Link href="/cart">Cart</Link>
						<a onClick={() => signOut()}>Logout</a>
					</>
				)}
			</ul>
			<section className={classes.info}>
				<h1 className={classes.greeting}>Welcome to Ian's Coffee</h1>
			</section>
		</nav>
	);
}
