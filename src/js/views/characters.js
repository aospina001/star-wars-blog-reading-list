import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const Characters = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container mt-5 pt-5">
			<h1>Characters</h1>
			<div className="row row-cols-1 row-cols-md-3">
				{store.people.map((item, index) => {
					return <Card key={index} id={index} name={item.name} url={item.url} details="characterDetails" />;
				})}
			</div>
		</div>
	);
};
