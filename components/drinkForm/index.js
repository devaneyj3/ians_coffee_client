import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function DrinkForm() {
	return (
		<div>
			<Formik
				initialValues={{
					name: "",
					description: "",
					price: "",
					quantiy: "",
					type: "",
				}}
				validate={(values) => {
					const errors = {};
					if (!values.email) {
						errors.email = "Required";
					} else if (
						!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
					) {
						errors.email = "Invalid email address";
					}
					return errors;
				}}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2));
						setSubmitting(false);
					}, 400);
				}}>
				{({ isSubmitting }) => (
					<Form>
						<label htmlFor="name">Name</label>
						<Field type="text" name="name" />
						<ErrorMessage name="name" component="div" />
						<label htmlFor="description">Description</label>
						<Field type="text" name="description" />
						<ErrorMessage name="description" component="div" />
						<label htmlFor="quantity">Quantity</label>
						<Field type="number" name="quantity" />
						<ErrorMessage name="quantity" component="div" />
						<label htmlFor="type">Type</label>
						<Field type="text" name="type" />
						<ErrorMessage name="type" component="div" />
						<label htmlFor="price">Price</label>
						<Field type="number" name="price" />
						<ErrorMessage name="price" component="div" />
						<button type="submit" disabled={isSubmitting}>
							Submit
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
}
