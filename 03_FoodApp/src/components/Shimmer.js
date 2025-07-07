const OneShimmer = () => {
	return (
		<div className="resCardShimmer">
			<div className="imgShimmer"></div>
			<div className="detailShimmer"></div>
			<div className="detailShimmer"></div>
			<div className="detailShimmer"></div>
			<div className="detailShimmer"></div>
			<div className="detailShimmer"></div>
		</div>
	);
};

const allShimmer = [];
for (let i = 0; i < 20; i++) {
	allShimmer.push(<OneShimmer key={i}/>);
}

const Shimmer = () => {
	return (
		<div className="shimmer">
			<div className="cardShimmer">{allShimmer}</div>
		</div>
	);
};

export default Shimmer;
