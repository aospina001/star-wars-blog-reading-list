import React, { useContext } from "react";
import { Link } from "react-router-dom";
import getState from "../store/flux";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		// <nav className="navbar navbar-dark bg-dark mb-3 mw-75">
		// 	<Link to="/">
		// 		<img src="https://logos-download.com/wp-content/uploads/2016/09/Star_Wars_logo-1.png" height="50px" />
		// 	</Link>
		// 	<div className="collapse navbar-collapse" id="navbarSupportedContent">
		// 		<ul className="navbar-nav mr-auto">
		// 			<li className="nav-item active">
		// 				<Link className="nav-link" to="/characters">
		// 					Characters
		// 				</Link>
		// 			</li>
		// 			<li className="nav-item active">
		// 				<Link className="nav-link" to="/planets">
		// 					Planets
		// 				</Link>
		// 			</li>
		// 		</ul>
		// 		<div className="ml-auto">
		// 			<div className="dropdown">
		// 				<button
		// 					className="btn btn-secondary dropdown-toggle"
		// 					type="button"
		// 					id="dropdownMenuButton"
		// 					data-toggle="dropdown"
		// 					aria-haspopup="true"
		// 					aria-expanded="false">
		// 					Favorites
		// 					<span className="badge badge-secondary">{store.favorites.length}</span>
		// 				</button>
		// 				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
		// 					<a className="dropdown-item" href="#">
		// 						Action
		// 					</a>
		// 					<a className="dropdown-item" href="#">
		// 						Another action
		// 					</a>
		// 					<a className="dropdown-item" href="#">
		// 						Something else here
		// 					</a>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// </nav>
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
			<div className="container">
				<Link className="navbar-brand" to="/">
					<img
						src="https://logos-download.com/wp-content/uploads/2016/09/Star_Wars_logo-1.png"
						height="50px"
					/>
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<Link className="nav-link" to="/characters">
								Characters <span className="sr-only">(current)</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/planets">
								Planets
							</Link>
						</li>
					</ul>
					<form className="form-inline my-2 my-lg-0">
						<input
							className="form-control mr-sm-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
							Search
						</button>
					</form>
					<div className="dropdown ml-3">
						<button
							className="btn btn-secondary dropdown-toggle"
							type="button"
							id="dropdownMenuButton"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							Favorites
							<span className="badge badge-secondary ml-2">{store.favorites.length}</span>
						</button>
						<div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
							{store.favorites.map((item, index) => {
								return (
									<a key={index} className="dropdown-item d-flex justify-content-between" to="#">
										{item.name}
										<i className="far fa-trash-alt" onClick={() => actions.deleteFavorite(index)} />
									</a>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};
