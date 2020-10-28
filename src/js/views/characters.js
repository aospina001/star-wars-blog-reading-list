import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const Characters = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="mw-75">
			<h1>Characters</h1>
			<div className="row row-cols-1 row-cols-md-3">
				{store.people.map((item, index) => {
					return <Card key={index} name={item.name} url={item.url} />;
				})}
			</div>
		</div>
	);
};
