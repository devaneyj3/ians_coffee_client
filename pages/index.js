import Head from "next/head";
import Image from "next/image";
import Featured from "../components/featured";
import PageLayout from "../components/layout/page_layout";
import classes from "../styles/home.module.scss";

export default function Home() {
	return (
		<PageLayout>
			<section className={classes.featured}>
				<h3>Featured Products</h3>
				<section className="products">
					<Featured />
				</section>
			</section>
		</PageLayout>
	);
}
