import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharacterDetails = props => {
	const { store, actions } = useContext(Context);
	const { id, name } = useParams();
	if (store.people && store.people.length > 0) {
		console.log("characterDetails =>", store.people[id].name);
	}
	console.log(id);
	return (
		<div className="container mt-5">
			{store.people &&
				store.people.length > 0 && (
					<div className="jumbotron">
						<h1 className="display-4">Profile: {store.people[id].name}</h1>
						<div className="d-flex flex-row justify-content-around">
							<div>
								<p>Gender: {store.people[id].gender}</p>
							</div>
							<div>
								<p>Birth Year: {store.people[id].birth_year}</p>
							</div>
							<div>
								<p>Eye Color: {store.people[id].eye_color}</p>
							</div>
							<div>
								<p>Hair Color: {store.people[id].hair_color}</p>
							</div>
							<div>
								<p>Skin color: {store.people[id].skin_color}</p>
							</div>
						</div>
						<hr className="my-4" />

						<Link to="/characters">
							<span className="btn btn-dark btn-lg" href="#" role="button">
								Back
							</span>
						</Link>
					</div>
				)}
		</div>
	);
};

CharacterDetails.propTypes = {
	match: PropTypes.object
};
