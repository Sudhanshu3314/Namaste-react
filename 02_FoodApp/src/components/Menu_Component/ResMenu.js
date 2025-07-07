import { useEffect, useState } from "react";
import { RES_MENU_API } from "../../utils/constants";
import { useParams } from "react-router";
import FoodMenuCard from "./FoodMenuCard";
import { Star } from "../../utils/constants";

const ResMenu = () => {
	const [resMainDetail, setResMainDetail] = useState([]);
	const [allRestaurant, setAllRestaurant] = useState([]);
	const [recommendedRes, setRecommendedRes] = useState([]);

	useEffect(() => {
		fetchMenuApi();
	}, []);

	const { resId } = useParams();

	const fetchMenuApi = async () => {
		const data = await fetch(RES_MENU_API + resId);
		const dataInJson = await data.json();

		// Parse all data whatever fetched
		console.log(dataInJson?.data);

		// The details of restaurant in which we want restaurant menu of that particular restaurant
		console.log(
			"Restaurant Detail : ",
			dataInJson?.data?.cards[2]?.card?.card?.info
		);
		setResMainDetail(dataInJson?.data?.cards[2]?.card?.card?.info);

		// All types of Restaurant
		const allTypesRes =
			dataInJson?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
		console.log("All types of Restaurant : ", allTypesRes);
		setAllRestaurant(allTypesRes);

		// Only recommended types of restaurant
		console.log(
			"Recommended Menu : ",
			allTypesRes?.cards[1]?.card?.card?.itemCards
		);
		setRecommendedRes(allTypesRes?.cards[1]?.card?.card?.itemCards);
	};

	const {
		name,
		avgRating,
		totalRatingsString,
		areaName,
		cuisines,
		sla,
		costForTwo,
	} = resMainDetail;

	const orderListStyle = {
		textAlign: "center",
		border: "2px solid blue",
		borderRadius: "20px",
		listStylePosition: "inside",
		margin: "10px",
	};

	return (
		<div style={{ margin: "auto", width: "60%" }}>
			<div className="resDetail">
				<h2 style={{ color: "brown" }}>{name}</h2>
				<div className="allInfoRes">
					<div
						style={{ display: "flex", gap: "0px 5px", alignItems: "center" }}
					>
						{" "}
						<Star /> <b>{avgRating + "(" + totalRatingsString + ")"} </b>
						<span style={{ color: "grey" }}>&#9679;</span>
						<b>{"Rs." + costForTwo / 100}</b>
					</div>
					<div>
						<h2 className="fontSize color">
							{Array.isArray(cuisines) ? cuisines.join(", ") : cuisines}
						</h2>
					</div>
					<div>
						<p className="fontSize">
							<b>
								<span style={{ color: "grey" }}>&#9679;</span> Outlet &nbsp;
							</b>
							<span style={{ color: "darkgray",cursor:"pointer"  }}>
								{areaName} <span style={{ color: "#FF5200" }}>&#9662;</span>
							</span>
						</p>
						<p className="fontSize">
							<b>
								<span style={{ color: "grey"}}>&#9679;</span> {sla?.slaString}{" "}
								&nbsp;
							</b>
						</p>
					</div>
				</div>
			</div>

			<ol style={orderListStyle}>
				{/* <li>
					{recommendedRes[0]?.card?.info?.name} ===
					<b>
						Rs.
						{(recommendedRes[0]?.card?.info?.price ||
							recommendedRes[0]?.card?.info?.defaultPrice) / 100}
					</b>
				</li> */}

				{recommendedRes.map((resFood) => (
					<FoodMenuCard key={resFood?.card?.info?.id} foodData={resFood} />
				))}
			</ol>
		</div>
	);
};

export default ResMenu;
