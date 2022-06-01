import React, { useState, useEffect } from "react";
import Featured from "../../components/featured";
import PageLayout from "../../components/layout/page_layout";

import { getDrinks } from "../../helper/apiCalls";

import classes from "./menu.module.scss";

export default function Menu() {
	// useEffect(() => {
	// 	const getItems = async () => {
	// 		const drinks = await getDrinks();
	// 		setDrinks(drinks);
	// 	};
	// 	getItems();
	// }, []);
	return (
		<PageLayout>
			<section className="menu">
				<Featured />
			</section>
		</PageLayout>
	);
}
