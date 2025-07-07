import React, { useState } from "react";
import { arrow } from "../../utils/data";
import "./Modal.css";
import EachFood from "./EachFood";

const EachTypeFoodList = (props) => {
	console.log("EachTypeFoodList : ", props.eachItemData?.card?.card);
	const [openDropDown, setOpenDropDown] = useState(false);

	const scrollDownUp = () => {
		setOpenDropDown(!openDropDown);
	};

	const eachTypeFoodListStyle =
		"group my-[20px] shadow-lg rounded-xl w-[60%] m-auto p-[20px] py-[10px] bg-[linear-gradient(to_right,_#b3e5fa,_#e0f7fa)]";

	const arrowStyle =
		"transition-transform duration-400 " +
		(openDropDown ? "rotate-[0deg]" : "rotate-[180deg]");

	const { title, itemCards } = props.eachItemData?.card?.card;
	return (
		<div>
			<div className={eachTypeFoodListStyle} onClick={scrollDownUp}>
				<div className="font-bold cursor-pointer flex justify-between text-red-800">
					<h1>
						{title} ({itemCards.length})
					</h1>
					<h1 className={arrowStyle}>{arrow}</h1>
				</div>
				{openDropDown && (
					<div className="mt-[10px]">
						{itemCards.map((eachItemFood) => {
							return (
								<EachFood
									eachFoodData={eachItemFood}
									key={eachItemFood?.card?.info?.id}
								/>
							);
						})}
					</div>
				)}
			</div>
		</div>
	);
};

export default EachTypeFoodList;
