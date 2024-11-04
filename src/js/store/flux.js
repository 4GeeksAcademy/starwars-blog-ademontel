import { useId } from "react";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
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
			],
			people: [

			],
			planets: [

			],
			vehicles: [

			],
			details: [

			],
		},
		actions: {
			// Use getActions to call a function within a fuction
			getPeople: async () => {
				try {
					const resp = await fetch("https://www.swapi.tech/api/people");
					const data = await resp.json();
					console.log(data);
					setStore({ people: data.results });
				} catch (error) {
					console.error("Error importando los personajes:", error);
				}
			},
			getPlanets: async () => {
				try {
					const resp = await fetch("https://www.swapi.tech/api/planets");
					const data = await resp.json();
					console.log(data);
					setStore({ planets: data.results });
				} catch (error) {
					console.error("Error importando planetas:", error);
				}
			},
			getVehicles: async () => {
				try {
					const resp = await fetch("https://www.swapi.tech/api/vehicles/");
					const data = await resp.json();
					console.log(data);
					setStore({ vehicles: data.results });
				} catch (error) {
					console.error("Error importando vehículos:", error);
				}
			},
			getDetails: async (uid) => {
				try {
					const resp = await fetch(`https://www.swapi.tech/api/people/${uid}`);
					const data = await resp.json();
					console.log(data);
			
					if (data.result) {
						const characterDetails = data.result.properties;
						const currentDetails = getStore().details;
						setStore({ details: { ...currentDetails, [uid]: characterDetails } }); // Guardamos cada personaje por uid
					} else {
						console.error("No se encontraron detalles para el personaje.");
					}
				} catch (error) {
					console.error("Error importando los detalles del personaje:", error);
				}
			},			
			}
	};
};

export default getState;
