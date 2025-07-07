import { CDN_URL } from "../utils/constants";


const ResCard = ({ resData }) => {
	const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
		resData?.info || {};

	let borderSpan = "borderSpanRed",
		circleSpan = "circleSpanRed";

	if (resData?.info?.veg) {
		borderSpan = "borderSpanGreen";
		circleSpan = "circleSpanGreen";
	}

	return (
		<div>
			<div>
				<img src={CDN_URL + cloudinaryImageId} alt="FoodImgOfGivenName" />
			</div>
			<h3 id="nameRes">
				<span className="borderElement" id={borderSpan}>
					<span className="circleElement" id={circleSpan}></span>
				</span>
				{" " + name || "No Restaurant"}
			</h3>
			<h4>{cuisines?.join(", ") || "N/A cuisines"}</h4>
			<h4>{avgRating || "N/A Rating"}</h4>
			<h4>{costForTwo || "N/A"}</h4>
		</div>
	);
};

export default ResCard;
