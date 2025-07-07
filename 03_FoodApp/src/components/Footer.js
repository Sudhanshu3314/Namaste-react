import React from "react";

let styleToFooter = {
	width: "100%",
	border: "1px solid green",
	height: "100px",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	marginTop: "100px",
};

const Footer = () => {
	return (
		<div style={styleToFooter}>
			<div>
				<h1>Footer</h1>
			</div>
		</div>
	);
};

export default Footer;
