import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

let image = "https://www.psu.com/wp/wp-content/uploads/2018/07/Star-Wars-Battlefront-2-header.jpg";

export const Home = () => {
	return (
		<div
			className="jumbotron mt-5 text-dark"
			style={{
				backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.2) 0%,rgba(255,255,255,0.9) 100%), url('${image}')`
			}}>
			<div className="container">
				<h1 className="display-4">Star Wars Blog</h1>
				<p className="lead">
					This is a simple hero unit a simple jumbotron style component for calling extra attention to
					featured content or information.
				</p>
				<hr className="my-4" />
				<p>
					It uses utility classes for typography and spacing to space content out within the larger container.
				</p>
				<div className="d-flex justify-content-center">
					<Link className="btn btn-primary btn-lg mr-3" to="/characters" role="button">
						Characters
					</Link>
					<Link className="btn btn-primary btn-lg ml-3" to="/planets" role="button">
						Planets
					</Link>
				</div>
			</div>
		</div>
	);
};
