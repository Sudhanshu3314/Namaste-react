import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import Contact from "./Contact";
import About from "./About";
import Error from "./Error";
import ResMenu from "./Menu_Component/ResMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";

const AppLayout = () => {
	return (
		<div id="appLayout">
			<Header />
			{/* Whenever a path matched according to that corresponding element component will render on behalf of outlet component i.e. the feature of outlet inbuilt component */}
			<Outlet />
			<Footer />
		</div>
	);
};

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				path: "/",
				element: <Body />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/restaurant/:resId/:resName",
				element: <ResMenu />,
			},
		],
		errorElement: <Error />,
	},
]);

// Select the root element
let appRoot = document.getElementById("myAppRoot");

// Create a root and render the RouterProvider
appRoot = ReactDOM.createRoot(appRoot);
appRoot.render(<RouterProvider router={appRouter} />);
//  appRoot.render(<AppLayout/>);
