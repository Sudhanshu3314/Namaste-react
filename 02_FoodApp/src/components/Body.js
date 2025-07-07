import resInfo from "../utils/mockData";
import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { DATA_API } from "../utils/constants";
import { Link } from "react-router";

// const allResCard = []
// for (let i = 0; i < resInfo.length; i++) {
// 	allResCard.push(<ResCard resData={resInfo[i]}/>);
// }

// Normal Js Variable
/*  const restaurant = [
	{
		info: {
			id: "112487",
			name: "Chinese Wok",
			cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
			locality: "Virwani Industrial Premises",
			areaName: "Goregaon",
			costForTwo: "₹250 for two",
			cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
			avgRating: 4.2,
			parentId: "61955",
			avgRatingString: "4.2",
		},
	},
	{
		info: {
			id: "786600",
			name: "Pizza Hut",
			cloudinaryImageId:
				"RX_THUMBNAIL/IMAGES/VENDOR/2024/7/18/ae107dcf-c1c0-49b7-91cf-7512116b7a7f_786600.jpg",
			locality: "S.V.Road",
			areaName: "Malad West",
			costForTwo: "₹350 for two",
			cuisines: ["Pizzas"],
			avgRating: 4.3,
			parentId: "721",
			avgRatingString: "4.3",
		},
	},
	{
		info: {
			id: "5922",
			name: "Burger King",
			cloudinaryImageId:
				"RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/7f76a072-c1bc-4d74-ac56-33e0eea20c1e_5922.JPG",
			locality: "Goregaon East",
			areaName: "Goregaon East",
			costForTwo: "₹350 for two",
			cuisines: ["Burgers", "American"],
			avgRating: 4.2,
			parentId: "166",
			avgRatingString: "4.2",
		},
	},
	{
		info: {
			id: "23673",
			name: "McDonald's",
			cloudinaryImageId:
				"RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/d79910e5-82d9-48ad-83d2-5b52aece13ae_23673.jpg",
			locality: "Anupam",
			areaName: "Goregaon",
			costForTwo: "₹400 for two",
			cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
			avgRating: 4.5,
			parentId: "630",
			avgRatingString: "4.5",
		},
	},
	{
		info: {
			id: "625416",
			name: "Subway",
			cloudinaryImageId:
				"RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/4beed34f-a081-47d3-80e5-ad386b073147_625416.JPG",
			locality: "vaishno",
			areaName: "Malad East",
			costForTwo: "₹350 for two",
			cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
			avgRating: 4.1,
			parentId: "2",
			avgRatingString: "4.1",
		},
	},
	{
		info: {
			id: "7406",
			name: "KFC",
			cloudinaryImageId:
				"RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/b7b17071-63b3-4334-8b7a-aecf35fce272_7406.JPG",
			locality: "Goregaon East",
			areaName: "Goregaon East",
			costForTwo: "₹400 for two",
			cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
			avgRating: 4.2,
			parentId: "547",
			avgRatingString: "4.2",
		},
	},
	{
		info: {
			id: "24472",
			name: "Domino's Pizza",
			cloudinaryImageId:
				"RX_THUMBNAIL/IMAGES/VENDOR/2024/11/29/6a5ed908-3410-4663-8a27-0319aec02fbf_24472.jpg",
			locality: "Next to Anza School",
			areaName: "Malad East",
			costForTwo: "₹400 for two",
			cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
			avgRating: 4.1,
			parentId: "2456",
			avgRatingString: "4.1",
		},
	},
	{
		info: {
			id: "643714",
			name: "WeFit - Protein Bowls, Salads & Sandwiches",
			cloudinaryImageId:
				"RX_THUMBNAIL/IMAGES/VENDOR/2025/2/3/0f794c61-9311-4089-9b90-a06b27f31c2a_643714.jpg",
			locality: "Nesco",
			areaName: "Goregaon East",
			costForTwo: "₹250 for two",
			cuisines: ["Healthy Food", "Salads", "Keto", "Snacks"],
			avgRating: 4.6,
			parentId: "355285",
			avgRatingString: "4.6",
		},
	},
];
*/

const Body = () => {
	// Local State Variable ( useState Hook Functions )
	let [listOfRes, setListOfRes] = useState([]);
	let [dupRes, setDupRes] = useState([]); // This contains copy of restaurant list
	let [btnValue, setBtnValue] = useState("Top Rated Restaurant");
	let [vegResBtn, setVegResBtn] = useState("Veg Restaurant");
	let [searchValue, setSearchValue] = useState("");
	// let [nonVegResBtn, setNonVegResBtn] = useState("Non Veg Restaurant");
	useEffect(() => {
		fetchData();
	}, []);

	let fetchData = async () => {
		const data = await fetch(DATA_API);

		const json = await data.json();
		console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle);
		// Optional Chaining - Understanding this concept in which we que ? this que mark
		let res =
			json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
				?.restaurants;
		setListOfRes(res);
		setDupRes(res);
	};

	let filterRestaurant = () => {
		if (btnValue == "Top Rated Restaurant") {
			setListOfRes(
				listOfRes.filter((eachResData) => eachResData.info.avgRating > 4.5)
			);
			setBtnValue("See All Restaurant");
		} else {
			// setListOfRes(resInfo)
			fetchData();
			setBtnValue("Top Rated Restaurant");
		}
	};

	let vegRes = () => {
		if (vegResBtn == "Veg Restaurant") {
			// listOfRes = resInfo;
			setListOfRes(dupRes.filter((eachResData) => eachResData.info.veg));
			setVegResBtn("Non Veg Restaurant");
		} else {
			// listOfRes = resInfo;
			setListOfRes(
				dupRes.filter((eachResData) => eachResData.info.veg != true)
			);
			setVegResBtn("Veg Restaurant");
		}
	};

	let searchFilterRes = () => {
		let searchValueLowerCase = searchValue.toLowerCase();
		setListOfRes(
			dupRes.filter((res) =>
				res?.info?.name.toLowerCase().includes(searchValueLowerCase)
			)
		);
	};

	const cleanString = (str) => str.replace(/%20/g, "-");

	return listOfRes.length == 0 ? (
		<div className="body">
			<div className="filter-btn">
				<div className="searchFilter">
					<input
						type="text"
						value={searchValue}
						placeholder="Search Restaurant....."
						onChange={(e) => {
							setSearchValue(e.target.value);
						}}
					/>
					<button
						onClick={() => {
							setListOfRes(
								dupRes.filter((res) =>
									res?.info?.name
										.toLowerCase()
										.includes(searchValue.toLowerCase())
								)
							);
						}}
					>
						Search
					</button>
				</div>
				<button id="vegRes" onClick={vegRes}>
					{vegResBtn}
				</button>
				<button onClick={filterRestaurant}>{btnValue}</button>
				<h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{listOfRes.length}</h2>
			</div>
			<Shimmer />
		</div>
	) : (
		<div className="body">
			<div className="filter-btn">
				<div className="searchFilter">
					<input
						type="text"
						value={searchValue}
						placeholder="Search Restaurant....."
						onChange={(e) => {
							setSearchValue(e.target.value);
						}}
					/>
					<button onClick={searchFilterRes}>Search</button>
				</div>
				<button id="vegRes" onClick={vegRes}>
					{vegResBtn}
				</button>
				<button onClick={filterRestaurant}>{btnValue}</button>
				<h2>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					{"No. Of Restaurant : " + listOfRes.length}
				</h2>
			</div>
			<div className="res_container">
				{/* <ResCard resData={resInfo[4]} /> */}
				{/* {allResCard} */}

				{/* not using keys ( not acceptable ) <<<<<< index as key in map function <<<<<<<< using key as unique id ( best practice acceptable ) */}
				{listOfRes.map((eachResData) => (
					// console.log("restaurant/" + eachResData.info.id + "/" + eachResData.info.name);
					<Link
						className="resCard noStyle"
						key={eachResData.info.id}
						to={
							"restaurant/" + eachResData.info.id + "/" + eachResData.info.name
						}
					>
						<ResCard resData={eachResData} />
					</Link>
				))}
			</div>
		</div>
	);
};

export default Body;
