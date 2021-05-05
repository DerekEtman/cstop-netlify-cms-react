import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import Form from "./FormPage";

export default function FormsPage(props, { match }) {
	const [formList, setFormList] = useState([]);
	const [findForm, setFindForm] = useState();
	const { url } = useRouteMatch();

	useEffect(() => {
		Axios.get(`https://api.jotform.com/user/forms?apiKey=${apiKey}`)
			.then((resp) => {
				let form = resp.data.content;
				console.log(resp)
				setFormList(form);
			})
			.then()
			.catch((err) => console.log(err));

		// eslint-disable-next-line
	}, []);
	let apiKey = process.env.REACT_APP_JOTFORM_API_READ;
	console.log("api key: ", apiKey)

	// let FormArray = formList.map((form) => {
	// 	return (
	// 		<>
	// 			<Link to={`${url}/${form.id}`}>{form.title}</Link>
	// 		</>
	// 	);
	// });

	const handleFormSearch = (event) => {
		props.history.push(`/forms/${findForm}`);
	};

	const handleChange = (event) => {
		setFindForm(event.target.value);
	};

	return (
		<div className="form-container">
			<Route path={`${url}/:id`}>
				<Form data={formList} />
			</Route>

			<Route exact path={`${url}`}>
				<div className="form-search-container">
					<h2
						className="heading-small"
						style={{ alignSelf: "center", marginBottom: ".5rem" }}
					>
						{" "}
						Hey There!
					</h2>
					<h3
						className="heading-small"
						style={{ alignSelf: "center", marginBottom: "2rem" }}
					>
						Please enter your form number below
					</h3>

					<input
						type="text"
						name="formID"
						onChange={handleChange}
						value={findForm}
						placeholder="form ID"
					/>
					<button type="submit" onClick={handleFormSearch}>
						Submit
					</button>

					{/* {FormArray} */}
				</div>
			</Route>
		</div>
	);
}
