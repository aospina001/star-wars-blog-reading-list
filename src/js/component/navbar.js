import React, { useContext } from "react";
import { Link } from "react-router-dom";
import getState from "../store/flux";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-dark bg-dark mb-3 mw-75">
			<Link to="/">
				<img src="https://logos-download.com/wp-content/uploads/2016/09/Star_Wars_logo-1.png" height="50px" />
			</Link>
			<ul className="nav nav-pills mb-2 ml-5 text-secondary" id="pills-tab" role="tablist">
				<li className="nav-item active">
					<Link className="nav-link" to="/characters">
						Characters
					</Link>
				</li>
				<li className="nav-item active">
					<Link className="nav-link" to="/planets">
						Planets
					</Link>
				</li>
			</ul>
			<div className="ml-auto">
				<div className="dropdown">
					<button
						className="btn btn-secondary dropdown-toggle"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Favorites
						<span className="badge badge-secondary">{store.favorites.length}</span>
					</button>
					<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						<a className="dropdown-item" href="#">
							Action
						</a>
						<a className="dropdown-item" href="#">
							Another action
						</a>
						<a className="dropdown-item" href="#">
							Something else here
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};
