import React from "react";
import { GITHUB_PROFILE_API } from "../utils/URL";
import "./userClassCss.css";

class UserClass extends React.Component {
	constructor(props) {
		super(props);
		console.log(props);
		this.state = {
			count: 1,
			userData: { name: "Default Name" },
		};
		// console.log(this.props.name + "Child Constructor")
	}

	async componentDidMount() {
		const data = await fetch(GITHUB_PROFILE_API + this.props?.userId);
		const jsonData = await data.json();

		this.setState({
			userData: jsonData,
		});
		// console.log(this.props.name + "Child Component Did Mount")
	}
	render() {
		const { count, userData } = this.state;

		console.log("userData :", userData);
		// console.log(this.props.name + "Child Render")

		const { avatar_url, name, location } = userData;

		const IncreaseCountFunc = () => {
			this.setState({
				count: count + 1,
			});
		};
		return (
			<div className="user-card">
				<hr />
				<div className="card">
					{count})
					<div>
						<img src={avatar_url} alt="" />
					</div>
					<h3>{name}</h3>
					<h3>Location : {location || "Not Mentioned"}</h3>
				</div>
				<button onClick={IncreaseCountFunc}>Increase Btn</button>
			</div>
		);
	}
}

export default UserClass;
