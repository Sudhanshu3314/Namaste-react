import { useEffect, useState } from "react";
import { MENU_API_URL } from "./URL";

const useRestaurantMenu = (restaurantId) => {
	const [resInfo, setResInfo] = useState([]);

	useEffect(() => {
		fetchMenu();
	}, [restaurantId]);

	const fetchMenu = async () => {
		try {
			const response = await fetch(`${MENU_API_URL}${restaurantId}`);
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			const data = await response.json();
            setResInfo(data?.data || []);
		} catch (error) {
			console.error("Failed to fetch menu:", error);
		}
	};

    return resInfo;
};

export default useRestaurantMenu;
