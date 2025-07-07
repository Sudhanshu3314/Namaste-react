import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			userData: {
				name: "Default name",
			},
		};
		// console.log("Parent Constructor")
	}
	componentDidMount() {
		
		// console.log("Parent Component Did Mount")
	}
	render() {
		console.log("Parent Render");
		return (
			<div>
				<h1>About us page</h1>
				<h2>
					This is my restaurant website which gives some awesome restaurants
					options
				</h2>

				<UserClass userId={"sudhanshu3314"}/>
				<UserClass userId={"akshaymarch7"}/>
				<UserClass userId={"akshaya-amar"}/>
			</div>
		);
	}
}

export default About;
