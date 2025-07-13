import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import useRestaurantList from "../utils/useRestaurantList";
import RestaurantShimmer from "./Shimmer/RestaurantShimmer";

const Body = () => {
	const { resList, setResList, dupResList, setDupResList } =
		useRestaurantList();
	const [filterBtn, setFilterBtn] = useState("Top Rated Restaurant");
	const [foodTypeBtn, setFoodTypeBtn] = useState("Veg Restaurant");
	const [searchText, setSearchText] = useState("");

	let filterRestaurantByRating = () => {
		setFilterBtn(
			filterBtn == "Top Rated Restaurant"
				? "See All Restaurant"
				: "Top Rated Restaurant"
		);
		let filteredListRes = resList.filter((eachRestaurant) => {
			return eachRestaurant.info.avgRating > 4.4;
		});
		setResList(
			filterBtn == "Top Rated Restaurant" ? filteredListRes : dupResList
		);
	};

	let vegNonVegRes = () => {
		setFoodTypeBtn(
			foodTypeBtn == "Veg Restaurant" ? "Non-veg Restaurant" : "Veg Restaurant"
		);
		let vegRes = dupResList.filter((eachRestaurant) => {
			return eachRestaurant.info.veg;
		});
		let nonVegRes = dupResList.filter((eachRestaurant) => {
			return eachRestaurant.info.veg != true;
		});
		setResList(foodTypeBtn == "Veg Restaurant" ? vegRes : nonVegRes);
	};

	let searchRestaurant = () => {
		let searchedResByFilter = dupResList.filter((eachRestaurant) => {
			return eachRestaurant.info.name
				.toLowerCase()
				.includes(searchText.toLowerCase());
		});
		console.log(searchedResByFilter);
		if (searchedResByFilter.length === 0) {
			setResList(dupResList);
			setSearchText("");
			alert("Your input is invalid bcoz it doesn't match any restaurant name");
			return;
		}
		setResList(searchedResByFilter);
	};

	let buttonStyle =
		"ml-[20px] mt-[15px] mr-[10px] mb-[15px] text-[20px] w-[230px] rounded-[15px] border-[3px] border-[#000f94] bg-[#eceeff] font-bold outline-none shadow-[0_0_4px_0.3px_#000f94] px-[10px] py-[2px] text-blue-500";

	return !Array.isArray(resList) || resList.length === 0 ? (
		<div className="body">
			<div className="flex justify-evenly">
				<div className="mt-[15px] mx-[40px] mb-0">
					<label>
						<input
							type="text"
							name="searchRes"
							id="searchRes"
							autoComplete="off"
							value={searchText || ""}
							placeholder="Search Restaurant......"
							onChange={(e) => {
								setSearchText(e.target.value);
								console.log(e.target.value);
							}}
							onKeyDown={(event) => {
								if (event.key === "Enter") {
									searchRestaurant();
								}
							}}
						/>
					</label>
					{/* <button className="searchBtn" onClick={searchRestaurant}>
						SEARCH
					</button> */}
				</div>
				<div className="filterBtn">
					<button className={buttonStyle} onClick={filterRestaurantByRating}>
						{filterBtn}
					</button>
					<button className={buttonStyle} onClick={vegNonVegRes}>
						{foodTypeBtn}
					</button>
				</div>
			</div>
			<h2 style={{ margin: "0px 30px" }}>
				No. Of Restaurant : 0
			</h2>
			<div className="flex flex-wrap gap-y-[10px] gap-x-[5px]">
				<RestaurantShimmer />
			</div>
		</div>
	) : (
		<div className="body">
			<div className="flex justify-evenly">
				<div className="mt-[15px] mx-[40px] mb-0">
					<label>
						<input
							type="text"
							name="searchRes"
							id="searchRes"
							autoComplete="off"
							value={searchText || ""}
							placeholder="Search Restaurant......"
							onChange={(e) => {
								setSearchText(e.target.value);
								console.log(e.target.value);
							}}
							onKeyDown={(event) => {
								if (event.key === "Enter") {
									searchRestaurant();
								}
							}}
						/>
					</label>
					{/* <button className="searchBtn" onClick={searchRestaurant}>
						SEARCH
					</button> */}
				</div>
				<div className="filterBtn">
					<button className={buttonStyle} onClick={filterRestaurantByRating}>
						{filterBtn}
					</button>
					<button className={buttonStyle} onClick={vegNonVegRes}>
						{foodTypeBtn}
					</button>
				</div>
			</div>
			<h2 style={{ margin: "0px 30px" }}>
				No. Of Restaurant : {resList.length}
			</h2>
			<div className="flex flex-wrap gap-y-[10px] gap-x-[5px]">
				{/* <RestaurantCard resData={restaurantList[0]} />
				<RestaurantCard resData={restaurantList[1]} /> */}
				{resList.map((eachRestaurant) => {
					return (
						<RestaurantCard
							key={eachRestaurant?.info?.id}
							resData={eachRestaurant}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Body;
