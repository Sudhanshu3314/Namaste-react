import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";

const Header = () => {
	const [LogBtn, setLogBtn] = useState("Login");
	let LoginLogoutFunc = () => {
		setLogBtn(LogBtn == "Login" ? "Logout" : "Login");
	};
	return (
		<div className="header">
			<div className="logo">
				<img src={LOGO_URL} alt="Res_Logo" />
			</div>
			<div className="navItems">
				<ul>
					<li className="list">
						<Link className="noStyle" to={"/"}>
							Home
						</Link>
					</li>
					<li className="list">
						<Link className="noStyle" to={"/about"}>
							About
						</Link>
					</li>
					<li className="list">
						<Link className="noStyle" to={"/contact"}>
							Contact Us
						</Link>{" "}
					</li>
					<li>
						<button onClick={LoginLogoutFunc}>{LogBtn}</button>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
