import Modal from "antd/es/modal/Modal";
import { useEffect, useState } from "react";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import { useParams } from "react-router";

const ModalMenu = () => {
	const [restaurantFoodDetail, setRestaurantFoodDetail] = useState([]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const params = useParams();
	const resFullMenu = useRestaurantMenu(params?.restaurantId);

	useEffect(() => {
		if (Array.isArray(resFullMenu?.cards) && resFullMenu.cards.length > 4) {
			const itemListTitleLength =
				resFullMenu.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
					(eachDetails) => {
						return (
							eachDetails.card.card["@type"] ==
							"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
						);
					}
				);
			setRestaurantFoodDetail(itemListTitleLength);
			console.log("Api Call");
		}
	}, [resFullMenu]);

	console.log("Modal data : ", restaurantFoodDetail);

	const showModal = () => setIsModalOpen(true);
	const handleOk = () => setIsModalOpen(false);
	return (
		<div>
			<h1
				className="w-[70px] text-white h-[70px] shadow-md flex justify-center items-center text-xl font-bold bg-black rounded-full fixed bottom-16 right-[15%] cursor-pointer"
				onClick={showModal}
			>
				Menu
			</h1>
			<Modal
				title="Basic Modal"
				open={isModalOpen}
				onOk={handleOk}
				footer={[
					<button
						key="ok"
						onClick={handleOk}
						className="px-4 py-2 cursor-pointer bg-blue-600 text-white rounded"
					>
						OK
					</button>,
				]}
				rootClassName="custom-modal"
			>
				{restaurantFoodDetail.map((eachItem) => {
					const { title, itemCards, categoryId } = eachItem?.card?.card;
					return (
						<div key={categoryId}>
							<p>
								{title} ({itemCards.length})
							</p>
							<hr />
						</div>
					);
				})}
			</Modal>
		</div>
	);
};

export default ModalMenu;
