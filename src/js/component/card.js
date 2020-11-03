import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const Card = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="col mb-4">
			<div className="card">
				<img
					src="http://www.appspcdownload.com/wp-content/uploads/2016/02/Star-Wars-Galaxy-of-Heroes.jpg"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">{props.name}</h5>
					<p className="card-text">
						Some quick example text to build on the card title and make up the bulk of the cards content.
					</p>
					<div className="d-flex justify-content-between">
						<Link to={`/${props.details}/${props.id}/${props.name}`} className="btn btn-dark">
							More info
						</Link>
						<button
							type="button"
							className="btn btn-outline-danger"
							onClick={e => {
								actions.addToFavorites(props.url, props.name);
							}}>
							<i className="far fa-heart" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
Card.propTypes = {
	name: PropTypes.string,
	url: PropTypes.string,
	id: PropTypes.string,
	details: PropTypes.string
};
