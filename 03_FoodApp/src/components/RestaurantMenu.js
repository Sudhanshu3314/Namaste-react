import { useParams } from "react-router";
import "./ResMenu.css";
import { Star } from "../utils/data";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import EachTypeFoodList from "./RestaurantCategoryFood/EachTypeFoodList";
import ModalMenu from "./RestaurantCategoryFood/ModalMenu";

const RestaurantMenu = () => {
	const params = useParams();
	console.log(params);
	console.log(params?.restaurantId + " :" + params?.restaurantName);

	const resFullMenu = useRestaurantMenu(params?.restaurantId);

	if (!resFullMenu.cards) return <div>Loading........</div>;

	console.log(resFullMenu);
	// Restaurant Name
	console.log(resFullMenu?.cards[2]?.card?.card?.info);

	const restaurantAllDetails =
		resFullMenu?.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
	console.log(restaurantAllDetails);

	const ItemCategoryOfRes = restaurantAllDetails.filter((eachDetails) => {
		return (
			eachDetails.card.card["@type"] ==
			"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
		);
	});
	console.log(ItemCategoryOfRes);

	const {
		name,
		areaName,
		avgRating,
		city,
		totalRatingsString,
		cloudinaryImageId,
		cuisines,
		sla,
		costForTwoMessage,
		costForTwo,
	} = resFullMenu?.cards[2]?.card?.card?.info;

	let resDetailStyle =
		"px-[20px] py-[7px] bg-gradient-to-b from-[rgba(255,200,129,0.49)] via-white to-[rgba(142,255,131,0.49)] rounded-[30px] text-[1.1em] mx-auto";

	let allInfoResStyle =
		"h-[112px] border-[0.5px] border-[rgba(128,128,128,0.341)] bg-white rounded-[20px] mt-[10px] mx-[5px] mb-[7px] text-[13px] box-border p-[13px]";

	return (
		<div>
			<div className={"w-[60%] " + resDetailStyle}>
				<h1 className="text-red-800 font-bold text-3xl">{name}</h1>
				<div className={"allInfoRes" + allInfoResStyle}>
					<div className="flex items-center gap-x-[5px]">
						{" "}
						<Star /> <b>{avgRating + "(" + totalRatingsString + ")"} </b>
						<span style={{ color: "grey" }}>&#9679;</span>
						<b>{"Rs." + costForTwo / 100}</b>
					</div>
					<div>
						<h2 className="my-[5px] mx-[5px] text-[13px] text-[#ff5200]">
							{Array.isArray(cuisines) ? cuisines.join(", ") : cuisines}
						</h2>
					</div>
					<div>
						<p className="my-[2px] mx-[5px] text-[13px]">
							<b>
								<span style={{ color: "grey" }}>&#9679;</span> Outlet &nbsp;
							</b>
							<span style={{ color: "darkgray", cursor: "pointer" }}>
								{areaName} <span style={{ color: "#FF5200" }}>&#9662;</span>
							</span>
						</p>
						<p className="my-[2px] mx-[5px] text-[13px]">
							<b>
								<span style={{ color: "grey" }}>&#9679;</span> {sla?.slaString}{" "}
								&nbsp;
							</b>
						</p>
					</div>
				</div>
			</div>

			<div className="restaurantItemList my-[30px]">
				{ItemCategoryOfRes.map((eachItemCategory) => {
					return (
						<EachTypeFoodList
							key={eachItemCategory?.card?.card?.categoryId}
							eachItemData={eachItemCategory}
						/>
					);
				})}
			</div>

			<div>
				<ModalMenu />
			</div>
		</div>
	);
};

export default RestaurantMenu;
