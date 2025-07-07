const FoodMenuCard = ({foodData}) => {
	const { id, name, price, defaultPrice} = foodData?.card?.info;

	return (
		<div>
			<li key={id}>
				{name + " ---> Rs."}
				<b>{(price || defaultPrice) / 100}</b>
				<hr></hr>
			</li>
		</div>
	);
};

export default FoodMenuCard;
