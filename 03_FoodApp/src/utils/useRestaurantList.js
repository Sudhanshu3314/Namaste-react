import { useEffect, useState } from "react";
import { RESTAURANT_API_URL } from "./URL";

const useRestaurantList = () => {
	const [resList, setResList] = useState([]);
	const [dupResList, setDupResList] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const data = await fetch(RESTAURANT_API_URL);
		const jsonData = await data.json();

		let restaurantListFromApi =
			jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
				?.restaurants;
		console.log(restaurantListFromApi);
		setResList(restaurantListFromApi);
		setDupResList(restaurantListFromApi);
	};

	return { resList, setResList, dupResList, setDupResList };
};

export default useRestaurantList;
