import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/URL";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
	const [loginBtn, setLoginBtn] = useState("Login");

	useEffect(() => {
		console.log("Use Effect called");
	}, [loginBtn]);

	const styleToLink =
		"no-underline bg-black text-white rounded-[30px] px-[15px] py-[5px] shadow-[0px_0px_4px_0.3px_black] transition-all duration-400 hover:cursor-pointer hover:shadow-[0px_0px_10px_1px_black] hover:bg-white hover:text-black";

	const headerStyle =
		"border-brown px-[100px] py-[20px] flex items-center justify-between sticky top-0 w-full backdrop-blur-xs shadow-xl z-10 bg-blue-200/40 mb-[40px]";

	console.log("Header render");
	return (
		<div className={headerStyle}>
			<div>
				<img
					src={LOGO_URL}
					alt="Logo"
					className="w-[70px] h-70px] shadow-[0px_0px_10px_1px_brown] rounded-full"
				/>
			</div>
			<div className="navigation">
				<ul className="flex justify-evenly items-center gap-y-0 gap-x-10 list-none text-[20px] font-bold">
					<li>Online {useOnlineStatus() ? "✅" : "🔴"}</li>
					<li>
						<Link className={styleToLink} to="/">
							Home
						</Link>
					</li>
					<li>
						<Link className={styleToLink} to="/about">
							About
						</Link>
					</li>
					<li>
						<Link className={styleToLink} to="/contact">
							Contact
						</Link>
					</li>
					<li
						style={{ width: "70px", textAlign: "center" }}
						onClick={() => {
							setLoginBtn(loginBtn == "Login" ? "Logout" : "Login");
						}}
					>
						<Link className={styleToLink}>{loginBtn}</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
