import React from "react";
import { CDN_URL } from "../../utils/URL";

const EachFood = (props) => {
	console.log("Each food ", props?.eachFoodData?.card?.info);
	const {
		name,
		price,
		description,
		ratings,
		itemAttribute,
		finalPrice,
		imageId,
		defaultPrice,
	} = props?.eachFoodData?.card?.info;

	let ratingSectionStyle =
		"text-white rounded-lg inline py-[1px] px-[6px] w-[max-content] " +
		(itemAttribute?.vegClassifier == "VEG" ? "bg-green-500" : "bg-red-500");

	return (
		<div className="bg-red-50 shadow-xl mx-[10px] my-[18px] px-[20px] py-[18px] rounded-2xl flex justify-between">
			<div className="flex flex-col gap-y-[5px]">
				<h1 className="font-medium">{name}</h1>
				<h2 className="font-bold">
					&#8377; {(price || finalPrice || defaultPrice) / 100}
				</h2>
				{ratings?.aggregatedRating?.rating == null ? (
					<p className={ratingSectionStyle}>&#9733; 4.1</p>
				) : (
					<p className={ratingSectionStyle}>
						&#9733; {ratings?.aggregatedRating?.rating}{" "}
					</p>
				)}

				<p className="text-xs text-gray-800">{description}</p>
			</div>
			<div>
				<img
					src={CDN_URL + imageId}
					className="w-[200px] h-[120px] object-cover rounded-lg shadow-xl"
					alt={name}
				/>
			</div>
		</div>
	);
};

export default EachFood;
