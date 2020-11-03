import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetDetails = props => {
	const { store, actions } = useContext(Context);
	const { id, name } = useParams();
	if (store.planets && store.planets.length > 0) {
		console.log("characterDetails =>", store.planets[id].name);
	}
	console.log(id);
	return (
		<div className="container mt-5">
			{store.planets &&
				store.planets.length > 0 && (
					<div className="jumbotron">
						<h1 className="display-4">Profile: {store.planets[id].name}</h1>
						<div className="d-flex flex-row justify-content-around">
							<div>
								<p>Population: {store.planets[id].population}</p>
							</div>
							<div>
								<p>Climate: {store.planets[id].climate}</p>
							</div>
							<div>
								<p>Diameter: {store.planets[id].diameter}</p>
							</div>
							<div>
								<p>Gravity: {store.planets[id].gravity}</p>
							</div>
							<div>
								<p>Terrain: {store.planets[id].terrain}</p>
							</div>
						</div>
						<hr className="my-4" />

						<Link to="/planets">
							<span className="btn btn-dark btn-lg" href="#" role="button">
								Back
							</span>
						</Link>
					</div>
				)}
		</div>
	);
};

PlanetDetails.propTypes = {
	match: PropTypes.object
};
