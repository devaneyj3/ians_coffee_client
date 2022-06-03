import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Featured from "../components/featured";
import PageLayout from "../components/layout/page_layout";
import Reviews from "../components/reviews";
import classes from "../styles/home.module.scss";

import Link from "next/link";
import { Button } from "reactstrap";

import { getDrinks } from "../helper/apiCalls";
import { useDispatch } from "react-redux";
import { initialLoad } from "../helper/redux/slice/drinkSlice";

export default function Home() {
	const dispatch = useDispatch();
	useEffect(() => {
		const getItems = async () => {
			const drinks = await getDrinks();
			//store in redux
			dispatch(initialLoad(drinks));
		};
		getItems();
	}, []);
	return (
		<PageLayout>
			<section className={classes.featured}>
				<h3>Featured Products</h3>
				<section className="products">
					<Featured />
				</section>
				<Link href="/menu">
					<Button className={classes.btn} color="primary">
						View All
					</Button>
				</Link>
			</section>
			<section className={classes.reviews}>
				<h3>Reviews</h3>
				<Reviews />
			</section>
		</PageLayout>
	);
}
