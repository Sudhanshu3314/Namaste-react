import { CDN_URL } from "../utils/URL";
import { Link } from "react-router";

function slugify(text) {
	return text
		.trim()
		.replace(/\s+/g, "-") // Replace spaces with hyphens
		.replace(/\-\-+/g, "-"); // Replace multiple hyphens with single
}

const RestaurantCard = (props) => {
	const {
		name,
		id,
		avgRating,
		sla,
		cuisines,
		areaName,
		costForTwo,
		veg,
		cloudinaryImageId,
	} = props?.resData?.info;

	let writeCuisines = (cuisines) => {
		let ans = "";
		if (cuisines.length > 3) {
			for (let i = 0; i < 3; i++)
				ans += i + 1 != cuisines.length ? cuisines[i] + ", " : cuisines[i];
			ans += "......";
		} else {
			for (let i = 0; i < cuisines.length; i++)
				ans += i + 1 != cuisines.length ? cuisines[i] + ", " : cuisines[i];
		}
		return ans;
	};
	let cuisinesProper = writeCuisines(cuisines);

	let restaurantCardStyle =
		"w-[210px] p-[10px] m-[10px] rounded-[10px] bg-[#f7ffff] shadow-[0_0_3px_0.2px_brown] transition-all duration-400 hover:cursor-pointer hover:shadow-[0_0_10px_0.5px_brown] hover:scale-[1.02]";

	let restaurantImgStyle =
		"w-full block h-[160px] object-cover rounded-[10px] border border-brown shadow-[0_0_5px_0.1px_red]";

	return (
		<div className={restaurantCardStyle}>
			<Link
				style={{ all: "unset" }}
				to={"/restaurant/" + slugify(name) + "/" + id + "/"}
			>
				<div className="res-img">
					<img
						src={CDN_URL + cloudinaryImageId}
						alt="restaurant_image"
						className={restaurantImgStyle}
					/>
				</div>
				<div className="my-[15px] mx-[7px]">
					<div>
						<h3 className="text-[brown] font-bold">{name}</h3>
					</div>
					<div>
						<b>{costForTwo}</b>
					</div>
					<div title={cuisines.join(", ")}>&#128523;{cuisinesProper}</div>
					<div>&#128666;{sla.slaString}</div>
					<div>&#128681;{areaName}</div>
					<div>
						&#x2B50;{" "}
						<span
							className={
								(veg ? "vegFoodStyle" : "nonVegFoodStyle") + " foodStyleBtn"
							}
						>
							{avgRating.toFixed(1)}
							{/* This .toFixed(1) will going to convert 4 rating to 4.0 in decimal to looks better for UX */}
						</span>{" "}
					</div>
				</div>
			</Link>
		</div>
	);
};

export default RestaurantCard;
