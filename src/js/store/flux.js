const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			planets: [],
			people: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadPlanets: () => {
				fetch("https://swapi.dev/api/planets/")
					.then(resp => {
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						console.log(data); //this will print on the console the exact object received from the server
						setStore({
							planets: data.results
						}); //here is were your code should start after the fetch finishes
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},
			loadCharacters: () => {
				fetch("https://swapi.dev/api/people/")
					.then(resp => {
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						setStore({
							people: data.results
						});
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},
			addToFavorites: (id, name) => {
				const store = getStore();
				store.favorites;
				const foundItem = store.favorites.find(item => item.name == name);
				console.log(foundItem);
				if (foundItem == undefined) {
					setStore({
						favorites: [
							...store.favorites,
							{
								id,
								name
							}
						]
					});
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			deleteFavorite: i => {
				const store = getStore();
				const filteredFavorites = store.favorites.filter((arrayElement, arrayIndex) => i !== arrayIndex);
				setStore({ favorites: filteredFavorites });
			}
		}
	};
};

export default getState;
