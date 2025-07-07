import React, { useState } from "react";
import { arrow } from "../../utils/data";
import "./Modal.css";

const EachTypeFoodList = (props) => {
	console.log(props);
	const [openDropDown, setOpenDropDown] = useState(true);

	const scrollDownUp = () => {
		setOpenDropDown(!openDropDown);
	};

	const eachTypeFoodListStyle =
		"group my-[20px] shadow-lg rounded-xl w-[60%] m-auto p-[20px] py-[10px] bg-[linear-gradient(to_right,_#b3e5fa,_#e0f7fa)] text-red-800 font-bold flex justify-between cursor-pointer";

	const arrowStyle =
		"transition-transform duration-400 " +
		(openDropDown ? "rotate-[0deg]" : "rotate-[180deg]");

	const { title, itemCards } = props.eachItemData?.card?.card;
	return (
		<div>
			<div className={eachTypeFoodListStyle} onClick={scrollDownUp}>
				<h1>
					{title} ({itemCards.length})
				</h1>
				<h1 className={arrowStyle}>{arrow}</h1>
			</div>
		</div>
	);
};

export default EachTypeFoodList;
