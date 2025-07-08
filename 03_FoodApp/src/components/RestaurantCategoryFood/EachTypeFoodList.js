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
		"group my-[20px] shadow-lg rounded-xl w-[45%] m-auto px-[20px] py-[5px] bg-[linear-gradient(to_right,_#b3e5fa,_#e0f7fa)] flex flex-col transition-all duration-500 hover:shadow-[0px_0px_5px_1px_brown] hover:bg-[linear-gradient(to_right,_#e0f7fa,_#b3e5fa)]";

	const arrowStyle =
		"transition-transform duration-400 " +
		(openDropDown ? "rotate-[0deg]" : "rotate-[180deg]");

	const { title, itemCards } = props.eachItemData?.card?.card;
	return (
		<div>
			<div className={eachTypeFoodListStyle}>
				<div className="font-bold cursor-pointer flex justify-between transition-all duration-500 text-red-800 hover:text-gray-600" onClick={scrollDownUp}>
					<h1>
						{title} ({itemCards.length})
					</h1>
					<h1 className={arrowStyle}>{arrow}</h1>
				</div>
				<div
					className={`mt-[10px] overflow-hidden transition-all duration-500 ease-in-out
			${openDropDown ? "max-h-[10000px] opacity-100" : "max-h-0 opacity-0"}
		`}
				>
					{itemCards.map((eachItemFood) => {
						return (
							<EachFood
								eachFoodData={eachItemFood}
								key={eachItemFood?.card?.info?.id}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default EachTypeFoodList;
