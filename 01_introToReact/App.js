// Here, React.createElement is Object which converted afterwards in root.render as HTML for rendering in browser bcoz it can understand html only and it converted with help of render()

import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
	"h1",
	{ id: "heading", className: "head" },
	"My Heading of Namaste react"
);

const Title = () => {
	return <h1 className="title">Title of webpage</h1>;
};

// Here, I have done component composition
const HeadingComponent = () => {
	return (
		<div id="container">
			{Title()}
			<Title></Title>
			<Title/>
			<h1 id="head" className="headClass">
				This is my heading Component
			</h1>
		</div>
	);
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
